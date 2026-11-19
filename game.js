// Motorul jocului: explorare, obiecte, cuvinte, identități, deducție.
// Tot conținutul afișat vine din js/scene5.js (date proprii ale jocului).
(function () {
  'use strict';

  var S = null;                                   // capitolul curent
  var CHAPTERS = [window.SCENE1, window.SCENE2, window.SCENE3, window.SCENE5, window.SCENE6];
  var solved = {};
  var $ = function (sel) { return document.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  var state;
  var fx = {};   // animații de aplicat la următoarea redesenare a panourilor
  var fxIndex = 0;

  function snd(name) { if (window.SFX) window.SFX.play(name); }

  // ---------- salvarea progresului ----------
  var SAVE_KEY = 'enigma-otiliei-salvare-v1';

  function readSave() {
    try {
      var raw = window.localStorage.getItem(SAVE_KEY);
      var data = raw ? JSON.parse(raw) : null;
      return data && typeof data === 'object' ? data : { solved: {}, chapters: {} };
    } catch (e) {
      return { solved: {}, chapters: {} };
    }
  }

  function save() {
    if (!S || !state) return;
    try {
      var data = readSave();
      data.solved = solved;
      data.chapters = data.chapters || {};
      data.chapters[S.id] = {
        found: state.found, items: state.items, seen: state.seen, slots: state.slots,
        identOk: state.identOk, dedOk: state.dedOk, hints: state.hints, checks: state.checks
      };
      window.localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (e) { /* fără salvare în acest browser */ }
  }

  // reia progresul unui capitol, păstrând doar ce există încă în capitol
  function restore() {
    var c = (readSave().chapters || {})[S.id];
    if (!c) return;
    var okWord = function (w) { return !!S.words[w]; };
    state.found = (c.found || []).filter(okWord);
    state.items = (c.items || []).filter(function (it) { return !!S.items[it]; });
    state.seen = c.seen || {};
    var valid = {};
    identSlots().concat(dedSlots()).forEach(function (p) { valid[p.slot] = true; });
    Object.keys(c.slots || {}).forEach(function (k) {
      if (valid[k] && okWord(c.slots[k])) state.slots[k] = c.slots[k];
    });
    state.identOk = !!c.identOk;
    state.dedOk = !!c.dedOk;
    state.hints = c.hints || 0;
    state.checks = c.checks || 0;
  }

  function reset() {
    state = {
      hints: 0,         // indicii folosite
      checks: 0,        // de câte ori s-a apăsat Verifică
      found: [],        // cuvinte adunate
      items: [],        // obiecte găsite
      seen: {},         // zone cercetate
      slots: {},        // slot -> cuvânt
      selected: null,   // slotul ales
      mode: 'explore',
      zoom: null,       // zona privită de aproape
      identOk: false,
      dedOk: false
    };
  }

  // ---------- sloturi ----------
  function identSlots() {
    var out = [];
    S.people.forEach(function (p) {
      out.push({ slot: 'id_' + p.id + '_f', answer: p.first });
      out.push({ slot: 'id_' + p.id + '_l', answer: p.last });
    });
    return out;
  }

  // Unde răspunsul din poveste e o persoană, se cer două cuvinte la rând:
  // întâi prenumele, apoi numele (ca „Otilia Mărculescu”).
  function dedParts() {
    var out = [];
    S.deduction.forEach(function (p) {
      if (typeof p === 'string') { out.push(p); return; }
      if (p.full) {
        out.push({ slot: p.slot + 'p', answer: p.answer, pair: p.slot });
        out.push({ slot: p.slot + 'n', answer: p.full, pair: p.slot });
      } else {
        out.push(p);
      }
    });
    return out;
  }

  function dedSlots() {
    return dedParts().filter(function (p) { return typeof p !== 'string'; });
  }

  function activeSlots() {
    return state.mode === 'ident' ? identSlots() : dedSlots();
  }

  // ---------- ecrane ----------
  function show(id) {
    $$('.screen').forEach(function (s) { s.classList.remove('active'); });
    $(id).classList.add('active');
    fitAll();
  }

  // ---------- totul încape pe ecran, fără derulare ----------
  // Un panou prea mare pentru spațiul lui e micșorat cât trebuie (niciodată mărit).
  function fitInto(content, box, extra) {
    if (!content || !box || !box.getClientRects().length) return;
    content.style.transform = '';
    var cs = getComputedStyle(box);
    var aw = box.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    var ah = box.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    var w = content.offsetWidth, h = content.offsetHeight + (extra || 0);
    if (!w || !h || aw <= 0 || ah <= 0) return;
    var k = Math.min(1, aw / w, ah / h);
    if (k < 0.999) {
      content.style.transformOrigin = 'top center';
      content.style.transform = 'scale(' + k.toFixed(4) + ')';
    }
  }

  // un nume lung se micșorează ca să încapă întreg pe panglica lui
  function fitPlates() {
    $$('.think-grid .plate, .think-grid .sheet .slot').forEach(function (p) {
      p.style.fontSize = '';
      p.style.width = '';
      p.style.maxWidth = '';
      var size = parseFloat(getComputedStyle(p).fontSize), min = size * 0.6;
      if (p.scrollWidth > p.clientWidth + 1) { p.style.width = p.offsetWidth + 'px'; p.style.maxWidth = 'none'; }
      while (p.scrollWidth > p.clientWidth + 1 && size > min) {
        size -= 0.5;
        p.style.fontSize = size + 'px';
      }
    });
  }

  function fitAll() {
    // nimic nu rămâne derulat (nici după un indiciu, nici după ce browserul arată un element)
    $$('.screen, .view, #think-view, .stage, .modal, #end-screen').forEach(function (el) {
      el.scrollTop = 0;
      el.scrollLeft = 0;
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    var title = $('#title-screen');
    if (title.classList.contains('active')) {
      var v = title.dataset.view;
      fitInto($(v === 'menu' ? '.menu-card' : v === 'tutorial' ? '.tut-card' : '.start-card'), title);
    }
    if ($('#end-screen').classList.contains('active')) fitInto($('#end-screen .end-card'), $('#end-screen'), 44);
    if ($('#game-screen').classList.contains('active') && state && state.mode === 'think') {
      fitPlates();
      fitTab();
      fitLine($('#ident-status'));
      fitLine($('#feedback'));
      fitInto($('.think-grid'), $('#think-view'));
    }
    if (!$('#clue-modal').classList.contains('hidden')) fitInto($('#clue-wrap'), $('#clue-modal'), 20);
  }

  var fitAllTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(fitAllTimer);
    fitAllTimer = setTimeout(fitAll, 120);
  });

  function setMode(mode) {
    if (state.mode !== mode) snd('tab');
    state.mode = mode;
    state.selected = null;
    $$('.tab').forEach(function (t) {
      t.classList.toggle('active', t.dataset.mode === mode);
      if (t.dataset.mode === mode) t.classList.remove('nudge');
    });
    $('#explore-view').classList.toggle('active', mode === 'explore');
    $('#think-view').classList.toggle('active', mode === 'think');
    $('#game-screen').dataset.mode = mode;
    renderBank();
    renderPanels();
    fitAll();
  }

  // ---------- scena ----------
  function buildScene() {
    $('#scene').innerHTML =
      '<div class="scene-box"><div class="scene-frame">' +
        '<div class="scene-clip">' + S.svg + '</div>' +
        '<div class="zoom-ui hidden">' +
          '<button class="zoom-back" aria-label="Înapoi la toată camera">Înapoi</button>' +
          '<div class="zoom-caption"><b></b><span></span></div>' +
        '</div>' +
      '</div></div>';
    $$('#scene .hs').forEach(function (el) {
      var clue = S.clues[el.dataset.id];
      el.setAttribute('tabindex', '0');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', clue.title);
      if (clue.inside) el.classList.add('container');
      else if (clue.zoom) el.classList.add('zoomable');
      el.addEventListener('click', function () { hit(el); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); hit(el); }
      });
    });
    $('.zoom-back').addEventListener('click', zoomOut);
    setSubs(null);
  }

  // clic pe o zonă: unele se deschid ca fișă, altele se privesc de aproape
  function hit(el) {
    var id = el.dataset.id;
    // din apropiere, un alt obiect care se deschide: întâi ieșim, apoi intrăm în el
    if (state.zoom && !el.dataset.parent && (S.clues[id].zoom || S.clues[id].inside)) {
      zoomOut();
      setTimeout(function () { if (!state.zoom) zoomIn(id, el); }, 480);
      return;
    }
    if (S.clues[id].zoom || S.clues[id].inside) zoomIn(id, el);
    else openClue(id, el);
  }

  // ---------- privit de aproape ----------
  var zoomTimer = null;

  function zoomBox(z) {
    var w = z.w, h = w * 9 / 16;
    return {
      x: Math.max(0, Math.min(1600 - w, z.cx - w / 2)),
      y: Math.max(0, Math.min(900 - h, z.cy - h / 2)),
      w: w, h: h
    };
  }

  function zoomTransform(b) {
    var k = 1600 / b.w;
    return 'translate(' + (-b.x / 1600 * 100 * k) + '%,' + (-b.y / 900 * 100 * k) + '%) scale(' + k + ')';
  }

  // în vederea de aproape se pot atinge doar detaliile acelei zone
  // dreptunghiul unei zone active, în coordonatele scenei
  function spotRect(el) {
    var n = function (k) { return parseFloat(el.getAttribute(k)) || 0; };
    if (el.tagName.toLowerCase() === 'circle') return { x: n('cx') - n('r'), y: n('cy') - n('r'), w: 2 * n('r'), h: 2 * n('r') };
    return { x: n('x'), y: n('y'), w: n('width'), h: n('height') };
  }

  function setSubs(id) {
    var clue = id && S.clues[id];
    // privind de aproape, se pot apăsa și lucrurile din scenă care se văd întregi în cadru
    var b = clue && clue.zoom && !clue.inside ? zoomBox(clue.zoom) : null;
    $$('#scene .hs').forEach(function (el) {
      var parent = el.dataset.parent, show;
      if (!id) show = !parent;
      else if (parent === id) show = true;
      else if (b && !parent && el.dataset.id !== id) {
        var r = spotRect(el);
        show = r.x >= b.x && r.x + r.w <= b.x + b.w && r.y >= b.y && r.y + r.h <= b.y + b.h &&
          r.y + r.h / 2 <= b.y + 0.8 * b.h;
      } else show = false;
      el.style.display = show ? '' : 'none';
    });
  }

  // Două feluri de „intrat": privit de aproape (zoom) și deschis (sertar, dulap, valiză...)
  function zoomIn(id, el) {
    var clue = S.clues[id];
    var svg = $('#scene svg');
    if (!state.seen[id]) { state.seen[id] = true; if (el) el.classList.add('seen'); }
    state.zoom = id;
    setSubs(id);

    var ui = $('.zoom-ui');
    ui.querySelector('b').textContent = clue.title;
    ui.querySelector('span').innerHTML = markup(clue.text);
    ui.classList.remove('hidden');
    ui.classList.toggle('inside', !!clue.inside);
    $('.zoom-back').textContent = clue.inside ? 'Închide' : 'Înapoi';
    $('.scene-hint').textContent = clue.inside
      ? 'Caută înăuntru. Nu tot ce găsești e important.'
      : 'Caută detaliile ascunse. Unele sunt foarte mici.';

    if (clue.inside) {
      snd(clue.sound || 'drawer');
      var room = svg.querySelector('#in-' + id);
      if (room) room.classList.add('open');
      return;
    }

    snd('zoom');
    var b = zoomBox(clue.zoom);
    // întâi o mișcare lină, apoi desenul e redat clar la noua mărime
    svg.style.transition = 'transform .5s cubic-bezier(.4, 0, .2, 1)';
    svg.style.transform = zoomTransform(b);
    clearTimeout(zoomTimer);
    zoomTimer = setTimeout(function () {
      if (state.zoom !== id) return;
      svg.style.transition = 'none';
      svg.setAttribute('viewBox', [b.x, b.y, b.w, b.h].join(' '));
      svg.style.transform = 'none';
    }, 540);
  }

  function zoomOut() {
    if (!state.zoom) return;
    var svg = $('#scene svg');
    var id = state.zoom;
    var clue = S.clues[id];
    state.zoom = null;
    clearTimeout(zoomTimer);

    if (clue.inside) {
      snd('shut');
      var room = svg.querySelector('#in-' + id);
      if (room) room.classList.remove('open');
    } else {
      var b = zoomBox(clue.zoom);
      snd('unzoom');
      if (svg.getAttribute('viewBox') !== '0 0 1600 900') {
        svg.style.transition = 'none';
        svg.setAttribute('viewBox', '0 0 1600 900');
        svg.style.transform = zoomTransform(b);
        void svg.getBoundingClientRect();
      }
      svg.style.transition = 'transform .45s cubic-bezier(.4, 0, .2, 1)';
      svg.style.transform = 'none';
    }
    setSubs(null);
    $('.zoom-ui').classList.add('hidden');
    $('.scene-hint').textContent = 'Dă clic pe persoane și obiecte pentru a le cerceta.';
  }

  // decupaj din desenul scenei, pentru portrete
  function portraitSvg(crop) {
    return S.svg
      .replace('viewBox="0 0 1600 900"', 'viewBox="' + crop + '"')
      .replace('xMidYMid meet', 'xMidYMid slice')
      .replace(/<g id="hotspots">[\s\S]*?<\/g>/, '')
      .replace(/<rect[^>]*filter="url\(#fGrain\)"[^>]*\/>/, '');
  }

  function itemIcon(id) {
    return '<svg viewBox="0 0 64 64" aria-hidden="true"><g fill="none" stroke="#1b130d" ' +
      'stroke-width="3" stroke-linejoin="round" stroke-linecap="round">' + S.items[id].icon + '</g></svg>';
  }

  // ---------- fișe ----------
  // Un cuvânt roșu și ghilimelele sau punctuația lipite de el rămân pe același rând.
  function markup(text) {
    return text.replace(/([«„(]*)\{(\w+)\|([^}]+)\}([.,;:!?»…)]*)/g, function (_, before, wid, label, after) {
      var got = state.found.indexOf(wid) !== -1;
      return '<span class="ded-group">' + before +
        '<button class="w' + (got ? ' got' : '') + '" data-w="' + wid + '">' + label + '</button>' +
        after + '</span>';
    });
  }

  // trei modele de fișă: carnet (observații), scrisoare (documente), etichetă (obiecte)
  function openCard(card) {
    var wrap = $('#clue-wrap');
    wrap.className = 'modal-wrap';
    void wrap.offsetWidth;            // repornește animația
    wrap.className = 'modal-wrap m-' + (card.kind || 'note');
    snd('paper');
    $('#clue-title').textContent = card.title;
    $('#clue-text').innerHTML = markup(card.text);
    var box = $('#clue-items');
    box.innerHTML = '';
    (card.items || []).forEach(function (id) {
      var b = document.createElement('button');
      b.className = 'found-item';
      b.innerHTML = itemIcon(id) + '<span>' + S.items[id].title + '</span>';
      b.addEventListener('click', function () { openCard(S.items[id]); });
      box.appendChild(b);
    });
    $('.modal-help').style.display = /class="w/.test($('#clue-text').innerHTML) ? '' : 'none';
    $('#clue-modal').classList.remove('hidden');
    fitAll();
  }

  function openClue(id, el) {
    var clue = S.clues[id];
    if (!state.seen[id]) {
      state.seen[id] = true;
      if (el) el.classList.add('seen');
    }
    var fresh = false;
    (clue.items || []).forEach(function (it) {
      if (state.items.indexOf(it) === -1) { state.items.push(it); fresh = true; }
    });
    renderItems();
    save();
    openCard(clue);
    if (fresh) snd('item');
    if (clue.sound) snd(clue.sound);
  }

  function closeClue() {
    if (!$('#clue-modal').classList.contains('hidden')) snd('close');
    $('#clue-modal').classList.add('hidden');
  }

  function collect(wid) {
    if (state.found.indexOf(wid) !== -1) return;
    state.found.push(wid);
    snd('collect');
    $$('.w[data-w="' + wid + '"]').forEach(function (b) { b.classList.add('got', 'inked'); });
    renderBank();
    var counter = $('.counter');
    counter.classList.remove('bump');
    void counter.offsetWidth;
    counter.classList.add('bump');
    if (state.found.length === Object.keys(S.words).length) {
      setTimeout(function () { snd('allwords'); }, 250);
      counter.classList.remove('allfound');
      void counter.offsetWidth;
      counter.classList.add('allfound');
      setTimeout(function () { counter.classList.remove('allfound'); }, 3600);
      toast('Ai găsit toate cuvintele!');
    }
    // când s-au găsit toate cuvintele necesare, îndeamnă spre panouri
    var needed = identSlots().concat(dedSlots());
    if (needed.every(function (p) { return state.found.indexOf(p.answer) !== -1; })) {
      if (!state.dedOk) $('.tab[data-mode="think"]').classList.add('nudge');
    }
  }

  // ---------- bara de obiecte și cuvinte ----------
  function renderItems() {
    var box = $('#items');
    box.innerHTML = '';
    if (!state.items.length) {
      box.innerHTML = '<span class="tray-empty">Niciun obiect găsit încă.</span>';
      return;
    }
    state.items.forEach(function (id) {
      var b = document.createElement('button');
      b.className = 'item';
      b.title = S.items[id].title;
      b.setAttribute('aria-label', S.items[id].title);
      b.innerHTML = itemIcon(id);
      b.addEventListener('click', function () { openCard(S.items[id]); });
      box.appendChild(b);
    });
  }

  // În explorare lista stă jos, mică. În panouri stă sus, mare, și cuvintele se trag cu mouse-ul.
  function bankEl() {
    return $('#bank');
  }

  function renderBank() {
    $('#bank').innerHTML = '';
    $('#bank').classList.toggle('big', state.mode !== 'explore');
    $('#word-count').textContent = state.found.length;
    $('#word-total').textContent = S ? Object.keys(S.words).length : 0;
    if (!S) return;
    var bank = bankEl();
    var inPanel = state.mode !== 'explore';
    if (!state.found.length) {
      bank.innerHTML = '<span class="tray-empty">Niciun cuvânt adunat încă. Cercetează scena.</span>';
      return;
    }
    var order = { n: 0, o: 1, f: 2 };
    var sorted = state.found.slice().sort(function (a, b) {
      return order[S.words[a].cat] - order[S.words[b].cat];
    });
    sorted.forEach(function (wid, i) {
      var chip = document.createElement('button');
      chip.className = 'scrap ' + S.words[wid].cat + ' r' + (i % 4);
      chip.textContent = S.words[wid].text;
      if (inPanel) {
        chip.addEventListener('pointerdown', function (e) { startDrag(e, wid, null, chip); });
      } else {
        // din explorare, un clic doar te duce la panoul unde se folosesc cuvintele
        chip.addEventListener('click', function () { setMode('think'); });
      }
      bank.appendChild(chip);
    });
    if (inPanel) { fitBank(); fitAll(); }
    save();
  }

  // În Gândire cuvintele stau pe cel mult două rânduri: întâi se micșorează,
  // iar dacă tot nu încap, lista se poate derula în lateral.
  function fitBank() {
    var bank = $('#bank');
    bank.classList.remove('scroll');
    bank.style.fontSize = '';
    var chips = $$('#bank .scrap');
    if (!chips.length) return;
    var rows = function () {
      var tops = [];
      chips.forEach(function (c) { if (tops.indexOf(c.offsetTop) === -1) tops.push(c.offsetTop); });
      return tops.length;
    };
    var size = parseFloat(getComputedStyle(chips[0]).fontSize);
    while (rows() > 2 && size > 11) {
      size -= 1;
      bank.style.fontSize = size + 'px';
    }
    if (rows() > 2) bank.classList.add('scroll');
  }

  var fitTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(fitTimer);
    fitTimer = setTimeout(function () { if (S && state.mode === 'think') fitBank(); }, 150);
  });

  // ---------- panouri ----------
  // un cuvânt care zboară de la o poziție la alta (punere / scoatere)
  function fly(text, from, to, opts, done) {
    var still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!from || !to || still || !document.body.animate) { if (done) done(); return; }
    var g = document.createElement('div');
    g.className = 'scrap ghost' + (state.mode === 'explore' ? '' : ' big');
    g.textContent = text;
    document.body.appendChild(g);
    var w = g.offsetWidth, h = g.offsetHeight;
    var x0 = from.left + from.width / 2 - w / 2, y0 = from.top + from.height / 2 - h / 2;
    var x1 = to.left + to.width / 2 - w / 2, y1 = to.top + to.height / 2 - h / 2;
    var top = Math.min(y0, y1) - 46;
    var a = g.animate([
      { transform: 'translate(' + x0 + 'px,' + y0 + 'px) scale(1) rotate(0deg)', opacity: 1 },
      { transform: 'translate(' + (x0 + x1) / 2 + 'px,' + top + 'px) scale(1.3) rotate(' + opts.spin + 'deg)', opacity: 1, offset: 0.55 },
      { transform: 'translate(' + x1 + 'px,' + y1 + 'px) scale(' + opts.end + ') rotate(0deg)', opacity: opts.fade }
    ], { duration: opts.ms, easing: 'ease-in-out' });
    a.onfinish = function () { g.remove(); if (done) done(); };
  }

  function chipFor(wid) {
    return $$('.bank .scrap').filter(function (c) { return c.textContent === S.words[wid].text; })[0];
  }

  function makeSlot(slotId, cls, locked, placeholder) {
    var b = document.createElement('button');
    var wid = state.slots[slotId];
    b.className = cls + (wid ? ' filled' : '') + (state.selected === slotId ? ' selected' : '');
    b.dataset.slot = slotId;
    b.innerHTML = wid ? S.words[wid].text : (placeholder ? '<i>' + placeholder + '</i>' : '&nbsp;');
    if (fx.incoming === slotId) b.classList.add('incoming');
    var group = slotId.indexOf('id_') === 0 ? 'ident' : 'ded';
    if (fx.stamp === slotId) b.classList.add('stamp');
    if (fx.shake === group) b.classList.add('shake');
    if (fx.win === group) {
      b.classList.add('solved-in');
      b.style.animationDelay = (fxIndex++ * 0.09) + 's';
    }
    if (locked) {
      b.disabled = true;
      return b;
    }
    // un cuvânt pus poate fi luat înapoi: tras în altă parte sau scos cu un clic
    b.addEventListener('pointerdown', function (e) {
      var had = state.slots[slotId];
      if (had) startDrag(e, had, slotId, b);
    });
    return b;
  }

  function renderPeople() {
    var box = $('#people');
    box.innerHTML = '';
    var many = S.people.length > 4;
    box.classList.toggle('many', many);
    $('.panel.board').classList.toggle('wide', many);
    S.people.forEach(function (p) {
      var card = document.createElement('div');
      card.className = 'person';
      var pic = document.createElement('div');
      pic.className = 'portrait' +
        (fx.win === 'ident' ? ' cheer' : '') +
        (fx.stamp && fx.stamp.indexOf('id_' + p.id + '_') === 0 ? ' nod' : '');
      pic.innerHTML = portraitSvg(p.crop);
      card.appendChild(pic);
      card.appendChild(makeSlot('id_' + p.id + '_f', 'plate', state.identOk, 'prenume'));
      card.appendChild(makeSlot('id_' + p.id + '_l', 'plate', state.identOk, 'nume'));
      box.appendChild(card);
    });
  }

  // Spațiile unui nume complet stau împreună, iar semnul de punctuație de după
  // un spațiu rămâne lipit de el, ca să nu înceapă singur un rând.
  function renderDeduction() {
    var box = $('#deduction');
    box.innerHTML = '';
    var parts = dedParts();
    var i = 0;
    while (i < parts.length) {
      var part = parts[i];
      if (typeof part === 'string') {
        box.appendChild(document.createTextNode(part));
        i++;
        continue;
      }
      var group = document.createElement('span');
      group.className = 'ded-group';
      group.appendChild(makeSlot(part.slot, 'slot', state.dedOk));
      i++;
      if (part.pair && parts[i] && typeof parts[i] !== 'string' && parts[i].pair === part.pair) {
        group.appendChild(document.createTextNode('\u00a0'));
        group.appendChild(makeSlot(parts[i].slot, 'slot', state.dedOk));
        i++;
      }
      var rest = typeof parts[i] === 'string' ? parts[i] : null;
      var punct = rest && rest.match(/^[.,;:!?»…)\]]+/);
      if (punct) {
        group.appendChild(document.createTextNode(punct[0]));
        parts[i] = rest.slice(punct[0].length);
      }
      box.appendChild(group);
    }
  }

  function renderPanels() {
    fxIndex = 0;
    renderPeople();
    fxIndex = 0;
    renderDeduction();
    fx = {};

    // plăcuța cu mersul anchetei
    var count = function (list) {
      return list.filter(function (p) { return state.slots[p.slot]; }).length;
    };
    var ids = identSlots(), ded = dedSlots();
    $('#prog-names').innerHTML = '<span class="' + (state.identOk ? 'ok' : '') + '">Nume <b>' +
      count(ids) + ' / ' + ids.length + '</b></span>';
    $('#prog-story').innerHTML = '<span class="' + (state.dedOk ? 'ok' : '') + '">Poveste <b>' +
      count(ded) + ' / ' + ded.length + '</b></span>';
    save();
  }

  function setStatus(sel, text, cls) {
    var el = $(sel);
    el.textContent = text;
    el.className = 'status' + (cls ? ' ' + cls : '');
    fitLine(el);
    // cuvinte greșite: verdictul pulsează ușor (doar se mărește, nu trece pe două rânduri)
    if (cls === 'bad' || cls === 'close') { void el.offsetWidth; el.classList.add('pulse'); }
  }

  // un rând de text care nu încape se micșorează, în loc să treacă pe două rânduri
  function fitLine(el) {
    if (!el || !el.offsetParent) return;
    el.style.fontSize = '';
    var size = parseFloat(getComputedStyle(el).fontSize), min = size * 0.6;
    while (el.scrollWidth > el.clientWidth + 1 && size > min) {
      size -= 0.5;
      el.style.fontSize = size + 'px';
    }
  }

  // eticheta dosarului: urechea de carton crește cât titlul
  function fitTab() {
    var tab = $('.dossier-tab'), box = $('.panel.dossier');
    if (!tab || !box || !tab.offsetParent) return;
    box.style.setProperty('--tabw', Math.ceil(tab.offsetWidth + 30) + 'px');
  }

  // ---------- trasul cuvintelor ----------
  var drag = null;

  function panelLocked() {
    return state.identOk && state.dedOk;
  }

  function startDrag(e, wid, fromSlot, src) {
    if (e.button !== undefined && e.button !== 0) return;
    if (state.mode === 'explore' || panelLocked() || drag) return;
    e.preventDefault();
    var g = document.createElement('div');
    g.className = 'scrap ghost big dragging';
    g.textContent = S.words[wid].text;
    document.body.appendChild(g);
    drag = {
      wid: wid, fromSlot: fromSlot, src: src, ghost: g,
      x0: e.clientX, y0: e.clientY, moved: false,
      w: g.offsetWidth, h: g.offsetHeight, over: null
    };
    src.classList.add(fromSlot ? 'incoming' : 'lifted');
    document.body.classList.add('dragging-word');
    snd('click');
    moveDrag(e);
  }

  // Locul de sub cursor. Se caută după poziție, cu puțină îngăduință în jur,
  // ca un cuvânt lăsat pe marginea unui loc să nu se piardă.
  function slotAt(x, y) {
    var best = null, bestD = Infinity, pad = 10;
    $$('.view.active [data-slot]').forEach(function (el) {
      if (el.disabled) return;
      var r = el.getBoundingClientRect();
      if (x < r.left - pad || x > r.right + pad || y < r.top - pad || y > r.bottom + pad) return;
      var dx = x - (r.left + r.width / 2), dy = y - (r.top + r.height / 2);
      var d = dx * dx + dy * dy;
      if (d < bestD) { bestD = d; best = el; }
    });
    return best;
  }

  function moveDrag(e) {
    if (!drag) return;
    if (Math.abs(e.clientX - drag.x0) + Math.abs(e.clientY - drag.y0) > 6) drag.moved = true;
    drag.ghost.style.transform = 'translate(' + (e.clientX - drag.w / 2) + 'px,' +
      (e.clientY - drag.h / 2) + 'px) rotate(-4deg) scale(1.06)';
    var over = slotAt(e.clientX, e.clientY);
    if (over !== drag.over) {
      if (drag.over) drag.over.classList.remove('drop-hover');
      if (over) over.classList.add('drop-hover');
      drag.over = over;
    }
  }

  // după ce un cuvânt a fost pus (placed) sau luat (touched) dintr-un loc
  function afterWordChange(placed, touched) {
    var isId = function (id) { return !!id && id.indexOf('id_') === 0; };
    var isDed = function (id) { return !!id && id.indexOf('id_') !== 0; };
    if (!state.dedOk && (isDed(placed) || isDed(touched))) setStatus('#feedback', S.question);
    renderPanels();
    if (state.identOk) return;
    if (isId(placed)) {
      setTimeout(function () {
        checkIdentities();
        if (fx.shake || fx.win) renderPanels();
      }, 320);
    } else if (isId(touched)) {
      checkIdentities();
    }
  }

  function endDrag(e) {
    if (!drag) return;
    var d = drag;
    drag = null;
    document.body.classList.remove('dragging-word');
    if (d.over) d.over.classList.remove('drop-hover');
    d.src.classList.remove('lifted', 'incoming');
    var from = d.ghost.getBoundingClientRect();
    d.ghost.remove();
    var text = S.words[d.wid].text;
    var target = e ? slotAt(e.clientX, e.clientY) : null;
    var home = chipFor(d.wid);
    var bump = function () {
      if (home) { home.classList.remove('back'); void home.offsetWidth; home.classList.add('back'); }
    };

    // clic simplu pe un cuvânt deja pus: îl scoate
    if (d.fromSlot && !d.moved) target = null;

    if (target && target.dataset.slot !== d.fromSlot) {
      // pus într-un spațiu (dacă era ocupat, cuvântul vechi se întoarce în listă)
      if (d.fromSlot) delete state.slots[d.fromSlot];
      var slot = target.dataset.slot;
      state.slots[slot] = d.wid;
      fx.stamp = slot;
      snd('place');
      afterWordChange(slot, d.fromSlot);
    } else if (d.fromSlot && target) {
      renderPanels();                    // lăsat la loc, în același spațiu
    } else if (d.fromSlot) {
      // scos din spațiu: zboară înapoi în listă
      delete state.slots[d.fromSlot];
      snd('remove');
      afterWordChange(null, d.fromSlot);
      fly(text, from, home && home.getBoundingClientRect(), { ms: 340, spin: 12, end: 1, fade: 1 }, bump);
    } else {
      // scăpat pe lângă: se întoarce în listă
      snd('close');
      fly(text, from, home && home.getBoundingClientRect(), { ms: 280, spin: 8, end: 1, fade: 1 }, bump);
    }
  }

  document.addEventListener('pointermove', moveDrag);
  document.addEventListener('pointerup', endDrag);
  document.addEventListener('pointercancel', function () { endDrag(null); });

  // ---------- indiciul (becul) ----------
  var toastTimer = null;

  function toast(text) {
    var t = $('#hint-toast');
    t.textContent = text;
    t.classList.remove('show');
    void t.offsetWidth;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove('show'); }, 3800);
  }

  function glow(el) {
    if (!el) return;
    el.classList.remove('hint-glow');
    void el.getBoundingClientRect();
    el.classList.add('hint-glow');
    setTimeout(function () { el.classList.remove('hint-glow'); }, 4200);
  }

  function hasWord(text, wid) { return text.indexOf('{' + wid + '|') !== -1; }

  // cuvintele de care e nevoie pentru rezolvare vin primele, apoi restul
  function missingWords() {
    var needed = identSlots().concat(dedSlots()).map(function (p) { return p.answer; });
    var all = needed.concat(Object.keys(S.words));
    return all.filter(function (w, i) {
      return all.indexOf(w) === i && state.found.indexOf(w) === -1;
    });
  }

  // unde se află un cuvânt: într-o zonă din scenă sau într-un obiect
  function sourceOf(wid) {
    var clueId = null, itemId = null;
    Object.keys(S.clues).some(function (id) {
      if (hasWord(S.clues[id].text, wid)) { clueId = id; return true; }
      return false;
    });
    if (!clueId) {
      Object.keys(S.items).some(function (it) {
        if (hasWord(S.items[it].text, wid)) { itemId = it; return true; }
        return false;
      });
      if (itemId) {
        Object.keys(S.clues).some(function (id) {
          if ((S.clues[id].items || []).indexOf(itemId) !== -1) { clueId = id; return true; }
          return false;
        });
      }
    }
    return clueId ? { clue: clueId, item: itemId } : null;
  }

  function hotspot(id) { return $('#scene .hs[data-id="' + id + '"]'); }

  // Explorează: luminează locul unde e ascuns un cuvânt negăsit
  function hintExplore() {
    closeClue();
    var words = missingWords();
    var src = null, wid = null;
    words.some(function (w) { src = sourceOf(w); wid = w; return !!src; });
    if (!src) {
      toast('Ai găsit toate cuvintele. Treci la Gândire!');
      $('.tab[data-mode="think"]').classList.add('nudge');
      return;
    }

    // obiectul e deja în bara de jos: luminează-l acolo
    if (src.item && state.items.indexOf(src.item) !== -1) {
      glow($$('#items .item')[state.items.indexOf(src.item)]);
      toast('Mai citește o dată obiectul care strălucește, jos.');
      return;
    }

    var el = hotspot(src.clue);
    var parent = el && el.dataset.parent;
    var target = src.clue;
    if (parent && state.zoom !== parent) {
      target = parent;                       // întâi trebuie privit de aproape / deschis
    }
    if (state.zoom && state.zoom !== parent && state.zoom !== target) zoomOut();
    if (!parent && state.zoom) zoomOut();

    var spot = hotspot(target);
    glow(spot);
    var c = S.clues[target];
    toast(target !== src.clue
      ? (c.inside ? 'Deschide ce strălucește. Înăuntru e ceva de găsit.' : 'Privește mai de aproape ce strălucește.')
      : 'Cercetează ce strălucește și caută un cuvânt roșu.');
  }

  // Gândire: pune un cuvânt găsit la locul lui
  var hintBusy = false;

  function hintThink() {
    var groups = [];
    if (!state.dedOk) groups = groups.concat(dedSlots());
    if (!state.identOk) groups = groups.concat(identSlots());
    var wrongOrEmpty = groups.filter(function (p) { return state.slots[p.slot] !== p.answer; });
    if (!wrongOrEmpty.length) {
      toast(state.identOk && state.dedOk ? 'Totul e rezolvat!' : 'Totul e la locul lui. Apasă sigiliul Verifică.');
      return;
    }
    // întâi locurile greșite, apoi cele goale
    var pick = wrongOrEmpty.filter(function (p) { return state.slots[p.slot] && state.found.indexOf(p.answer) !== -1; })[0] ||
      wrongOrEmpty.filter(function (p) { return state.found.indexOf(p.answer) !== -1; })[0];
    if (!pick) {
      toast('Îți lipsesc cuvinte. Caută-le în scenă, la Explorează.');
      $('.tab[data-mode="explore"]').classList.add('nudge');
      return;
    }
    var slotSel = '[data-slot="' + pick.slot + '"]';
    hintBusy = true;
    setTimeout(function () {
      var chip = chipFor(pick.answer);
      var to = $(slotSel);
      fly(S.words[pick.answer].text, chip && chip.getBoundingClientRect(), to && to.getBoundingClientRect(),
        { ms: 520, spin: -9, end: 1, fade: 1 },
        function () {
          hintBusy = false;
          state.slots[pick.slot] = pick.answer;
          fx.stamp = pick.slot;
          snd('place');
          afterWordChange(pick.slot, null);
          glow($(slotSel));
          fitAll();
        });
    }, 260);
    toast('Un cuvânt și-a găsit locul.');
  }

  function useHint() {
    if (!S || !$('#game-screen').classList.contains('active') || hintBusy) return;
    if (state.identOk && state.dedOk) { toast('Totul e rezolvat!'); return; }
    snd('item');
    state.hints++;
    save();
    var b = $('#btn-hint');
    b.classList.remove('lit');
    void b.offsetWidth;
    b.classList.add('lit');
    if (state.mode === 'think') hintThink();
    else hintExplore();
  }

  $('#btn-hint').addEventListener('click', useHint);

  // identitățile se verifică singure când toate plăcuțele sunt pline
  function checkIdentities() {
    var slots = identSlots();
    var empty = slots.filter(function (p) { return !state.slots[p.slot]; }).length;
    if (empty) {
      setStatus('#ident-status', 'Cine sunt oamenii din cameră?');
      return;
    }
    var wrong = slots.filter(function (p) { return state.slots[p.slot] !== p.answer; }).length;
    if (wrong === 0) {
      state.identOk = true;
      fx.win = 'ident';
      snd('good');
      setStatus('#ident-status', 'Toate identitățile sunt corecte.', 'good');
      maybeFinish();
    } else if (wrong <= 3) {
      fx.shake = 'ident';
      snd('almost');
      setStatus('#ident-status', (wrong <= 2 ? '2' : '3') + ' sau mai puține nume greșite.', 'close');
    } else {
      fx.shake = 'ident';
      snd('wrong');
      setStatus('#ident-status', 'Mai multe nume sunt greșite.', 'bad');
    }
  }

  function checkDeduction() {
    if (state.dedOk) return;
    var parts = dedSlots();
    var empty = parts.filter(function (p) { return !state.slots[p.slot]; }).length;
    if (empty) {
      snd('wrong');
      setStatus('#feedback', 'Completează mai întâi toate spațiile goale.', 'bad');
      return;
    }
    state.checks++;
    save();
    var wrong = parts.filter(function (p) { return state.slots[p.slot] !== p.answer; }).length;
    if (wrong === 0) {
      state.dedOk = true;
      fx.win = 'ded';
      snd('good');
      setStatus('#feedback', state.identOk
        ? 'Exact așa s-a întâmplat!'
        : 'Povestea e corectă. Mai lipsesc identitățile.', 'good');
      renderPanels();
      maybeFinish();
    } else if (wrong <= 3) {
      fx.shake = 'ded';
      snd('almost');
      setStatus('#feedback', (wrong <= 2 ? '2' : '3') + ' sau mai puține cuvinte greșite.', 'close');
      renderPanels();
    } else {
      fx.shake = 'ded';
      snd('wrong');
      setStatus('#feedback', 'Povestea nu se leagă încă. Mai cercetează scena.', 'bad');
      renderPanels();
    }
  }

  function maybeFinish() {
    if (!state.identOk || !state.dedOk) {
      if (state.identOk && !state.dedOk) $('.tab[data-mode="think"]').classList.add('nudge');
      return;
    }
    setTimeout(function () {
      solved[S.id] = true;
      save();
      renderEnd();
      show('#end-screen');
      snd('win');
    }, 1600);
  }

  // ---------- ecranul de final ----------
  function renderEnd() {
    var idx = CHAPTERS.indexOf(S);
    document.body.dataset.theme = S.theme;
    $('#end-chapter').textContent = 'Capitolul ' + S.num + ' · ' + S.title;
    $('#end-text').innerHTML = S.ending;

    // scena capitolului, estompată, în spate
    $('#end-backdrop').innerHTML = S.svg
      .replace('xMidYMid meet', 'xMidYMid slice')
      .replace(/<g id="hotspots">[\s\S]*?<\/g>\s*<\/svg>/, '</svg>')
      .replace(/id="([^"]+)"/g, 'id="$1-e"')
      .replace(/url\(#([^)]+)\)/g, 'url(#$1-e)');

    // oamenii din capitol, cu numele lor
    var people = $('#end-people');
    people.innerHTML = '';
    S.people.forEach(function (p, i) {
      var d = document.createElement('div');
      d.className = 'end-person';
      d.style.animationDelay = (0.5 + i * 0.12) + 's';
      d.innerHTML = '<div class="end-face">' + portraitSvg(p.crop) + '</div>' +
        '<div class="end-name">' + S.words[p.first].text + '<br>' + S.words[p.last].text + '</div>';
      people.appendChild(d);
    });

    var stats = [
      ['Cuvinte', state.found.length + ' / ' + Object.keys(S.words).length],
      ['Obiecte', state.items.length + ' / ' + Object.keys(S.items).length],
      ['Indicii', String(state.hints)],
      ['Verificări', String(state.checks)]
    ];
    $('#end-stats').innerHTML = stats.map(function (st, i) {
      return '<div class="end-stat" style="animation-delay:' + (1.2 + i * 0.15) + 's"><b>' + st[1] + '</b><span>' + st[0] + '</span></div>';
    }).join('');

    var next = CHAPTERS[idx + 1];
    var btn = $('#btn-next');
    btn.style.display = next ? '' : 'none';
    btn.textContent = next ? 'Capitolul ' + next.num + ' →' : '';
    $('#end-screen').scrollTop = 0;
    setTimeout(fitAll, 0);
  }

  $('#btn-next').addEventListener('click', function () {
    var idx = CHAPTERS.indexOf(S);
    if (CHAPTERS[idx + 1]) start(idx + 1);
  });

  // ---------- pornire ----------
  // meniul de capitole de pe ecranul de titlu
  // o miniatură din desenul unui capitol; id-urile sunt redenumite ca să nu se
  // încurce cu cele din scena mare
  function thumbSvg(c, i) {
    return c.svg
      .replace('viewBox="0 0 1600 900"', 'viewBox="' + (c.thumb || '0 0 1600 900') + '"')
      .replace('xMidYMid meet', 'xMidYMid slice')
      .replace(/<g id="hotspots">[\s\S]*?<\/g>/, '')
      .replace(/<rect[^>]*filter="url\(#fGrain\)"[^>]*\/>/, '')
      .replace(/id="([^"]+)"/g, 'id="$1-m' + i + '"')
      .replace(/url\(#([^)]+)\)/g, 'url(#$1-m' + i + ')');
  }

  window.addEventListener('load', function () { fitAll(); });

  function renderMenu() {
    var box = $('#chapters');
    box.innerHTML = '';
    CHAPTERS.forEach(function (c, i) {
      var b = document.createElement('button');
      b.className = 'chapter-card t-' + c.theme + (solved[c.id] ? ' solved' : '');
      b.innerHTML = '<span class="cc-in"><span class="cc-thumb">' + thumbSvg(c, i) + '</span>' +
        '<span class="cc-num">' + c.num + '</span>' +
        '<span class="cc-title">' + c.title + '</span>' +
        '<span class="cc-blurb">' + c.blurb + '</span>' +
        (solved[c.id]
          ? '<span class="cc-seal cc-reset" role="button" tabindex="0" title="Reia capitolul de la început">' +
            '<span class="cc-done">Rezolvat</span><span class="cc-again">↺ Reia</span></span>'
          : '<span class="cc-seal">Joacă</span>') + '</span>';
      b.addEventListener('click', function () { start(i); });
      var seal = b.querySelector('.cc-reset');
      if (seal) {
        var again = function (e) { e.preventDefault(); e.stopPropagation(); resetChapter(c.id); start(i); };
        seal.addEventListener('click', again);
        seal.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') again(e); });
      }
      box.appendChild(b);
    });
    var done = CHAPTERS.filter(function (c) { return solved[c.id]; }).length;
    $('#menu-progress').textContent = 'Capitole rezolvate: ' + done + ' din ' + CHAPTERS.length;
  }

  // șterge tot ce s-a salvat pentru un capitol, ca să fie jucat din nou
  function resetChapter(id) {
    delete solved[id];
    try {
      var data = readSave();
      if (data.chapters) delete data.chapters[id];
      if (data.solved) delete data.solved[id];
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function start(i) {
    S = CHAPTERS[i];
    document.body.dataset.theme = S.theme;
    if (window.SFX) { window.SFX.start(); window.SFX.setTrack(S.track); }
    snd('click');
    $('#chapter-name').textContent = 'Cap. ' + S.num + ' · ' + S.title;
    $('.dossier-tab').textContent = S.dossier;
    reset();
    restore();
    buildScene();
    Object.keys(state.seen).forEach(function (id) {
      var el = $('#scene .hs[data-id="' + id + '"]');
      if (el) el.classList.add('seen');
    });
    renderItems();
    renderBank();
    setStatus('#ident-status', state.identOk ? 'Toate identitățile sunt corecte.' : 'Cine sunt oamenii din cameră?',
      state.identOk ? 'good' : '');
    setStatus('#feedback', state.dedOk ? 'Exact așa s-a întâmplat!' : S.question, state.dedOk ? 'good' : '');
    $$('.tab').forEach(function (t) { t.classList.remove('nudge'); });
    $('.scene-hint').textContent = 'Dă clic pe persoane și obiecte pentru a le cerceta.';
    setMode('explore');
    show('#game-screen');
  }

  reset();
  solved = readSave().solved || {};
  renderMenu();
  setTimeout(fitAll, 0);
  $('#btn-menu').addEventListener('click', function () {
    if (drag) return;
    $('#clue-modal').classList.add('hidden');
    state.zoom = null;
    save();
    snd('click');
    renderMenu();
    titleView('menu');
    show('#title-screen');
  });
  $('#btn-replay').addEventListener('click', function () {
    snd('click');
    renderMenu();
    titleView('menu');
    show('#title-screen');
  });

  // ---------- ecranul de început: Joacă / Tutorial ----------
  function titleView(v) {
    $('#title-screen').dataset.view = v;
    if (v === 'tutorial') { tutStep = 0; renderTut(); }
    fitAll();
  }

  var CUR_ARROW = '<path d="M4 3 L5.4 27.2 L11.6 21.4 L16.2 32.3 L21.3 30 L16.6 19.6 L25.2 18.7 Z" fill="FILL" stroke="#1b130d" stroke-width="2.6" stroke-linejoin="round"/>';
  var CUR_GLASS = '<path d="M29 29 L42.5 42.5" stroke="#1b130d" stroke-width="9.5" stroke-linecap="round"/>' +
    '<path d="M29.6 29.6 L42 42" stroke="#7a5230" stroke-width="5.2" stroke-linecap="round"/>' +
    '<circle cx="19" cy="19" r="13.2" fill="#cfe6ea" fill-opacity=".32" stroke="#1b130d" stroke-width="7.4"/>' +
    '<circle cx="19.2" cy="18.8" r="13.2" fill="none" stroke="#c9a24e" stroke-width="3.6"/>';
  var CUR_PLUS = '<path d="M19 13.2 V24.8 M13.2 19 H24.8" stroke="#1b130d" stroke-width="3" stroke-linecap="round"/>';

  function cur(move, kind) {
    var arrow = '<g transform="translate(-4 -3) scale(1.25)">' + CUR_ARROW.replace('FILL', kind === 'gold' ? '#e3b24f' : '#efe4c4') + '</g>';
    var glass = '<g transform="translate(-24 -24) scale(1.25)">' + CUR_GLASS + (kind === 'plus' ? CUR_PLUS : '') + '</g>';
    var inner = kind === 'gold' ? arrow
      : kind === 'swap' ? '<g class="tut-arrow">' + arrow + '</g><g class="tut-glass">' + glass + '</g>'
      : glass;
    return '<g class="' + move + '">' + inner + '</g>';
  }

  var INK = 'stroke="#1b130d" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
  var TXT = 'font-family="Courier New, monospace" font-weight="bold"';

  function ripple(x, y, cls) {
    return '<g class="' + cls + '" style="transform-origin:' + x + 'px ' + y + 'px"><circle cx="' + x + '" cy="' + y +
      '" r="24" fill="none" stroke="#ffd98a" stroke-width="5"/></g>';
  }

  function scrap(x, y, w, word, cls) {
    return '<g class="' + (cls || '') + '"><rect x="' + x + '" y="' + y + '" width="' + w + '" height="30" fill="#efe4c4" ' + INK +
      '/><circle cx="' + (x + 13) + '" cy="' + (y + 15) + '" r="4.5" fill="#a8452f" stroke="#1b130d" stroke-width="2"/>' +
      '<text x="' + (x + w / 2 + 8) + '" y="' + (y + 20) + '" font-size="15" text-anchor="middle" ' + TXT + ' fill="#1b130d">' + word + '</text></g>';
  }

  var TRAY = '<rect x="20" y="198" width="440" height="60" rx="30" fill="#18221f" stroke="#c9a24e" stroke-width="3"/>';

  var TUT = [
    {
      title: 'Cercetează scena',
      text: 'Plimbă cursorul prin cameră. Când săgeata se schimbă într-o lupă, ai găsit ceva: dă clic și citește fișa.',
      demo:
        '<rect width="480" height="270" fill="#2f4a43"/><rect y="196" width="480" height="74" fill="#5a3a24"/>' +
        '<rect x="56" y="36" width="84" height="104" fill="#b8913e" ' + INK + '/><rect x="68" y="48" width="60" height="80" fill="#56707a"/>' +
        '<circle cx="98" cy="78" r="13" fill="#f0cdac"/><path d="M76 128 Q80 98 98 96 Q116 98 120 128 Z" fill="#efe7d2"/>' +
        '<rect x="232" y="156" width="156" height="14" fill="#3a2416" ' + INK + '/><rect x="246" y="170" width="12" height="56" fill="#3a2416" ' + INK + '/><rect x="362" y="170" width="12" height="56" fill="#3a2416" ' + INK + '/>' +
        '<path d="M286 156 L292 116 Q304 102 316 116 L322 156 Z" fill="#6f8f9a" ' + INK + '/>' +
        '<path d="M304 108 q-10 -22 -22 -26 M304 108 q4 -24 14 -28" fill="none" ' + INK + '/>' +
        ripple(304, 132, 'tut-ripple') +
        '<g class="tut-pop" style="transform-origin:150px 150px"><path d="M36 70 l10 -8 l12 8 l12 -8 l12 8 l12 -8 l12 8 l12 -8 l12 8 l12 -8 l12 8 l12 -8 l12 8 l12 -8 l12 8 l12 -8 l12 8 V196 H36 Z" fill="#f1ead2" ' + INK + '/>' +
        '<path d="M60 96 H170" stroke="#1b130d" stroke-width="7"/><path d="M60 122 H230 M60 142 H230 M60 162 H180" stroke="#1b130d" stroke-width="3" opacity=".5"/>' +
        '<path d="M96 122 H150" stroke="#a8452f" stroke-width="5"/></g>' +
        cur('tut-m1', 'swap')
    },
    {
      title: 'Adună cuvintele roșii',
      text: 'În fișe, cuvintele importante sunt scrise cu roșu și subliniate. Dă clic pe ele și ajung în lista ta de cuvinte.',
      demo:
        '<rect width="480" height="270" fill="#2f4a43"/>' +
        '<rect x="50" y="18" width="380" height="156" fill="#f1ead2" ' + INK + '/>' +
        '<text x="72" y="52" font-size="16" ' + TXT + ' fill="#1b130d">FATA CU BUCLE</text><path d="M72 62 H408" stroke="#1b130d" stroke-width="2"/>' +
        '<text x="72" y="98" font-size="16" font-family="Courier New, monospace" fill="#1b130d">«Eu sunt</text>' +
        '<g class="tut-red"><text x="160" y="98" font-size="16" ' + TXT + ' fill="#a8452f">Otilia</text><path d="M160 104 H220" stroke="#a8452f" stroke-width="2.5" stroke-dasharray="6 4"/></g>' +
        '<text class="tut-black" x="160" y="98" font-size="16" ' + TXT + ' fill="#1b130d">Otilia</text>' +
        '<text x="222" y="98" font-size="16" font-family="Courier New, monospace" fill="#1b130d">. Poftește!»</text>' +
        '<path d="M72 128 H400 M72 150 H300" stroke="#1b130d" stroke-width="3" opacity=".4"/>' +
        TRAY + scrap(40, 213, 96, 'Felix') +
        ripple(190, 92, 'tut-ripple') +
        '<g class="tut-fly">' + scrap(0, 0, 100, 'Otilia') + '</g>' +
        cur('tut-m2', 'gold')
    },
    {
      title: 'Uită-te mai de aproape',
      text: 'Lupa cu plus înseamnă că poți privi de aproape sau deschide ceva: un sertar, un dulap, o valiză. Înăuntru sunt alte lucruri de găsit, dar nu tot ce găsești e important.',
      demo:
        '<rect width="480" height="270" fill="#2f4a43"/><rect y="214" width="480" height="56" fill="#5a3a24"/>' +
        '<rect x="150" y="62" width="180" height="156" fill="#5a3a20" ' + INK + '/><rect x="140" y="50" width="200" height="14" fill="#3a2416" ' + INK + '/>' +
        '<rect x="164" y="78" width="152" height="38" fill="#150d07" ' + INK + '/>' +
        '<g class="tut-letter"><rect x="196" y="86" width="88" height="26" fill="#efe4c4" stroke="#1b130d" stroke-width="3" transform="rotate(-6 240 99)"/><circle cx="262" cy="100" r="6" fill="#a8452f"/></g>' +
        '<g class="tut-drawer"><rect x="158" y="78" width="164" height="38" fill="#4a2e19" ' + INK + '/><circle cx="210" cy="97" r="5" fill="#c99a4a" stroke="#1b130d" stroke-width="2"/><circle cx="270" cy="97" r="5" fill="#c99a4a" stroke="#1b130d" stroke-width="2"/></g>' +
        '<rect x="164" y="126" width="152" height="38" fill="#4a2e19" ' + INK + '/><rect x="164" y="172" width="152" height="38" fill="#4a2e19" ' + INK + '/>' +
        '<g fill="#c99a4a" stroke="#1b130d" stroke-width="2"><circle cx="210" cy="145" r="5"/><circle cx="270" cy="145" r="5"/><circle cx="210" cy="191" r="5"/><circle cx="270" cy="191" r="5"/></g>' +
        ripple(240, 100, 'tut-ripple') +
        cur('tut-m3', 'plus')
    },
    {
      title: 'Gândește',
      text: 'În fila Gândire, trage cuvintele de jos la locul lor: sub portrete și în povestea cu spații goale. Pentru oameni pui întâi prenumele, apoi numele.',
      demo:
        '<rect width="480" height="270" fill="#46301c"/>' +
        '<rect x="24" y="18" width="270" height="150" fill="#efe3c2" ' + INK + '/>' +
        '<text x="44" y="60" font-size="15" font-family="Courier New, monospace" fill="#1b130d">și i-a</text>' +
        '<rect x="104" y="40" width="120" height="32" rx="14" fill="#e2d3ad" stroke="#8a6a3a" stroke-width="2.5" stroke-dasharray="7 5"/>' +
        '<text x="44" y="104" font-size="15" font-family="Courier New, monospace" fill="#1b130d">pachetul cu bani.</text>' +
        '<path d="M44 132 H250" stroke="#1b130d" stroke-width="3" opacity=".35"/>' +
        '<g class="tut-filled" style="transform-origin:164px 56px">' + scrap(108, 41, 112, 'furat') + '</g>' +
        '<circle cx="386" cy="62" r="38" fill="#6d2b2b" stroke="#1b130d" stroke-width="5"/><circle cx="386" cy="62" r="38" fill="none" stroke="#c9a24e" stroke-width="3"/>' +
        '<circle cx="386" cy="54" r="13" fill="#e3ad85"/><path d="M362 96 Q366 72 386 70 Q406 72 410 96 Z" fill="#2c2622"/>' +
        '<path d="M330 114 H442 L434 126 L442 138 H330 L338 126 Z" fill="#c9a24e" ' + INK + '/><text x="386" y="131" font-size="11" text-anchor="middle" ' + TXT + ' fill="#1b130d">STĂNICĂ</text>' +
        '<path d="M330 146 H442 L434 158 L442 170 H330 L338 158 Z" fill="#2b1513" ' + INK + '/><text x="386" y="162" font-size="9" text-anchor="middle" font-family="Courier New, monospace" fill="#c9a24e">NUME</text>' +
        TRAY + scrap(40, 213, 100, 'furat', 'tut-src') + scrap(170, 213, 112, 'Stănică') + scrap(312, 213, 100, 'banii') +
        '<g class="tut-drag">' + scrap(0, 0, 100, 'furat') + '</g>' +
        cur('tut-m4', 'gold')
    },
    {
      title: 'Verifică',
      text: 'Apasă sigiliul roșu. Dacă au rămas cel mult trei greșeli, jocul îți spune. Când totul e corect, afli adevărul și capitolul e rezolvat.',
      demo:
        '<rect width="480" height="270" fill="#46301c"/>' +
        '<rect x="50" y="18" width="380" height="234" fill="#efe3c2" ' + INK + '/>' +
        '<path d="M80 110 H400 M80 136 H400 M80 162 H300" stroke="#1b130d" stroke-width="3" opacity=".35"/>' +
        '<g class="tut-msg1"><path d="M84 40 H396 L384 58 L396 76 H84 L96 58 Z" fill="#8a6a1c" ' + INK + '/><text x="240" y="63" font-size="12.5" text-anchor="middle" ' + TXT + ' fill="#fff3c4">3 sau mai puține cuvinte greșite</text></g>' +
        '<g class="tut-msg2"><path d="M84 40 H396 L384 58 L396 76 H84 L96 58 Z" fill="#2f5a3c" ' + INK + '/><text x="240" y="63" font-size="13" text-anchor="middle" ' + TXT + ' fill="#d6f5c8">Exact așa s-a întâmplat!</text></g>' +
        '<g class="tut-seal" style="transform-origin:340px 200px"><circle cx="340" cy="200" r="36" fill="#b8342a" stroke="#5a1410" stroke-width="5"/><circle cx="340" cy="200" r="27" fill="none" stroke="#5a1410" stroke-width="2"/>' +
        '<text x="340" y="204" font-size="10" text-anchor="middle" ' + TXT + ' fill="#f6dccb" transform="rotate(-9 340 200)">VERIFICĂ</text></g>' +
        ripple(340, 200, 'tut-ripple-a') + ripple(340, 200, 'tut-ripple-b') +
        cur('tut-m5', 'gold')
    }
  ];
  var tutStep = 0;

  function renderTut() {
    var t = TUT[tutStep];
    $('#tut-title').textContent = (tutStep + 1) + '. ' + t.title;
    $('#tut-text').textContent = t.text;
    // desenul e pus din nou la fiecare pas, ca animația să pornească de la început
    $('#tut-demo').innerHTML = '<svg class="tut-demo" viewBox="0 0 480 270" aria-hidden="true">' + t.demo + '</svg>';
    var dots = $('#tut-dots');
    dots.innerHTML = '';
    TUT.forEach(function (_, i) {
      var d = document.createElement('button');
      d.className = 'tut-dot' + (i === tutStep ? ' on' : '');
      d.setAttribute('aria-label', 'Pasul ' + (i + 1));
      d.addEventListener('click', function () { snd('click'); tutStep = i; renderTut(); });
      dots.appendChild(d);
    });
    $('#tut-prev').style.visibility = tutStep === 0 ? 'hidden' : 'visible';
    $('#tut-next').textContent = tutStep === TUT.length - 1 ? 'Joacă' : 'Mai departe';
    fitAll();
  }

  $('#btn-play').addEventListener('click', function () {
    if (window.SFX) window.SFX.start();
    snd('click');
    titleView('menu');
  });
  $('#btn-tutorial').addEventListener('click', function () {
    if (window.SFX) window.SFX.start();
    snd('paper');
    titleView('tutorial');
  });
  $('#btn-menu-back').addEventListener('click', function () { snd('click'); titleView('start'); });
  $('#tut-close').addEventListener('click', function () { snd('click'); titleView('start'); });
  $('#tut-prev').addEventListener('click', function () { snd('tab'); tutStep = Math.max(0, tutStep - 1); renderTut(); });
  $('#tut-next').addEventListener('click', function () {
    if (tutStep === TUT.length - 1) { snd('click'); titleView('menu'); return; }
    snd('tab');
    tutStep++;
    renderTut();
  });

  function toggleSound() {
    if (!window.SFX) return;
    var off = window.SFX.toggle();
    var b = $('#btn-sound');
    b.classList.toggle('off', off);
    b.setAttribute('aria-pressed', off ? 'false' : 'true');
    b.querySelector('.sound-label').textContent = off ? 'Sunet oprit' : 'Sunet';
  }
  $('#btn-sound').addEventListener('click', toggleSound);
  $('#btn-check').addEventListener('click', checkDeduction);

  $$('.tab').forEach(function (t) {
    t.addEventListener('click', function () { setMode(t.dataset.mode); });
  });

  document.addEventListener('click', function (e) {
    var b = e.target.closest && e.target.closest('.w');
    if (b) collect(b.dataset.w);
  });
  $('.modal-close').addEventListener('click', closeClue);
  $('#clue-modal').addEventListener('click', function (e) {
    if (e.target.id === 'clue-modal') closeClue();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (!$('#clue-modal').classList.contains('hidden')) closeClue();
      else if (state.zoom) zoomOut();
    }
    if (e.key === 'm' || e.key === 'M') toggleSound();
    if ((e.key === 'h' || e.key === 'H') && !drag) useHint();
    if (e.key === 'f' || e.key === 'F') {
      if (document.fullscreenElement) document.exitFullscreen();
      else if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    }
  });
})();
