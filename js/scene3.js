// Capitolul III — Clanul la pândă. Scena, indiciile și deducția.
// Toată grafica este desenată în cod (SVG).
window.SCENE3 = {
  id: 'c3',
  num: 'III',
  title: 'Clanul la pândă',
  blurb: 'Bătrânul zace bolnav. În sufragerie, rudele s-au așezat la masă.',
  theme: 'blue',
  thumb: '640 250 880 495',
  track: 'watch',
  dossier: 'Dosar · Sufrageria, la apus',
  question: 'Ce se petrece în casa bolnavului?',

  svg: `
<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Sufrageria casei din strada Antim, la apus">
<defs>
  <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4e5c7c"/><stop offset="1" stop-color="#2b3550"/>
  </linearGradient>
  <linearGradient id="gFloor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6f4d30"/><stop offset="1" stop-color="#352115"/>
  </linearGradient>
  <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#3a3566"/><stop offset=".55" stop-color="#b0607a"/><stop offset="1" stop-color="#f0a860"/>
  </linearGradient>
  <radialGradient id="gCandle" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd27a" stop-opacity="0.6"/>
    <stop offset="0.4" stop-color="#ffb650" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#ffb650" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gVig" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.5" stop-color="#05060d" stop-opacity="0"/>
    <stop offset="1" stop-color="#05060d" stop-opacity="0.86"/>
  </radialGradient>
  <pattern id="pWall" width="80" height="80" patternUnits="userSpaceOnUse">
    <g fill="#e0c070" opacity="0.14">
      <path d="M40 8 L50 30 L40 52 L30 30 Z"/>
      <circle cx="40" cy="66" r="5"/><circle cx="0" cy="30" r="4"/><circle cx="80" cy="30" r="4"/>
    </g>
  </pattern>
  <filter id="fInk" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="17" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fGrain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="9"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.1 -0.35"/>
  </filter>
  <style>
    .o { stroke:#1b130d; stroke-width:3.5; stroke-linejoin:round; stroke-linecap:round; }
    .l { fill:none; stroke:#1b130d; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }
    .t { fill:none; stroke:#1b130d; stroke-width:2; stroke-linecap:round; opacity:.55; }
  </style>
</defs>

<g filter="url(#fInk)">

  <!-- perete, lambriu, podea -->
  <rect x="-20" y="-20" width="1640" height="520" fill="url(#gWall)"/>
  <rect x="-20" y="-20" width="1640" height="520" fill="url(#pWall)"/>
  <rect x="-20" y="-20" width="1640" height="62" fill="#1c2338" class="o"/>
  <path d="M0 50 h1600" stroke="#e0c070" stroke-width="3" opacity=".4"/>
  <rect x="-20" y="480" width="1640" height="144" fill="#2a2030" class="o"/>
  <path d="M0 508 H1600 M0 598 H1600 M560 508 V598 M860 508 V598 M1300 508 V598" class="t"/>
  <rect x="-20" y="622" width="1640" height="300" fill="url(#gFloor)"/>
  <g stroke="#22140a" stroke-width="2.5" opacity="0.5">
    <line x1="100" y1="622" x2="-512" y2="900"/><line x1="300" y1="622" x2="-137" y2="900"/>
    <line x1="500" y1="622" x2="237" y2="900"/><line x1="700" y1="622" x2="612" y2="900"/>
    <line x1="900" y1="622" x2="987" y2="900"/><line x1="1100" y1="622" x2="1362" y2="900"/>
    <line x1="1300" y1="622" x2="1737" y2="900"/><line x1="1500" y1="622" x2="2112" y2="900"/>
  </g>
  <ellipse cx="1010" cy="806" rx="470" ry="80" fill="#5a2a3a" class="o"/>
  <ellipse cx="1010" cy="806" rx="430" ry="64" fill="none" stroke="#dab660" stroke-width="5" stroke-dasharray="14 10"/>
  <g fill="none" stroke="#dab660" stroke-width="3" opacity=".55"><path d="M660 812 l36 -14 l36 14 l-36 14 Z M1290 812 l36 -14 l36 14 l-36 14 Z"/></g>

  <!-- ===== fereastra, la apus ===== -->
  <rect x="610" y="140" width="230" height="310" fill="#2c1c11" class="o"/>
  <rect x="624" y="154" width="202" height="282" fill="url(#gSky)"/>
  <circle cx="770" cy="392" r="44" fill="#ffd27a" opacity=".55"/>
  <path d="M624 436 L624 392 L662 366 L700 392 L700 408 L742 408 L742 372 L758 372 L758 408 L792 384 L826 410 L826 436 Z" fill="#241a30"/>
  <line x1="725" y1="154" x2="725" y2="436" stroke="#2c1c11" stroke-width="9"/>
  <line x1="624" y1="290" x2="826" y2="290" stroke="#2c1c11" stroke-width="9"/>
  <line x1="576" y1="126" x2="874" y2="126" stroke="#1b130d" stroke-width="8" stroke-linecap="round"/>
  <path d="M590 126 Q624 290 598 466 L652 466 Q642 290 662 126 Z" fill="#7a3b1e" class="o sway"/>
  <path d="M860 126 Q826 290 852 466 L798 466 Q808 290 788 126 Z" fill="#7a3b1e" class="o sway" style="animation-delay:-3s"/>

  <!-- ===== ceasul ===== -->
  <g transform="translate(40 -10)" class="vol">
    <path d="M868 196 L900 172 L932 196 L932 336 L868 336 Z" fill="#4a2e1b" class="o"/>
    <circle cx="900" cy="222" r="24" fill="#efe4c4" class="o"/>
    <line x1="900" y1="222" x2="900" y2="204" class="l"/><line x1="900" y1="222" x2="914" y2="228" class="l"/>
    <rect x="880" y="258" width="40" height="66" fill="#2a1a0f" class="o"/>
    <g class="pend"><line x1="900" y1="258" x2="900" y2="302" class="l"/>
    <circle cx="900" cy="308" r="9" fill="#c99a4a" class="o"/></g>
  </g>

  <!-- ===== lampa de deasupra mesei ===== -->
  <g transform="translate(210 0)">
    <g class="lampsway">
      <line x1="800" y1="-10" x2="800" y2="118" stroke="#1b130d" stroke-width="5"/>
      <circle cx="800" cy="196" r="60" fill="#fff0c0" opacity="0.3"/>
      <circle cx="800" cy="192" r="26" fill="#fff3cf" class="o"/>
      <path d="M736 182 L864 182 L832 118 L768 118 Z" fill="#7a3b1e" class="o"/>
      <path d="M736 182 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0" class="l"/>
    </g>
  </g>

  <!-- ===== bufetul ===== -->
  <g class="vol">
    <ellipse cx="1455" cy="628" rx="142" ry="10" fill="#000" opacity=".3"/>
    <path d="M1322 262 Q1455 232 1588 262 L1588 276 L1322 276 Z" fill="#3a2416" class="o"/>
    <rect x="1330" y="274" width="250" height="342" fill="#5a3a20" class="o"/>
    <rect x="1342" y="288" width="108" height="150" fill="#7f9a98" class="o"/><rect x="1460" y="288" width="108" height="150" fill="#7f9a98" class="o"/>
    <path d="M1342 362 h108 M1460 362 h108" class="l"/>
    <g fill="#efe8d6" class="o"><ellipse cx="1372" cy="334" rx="15" ry="22"/><ellipse cx="1408" cy="334" rx="15" ry="22"/><ellipse cx="1494" cy="334" rx="15" ry="22"/><rect x="1362" y="400" width="30" height="30"/><rect x="1484" y="400" width="30" height="30"/><rect x="1524" y="400" width="30" height="30"/></g>
    <path d="M1350 300 l22 34 M1470 298 l18 30" stroke="#dfeaec" stroke-width="4" stroke-linecap="round" opacity=".7"/>
    <rect x="1342" y="448" width="226" height="34" fill="#4a2e19" class="o"/>
    <circle cx="1400" cy="465" r="5" fill="#c99a4a" class="o"/><circle cx="1510" cy="465" r="5" fill="#c99a4a" class="o"/>
    <rect x="1342" y="492" width="108" height="114" fill="#4a2e19" class="o"/><rect x="1460" y="492" width="108" height="114" fill="#4a2e19" class="o"/>
    <circle cx="1442" cy="550" r="5" fill="#c99a4a" class="o"/><circle cx="1468" cy="550" r="5" fill="#c99a4a" class="o"/>
    <path d="M1366 506 q8 44 0 90 M1484 506 q8 44 0 90" class="t"/>
    <rect x="1336" y="614" width="16" height="10" fill="#3a2416" class="o"/><rect x="1558" y="614" width="16" height="10" fill="#3a2416" class="o"/>
    <!-- sfeșnic și telegramă -->
    <ellipse cx="1540" cy="258" rx="22" ry="6" fill="#c99a4a" class="o"/>
    <rect x="1534" y="206" width="12" height="50" fill="#f3e9c9" class="o"/>
    <path class="flame" d="M1540 202 Q1530 188 1540 170 Q1550 188 1540 202 Z" fill="#ffd27a" stroke="#e58a2a" stroke-width="2.5"/>
    <path d="M1396 258 L1404 214 L1470 218 L1464 260 Z" fill="#efe4c4" class="o"/>
    <path d="M1414 236 L1458 238 M1412 246 L1452 248" class="t"/>
  </g>

  <!-- ===== Felix, în spatele canapelei ===== -->
  <g class="vol fidget" style="animation-delay:-3s">
    <path d="M250 374 Q300 348 350 374 L360 500 L240 500 Z" fill="#33406a" class="o"/>
    <path d="M284 362 L300 396 L316 362 Z" fill="#efe8d6" class="o"/>
    <path d="M250 420 h30 M320 420 h30" class="t"/>
    <path d="M346 384 Q376 424 358 466" fill="none" stroke="#1b130d" stroke-width="34" stroke-linecap="round"/>
    <path d="M346 384 Q376 424 358 466" fill="none" stroke="#33406a" stroke-width="27" stroke-linecap="round"/>
    <rect x="322" y="404" width="56" height="74" fill="#3f5a4d" class="o" transform="rotate(8 350 441)"/>
    <path d="M334 420 l34 5" stroke="#c99a4a" stroke-width="4"/>
    <g transform="rotate(-9 300 339)"><rect x="289" y="322" width="22" height="46" fill="#f0c9a6"/></g>
    <g transform="rotate(-9 300 339)"><path d="M289 322 V368 M311 322 V368" class="l"/></g>
    <g transform="rotate(-9 300 339)"><ellipse cx="336" cy="304" rx="6" ry="10" fill="#f0c9a6" class="o"/></g>
    <g transform="rotate(-9 300 339)"><ellipse cx="300" cy="300" rx="35" ry="39" fill="#f0c9a6" class="o"/></g>
    <g transform="rotate(-9 300 339)"><path d="M265 296 Q260 254 300 254 Q340 254 335 296 Q322 270 300 274 Q278 270 265 296 Z" fill="#5a3a22" class="o"/></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><ellipse cx="288" cy="304" rx="7" ry="8" fill="#fff"/></g></g><g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><circle cx="286" cy="306" r="4" fill="#1b130d"/></g></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><ellipse cx="312" cy="304" rx="7" ry="8" fill="#fff"/></g></g><g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><circle cx="310" cy="306" r="4" fill="#1b130d"/></g></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><path d="M278 290 L296 286 M304 286 L322 290" class="l"/></g></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><path d="M300 310 q5 8 -2 10" class="l"/></g></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><path d="M292 328 q8 -4 16 0" class="l"/></g></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><g fill="#c9605a" opacity=".4"><ellipse cx="280" cy="318" rx="8" ry="5"/><ellipse cx="320" cy="318" rx="8" ry="5"/></g></g></g>
    <g transform="rotate(-9 300 339)"><g transform="translate(-7 0)"><g class="blink" style="animation-delay:-0.7s"><ellipse cx="288" cy="304" rx="8.5" ry="9" fill="#f0c9a6"/><path d="M280 305 q8 4 16 0" class="l"/><ellipse cx="312" cy="304" rx="8.5" ry="9" fill="#f0c9a6"/><path d="M304 305 q8 4 16 0" class="l"/></g></g></g>
  </g>

  <!-- ===== canapeaua ===== -->
  <g class="vol">
    <ellipse cx="280" cy="708" rx="272" ry="12" fill="#000" opacity=".34"/>
    <path d="M36 476 Q280 420 524 476 L524 652 L36 652 Z" fill="#6d2b2b" class="o"/>
    <path d="M70 506 Q280 456 490 506" class="t"/>
    <g fill="#4a1a1a"><circle cx="120" cy="530" r="5"/><circle cx="200" cy="514" r="5"/><circle cx="280" cy="508" r="5"/><circle cx="360" cy="514" r="5"/><circle cx="440" cy="530" r="5"/></g>
    <path d="M18 524 Q18 492 50 492 Q82 492 82 524 L82 684 L18 684 Z" fill="#5a2020" class="o"/>
    <path d="M478 524 Q478 492 510 492 Q542 492 542 524 L542 684 L478 684 Z" fill="#5a2020" class="o"/>
    <rect x="76" y="624" width="408" height="60" fill="#7a3333" class="o"/>
    <rect x="36" y="682" width="18" height="26" fill="#3a2416" class="o"/><rect x="506" y="682" width="18" height="26" fill="#3a2416" class="o"/>
  </g>

  <!-- ===== moș Costache, bolnav ===== -->
  <g class="vol breath" style="animation-delay:-2s">
    <ellipse cx="132" cy="596" rx="86" ry="34" fill="#efe8d6" class="o"/>
    <path d="M178 586 Q330 540 478 588 L484 644 L178 644 Z" fill="#5f7f8a" class="o"/>
    <path d="M244 578 Q254 612 244 640 M332 566 Q346 606 336 642 M420 576 Q430 608 424 642" class="t"/>
    <path d="M188 596 Q330 556 470 598" fill="none" stroke="#9fb7c6" stroke-width="4" opacity=".7"/>
    <path d="M150 592 Q176 568 202 590 L198 628 L152 628 Z" fill="#ebe5d4" class="o"/>
    <ellipse cx="172" cy="566" rx="6" ry="10" fill="#e6bd98" class="o"/>
    <ellipse cx="130" cy="564" rx="41" ry="36" fill="#e6bd98" class="o"/>
    <path d="M166 550 q12 0 10 14 M168 568 q12 2 6 14" fill="none" stroke="#f4f1ea" stroke-width="6" stroke-linecap="round"/>
    <path d="M106 562 q8 5 16 0 M134 562 q8 5 16 0" class="l"/>
    <path d="M128 566 q-6 10 2 13" class="l"/>
    <ellipse cx="128" cy="586" rx="9" ry="5" fill="#7a3a34" class="o"/>
    <path d="M108 548 q10 -5 20 0 M112 540 q8 -4 16 0" class="t"/>
    <!-- punga cu gheață -->
    <path d="M90 540 Q84 500 130 498 Q176 500 170 540 Q130 554 90 540 Z" fill="#bcd3e0" class="o"/>
    <circle cx="130" cy="496" r="10" fill="#9fb7c6" class="o"/>
    <path d="M104 522 q12 -8 26 -6 M140 514 q12 0 18 8" fill="none" stroke="#e6f0f4" stroke-width="4" stroke-linecap="round"/>
    <path class="sweat" d="M94 544 q-5 9 0 13 q5 -4 0 -13 Z" fill="#bfe0ea" stroke="#1b130d" stroke-width="1.5"/>
    <!-- mâna care nu dă drumul cheilor -->
    <path d="M330 628 Q352 652 344 686" fill="none" stroke="#1b130d" stroke-width="30" stroke-linecap="round"/>
    <path d="M330 628 Q352 652 344 686" fill="none" stroke="#ebe5d4" stroke-width="23" stroke-linecap="round"/>
    <circle cx="344" cy="698" r="14" fill="#e6bd98" class="o"/>
    <path d="M336 706 l-2 8 M344 708 v8 M352 706 l2 8" class="l"/>
    <circle cx="344" cy="728" r="12" fill="none" stroke="#1b130d" stroke-width="9"/>
    <circle cx="344" cy="728" r="12" fill="none" stroke="#c9a24e" stroke-width="4"/>
    <path d="M336 738 l-10 30 l8 2 M352 738 l10 28 l-8 4 M344 740 v30" fill="none" stroke="#1b130d" stroke-width="8" stroke-linecap="round"/>
    <path d="M336 738 l-10 30 l8 2 M352 738 l10 28 l-8 4 M344 740 v30" fill="none" stroke="#9aa3a0" stroke-width="3.5" stroke-linecap="round"/>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><text x="84" y="612" font-size="8" fill="#6f809a">C.G.</text></g>
  </g>

  <!-- ===== Otilia, lângă bolnav ===== -->
  <ellipse cx="582" cy="700" rx="78" ry="10" fill="#000" opacity=".34"/>
  <g class="vol breath" style="animation-delay:-5s">
    <path d="M530 514 Q578 488 626 514 L650 694 L514 694 Z" fill="#dfe8ee" class="o"/>
    <path d="M556 530 Q560 620 548 688 M604 530 Q614 620 622 688" class="t"/>
    <path d="M548 512 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" fill="none" stroke="#fff" stroke-width="2.5"/>
    <path d="M522 590 H638" stroke="#6f8fb0" stroke-width="9"/>
    <g transform="rotate(-10 579 477)"><rect x="569" y="464" width="18" height="46" fill="#f2d2b6"/></g>
    <g transform="rotate(-10 579 477)"><path d="M569 464 V510 M587 464 V510" class="l"/></g>
    <g transform="rotate(-10 579 477)"><g fill="#b9823f" class="o">
      <circle cx="548" cy="434" r="20"/><circle cx="610" cy="434" r="20"/>
      <circle cx="544" cy="462" r="16"/><circle cx="614" cy="462" r="16"/>
      <circle cx="562" cy="408" r="20"/><circle cx="596" cy="408" r="20"/>
    </g></g>
    <g transform="rotate(-10 579 477)"><ellipse cx="579" cy="442" rx="31" ry="35" fill="#f2d2b6" class="o"/></g>
    <g transform="rotate(-10 579 477)"><path d="M550 426 Q564 404 579 416 Q594 404 608 426 Q592 418 579 424 Q566 418 550 426 Z" fill="#b9823f"/></g>
    <g transform="rotate(-10 579 477)"><path d="M544 420 q6 -10 16 -8 M600 404 q10 0 14 10" fill="none" stroke="#e0b46a" stroke-width="3" stroke-linecap="round"/></g>
    <g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><ellipse cx="567" cy="442" rx="6" ry="7" fill="#fff"/></g></g><g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><circle cx="564" cy="443" r="3.5" fill="#2f6f68"/></g></g>
    <g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><ellipse cx="589" cy="442" rx="6" ry="7" fill="#fff"/></g></g><g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><circle cx="586" cy="443" r="3.5" fill="#2f6f68"/></g></g>
    <g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><path d="M558 432 L574 428 M582 428 L598 432" class="l"/></g></g>
    <g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><path d="M568 462 Q578 456 588 462" fill="none" stroke="#a8452f" stroke-width="3" stroke-linecap="round"/></g></g>
    <g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><g fill="#c9605a" opacity=".4"><ellipse cx="560" cy="454" rx="8" ry="5"/><ellipse cx="598" cy="454" rx="8" ry="5"/></g></g></g>
    <!-- brațul întins, cu o compresă -->
    <path d="M540 532 Q504 560 476 580" fill="none" stroke="#1b130d" stroke-width="20" stroke-linecap="round"/>
    <path d="M540 532 Q504 560 476 580" fill="none" stroke="#f2d2b6" stroke-width="14" stroke-linecap="round"/>
    <rect x="446" y="570" width="34" height="22" fill="#fff" class="o" transform="rotate(-20 463 581)"/>
    <g transform="rotate(-10 579 477)"><g transform="translate(-7 0)"><g class="blink" style="animation-delay:-3.1s"><ellipse cx="567" cy="442" rx="7.5" ry="8" fill="#f2d2b6"/><path d="M560 443 q7 4 14 0" class="l"/><ellipse cx="589" cy="442" rx="7.5" ry="8" fill="#f2d2b6"/><path d="M582 443 q7 4 14 0" class="l"/></g></g></g>
  </g>

  <!-- ===== geanta doctorului ===== -->
  <g class="vol">
    <ellipse cx="488" cy="794" rx="72" ry="9" fill="#000" opacity=".34"/>
    <path d="M430 738 Q430 716 452 716 L524 716 Q546 716 546 738 L552 792 L424 792 Z" fill="#3a2416" class="o"/>
    <path d="M462 716 Q488 688 514 716" class="l"/>
    <rect x="476" y="722" width="24" height="14" fill="#c9a24e" class="o"/>
    <path d="M436 752 H544" class="t"/>
  </g>

  <g class="vol"><rect x="712" y="448" width="13" height="202" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><rect x="867" y="448" width="13" height="202" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="718" cy="444" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="873" cy="444" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><path d="M718 466 Q796 434 873 466" fill="none" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/><path d="M718 466 Q796 434 873 466" fill="none" stroke="#4a2e19" stroke-width="6" stroke-linecap="round"/></g>
  <!-- ===== Aglae ===== -->
  <g class="vol breath" style="animation-delay:-1s">
    <path d="M726 482 Q790 450 854 482 L870 650 L710 650 Z" fill="#3b2a4a" class="o"/>
    <rect x="778" y="426" width="24" height="36" fill="#e8c3a0"/>
    <path d="M778 426 V462 M802 426 V462" class="l"/>
    <path d="M764 460 Q790 486 816 460 L810 448 L770 448 Z" fill="#efe8d6" class="o"/>
    <circle cx="790" cy="470" r="7" fill="#a8452f" class="o"/>
    <g fill="#c9a24e"><circle cx="790" cy="510" r="4"/><circle cx="790" cy="540" r="4"/><circle cx="790" cy="570" r="4"/></g>
    <circle cx="790" cy="344" r="21" fill="#6f6259" class="o"/>
    <ellipse cx="790" cy="396" rx="39" ry="43" fill="#e8c3a0" class="o"/>
    <path d="M752 388 Q754 350 790 350 Q826 350 828 388 Q810 364 790 366 Q770 364 752 388 Z" fill="#6f6259" class="o"/>
    <path d="M766 366 q24 -12 48 0" fill="none" stroke="#9a8f86" stroke-width="3" stroke-linecap="round"/>
    <g transform="translate(8 0)"><path d="M766 388 L782 396 M814 388 L798 396" class="l"/></g>
    <g transform="translate(8 0)"><ellipse cx="776" cy="402" rx="6" ry="5" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="779" cy="402" r="3.2" fill="#1b130d"/></g><g transform="translate(8 0)"><ellipse cx="804" cy="402" rx="6" ry="5" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="807" cy="402" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(8 0)"><path d="M790 406 q-6 12 2 14" class="l"/></g>
    <g transform="translate(8 0)"><path d="M774 428 Q790 418 806 428" class="l"/></g>
    <g transform="translate(8 0)"><path d="M770 424 q-4 8 0 14 M810 424 q4 8 0 14" class="t"/></g>
    <circle cx="754" cy="414" r="4" fill="#e8c14e" class="o"/><circle cx="826" cy="414" r="4" fill="#e8c14e" class="o"/>
    <g transform="translate(8 0)"><g fill="#c9605a" opacity=".28"><ellipse cx="768" cy="416" rx="8" ry="5"/><ellipse cx="812" cy="416" rx="8" ry="5"/></g></g>
    <g transform="translate(8 0)"><g class="blink" style="animation-delay:-4.2s"><ellipse cx="776" cy="402" rx="6" ry="5.5" fill="#e8c3a0"/><path d="M770 403 q6 4 12 0" class="l"/><ellipse cx="804" cy="402" rx="6" ry="5.5" fill="#e8c3a0"/><path d="M798 403 q6 4 12 0" class="l"/></g></g>
  </g>

  <g class="vol"><rect x="876" y="460" width="13" height="190" fill="#5a3a20" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><rect x="991" y="460" width="13" height="190" fill="#5a3a20" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="882" cy="456" r="9" fill="#5a3a20" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="997" cy="456" r="9" fill="#5a3a20" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><path d="M882 478 Q940 446 997 478" fill="none" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/><path d="M882 478 Q940 446 997 478" fill="none" stroke="#5a3a20" stroke-width="6" stroke-linecap="round"/></g>
  <!-- ===== Aurica ===== -->
  <g class="vol breath" style="animation-delay:-6s">
    <path d="M896 492 Q940 466 984 492 L998 650 L882 650 Z" fill="#c58a96" class="o"/>
    <path d="M912 486 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0" fill="none" stroke="#f4e6ea" stroke-width="2.5"/>
    <rect x="931" y="436" width="18" height="52" fill="#efd0b4"/>
    <path d="M931 436 V488 M949 436 V488" class="l"/>
    <ellipse cx="940" cy="404" rx="29" ry="43" fill="#efd0b4" class="o"/>
    <path d="M911 400 Q910 358 940 358 Q970 358 969 400 Q958 374 940 380 Q922 374 911 400 Z" fill="#8a6a44" class="o"/>
    <path d="M926 354 L940 362 L954 354 L950 370 L930 370 Z" fill="#a8452f" class="o"/>
    <g transform="translate(-6 0)"><ellipse cx="929" cy="404" rx="6" ry="6" fill="#fff"/></g><g transform="translate(-6 0)"><circle cx="926" cy="404" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(-6 0)"><ellipse cx="951" cy="404" rx="6" ry="6" fill="#fff"/></g><g transform="translate(-6 0)"><circle cx="948" cy="404" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(-6 0)"><path d="M938 410 q-4 12 3 14" class="l"/></g>
    <g transform="translate(-6 0)"><path d="M930 432 Q940 438 950 432" class="l"/></g>
    <circle cx="910" cy="414" r="3.5" fill="#f4f1ea" class="o"/><circle cx="970" cy="414" r="3.5" fill="#f4f1ea" class="o"/>
    <g transform="translate(-6 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="922" cy="418" rx="8" ry="5"/><ellipse cx="958" cy="418" rx="8" ry="5"/></g></g>
    <g transform="translate(-6 0)"><g class="blink" style="animation-delay:-1.9s"><ellipse cx="929" cy="404" rx="7.5" ry="7" fill="#efd0b4"/><path d="M922 405 q7 4 14 0" class="l"/><ellipse cx="951" cy="404" rx="7.5" ry="7" fill="#efd0b4"/><path d="M944 405 q7 4 14 0" class="l"/></g></g>
  </g>

  <g class="vol"><rect x="1006" y="452" width="13" height="198" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><rect x="1159" y="452" width="13" height="198" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="1012" cy="448" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="1165" cy="448" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><path d="M1012 470 Q1089 438 1165 470" fill="none" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/><path d="M1012 470 Q1089 438 1165 470" fill="none" stroke="#4a2e19" stroke-width="6" stroke-linecap="round"/></g>
  <!-- ===== Olimpia ===== -->
  <g class="vol breath" style="animation-delay:-7.5s">
    <path d="M1028 488 Q1090 452 1152 488 L1170 650 L1010 650 Z" fill="#7d8f62" class="o"/>
    <path d="M1056 486 Q1090 510 1124 486" class="l"/>
    <g transform="rotate(7 1090 440)"><rect x="1078" y="430" width="24" height="42" fill="#efcdb0"/></g>
    <g transform="rotate(7 1090 440)"><path d="M1078 430 V472 M1102 430 V472" class="l"/></g>
    <g fill="#e8c14e"><circle cx="1066" cy="478" r="3.5"/><circle cx="1078" cy="486" r="3.5"/><circle cx="1090" cy="489" r="3.5"/><circle cx="1102" cy="486" r="3.5"/><circle cx="1114" cy="478" r="3.5"/></g>
    <g transform="rotate(7 1090 440)"><ellipse cx="1090" cy="398" rx="43" ry="42" fill="#efcdb0" class="o"/></g>
    <g transform="rotate(7 1090 440)"><path d="M1048 390 Q1048 350 1090 350 Q1132 350 1132 390 Q1112 368 1090 370 Q1068 368 1048 390 Z" fill="#3a2a22" class="o"/></g>
    <g transform="rotate(7 1090 440)"><circle cx="1134" cy="402" r="16" fill="#3a2a22" class="o"/></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><path d="M1066 396 q10 -6 20 0 M1096 396 q10 -6 20 0" class="l"/></g></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><ellipse cx="1076" cy="404" rx="6" ry="4" fill="#fff"/></g></g><g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><circle cx="1073" cy="406" r="3" fill="#1b130d"/></g></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><ellipse cx="1106" cy="404" rx="6" ry="4" fill="#fff"/></g></g><g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><circle cx="1103" cy="406" r="3" fill="#1b130d"/></g></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><path d="M1090 408 q-5 10 2 12" class="l"/></g></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><ellipse cx="1092" cy="428" rx="8" ry="5" fill="#b5625a" class="o"/></g></g>
    <g transform="rotate(7 1090 440)"><path d="M1066 436 q24 14 50 0" class="t"/></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="1064" cy="418" rx="9" ry="6"/><ellipse cx="1118" cy="418" rx="9" ry="6"/></g></g></g>
    <g transform="rotate(7 1090 440)"><g transform="translate(-5 0)"><g class="blink" style="animation-delay:-2.7s"><ellipse cx="1076" cy="404" rx="7.5" ry="6" fill="#efcdb0"/><path d="M1069 405 q7 4 14 0" class="l"/><ellipse cx="1106" cy="404" rx="7.5" ry="6" fill="#efcdb0"/><path d="M1099 405 q7 4 14 0" class="l"/></g></g></g>
  </g>

  <!-- ===== Stănică, în picioare, cu paharul ridicat ===== -->
  <g class="vol fidget" style="animation-delay:-6s">
    <path d="M1188 402 Q1255 364 1322 402 L1342 650 L1170 650 Z" fill="#2c2622" class="o"/>
    <path d="M1232 384 L1255 418 L1278 384 Z" fill="#efe8d6" class="o"/>
    <path d="M1248 398 L1262 398 L1258 440 L1252 440 Z" fill="#8f2c2c" class="o"/>
    <path d="M1232 386 L1216 460 M1278 386 L1294 456 M1255 440 V650" class="t"/>
    <circle cx="1262" cy="480" r="4" fill="#c99a4a"/><circle cx="1262" cy="520" r="4" fill="#c99a4a"/>
    <path d="M1296 500 l14 -10 l8 12 Z" fill="#efe8d6" class="o"/>
    <rect x="1240" y="340" width="30" height="34" fill="#e3ad85"/>
    <path d="M1240 340 V374 M1270 340 V374" class="l"/>
    <ellipse cx="1300" cy="306" rx="8" ry="12" fill="#d59c75" class="o"/>
    <path d="M1210 296 Q1208 254 1255 254 Q1302 254 1300 300 Q1302 350 1256 356 Q1212 352 1210 296 Z" fill="#e3ad85" class="o"/>
    <path d="M1212 290 Q1214 246 1256 246 Q1300 248 1302 292 Q1280 262 1250 268 Q1226 268 1212 290 Z" fill="#1b130d" class="o"/>
    <path d="M1226 262 q16 -10 34 -8" fill="none" stroke="#5a5048" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(-9 0)"><ellipse cx="1238" cy="300" rx="9" ry="7" fill="#fff"/></g><g transform="translate(-9 0)"><circle class="glance" cx="1234" cy="301" r="4" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><ellipse cx="1268" cy="300" rx="8" ry="7" fill="#fff"/></g><g transform="translate(-9 0)"><circle class="glance" cx="1264" cy="301" r="4" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><path d="M1226 286 L1246 282 M1260 282 L1280 288" class="l"/></g>
    <g transform="translate(-9 0)"><path d="M1250 302 Q1240 316 1250 320" class="l"/></g>
    <g transform="translate(-9 0)"><path d="M1222 328 Q1236 318 1252 326 Q1268 318 1284 328 Q1268 338 1252 332 Q1236 338 1222 328 Z" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><path d="M1238 342 Q1252 350 1266 340" class="l"/></g>
    <path d="M1228 350 q26 12 52 0" class="t"/>
    <g transform="translate(-9 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="1224" cy="318" rx="9" ry="6"/><ellipse cx="1284" cy="318" rx="8" ry="5"/></g></g>
    <g transform="translate(-9 0)"><g class="blink" style="animation-delay:-1.2s"><ellipse cx="1238" cy="300" rx="10" ry="8" fill="#e3ad85"/><path d="M1228 301 q10 4 20 0" class="l"/><ellipse cx="1268" cy="300" rx="9" ry="8" fill="#e3ad85"/><path d="M1259 301 q9 4 18 0" class="l"/></g></g>
    <!-- brațul cu paharul -->
    <g class="toast">
      <path d="M1204 412 Q1164 372 1170 322" fill="none" stroke="#1b130d" stroke-width="38" stroke-linecap="round"/>
      <path d="M1204 412 Q1164 372 1170 322" fill="none" stroke="#2c2622" stroke-width="31" stroke-linecap="round"/>
      <ellipse cx="1170" cy="318" rx="15" ry="6" fill="#efe8d6" class="o"/>
      <circle cx="1170" cy="304" r="14" fill="#e3ad85" class="o"/>
      <path d="M1150 250 L1190 250 L1184 284 Q1170 296 1156 284 Z" fill="#dfeaec" fill-opacity=".5" class="o"/>
      <path d="M1154 268 L1186 268 L1184 284 Q1170 296 1156 284 Z" fill="#8f2c2c"/>
      <path d="M1170 292 V306" class="l"/>
    </g>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><rect x="1286" y="468" width="20" height="14" fill="#efe4c4" stroke="#1b130d" stroke-width="1" transform="rotate(8 1296 475)"/><path d="M1290 474 h12" stroke="#1b130d" stroke-width=".8"/></g>
  </g>

  <!-- ===== masa întinsă ===== -->
  <g class="vol">
    <ellipse cx="1010" cy="806" rx="372" ry="16" fill="#000" opacity=".35"/>
    <rect x="704" y="700" width="22" height="104" fill="#3a2416" class="o"/><rect x="1296" y="700" width="22" height="104" fill="#3a2416" class="o"/>
    <path d="M664 664 H1356 V718 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-22 16 -44 0 q-16 12 -32 2 Z" fill="#e4dcc6" class="o"/>
    <path d="M704 606 L1316 606 L1360 666 L660 666 Z" fill="#efe8d6" class="o"/>
    <path d="M760 670 v40 M1010 670 v44 M1260 670 v40" class="t"/>
    <!-- friptura -->
    <ellipse cx="1010" cy="630" rx="88" ry="20" fill="#c9c0a8" class="o"/>
    <path d="M948 624 Q1010 580 1072 624 Q1010 644 948 624 Z" fill="#8a4a2a" class="o"/>
    <path d="M972 612 q14 -12 30 -10 M1016 600 q16 0 28 12" fill="none" stroke="#c98a5a" stroke-width="4" stroke-linecap="round"/>
    <path d="M1084 606 l40 -22" class="l"/>
    <!-- farfurii, pâine, sticlă -->
    <g fill="#fff" class="o"><ellipse cx="790" cy="644" rx="46" ry="12"/><ellipse cx="940" cy="650" rx="46" ry="12"/><ellipse cx="1090" cy="650" rx="46" ry="12"/></g>
    <g fill="#8a4a2a"><ellipse cx="940" cy="648" rx="20" ry="6"/><ellipse cx="1090" cy="648" rx="24" ry="7"/></g>
    <ellipse cx="872" cy="624" rx="36" ry="14" fill="#c99a4a" class="o"/>
    <path d="M852 620 l10 8 M868 616 l10 10 M884 618 l8 8" class="t"/>
    <rect x="1216" y="566" width="24" height="70" fill="#2f5d4f" class="o"/><rect x="1222" y="544" width="12" height="24" fill="#2f5d4f" class="o"/>
    <rect x="1219" y="590" width="18" height="22" fill="#efe4c4"/>
    <path d="M1268 618 L1296 618 L1292 642 L1272 642 Z" fill="#dfeaec" fill-opacity=".6" class="o"/>
    <!-- lista Aglaei și cărțile de joc -->
    <path d="M750 614 L838 610 L844 654 L756 658 Z" fill="#efe4c4" class="o"/>
    <path d="M764 624 L826 622 M766 634 L828 632 M768 644 L812 643" class="t"/>
    <text x="796" y="620" font-size="6" font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle" transform="rotate(-3 796 620)">INVENTAR</text>
    <g class="o"><rect x="1140" y="620" width="30" height="42" rx="3" fill="#efe4c4" transform="rotate(-16 1155 641)"/><rect x="1156" y="618" width="30" height="42" rx="3" fill="#efe4c4" transform="rotate(2 1171 639)"/><rect x="1172" y="620" width="30" height="42" rx="3" fill="#efe4c4" transform="rotate(18 1187 641)"/></g>
    <g fill="#a8452f"><circle cx="1150" cy="636" r="4"/><circle cx="1190" cy="638" r="4"/></g><circle cx="1171" cy="636" r="4" fill="#1b130d"/>
  </g>
  <g fill="none" stroke="#f4f1ea" stroke-width="4" stroke-linecap="round">
    <path class="steam" d="M980 588 q-8 -12 0 -22 q8 -10 0 -20"/>
    <path class="steam" style="animation-delay:-1.4s" d="M1010 580 q-8 -12 0 -22 q8 -10 0 -20"/>
    <path class="steam" style="animation-delay:-2.7s" d="M1040 588 q-8 -12 0 -22 q8 -10 0 -20"/>
  </g>
  <!-- brațul Aglaei, cu creionul pe listă -->
  <path d="M838 504 Q856 560 826 616" fill="none" stroke="#1b130d" stroke-width="34" stroke-linecap="round"/>
  <path d="M838 504 Q856 560 826 616" fill="none" stroke="#3b2a4a" stroke-width="27" stroke-linecap="round"/>
  <circle cx="820" cy="624" r="13" fill="#e8c3a0" class="o"/>
  <path class="stitch l" style="transform-origin: 100% 100%" d="M812 630 L790 604" stroke-width="5"/>
  <!-- mâna lui Stănică pe masă -->
  <path d="M1310 500 Q1330 560 1316 612" fill="none" stroke="#1b130d" stroke-width="36" stroke-linecap="round"/>
  <path d="M1310 500 Q1330 560 1316 612" fill="none" stroke="#2c2622" stroke-width="29" stroke-linecap="round"/>
  <circle cx="1314" cy="622" r="14" fill="#e3ad85" class="o"/>
  <path d="M1305 628 Q1314 636 1323 628" fill="none" stroke="#e8c14e" stroke-width="5" stroke-linecap="round"/>

</g>

<!-- ===== detalii mărunte, vizibile doar de aproape ===== -->
<g id="details" font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
  <text x="1434" y="230" font-size="5.5" transform="rotate(3 1434 230)">TELEGRAMĂ</text>
  <text x="488" y="772" font-size="8" fill="#c9a24e">Dr. V.</text>
</g>

<!-- ===== lumini ===== -->
<rect x="0" y="0" width="1600" height="900" fill="#2a1430" opacity="0.24"/>
<path d="M624 436 L826 436 L1000 900 L500 900 Z" fill="#ffb878" opacity="0.07"/>
<circle class="glow" cx="1010" cy="210" r="540" fill="url(#gCandle)"/>
<circle cx="1540" cy="196" r="150" fill="url(#gCandle)" opacity="0.7"/>
<rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
<rect x="0" y="0" width="1600" height="900" filter="url(#fGrain)" opacity="0.5"/>

<!-- ===== interioare: se văd doar când sunt deschise ===== -->
<g class="interior" id="in-geanta">
  <rect x="0" y="0" width="1600" height="900" fill="#150d08"/>
  <g filter="url(#fInk)">
    <path d="M160 130 Q160 64 240 64 L1360 64 Q1440 64 1440 130 L1484 826 L116 826 Z" fill="#3a2416" class="o"/>
    <path d="M232 150 L1368 150 L1400 766 L200 766 Z" fill="#5a3a26" class="o"/>
    <rect x="740" y="40" width="120" height="56" fill="#c9a24e" class="o"/>
    <!-- cutia cu seringă -->
    <rect x="290" y="200" width="320" height="96" rx="14" fill="#24364a" class="o"/>
    <path d="M320 248 H560 M560 236 V260 M320 240 V256" stroke="#9aa3a0" stroke-width="7" stroke-linecap="round"/>
    <!-- stetoscop -->
    <path d="M300 640 Q400 420 540 540 Q650 630 600 400" fill="none" stroke="#1b130d" stroke-width="24" stroke-linecap="round"/>
    <path d="M300 640 Q400 420 540 540 Q650 630 600 400" fill="none" stroke="#2c2622" stroke-width="14" stroke-linecap="round"/>
    <circle cx="600" cy="380" r="46" fill="#9aa3a0" class="o"/>
    <circle cx="600" cy="380" r="26" fill="#dfe6e4" class="o"/>
    <path d="M286 660 l-26 30 M314 664 l10 36" stroke="#1b130d" stroke-width="14" stroke-linecap="round"/>
    <!-- sticluțe -->
    <g class="o">
      <path d="M760 430 V250 Q760 232 774 228 V200 H806 V228 Q820 232 820 250 V430 Z" fill="#5f8672"/>
      <path d="M850 430 V270 Q850 252 864 248 V220 H896 V248 Q910 252 910 270 V430 Z" fill="#a8452f"/>
      <path d="M940 430 V290 Q940 272 954 268 V240 H986 V268 Q1000 272 1000 290 V430 Z" fill="#6f8fb0"/>
    </g>
    <rect x="768" y="300" width="44" height="60" fill="#efe4c4"/><rect x="858" y="310" width="44" height="60" fill="#efe4c4"/><rect x="948" y="320" width="44" height="60" fill="#efe4c4"/>
    <!-- rețeta -->
    <path d="M1050 190 L1330 172 L1348 410 L1068 428 Z" fill="#efe4c4" class="o"/>
    <path d="M1090 280 L1300 266 M1092 310 L1302 296 M1094 340 L1240 330" class="t"/>
    <path d="M1200 380 q20 -24 40 0 q20 24 44 -6" fill="none" stroke="#24364a" stroke-width="5" stroke-linecap="round"/>
    <!-- bilețel -->
    <g transform="rotate(-6 870 570)">
      <rect x="760" y="500" width="230" height="140" fill="#f3ecd6" class="o"/>
      <path d="M784 536 H964 M784 566 H964 M784 596 H900" class="t"/>
    </g>
    <!-- chitanța de onorariu -->
    <path d="M1056 484 L1336 472 L1346 668 L1066 680 Z" fill="#e4dcc6" class="o"/>
    <path d="M1090 560 L1300 552 M1092 590 L1302 582 M1094 620 L1220 616" class="t"/>
    <circle cx="1280" cy="630" r="26" fill="none" stroke="#a8452f" stroke-width="6"/>
    <!-- vată -->
    <ellipse cx="420" cy="716" rx="70" ry="30" fill="#f4f1ea" class="o"/>
    <path d="M370 712 q50 -18 100 0" class="t"/>
    <path d="M776 250 v150 M866 270 v130 M956 290 v110" stroke="#fff" stroke-width="5" opacity=".5" fill="none" stroke-linecap="round" class="hi"/>
  </g>
  <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
    <text x="1192" y="238" font-size="32" transform="rotate(-4 1192 238)">REȚETĂ</text>
    <text x="1196" y="530" font-size="26" transform="rotate(-2 1196 530)">ONORARIU</text>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<g class="interior" id="in-bufet">
  <rect x="0" y="0" width="1600" height="900" fill="#120b07"/>
  <g filter="url(#fInk)">
    <rect x="200" y="40" width="1200" height="820" fill="#5a3a20" class="o"/>
    <rect x="250" y="90" width="1100" height="720" fill="#2a1a10" class="o"/>
    <rect x="250" y="330" width="1100" height="18" fill="#6b4424" class="o"/>
    <rect x="250" y="574" width="1100" height="18" fill="#6b4424" class="o"/>
    <!-- cutia de argintărie, goală -->
    <rect x="320" y="118" width="430" height="78" fill="#4a2e19" class="o"/>
    <rect x="320" y="192" width="430" height="138" fill="#3a2416" class="o"/>
    <rect x="340" y="208" width="390" height="106" fill="#6d2b2b" class="o"/>
    <g fill="none" stroke="#8f4a44" stroke-width="5"><ellipse cx="386" cy="262" rx="14" ry="40"/><ellipse cx="436" cy="262" rx="14" ry="40"/><ellipse cx="486" cy="262" rx="14" ry="40"/><ellipse cx="584" cy="262" rx="10" ry="40"/><ellipse cx="634" cy="262" rx="10" ry="40"/><ellipse cx="684" cy="262" rx="10" ry="40"/></g>
    <!-- farfurii -->
    <g fill="#efe8d6" class="o"><ellipse cx="990" cy="312" rx="120" ry="18"/><ellipse cx="990" cy="298" rx="120" ry="18"/><ellipse cx="990" cy="284" rx="120" ry="18"/></g>
    <path d="M1160 330 Q1150 250 1210 240 Q1270 250 1260 330 Z" fill="#dfe8ee" class="o"/>
    <!-- provizii aproape terminate -->
    <path d="M330 574 V450 Q330 436 344 436 H416 Q430 436 430 450 V574 Z" fill="#a8452f" fill-opacity=".85" class="o"/>
    <path d="M322 440 Q380 420 438 440" fill="#efe4c4" class="o"/>
    <path d="M470 574 V450 Q470 436 484 436 H556 Q570 436 570 450 V574 Z" fill="#dfeaec" fill-opacity=".15" class="o"/>
    <path d="M610 574 V470 Q610 456 624 456 H686 Q700 456 700 470 V574 Z" fill="#dfeaec" fill-opacity=".15" class="o"/>
    <path d="M760 574 Q770 500 830 500 Q900 500 910 574 Z" fill="none" class="o"/>
    <path d="M770 540 H900 M790 516 V574 M830 502 V574 M870 516 V574" class="t"/>
    <ellipse cx="640" cy="562" rx="26" ry="10" fill="#c99a4a" class="o"/>
    <!-- sticle -->
    <g class="o">
      <path d="M330 810 V690 Q330 672 344 668 V630 H372 V668 Q386 672 386 690 V810 Z" fill="#2f5d4f"/>
      <rect x="420" y="760" width="190" height="46" rx="20" fill="#2f5d4f"/><rect x="606" y="772" width="50" height="22" fill="#2f5d4f"/>
      <rect x="450" y="700" width="190" height="46" rx="20" fill="#3a2a22"/><rect x="636" y="712" width="50" height="22" fill="#3a2a22"/>
    </g>
    <path d="M330 750 H386" stroke="#8f2c2c" stroke-width="56" opacity=".55"/>
    <!-- fețe de masă, cu ceva ascuns între ele -->
    <rect x="900" y="640" width="370" height="54" fill="#efe8d6" class="o"/>
    <rect x="900" y="694" width="370" height="54" fill="#e4dcc6" class="o"/>
    <rect x="900" y="748" width="370" height="60" fill="#efe8d6" class="o"/>
    <path d="M1180 690 Q1230 660 1280 696 Q1250 730 1190 716 Z" fill="#8a6a4a" class="o"/>
    <path d="M1196 700 q30 -14 60 0" stroke="#dccb9e" stroke-width="4" fill="none"/>
    <path d="M1262 690 l26 -14 M1266 700 l28 -6" stroke="#dfe6e4" stroke-width="7" stroke-linecap="round" class="hi"/>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<!-- ===== zone active ===== -->
<g id="hotspots">
  <rect class="hs" data-id="felix" x="254" y="252" width="130" height="210" rx="16"/>
  <rect class="hs" data-id="costache" x="56" y="490" width="300" height="130" rx="18"/>
  <rect class="hs" data-id="z_gheata" data-parent="costache" x="84" y="490" width="96" height="58" rx="12"/>
  <rect class="hs" data-id="z_perna" data-parent="costache" x="56" y="590" width="60" height="36" rx="8"/>
  <rect class="hs" data-id="z_chei" data-parent="costache" x="316" y="682" width="60" height="94" rx="12"/>
  <rect class="hs" data-id="otilia" x="512" y="394" width="140" height="300" rx="18"/>
  <rect class="hs" data-id="geanta" x="420" y="688" width="136" height="108" rx="14"/>
  <rect class="hs" data-id="z_g_stetoscop" data-parent="geanta" x="260" y="330" width="410" height="390" rx="16"/>
  <rect class="hs" data-id="z_g_sticlute" data-parent="geanta" x="744" y="196" width="272" height="240" rx="14"/>
  <rect class="hs" data-id="z_g_reteta" data-parent="geanta" x="1040" y="166" width="320" height="270" rx="14"/>
  <rect class="hs" data-id="z_g_bilet" data-parent="geanta" x="744" y="486" width="262" height="170" rx="14"/>
  <rect class="hs" data-id="z_g_chitanta" data-parent="geanta" x="1046" y="464" width="310" height="224" rx="14"/>
  <rect class="hs" data-id="ceas" x="900" y="156" width="80" height="176" rx="10"/>
  <rect class="hs" data-id="aglae" x="722" y="330" width="136" height="270" rx="16"/>
  <rect class="hs" data-id="aurica" x="884" y="350" width="112" height="250" rx="16"/>
  <rect class="hs" data-id="olimpia" x="1026" y="344" width="132" height="256" rx="16"/>
  <rect class="hs" data-id="stanica" x="1140" y="236" width="200" height="350" rx="18"/>
  <rect class="hs" data-id="z_pahar" data-parent="stanica" x="1140" y="240" width="62" height="80" rx="12"/>
  <rect class="hs" data-id="z_carnet" data-parent="stanica" x="1278" y="458" width="38" height="34" rx="8"/>
  <circle class="hs" data-id="z_verigheta" data-parent="stanica" cx="1314" cy="624" r="20"/>
  <rect class="hs" data-id="masa" x="690" y="600" width="640" height="74" rx="18"/>
  <rect class="hs" data-id="z_inventar" data-parent="masa" x="744" y="604" width="106" height="60" rx="10"/>
  <rect class="hs" data-id="z_friptura" data-parent="masa" x="924" y="578" width="174" height="76" rx="12"/>
  <rect class="hs" data-id="z_carti" data-parent="masa" x="1132" y="612" width="80" height="56" rx="10"/>
  <rect class="hs" data-id="z_sticla" data-parent="masa" x="1206" y="540" width="46" height="100" rx="10"/>
  <rect class="hs" data-id="bufet" x="1328" y="280" width="254" height="340" rx="14"/>
  <rect class="hs" data-id="telegrama" x="1388" y="206" width="90" height="62" rx="10"/>
  <rect class="hs" data-id="z_b_cutie" data-parent="bufet" x="310" y="108" width="450" height="226" rx="14"/>
  <rect class="hs" data-id="z_b_farfurii" data-parent="bufet" x="860" y="230" width="420" height="104" rx="14"/>
  <rect class="hs" data-id="z_b_provizii" data-parent="bufet" x="314" y="420" width="610" height="158" rx="14"/>
  <rect class="hs" data-id="z_b_vin" data-parent="bufet" x="314" y="620" width="390" height="194" rx="14"/>
  <rect class="hs" data-id="z_b_fete" data-parent="bufet" x="890" y="630" width="420" height="184" rx="14"/>
</g>
</svg>`,

  // n = nume, o = obiecte, f = fapte
  words: {
    costache:     { text: 'Costache',     cat: 'n' },
    giurgiuveanu: { text: 'Giurgiuveanu', cat: 'n' },
    otilia:       { text: 'Otilia',       cat: 'n' },
    marculescu:   { text: 'Mărculescu',   cat: 'n' },
    felix:        { text: 'Felix',        cat: 'n' },
    sima:         { text: 'Sima',         cat: 'n' },
    aglae:        { text: 'Aglae',        cat: 'n' },
    tulea:        { text: 'Tulea',        cat: 'n' },
    stanica:      { text: 'Stănică',      cat: 'n' },
    ratiu:        { text: 'Rațiu',        cat: 'n' },
    olimpia:      { text: 'Olimpia',      cat: 'n' },
    aurica:       { text: 'Aurica',       cat: 'n' },
    vasiliad:     { text: 'Vasiliad',     cat: 'n' },
    pascalopol:   { text: 'Pascalopol',   cat: 'n' },
    atac:         { text: 'atac',         cat: 'o' },
    cheile:       { text: 'cheile',       cat: 'o' },
    argintaria:   { text: 'argintăria',   cat: 'o' },
    banii:        { text: 'banii',        cat: 'o' },
    testament:    { text: 'testament',    cat: 'o' },
    ocupat:       { text: 'ocupat',       cat: 'f' }
  },

  people: [
    { id: 'bolnav',  crop: '62 494 136 136',   first: 'costache', last: 'giurgiuveanu' },
    { id: 'fata',    crop: '510 374 138 138',  first: 'otilia',   last: 'marculescu' },
    { id: 'student', crop: '230 232 140 140',  first: 'felix',    last: 'sima' },
    { id: 'coc',     crop: '718 322 144 144',  first: 'aglae',    last: 'tulea' },
    { id: 'funda',   crop: '874 336 132 132',  first: 'aurica',   last: 'tulea' },
    { id: 'plina',   crop: '1018 328 146 146', first: 'olimpia',  last: 'ratiu' },
    { id: 'pahar',   crop: '1180 226 150 150', first: 'stanica',  last: 'ratiu' }
  ],

  items: {
    chei: {
      kind: 'tag',
      title: 'Legătura de chei',
      text: 'Bătrânul nu vorbește și abia respiră, dar pumnul nu i se descleștează: ține strâns {cheile|cheile} de la toate ușile și dulapurile din casă.',
      icon: '<circle cx="24" cy="22" r="12" stroke-width="5" stroke="#c9a24e"/><circle cx="24" cy="22" r="12"/><path d="M30 32 L50 54 L44 58 M38 42 l6 -4" stroke-width="5"/>'
    },
    reteta: {
      kind: 'letter',
      title: 'Rețeta',
      text: '«Bolnav: dl. {costache|Costache} {giurgiuveanu|Giurgiuveanu}. Un {atac|atac} ușor; liniște deplină, gheață la cap, nicio supărare. Dr. {vasiliad|Vasiliad}.»',
      icon: '<rect x="14" y="8" width="36" height="48" fill="#efe4c4"/><path d="M20 18h24M20 26h24M20 34h16"/><path d="M26 46 q6 -8 12 0" stroke="#24364a"/>'
    },
    bilet: {
      kind: 'tag',
      title: 'Bilețelul doctorului',
      text: '«Domnișoarei {marculescu|Mărculescu}: comprese reci din oră în oră. Dumneata ești singura din casă care îl îngrijește.»',
      icon: '<rect x="10" y="18" width="44" height="30" fill="#f3ecd6"/><path d="M18 28h28M18 36h20"/>'
    },
    onorariu: {
      kind: 'letter',
      title: 'Chitanța de onorariu',
      text: '«Primit onorariul pentru vizită de la dl. avocat {ratiu|Rațiu}, care m-a chemat la căpătâiul bolnavului.» Doctorul e prietenul lui și a venit la chemarea lui.',
      icon: '<rect x="12" y="10" width="40" height="44" fill="#e4dcc6"/><path d="M18 22h28M18 30h28M18 38h14"/><circle cx="42" cy="44" r="6" stroke="#a8452f"/>'
    },
    inventar: {
      kind: 'letter',
      title: 'Lista de pe masă',
      text: '«Inventar, făcut de Aglae {tulea|Tulea}: covoare, pianul, tablourile. {argintaria|Argintăria}, 12 linguri și 12 furculițe: luate la mine, la păstrare.»',
      icon: '<rect x="14" y="8" width="36" height="48" fill="#efe4c4"/><path d="M20 18h24M20 26h24M20 34h24M20 42h16"/>'
    },
    carnet: {
      kind: 'tag',
      title: 'Carnețelul din buzunar',
      text: 'Cu creion chimic, apăsat: «De aflat: a făcut {testament|testament}? Unde ține {banii|banii}? De stat aproape de bătrân.»',
      icon: '<rect x="14" y="8" width="36" height="48" fill="#efe4c4"/><path d="M22 8v48M28 20h16M28 30h16M28 40h10"/>'
    },
    telegrama: {
      kind: 'letter',
      title: 'Telegrama',
      text: '«Aflat de boală. Sosesc mâine cu un medic din oraș. {pascalopol|Pascalopol}.» Cineva a lăsat-o pe bufet fără să-i spună bolnavului.',
      icon: '<rect x="8" y="16" width="48" height="32" fill="#efe4c4"/><path d="M14 26h36M14 34h36M14 42h20"/>'
    }
  },

  clues: {
    costache: {
      title: 'Bolnavul de pe canapea',
      zoom: { cx: 230, cy: 678, w: 688 },
      text: 'Un bătrân chel zace cu o pungă de gheață pe cap. Abia respiră, cu ochii închiși. Totuși, o mână i-a rămas încleștată.'
    },
    z_gheata: {
      title: 'Punga de gheață',
      text: 'Gheața e proaspătă: cineva o schimbă din oră în oră. Nu e nimeni dintre cei de la masă.'
    },
    z_perna: {
      title: 'Colțul pernei',
      text: 'Pe fața de pernă, cusută cu albastru, o monogramă: «C. G.»'
    },
    z_chei: {
      title: 'Mâna încleștată',
      text: 'Brațul îi atârnă pe lângă canapea, dar degetele strâng ceva de metal.',
      items: ['chei']
    },
    otilia: {
      title: 'Fata de lângă canapea',
      text: 'O fată cu bucle ține o compresă rece. Bătrânul șoptește: «O-{otilia|Otilia}… fe-fetița mea.» Ea se întoarce spre tânărul din spate: «{felix|Felix}, mai adu gheață, te rog.»'
    },
    felix: {
      title: 'Tânărul din spatele canapelei',
      text: 'Un student palid, care nu-și ia ochii de la bolnav. Sub braț ține un tratat de medicină, semnat pe cotor: «{sima|Sima}».'
    },
    geanta: {
      title: 'Geanta doctorului',
      inside: true,
      sound: 'case',
      text: 'O geantă de piele, uitată deschisă lângă canapea. Doctorul a plecat la masă.'
    },
    z_g_stetoscop: {
      title: 'Stetoscopul',
      text: 'Încă e cald. Doctorul l-a ascultat pe bolnav doar câteva clipe.'
    },
    z_g_sticlute: {
      title: 'Sticluțele',
      text: 'Trei doctorii, toate pline. Bolnavului nu i s-a dat nimic din ele.'
    },
    z_g_reteta: {
      title: 'O foaie scrisă citeț',
      text: 'O foaie cu antet, împăturită în două.',
      items: ['reteta']
    },
    z_g_bilet: {
      title: 'Un bilețel',
      text: 'Un bilet scris în grabă, pus deasupra doctoriilor.',
      items: ['bilet']
    },
    z_g_chitanta: {
      title: 'O chitanță ștampilată',
      text: 'O hârtie cu ștampilă roșie, pe fundul genții.',
      items: ['onorariu']
    },
    ceas: {
      sound: 'bell',
      title: 'Ceasul de perete',
      text: 'Bate ora șapte. De trei zile, masa din sufragerie nu se mai strânge.'
    },
    aglae: {
      title: 'Femeia cu coc',
      text: 'Stă în capul mesei, ca la ea acasă, cu un creion în mână. «{stanica|Stănică}, mai taie din friptură», poruncește bărbatului cu paharul. Apoi, fără să se uite la bolnav: «Trebuie să știm și noi unde ține {banii|banii}.»'
    },
    aurica: {
      title: 'Fata cu fundă',
      text: 'Nu mănâncă: se uită numai după student. Femeia cu coc o ceartă: «{aurica|Aurica}, fata mamei, stai dreaptă!»'
    },
    olimpia: {
      title: 'Femeia cea plină',
      text: 'Mestecă încet, cu ochii pe jumătate închiși, și nu spune nimic. Poartă aceeași verighetă ca bărbatul cu paharul.'
    },
    stanica: {
      title: 'Bărbatul cu paharul',
      zoom: { cx: 1240, cy: 492, w: 930 },
      text: 'Un bărbat gras, cu mustață, ține un toast cu ochii la canapea. «{olimpia|Olimpia}, nevastă, mai toarnă-mi!», spune peste umăr.'
    },
    z_pahar: {
      title: 'Paharul ridicat',
      text: '«Să ne trăiești, soacră {aglae|Aglae}! Și să dea Dumnezeu sănătate bolnavului», adaugă el, mai încet.'
    },
    z_carnet: {
      title: 'Buzunarul de la piept',
      text: 'Din buzunar se ițește colțul unui carnețel.',
      items: ['carnet']
    },
    z_verigheta: {
      title: 'Mâna de pe masă',
      text: 'O verighetă lată. Bate darabana cu degetele: așteaptă ceva și nu are răbdare.'
    },
    masa: {
      title: 'Masa întinsă',
      zoom: { cx: 1010, cy: 640, w: 760 },
      text: 'Friptură, vin și cărți de joc, la câțiva pași de un om bolnav. Nimeni nu vorbește în șoaptă.'
    },
    z_inventar: {
      title: 'O listă scrisă cu creionul',
      text: 'O foaie plină de rânduri numerotate, lângă farfuria femeii cu coc.',
      items: ['inventar']
    },
    z_friptura: {
      title: 'Friptura',
      text: 'Încă aburește. E din cămara bolnavului, ca tot ce se află pe masă.'
    },
    z_carti: {
      title: 'Cărțile de joc',
      text: 'Un pachet de cărți, la îndemână: ca să treacă timpul mai ușor cât se așteaptă.'
    },
    z_sticla: {
      title: 'Sticla de vin',
      text: 'Vin vechi, din cel păstrat sub cheie. Cheia a fost luată de pe noptiera bătrânului.'
    },
    bufet: {
      title: 'Bufetul',
      inside: true,
      sound: 'wardrobe',
      text: 'Ușile scârțâie. Rafturile sunt mai goale decât ar trebui.'
    },
    z_b_cutie: {
      title: 'Cutia de argintărie',
      text: 'Catifeaua roșie păstrează urma lingurilor și a furculițelor. Cutia e goală.'
    },
    z_b_farfurii: {
      title: 'Farfuriile',
      text: 'Farfuriile bune, scoase din vitrină și puse la îndemână. Cineva se pregătește să stea mult.'
    },
    z_b_provizii: {
      title: 'Proviziile',
      text: 'Două borcane goale și unul început. De trei zile clanul a {ocupat|ocupat} casa: dorm pe scaune și mănâncă din cămara bolnavului.'
    },
    z_b_vin: {
      title: 'Sticlele',
      text: 'Două sticle goale, culcate, și una pe jumătate. Nimeni nu a cerut voie.'
    },
    z_b_fete: {
      title: 'Fețele de masă',
      text: 'Între fețele de masă e ascuns un săculeț legat cu sfoară. Înăuntru zornăie lingurițe: încă o parte din {argintaria|argintăria} casei, pregătită de luat.'
    },
    telegrama: {
      title: 'O hârtie pe bufet',
      text: 'O telegramă deschisă, sprijinită de sfeșnic.',
      items: ['telegrama']
    }
  },

  deduction: [
    { slot: 's1', answer: 'costache', full: 'giurgiuveanu' },
    ' a suferit un ',
    { slot: 's2', answer: 'atac' },
    ' și zace pe canapea. Clanul ',
    { slot: 's3', answer: 'tulea' },
    ' a ',
    { slot: 's4', answer: 'ocupat' },
    ' casa și mănâncă în sufragerie. ',
    { slot: 's5', answer: 'aglae', full: 'tulea' },
    ' face inventarul și a luat deja ',
    { slot: 's6', answer: 'argintaria' },
    '. ',
    { slot: 's7', answer: 'stanica', full: 'ratiu' },
    ' l-a adus pe doctorul ',
    { slot: 's8', answer: 'vasiliad' },
    '. Singura care îl îngrijește pe bolnav este ',
    { slot: 's9', answer: 'otilia' },
    '. Bătrânul ține strâns în pumn ',
    { slot: 's10', answer: 'cheile' },
    '.'
  ],

  ending:
    '<p>Moș Costache a suferit un atac, iar clanul Tulea a ocupat casa în aceeași zi. ' +
    'Aglae a făcut inventarul și a luat argintăria, Stănică a adus un doctor prieten ' +
    'și s-a așezat la masă, iar ceilalți au mâncat din cămara bolnavului.</p>' +
    '<p>Doar Otilia și Felix l-au îngrijit. Bătrânul avar, deși abia mai respira, ' +
    'nu a dat drumul cheilor din mână. De data aceasta s-a făcut bine, ' +
    'dar toți cei din sufragerie au aflat ce voiau să știe: că averea e aproape.</p>'
};
