// Muzică și sunete, generate în cod (Web Audio). Nu există fișiere audio.
// Muzica este o compoziție proprie: un vals lent, în la minor, cu timbru de cutie muzicală.
(function () {
  'use strict';

  var ctx = null, master, musicGain, sfxGain, noiseBuf;
  var muted = false, timer = null, nextTime = 0, bar = 0;

  function hz(midi) { return 440 * Math.pow(2, (midi - 69) / 12); }

  function init() {
    if (ctx) return true;
    var AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return false;
    ctx = new AC();

    master = ctx.createGain();
    master.gain.value = muted ? 0 : 1;
    master.connect(ctx.destination);

    sfxGain = ctx.createGain();
    sfxGain.gain.value = 0.5;
    sfxGain.connect(master);

    musicGain = ctx.createGain();
    musicGain.gain.value = 0.12;
    musicGain.connect(master);

    // ecou ușor, ca într-o cameră goală
    var delay = ctx.createDelay(1);
    delay.delayTime.value = 0.33;
    var lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 1700;
    var fb = ctx.createGain();
    fb.gain.value = 0.3;
    musicGain.connect(delay);
    delay.connect(lp);
    lp.connect(fb);
    fb.connect(delay);
    fb.connect(master);

    // zgomot alb, refolosit pentru foșnete și bătăi
    var len = ctx.sampleRate;
    noiseBuf = ctx.createBuffer(1, len, ctx.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return true;
  }

  // o notă cu atac scurt și stingere lentă
  function tone(freq, t, dur, vol, type, dest) {
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = type || 'sine';
    o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(dest || sfxGain);
    o.start(t);
    o.stop(t + dur + 0.05);
    return o;
  }

  function noise(t, dur, vol, type, f0, f1) {
    var src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    var f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.setValueAtTime(f0, t);
    if (f1) f.frequency.exponentialRampToValueAtTime(f1, t + dur);
    var g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(sfxGain);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
  }

  function bell(midi, t, dur, vol) {
    tone(hz(midi), t, dur, vol, 'sine');
    tone(hz(midi) * 2.76, t, dur * 0.5, vol * 0.25, 'sine');
  }

  // ---------- muzica ----------
  // Două compoziții proprii, discrete, de „cercetare": puține note, mult spațiu între ele.
  // Fiecare măsură: d = notă ținută în fundal, o / b = acompaniament pe timpi (0 = pauză),
  // m = melodie [notă, timpi] (0 = pauză)
  var TRACKS = {
    // Cap. IV: întunecat și lent, în la minor. Un sunet grav ținut, câteva note rare
    // și, din când în când, un clinchet înalt, ca o idee care îți vine.
    waltz: { beat: 0.82, beats: 4, style: 'dark', bars: [
      { d: 45, o: [57, 0, 60, 0], m: [[0, 2], [76, 2]] },
      { d: 45, o: [57, 0, 64, 0], m: [[72, 3], [0, 1]] },
      { d: 41, o: [53, 0, 60, 0], m: [[0, 2], [77, 2]] },
      { d: 41, o: [53, 0, 65, 0], m: [[76, 3], [0, 1]] },
      { d: 50, o: [57, 0, 62, 0], m: [[0, 1], [74, 1], [77, 2]] },
      { d: 40, o: [56, 0, 59, 0], m: [[76, 2], [68, 2]] },
      { d: 45, o: [57, 0, 60, 0], m: [[69, 4]] },
      { d: 45, o: [52, 0, 57, 0], m: [[0, 3], [88, 1]] }
    ] },
    // Cap. I: curios și „în vârful picioarelor", în re minor. Bas scurt, ciupit,
    // și un motiv mic, întrebător, care rămâne în aer.
    salon: { beat: 0.52, beats: 4, style: 'tiptoe', bars: [
      { d: 38, b: [50, 53, 57, 0], m: [[0, 2], [74, 1], [77, 1]] },
      { d: 0,  b: [50, 53, 57, 0], m: [[76, 1], [0, 3]] },
      { d: 36, b: [48, 52, 55, 0], m: [[0, 2], [72, 1], [76, 1]] },
      { d: 0,  b: [48, 52, 55, 0], m: [[74, 1], [0, 3]] },
      { d: 34, b: [46, 50, 53, 0], m: [[0, 2], [70, 1], [74, 1]] },
      { d: 33, b: [45, 49, 52, 0], m: [[73, 2], [0, 2]] },
      { d: 38, b: [50, 53, 57, 0], m: [[74, 1], [69, 1], [65, 1], [62, 1]] },
      { d: 0,  b: [45, 0, 45, 0],  m: [[0, 4]] }
    ] },
    // Cap. III: pândă. Un sunet grav, un tic-tac de ceas și un motiv de două note care nu se rezolvă.
    watch: { beat: 0.62, beats: 4, style: 'tick', bars: [
      { d: 40, m: [[0, 2], [71, 1], [72, 1]] },
      { d: 40, m: [[71, 2], [0, 2]] },
      { d: 45, m: [[0, 2], [76, 1], [77, 1]] },
      { d: 45, m: [[76, 2], [0, 2]] },
      { d: 43, m: [[0, 1], [74, 1], [71, 2]] },
      { d: 42, m: [[0, 2], [66, 2]] },
      { d: 40, m: [[64, 3], [0, 1]] },
      { d: 40, m: [[0, 4]] }
    ] },
    // Cap. II: un cântec de leagăn ușor strâmb, ca o cutie muzicală stricată.
    lull: { beat: 0.58, beats: 3, style: 'lull', bars: [
      { d: 43, c: [55, 58, 62], m: [[0, 1], [74, 2]] },
      { d: 43, c: [55, 58, 62], m: [[70, 2], [69, 1]] },
      { d: 39, c: [51, 55, 58], m: [[0, 1], [79, 2]] },
      { d: 39, c: [51, 55, 58], m: [[75, 3]] },
      { d: 36, c: [48, 51, 55], m: [[0, 1], [72, 1], [75, 1]] },
      { d: 38, c: [50, 54, 57], m: [[73, 3]] },
      { d: 43, c: [55, 58, 62], m: [[74, 2], [70, 1]] },
      { d: 43, c: [55, 58, 62], m: [[0, 3]] }
    ] },
    // Cap. V: roțile trenului pe șine și o melodie care își amintește de valsul din capitolul IV.
    rail: { beat: 0.5, beats: 4, style: 'rail', bars: [
      { d: 45, m: [[76, 2], [72, 2]] },
      { d: 45, m: [[69, 4]] },
      { d: 41, m: [[77, 2], [72, 2]] },
      { d: 41, m: [[69, 3], [0, 1]] },
      { d: 43, m: [[74, 2], [71, 2]] },
      { d: 40, m: [[68, 4]] },
      { d: 45, m: [[72, 2], [71, 1], [69, 1]] },
      { d: 45, m: [[0, 4]] }
    ] }
  };
  var track = TRACKS.waltz;

  // notă moale, de cutie muzicală
  function voice(midi, t, dur, vol) {
    tone(hz(midi), t, dur, vol, 'triangle', musicGain);
    tone(hz(midi) * 2, t, dur * 0.6, vol * 0.2, 'sine', musicGain);
  }

  // sunet ținut, care crește și scade încet
  function pad(midi, t, dur, vol) {
    var o = ctx.createOscillator();
    var g = ctx.createGain();
    o.type = 'sine';
    o.frequency.setValueAtTime(hz(midi), t);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + dur * 0.45);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    o.connect(g);
    g.connect(musicGain);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  function scheduleBar(i, t) {
    var B = track.bars[i], beat = track.beat, dark = track.style === 'dark';
    var k;
    if (dark) {
      pad(B.d, t, beat * 4.3, 0.24);
      pad(B.d + 7, t, beat * 4.3, 0.1);
      for (k = 0; k < 4; k++) if (B.o[k]) voice(B.o[k], t + k * beat, beat * 1.7, 0.15);
    } else {
      if (B.d) pad(B.d, t, beat * 8.2, 0.16);
      if (B.b) for (k = 0; k < 4; k++) if (B.b[k]) tone(hz(B.b[k]), t + k * beat, 0.26, 0.26, 'triangle', musicGain);
      if (track.style === 'tick') {
        for (k = 0; k < 4; k++) tone(hz(k % 2 ? 91 : 96), t + k * beat, 0.035, 0.07, 'triangle', musicGain);
      }
      if (track.style === 'lull') {
        var up = [0, 1, 2, 1, 0, 1];
        for (k = 0; k < 6; k++) voice(B.c[up[k]], t + k * beat / 2, beat * 1.2, 0.1);
      }
      if (track.style === 'rail') {
        for (k = 0; k < 4; k += 2) {
          tone(62, t + k * beat, 0.07, 0.3, 'sine', musicGain);
          tone(58, t + k * beat + 0.14, 0.07, 0.22, 'sine', musicGain);
        }
      }
    }
    var at = t;
    B.m.forEach(function (note) {
      if (note[0]) {
        if (dark || track.style === 'lull' || track.style === 'rail') voice(note[0], at, Math.min(note[1] * beat * 1.6, 3.2), note[0] > 84 ? 0.14 : 0.28);
        else tone(hz(note[0]), at, note[1] > 1 ? 0.8 : 0.34, 0.3, 'triangle', musicGain);
      }
      at += note[1] * beat;
    });
  }

  function pump() {
    if (!ctx) return;
    while (nextTime < ctx.currentTime + 0.8) {
      scheduleBar(bar, nextTime);
      nextTime += track.beat * track.beats;
      bar = (bar + 1) % track.bars.length;
    }
  }

  // ---------- efecte ----------
  var FX = {
    click: function (t) { noise(t, 0.04, 0.5, 'bandpass', 2200); tone(520, t, 0.05, 0.12, 'triangle'); },
    tab: function (t) { noise(t, 0.22, 0.4, 'bandpass', 900, 3600); },
    paper: function (t) { noise(t, 0.26, 0.45, 'bandpass', 700, 3000); noise(t + 0.09, 0.12, 0.2, 'highpass', 4000); },
    zoom: function (t) {
      noise(t, 0.4, 0.3, 'bandpass', 500, 4200);
      var o = tone(220, t, 0.42, 0.14, 'sine');
      o.frequency.exponentialRampToValueAtTime(660, t + 0.4);
    },
    unzoom: function (t) {
      noise(t, 0.34, 0.26, 'bandpass', 3800, 500);
      var o = tone(600, t, 0.36, 0.12, 'sine');
      o.frequency.exponentialRampToValueAtTime(200, t + 0.34);
    },
    drawer: function (t) {             // sertar tras: lemn pe lemn, apoi oprire
      noise(t, 0.38, 0.5, 'lowpass', 300, 1100);
      noise(t + 0.05, 0.3, 0.2, 'bandpass', 1800, 900);
      tone(95, t + 0.36, 0.14, 0.7, 'sine');
    },
    wardrobe: function (t) {           // balamale care scârțâie
      var o = tone(310, t, 0.62, 0.12, 'sawtooth');
      o.frequency.linearRampToValueAtTime(540, t + 0.22);
      o.frequency.linearRampToValueAtTime(380, t + 0.4);
      o.frequency.linearRampToValueAtTime(600, t + 0.6);
      noise(t, 0.5, 0.14, 'bandpass', 900, 1500);
      tone(80, t + 0.62, 0.16, 0.6, 'sine');
    },
    'case': function (t) {             // două încuietori care sar
      noise(t, 0.03, 0.7, 'highpass', 3000);
      tone(900, t, 0.04, 0.2, 'triangle');
      noise(t + 0.14, 0.03, 0.7, 'highpass', 3200);
      tone(1050, t + 0.14, 0.04, 0.2, 'triangle');
      noise(t + 0.28, 0.2, 0.3, 'lowpass', 500, 900);
    },
    cabinet: function (t) {            // ușiță de sticlă
      var o = tone(520, t, 0.3, 0.08, 'sawtooth');
      o.frequency.linearRampToValueAtTime(700, t + 0.28);
      bell(91, t + 0.26, 0.5, 0.16);
      bell(96, t + 0.34, 0.6, 0.12);
    },
    shut: function (t) {
      noise(t, 0.2, 0.4, 'lowpass', 1000, 300);
      tone(72, t + 0.18, 0.18, 0.8, 'sine');
    },
    cluck: function (t) {              // o găină
      [0, 0.13, 0.3].forEach(function (d, i) {
        var o = tone(i === 2 ? 760 : 620, t + d, 0.09, 0.16, 'triangle');
        o.frequency.exponentialRampToValueAtTime(i === 2 ? 480 : 420, t + d + 0.08);
      });
    },
    allwords: function (t) {
      [72, 76, 79, 84, 88].forEach(function (m, i) { bell(m, t + i * 0.09, 1.1, 0.24); });
      [72, 79, 84].forEach(function (m) { bell(m, t + 0.6, 1.8, 0.16); });
    },
    close: function (t) { noise(t, 0.16, 0.3, 'bandpass', 2600, 700); },
    collect: function (t) {            // scârțâit de peniță + un clinchet
      noise(t, 0.06, 0.35, 'highpass', 3500);
      noise(t + 0.08, 0.07, 0.3, 'highpass', 4200);
      bell(88, t + 0.1, 0.5, 0.22);
    },
    item: function (t) { bell(81, t, 0.5, 0.25); bell(88, t + 0.11, 0.7, 0.25); },
    place: function (t) {              // ștampilă
      var o = tone(150, t, 0.13, 0.9, 'sine');
      o.frequency.exponentialRampToValueAtTime(55, t + 0.12);
      noise(t, 0.07, 0.5, 'lowpass', 900);
    },
    remove: function (t) { noise(t, 0.1, 0.3, 'bandpass', 1800, 500); tone(240, t, 0.08, 0.15, 'triangle'); },
    wrong: function (t) { tone(147, t, 0.35, 0.4, 'triangle'); tone(139, t, 0.35, 0.4, 'triangle'); },
    almost: function (t) { bell(69, t, 0.4, 0.25); bell(68, t + 0.16, 0.6, 0.25); },
    good: function (t) { [69, 72, 76, 81].forEach(function (m, i) { bell(m, t + i * 0.11, 0.8, 0.28); }); },
    win: function (t) {
      [57, 64, 69, 72, 76, 81, 84].forEach(function (m, i) { bell(m, t + i * 0.13, 1.6, 0.26); });
      [57, 64, 69, 73].forEach(function (m) { bell(m, t + 1.05, 2.6, 0.2); });
    },
    piano: function (t) { [65, 69, 72, 77, 81].forEach(function (m, i) { tone(hz(m), t + i * 0.09, 0.9, 0.3, 'triangle'); }); },
    bell: function (t) {               // ceasul bate
      for (var i = 0; i < 2; i++) {
        tone(hz(57), t + i * 0.9, 1.8, 0.5, 'sine');
        tone(hz(57) * 2.4, t + i * 0.9, 1.1, 0.14, 'sine');
        tone(hz(57) * 3.9, t + i * 0.9, 0.6, 0.06, 'sine');
      }
    }
  };

  window.SFX = {
    start: function () {
      if (!init()) return;
      if (ctx.state === 'suspended') ctx.resume();
      if (timer) return;
      bar = 0;
      nextTime = ctx.currentTime + 0.4;
      pump();
      timer = setInterval(pump, 200);
    },
    setTrack: function (name) {
      if (!TRACKS[name] || track === TRACKS[name]) return;
      track = TRACKS[name];
      bar = 0;
      if (ctx) nextTime = ctx.currentTime + 0.9;
    },
    play: function (name) {
      if (!ctx || muted || !FX[name]) return;
      FX[name](ctx.currentTime + 0.005);
    },
    toggle: function () {
      muted = !muted;
      if (ctx) master.gain.setTargetAtTime(muted ? 0 : 1, ctx.currentTime, 0.05);
      return muted;
    },
    isMuted: function () { return muted; }
  };
})();
