// Capitolul V — Fotografia. Scena, indiciile și deducția.
// Toată grafica este desenată în cod (SVG).
window.SCENE6 = {
  id: 'c6',
  num: 'V',
  title: 'Fotografia',
  blurb: 'După ani, doi bărbați se regăsesc într-un compartiment de tren.',
  theme: 'plum',
  thumb: '360 190 900 506',
  track: 'rail',
  dossier: 'Dosar · În tren, după ani',
  question: 'Ce s-a ales de fiecare?',

  svg: `
<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Un compartiment de tren, la apus">
<defs>
  <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#4a4a7a"/><stop offset=".6" stop-color="#c88a8a"/><stop offset="1" stop-color="#f0c080"/>
  </linearGradient>
  <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#6b4630"/><stop offset="1" stop-color="#3f271a"/>
  </linearGradient>
  <radialGradient id="gCandle" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd27a" stop-opacity="0.55"/>
    <stop offset="0.4" stop-color="#ffb650" stop-opacity="0.2"/>
    <stop offset="1" stop-color="#ffb650" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gVig" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.5" stop-color="#0a0508" stop-opacity="0"/>
    <stop offset="1" stop-color="#0a0508" stop-opacity="0.86"/>
  </radialGradient>
  <clipPath id="cWin"><rect x="520" y="150" width="560" height="400"/></clipPath>
  <filter id="fInk" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="33" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fGrain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="19"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.1 -0.36"/>
  </filter>
  <style>
    .o { stroke:#1b130d; stroke-width:3.5; stroke-linejoin:round; stroke-linecap:round; }
    .l { fill:none; stroke:#1b130d; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }
    .t { fill:none; stroke:#1b130d; stroke-width:2; stroke-linecap:round; opacity:.55; }
  </style>
</defs>

<!-- ===== peisajul care trece prin fața ferestrei ===== -->
<g clip-path="url(#cWin)">
  <rect x="520" y="150" width="560" height="400" fill="url(#gSky)"/>
  <circle cx="960" cy="400" r="46" fill="#ffe0a0" opacity=".8"/>
  <g class="scroll-far">
    <path d="M520 430 Q600 380 680 420 Q760 370 840 420 Q940 372 1080 430 Q1160 380 1240 420 Q1320 370 1400 420 Q1500 372 1640 430 Q1720 380 1800 420 V560 H520 Z" fill="#6a5a7a"/>
  </g>
  <g class="scroll-near">
    <path d="M520 480 Q620 452 720 478 Q830 450 940 480 Q1010 462 1080 480 Q1180 452 1280 478 Q1390 450 1500 480 Q1570 462 1640 480 Q1740 452 1840 478 V560 H520 Z" fill="#4a5a3a"/>
    <g fill="#2f3a26"><circle cx="640" cy="470" r="18"/><circle cx="668" cy="476" r="13"/><circle cx="1010" cy="474" r="16"/><circle cx="1200" cy="470" r="18"/><circle cx="1228" cy="476" r="13"/><circle cx="1570" cy="474" r="16"/></g>
  </g>
  <path d="M520 250 H1080 M520 266 H1080" stroke="#2a1c1c" stroke-width="2"/>
  <g class="scroll-poles" stroke="#2a1c1c" stroke-width="7" stroke-linecap="round">
    <path d="M560 560 V236 M540 250 H580 M840 560 V236 M820 250 H860 M1120 560 V236 M1100 250 H1140 M1400 560 V236 M1380 250 H1420"/>
  </g>
</g>

<g filter="url(#fInk)">

  <!-- pereții compartimentului, în jurul ferestrei -->
  <path fill-rule="evenodd" d="M-20 -20 H1620 V840 H-20 Z M520 150 V550 H1080 V150 Z" fill="url(#gWall)"/>
  <rect x="-20" y="-20" width="1640" height="60" fill="#2a1a12" class="o"/>
  <path d="M0 48 H1600" stroke="#c9a24e" stroke-width="3" opacity=".4"/>
  <path d="M40 60 V820 M1560 60 V820 M500 60 V130 M1100 60 V130" class="t"/>
  <path fill-rule="evenodd" d="M496 126 H1104 V574 H496 Z M520 150 V550 H1080 V150 Z" fill="#2c1c11" class="o"/>
  <path d="M800 150 V550" stroke="#2c1c11" stroke-width="12"/>
  <rect x="770" y="330" width="60" height="16" fill="#c9a24e" class="o"/>
  <!-- perdele -->
  <path d="M520 150 Q560 300 530 550 L590 550 Q580 300 606 150 Z" fill="#4a5a4a" class="o sway"/>
  <path d="M1080 150 Q1040 300 1070 550 L1010 550 Q1020 300 994 150 Z" fill="#4a5a4a" class="o sway" style="animation-delay:-3s"/>
  <path d="M510 144 H1090" stroke="#1b130d" stroke-width="10" stroke-linecap="round"/><path d="M510 144 H1090" stroke="#c9a24e" stroke-width="4" stroke-linecap="round"/>

  <!-- lampa -->
  <g class="rattle">
    <path d="M770 40 H830 L850 80 H750 Z" fill="#c9a24e" class="o"/>
    <path d="M756 80 Q800 124 844 80 Z" fill="#fff3cf" class="o"/>
  </g>

  <!-- podeaua -->
  <rect x="-20" y="820" width="1640" height="100" fill="#3a1f26" class="o"/>
  <path d="M0 850 H1600" stroke="#5a2f3a" stroke-width="4"/>

  <!-- ===== plasele de bagaje ===== -->
  <g class="vol">
    <path d="M70 196 H480 M70 196 L90 150 M480 196 L460 150 M90 150 H460" stroke="#1b130d" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M70 196 H480 M70 196 L90 150 M480 196 L460 150 M90 150 H460" stroke="#c9a24e" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M130 150 L110 196 M190 150 L170 196 M250 150 L230 196 M310 150 L290 196 M370 150 L350 196 M430 150 L410 196" stroke="#c9a24e" stroke-width="2" opacity=".7"/>
    <path d="M150 150 Q152 96 210 94 Q268 96 270 150 Z" fill="#17130f" class="o"/>
    <ellipse cx="210" cy="150" rx="84" ry="12" fill="#17130f" class="o"/>
    <path d="M152 138 H268" stroke="#4a3a2a" stroke-width="6"/>
    <path d="M320 150 Q324 108 372 108 Q420 108 424 150 Z" fill="#5f7f8a" class="o"/>
    <path d="M340 130 q30 -12 64 0" class="t"/>
  </g>
  <g class="vol">
    <path d="M1120 196 H1530 M1120 196 L1140 150 M1530 196 L1510 150 M1140 150 H1510" stroke="#1b130d" stroke-width="10" stroke-linecap="round" fill="none"/>
    <path d="M1120 196 H1530 M1120 196 L1140 150 M1530 196 L1510 150 M1140 150 H1510" stroke="#c9a24e" stroke-width="5" stroke-linecap="round" fill="none"/>
    <path d="M1180 150 L1160 196 M1240 150 L1220 196 M1300 150 L1280 196 M1360 150 L1340 196 M1420 150 L1400 196 M1480 150 L1460 196" stroke="#c9a24e" stroke-width="2" opacity=".7"/>
    <rect x="1196" y="70" width="252" height="84" rx="12" fill="#7a5230" class="o"/>
    <path d="M1246 70 V154 M1398 70 V154 M1196 112 H1448" class="l"/>
    <rect x="1310" y="100" width="24" height="18" fill="#c9a24e" class="o"/>
    <path d="M1292 70 Q1322 44 1352 70" class="l"/>
    <rect x="1412" y="124" width="30" height="20" fill="#efe4c4" class="o"/>
  </g>

  <!-- ===== măsuța de sub fereastră ===== -->
  <g class="vol">
    <rect x="556" y="566" width="488" height="20" fill="#3a2416" class="o"/>
    <path d="M620 586 L600 650 M980 586 L1000 650" stroke="#1b130d" stroke-width="10" stroke-linecap="round"/>
    <path d="M620 586 L600 650 M980 586 L1000 650" stroke="#c9a24e" stroke-width="5" stroke-linecap="round"/>
    <!-- ziarul -->
    <path d="M596 534 L770 530 L776 566 L590 566 Z" fill="#e4dcc6" class="o"/>
    <path d="M690 536 L692 566" class="t"/>
    <!-- paharul de ceai -->
    <g class="rattle" style="animation-delay:-.2s">
      <path d="M962 520 H1002 L998 566 H966 Z" fill="#c98a4a" fill-opacity=".8" class="o"/>
      <path d="M1002 532 q16 0 14 14 q-2 12 -16 10" class="l"/>
      <ellipse cx="982" cy="566" rx="30" ry="6" fill="#dfe6e4" class="o"/>
    </g>
    <ellipse cx="900" cy="562" rx="26" ry="7" fill="#9aa3a0" class="o"/>
  </g>
  <g fill="none" stroke="#f4f1ea" stroke-width="4" stroke-linecap="round">
    <path class="steam" d="M976 508 q-8 -12 0 -22 q8 -10 0 -20"/>
    <path class="steam" style="animation-delay:-2s" d="M990 506 q-8 -12 0 -22 q8 -10 0 -20"/>
  </g>

  <!-- ===== banchetele ===== -->
  <g class="vol">
    <path d="M86 300 Q86 260 126 260 H434 Q474 260 474 300 V640 H86 Z" fill="#6d2b3a" class="o"/>
    <path d="M150 262 V640 M280 262 V640 M410 262 V640" class="t"/>
    <path d="M176 258 H384 V300 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 Z" fill="#efe8d6" class="o"/>
    <rect x="66" y="620" width="430" height="64" rx="14" fill="#7c3344" class="o"/>
    <rect x="66" y="680" width="430" height="142" fill="#3a2416" class="o"/>
    <path d="M100 700 H462 V800 H100 Z" class="t"/>
  </g>
  <g class="vol">
    <path d="M1126 300 Q1126 260 1166 260 H1474 Q1514 260 1514 300 V640 H1126 Z" fill="#6d2b3a" class="o"/>
    <path d="M1190 262 V640 M1320 262 V640 M1450 262 V640" class="t"/>
    <path d="M1216 258 H1424 V300 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 q-13 14 -26 0 Z" fill="#efe8d6" class="o"/>
    <rect x="1104" y="620" width="430" height="64" rx="14" fill="#7c3344" class="o"/>
    <rect x="1104" y="680" width="430" height="142" fill="#3a2416" class="o"/>
    <path d="M1138 700 H1500 V800 H1138 Z" class="t"/>
  </g>

  <!-- ===== geanta lui Felix ===== -->
  <g class="vol">
    <path d="M104 560 Q104 538 126 538 L212 538 Q234 538 234 560 L240 624 L98 624 Z" fill="#2c2622" class="o"/>
    <path d="M140 538 Q169 508 198 538" class="l"/>
    <rect x="156" y="546" width="26" height="14" fill="#c9a24e" class="o"/>
    <path d="M110 578 H232" class="t"/>
  </g>

  <!-- ===== Felix, după ani ===== -->
  <g class="vol breath" style="animation-delay:-2s">
    <path d="M330 628 L470 634 L484 800 L436 800 L428 690 L330 684 Z" fill="#3a3d4a" class="o"/>
    <ellipse cx="470" cy="806" rx="34" ry="11" fill="#14100c" class="o"/>
    <path d="M262 440 Q322 408 382 440 L396 650 L246 650 Z" fill="#3a3d4a" class="o"/>
    <path d="M300 430 L322 470 L344 430 Z" fill="#efe8d6" class="o"/>
    <path d="M316 446 L328 446 L326 500 L318 500 Z" fill="#8f2c2c" class="o"/>
    <path d="M300 432 L284 520 M344 432 L360 516 M322 500 V650" class="t"/>
    <path d="M374 450 Q420 510 446 572" fill="none" stroke="#1b130d" stroke-width="38" stroke-linecap="round"/>
    <path d="M374 450 Q420 510 446 572" fill="none" stroke="#3a3d4a" stroke-width="31" stroke-linecap="round"/>
    <ellipse cx="446" cy="576" rx="16" ry="7" fill="#efe8d6" class="o"/>
    <circle cx="452" cy="590" r="14" fill="#f0c9a6" class="o"/>
    <g transform="rotate(4 322 402)"><rect x="310" y="390" width="24" height="38" fill="#f0c9a6"/></g>
    <g transform="rotate(4 322 402)"><path d="M310 390 V428 M334 390 V428" class="l"/></g>
    <g transform="rotate(4 322 402)"><ellipse cx="284" cy="366" rx="6" ry="11" fill="#f0c9a6" class="o"/></g>
    <g transform="rotate(4 322 402)"><ellipse cx="322" cy="360" rx="38" ry="42" fill="#f0c9a6" class="o"/></g>
    <g transform="rotate(4 322 402)"><path d="M284 356 Q280 312 322 312 Q364 312 360 356 Q346 330 322 334 Q298 330 284 356 Z" fill="#4a3220" class="o"/></g>
    <g transform="rotate(4 322 402)"><path d="M290 344 q-4 -12 4 -20" stroke="#9a9a9a" stroke-width="5" fill="none" stroke-linecap="round"/></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><ellipse cx="318" cy="364" rx="6" ry="7" fill="#fff"/></g></g><g transform="rotate(4 322 402)"><g transform="translate(8 0)"><circle cx="321" cy="365" r="3.5" fill="#1b130d"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><ellipse cx="344" cy="364" rx="6" ry="7" fill="#fff"/></g></g><g transform="rotate(4 322 402)"><g transform="translate(8 0)"><circle cx="347" cy="365" r="3.5" fill="#1b130d"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><circle cx="318" cy="364" r="12" fill="none" stroke="#1b130d" stroke-width="3"/></g></g><g transform="rotate(4 322 402)"><g transform="translate(8 0)"><circle cx="344" cy="364" r="12" fill="none" stroke="#1b130d" stroke-width="3"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><path d="M330 364 H332 M306 362 L288 358" class="l"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><path d="M308 346 L326 342 M336 342 L354 346" class="l"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><path d="M332 370 q7 10 0 13" class="l"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><path d="M316 388 Q330 380 346 388 Q330 394 316 388 Z" fill="#4a3220"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><path d="M322 398 q10 4 18 0" class="l"/></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><g fill="#c9605a" opacity=".3"><ellipse cx="306" cy="382" rx="8" ry="5"/><ellipse cx="352" cy="382" rx="8" ry="5"/></g></g></g>
    <g transform="rotate(4 322 402)"><g transform="translate(8 0)"><g class="blink" style="animation-delay:-0.7s"><ellipse cx="318" cy="364" rx="7.5" ry="8" fill="#f0c9a6"/><path d="M311 365 q7 4 14 0" class="l"/><ellipse cx="344" cy="364" rx="7.5" ry="8" fill="#f0c9a6"/><path d="M337 365 q7 4 14 0" class="l"/></g></g></g>
  </g>

  <!-- ===== Pascalopol, bătrân ===== -->
  <g class="vol breath" style="animation-delay:-5s">
    <path d="M1270 628 L1130 634 L1116 800 L1164 800 L1172 690 L1270 684 Z" fill="#1c1a1e" class="o"/>
    <ellipse cx="1130" cy="806" rx="34" ry="11" fill="#14100c" class="o"/>
    <path d="M1218 440 Q1278 408 1338 440 L1354 650 L1204 650 Z" fill="#1c1a1e" class="o"/>
    <path d="M1256 430 L1278 470 L1300 430 Z" fill="#efe8d6" class="o"/>
    <path d="M1272 446 L1284 446 L1282 498 L1274 498 Z" fill="#3a5a6a" class="o"/>
    <path d="M1256 432 L1240 520 M1300 432 L1316 516 M1278 498 V650" class="t"/>
    <path d="M1220 560 q30 16 66 0" fill="none" stroke="#e8c14e" stroke-width="3"/>
    <g transform="rotate(-4 1278 402)"><rect x="1266" y="390" width="24" height="38" fill="#e6b48e"/></g>
    <g transform="rotate(-4 1278 402)"><path d="M1266 390 V428 M1290 390 V428" class="l"/></g>
    <g transform="rotate(-4 1278 402)"><ellipse cx="1316" cy="366" rx="6" ry="11" fill="#e6b48e" class="o"/></g>
    <g transform="rotate(-4 1278 402)"><ellipse cx="1278" cy="360" rx="39" ry="42" fill="#e6b48e" class="o"/></g>
    <g transform="rotate(-4 1278 402)"><path d="M1240 354 Q1240 312 1278 312 Q1318 312 1316 356 Q1304 332 1276 336 Q1254 334 1240 354 Z" fill="#c9c9c9" class="o"/></g>
    <g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><ellipse cx="1256" cy="364" rx="6" ry="5" fill="#fff"/></g></g><g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><circle cx="1253" cy="364" r="3.2" fill="#1b130d"/></g></g><g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><ellipse cx="1284" cy="364" rx="6" ry="5" fill="#fff"/></g></g><g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><circle cx="1281" cy="364" r="3.2" fill="#1b130d"/></g></g>
    <g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><path d="M1244 352 L1262 350 M1276 350 L1294 352" class="l"/></g></g>
    <g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><path d="M1268 368 q-7 11 1 14" class="l"/></g></g>
    <g transform="rotate(-4 1278 402)"><path d="M1248 388 Q1268 380 1290 388 Q1268 398 1248 388 Z" fill="#e4e4e4" class="o"/></g>
    <g transform="rotate(-4 1278 402)"><path d="M1260 400 Q1269 418 1278 400 Z" fill="#e4e4e4" class="o"/></g>
    <g transform="rotate(-4 1278 402)"><path d="M1246 340 q10 -4 18 0 M1250 332 q8 -3 14 0" class="t"/></g>
    <g transform="rotate(-4 1278 402)"><g fill="#c9605a" opacity=".35"><ellipse cx="1246" cy="380" rx="8" ry="5"/><ellipse cx="1296" cy="380" rx="8" ry="5"/></g></g>
    <g transform="rotate(-4 1278 402)"><g transform="translate(-8 0)"><g class="blink" style="animation-delay:-3.3s"><ellipse cx="1256" cy="364" rx="6" ry="5.5" fill="#e6b48e"/><path d="M1250 365 q6 4 12 0" class="l"/><ellipse cx="1284" cy="364" rx="6" ry="5.5" fill="#e6b48e"/><path d="M1278 365 q6 4 12 0" class="l"/></g></g></g>
    <!-- bastonul -->
    <path d="M1392 560 L1404 816" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/><path d="M1392 560 L1404 816" stroke="#3a2416" stroke-width="6" stroke-linecap="round"/>
    <circle cx="1392" cy="556" r="15" fill="#dfe6e4" class="o"/>
    <path d="M1334 450 Q1384 500 1392 548" fill="none" stroke="#1b130d" stroke-width="36" stroke-linecap="round"/>
    <path d="M1334 450 Q1384 500 1392 548" fill="none" stroke="#1c1a1e" stroke-width="29" stroke-linecap="round"/>
    <!-- brațul întins, cu fotografia -->
    <path d="M1224 452 Q1080 476 908 506" fill="none" stroke="#1b130d" stroke-width="38" stroke-linecap="round"/>
    <path d="M1224 452 Q1080 476 908 506" fill="none" stroke="#1c1a1e" stroke-width="31" stroke-linecap="round"/>
    <ellipse cx="906" cy="506" rx="8" ry="16" fill="#efe8d6" class="o"/>
    <rect x="786" y="456" width="104" height="80" fill="#e4d8ba" class="o"/>
    <circle cx="894" cy="510" r="14" fill="#e6b48e" class="o"/>
    <circle cx="886" cy="518" r="4" fill="#e8c14e"/>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
  <!-- fotografia din mâna bătrânului -->
  <rect x="793" y="463" width="90" height="62" fill="#8a7450"/>
  <path d="M793 508 H883 V525 H793 Z" fill="#6f5a3a"/>
  <g>
    <path d="M802 525 Q803 500 816 499 Q829 500 830 525 Z" fill="#efe8d6" stroke="#1b130d" stroke-width=".8"/>
    <rect x="814" y="492" width="4" height="8" fill="#f2d2b6"/>
    <path d="M806 488 Q804 474 816 472 Q828 474 826 488 Q826 478 816 478 Q806 478 806 488 Z" fill="#8a5a2a" stroke="#1b130d" stroke-width=".7"/>
    <ellipse cx="816" cy="486" rx="8" ry="9" fill="#f2d2b6" stroke="#1b130d" stroke-width=".8"/>
    <path d="M808 482 Q812 474 816 478 Q820 474 824 482 Q820 479 816 480 Q812 479 808 482 Z" fill="#8a5a2a"/>
    <circle cx="813" cy="486" r="1" fill="#1b130d"/><circle cx="819" cy="486" r="1" fill="#1b130d"/>
    <path d="M813 491 q3 2 6 0" fill="none" stroke="#a8452f" stroke-width=".8"/>
    <path d="M806 474 Q816 462 828 470 L826 476 Q816 470 806 478 Z" fill="#2c2622" stroke="#1b130d" stroke-width=".7"/>
    <circle cx="816" cy="504" r="1.6" fill="#e8c14e"/>
  </g>
  <g>
    <path d="M838 525 Q839 498 856 497 Q873 498 874 525 Z" fill="#f4f1ea" stroke="#1b130d" stroke-width=".8"/>
    <path d="M852 500 L856 508 L860 500 Z" fill="#2c2622"/>
    <ellipse cx="856" cy="486" rx="9" ry="10" fill="#c98a5a" stroke="#1b130d" stroke-width=".8"/>
    <path d="M847 482 Q848 474 856 474 Q864 474 865 482 Q860 478 856 479 Q852 478 847 482 Z" fill="#14100c"/>
    <circle cx="853" cy="486" r="1" fill="#1b130d"/><circle cx="859" cy="486" r="1" fill="#1b130d"/>
    <path d="M851 491 Q856 488 861 491 Q856 494 851 491 Z" fill="#14100c"/>
    <circle cx="866" cy="506" r="2.2" fill="#a8452f"/>
  </g>
  <path d="M874 525 L883 516 V525 Z" fill="#efe4c4" stroke="#1b130d" stroke-width=".7"/>
  <text x="1392" y="559" font-size="7">LP</text>
    </g>
  </g>

</g>

<!-- ===== detalii mărunte, vizibile doar de aproape ===== -->
<g id="details" font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
  <!-- ziarul de pe măsuță -->
  <rect x="604" y="538" width="80" height="6" fill="#1b130d"/>
  <text x="644" y="543.5" font-size="5" fill="#e4dcc6">UNIVERSUL</text>
  <rect x="606" y="547" width="48" height="16" fill="#8a7450" stroke="#1b130d" stroke-width=".6"/>
  <g>
    <path d="M610 563 Q611 556 619 555 Q627 556 628 563 Z" fill="#2c2622"/>
    <ellipse cx="619" cy="552.5" rx="4" ry="4" fill="#e3ad85" stroke="#1b130d" stroke-width=".5"/>
    <path d="M615 550 Q619 546 623 550 Z" fill="#14100c"/>
    <path d="M616.5 554 Q619 553 621.5 554 Q619 555.4 616.5 554 Z" fill="#14100c"/>
    <circle cx="617.6" cy="552" r=".5" fill="#1b130d"/><circle cx="620.4" cy="552" r=".5" fill="#1b130d"/>
  </g>
  <g>
    <path d="M632 563 Q633 556 640 555 Q647 556 648 563 Z" fill="#a8452f"/>
    <ellipse cx="640" cy="552.5" rx="3.6" ry="4" fill="#f2d2b6" stroke="#1b130d" stroke-width="0.5"/>
    <ellipse cx="640" cy="549" rx="7" ry="2" fill="#2c2622"/>
    <path d="M636.5 549 Q640 544.5 643.5 549 Z" fill="#2c2622"/>
    <circle cx="638.6" cy="552.4" r=".5" fill="#1b130d"/><circle cx="641.4" cy="552.4" r=".5" fill="#1b130d"/>
    <path d="M638.6 554.4 q1.4 1 2.8 0" fill="none" stroke="#a8452f" stroke-width=".5"/>
  </g>
  <path d="M658 549 H684 M658 553 H684 M658 557 H684 M658 561 H676 M696 540 H768 M696 545 H768 M696 550 H768 M696 555 H768 M696 560 H750" stroke="#1b130d" stroke-width=".8" opacity=".6"/>
  <rect x="724" y="552" width="42" height="11" fill="none" stroke="#1b130d" stroke-width=".7"/>
  <text x="1427" y="137" font-size="6">L.P.</text>
  <text x="169" y="598" font-size="8" fill="#c9a24e">Dr. F. S.</text>
</g>

<!-- ===== lumini ===== -->
<rect x="0" y="0" width="1600" height="900" fill="#2a1220" opacity="0.22"/>
<path d="M520 550 L1080 550 L1300 900 L300 900 Z" fill="#ffc890" opacity="0.07"/>
<circle class="glow" cx="800" cy="100" r="520" fill="url(#gCandle)"/>
<rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
<rect x="0" y="0" width="1600" height="900" filter="url(#fGrain)" opacity="0.5"/>

<!-- ===== interioare: se văd doar când sunt deschise ===== -->
<g class="interior" id="in-geanta">
  <rect x="0" y="0" width="1600" height="900" fill="#150d08"/>
  <g filter="url(#fInk)">
    <path d="M160 130 Q160 64 240 64 L1360 64 Q1440 64 1440 130 L1484 826 L116 826 Z" fill="#2c2622" class="o"/>
    <path d="M232 150 L1368 150 L1400 766 L200 766 Z" fill="#4a3f36" class="o"/>
    <rect x="740" y="40" width="120" height="56" fill="#c9a24e" class="o"/>
    <!-- stetoscop -->
    <path d="M300 640 Q400 420 540 540 Q650 630 600 400" fill="none" stroke="#1b130d" stroke-width="24" stroke-linecap="round"/>
    <path d="M300 640 Q400 420 540 540 Q650 630 600 400" fill="none" stroke="#6b6b70" stroke-width="14" stroke-linecap="round"/>
    <circle cx="600" cy="380" r="46" fill="#9aa3a0" class="o"/><circle cx="600" cy="380" r="26" fill="#dfe6e4" class="o"/>
    <!-- cartea lui -->
    <g transform="rotate(-4 900 320)">
      <rect x="740" y="200" width="330" height="240" fill="#3a5a6a" class="o"/>
      <rect x="770" y="232" width="270" height="74" fill="none" stroke="#c9a24e" stroke-width="5"/>
    </g>
    <!-- carte de vizită -->
    <g transform="rotate(5 1220 280)">
      <rect x="1100" y="210" width="250" height="140" fill="#f3ecd6" class="o"/>
      <path d="M1130 290 H1320 M1130 316 H1260" class="t"/>
    </g>
    <!-- fotografia veche -->
    <g transform="rotate(-6 1180 590)">
      <rect x="1060" y="460" width="240" height="270" fill="#d8c9a6" class="o"/>
      <rect x="1078" y="478" width="204" height="200" fill="#8a7450"/>
      <g fill="#b9a070"><circle cx="1150" cy="556" r="20"/><circle cx="1210" cy="556" r="20"/><circle cx="1146" cy="584" r="16"/><circle cx="1214" cy="584" r="16"/><circle cx="1164" cy="532" r="20"/><circle cx="1196" cy="532" r="20"/></g>
      <ellipse cx="1180" cy="566" rx="30" ry="34" fill="#c9b48a"/>
      <path d="M1124 678 Q1130 612 1180 608 Q1230 612 1236 678 Z" fill="#c9b48a"/>
    </g>
    <ellipse cx="420" cy="716" rx="70" ry="30" fill="#f4f1ea" class="o"/>
    <rect x="760" y="560" width="220" height="60" rx="12" fill="#24364a" class="o"/>
    <path d="M790 590 H950" stroke="#9aa3a0" stroke-width="7" stroke-linecap="round"/>
  </g>
  <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
    <text x="905" y="282" font-size="34" fill="#c9a24e" transform="rotate(-4 900 320)">MEDICINA</text>
    <text x="1225" y="262" font-size="20" transform="rotate(5 1220 280)">Prof. dr.</text>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<g class="interior" id="in-valiza">
  <rect x="0" y="0" width="1600" height="900" fill="#1a110a"/>
  <g filter="url(#fInk)">
    <rect x="200" y="40" width="1200" height="364" rx="26" fill="#7a5230" class="o"/>
    <rect x="240" y="72" width="1120" height="300" rx="14" fill="#9a7a5a" class="o"/>
    <path d="M240 172 H1360 M240 272 H1360" class="t"/>
    <path d="M980 130 L1200 116 L1214 250 L994 264 Z" fill="#efe4c4" class="o"/>
    <path d="M1020 190 L1180 180 M1024 220 L1150 212" class="t"/>
    <rect x="200" y="398" width="1200" height="26" fill="#3a2416" class="o"/>
    <g fill="#c9a24e" class="o"><rect x="380" y="392" width="60" height="38"/><rect x="1160" y="392" width="60" height="38"/></g>
    <rect x="200" y="424" width="1200" height="440" rx="26" fill="#7a5230" class="o"/>
    <rect x="240" y="452" width="1120" height="384" rx="14" fill="#9a7a5a" class="o"/>
    <!-- cămăși -->
    <rect x="280" y="484" width="330" height="300" fill="#efe8d6" class="o"/>
    <path d="M280 584 H610 M410 484 L445 530 L480 484" class="t"/>
    <!-- scrisori legate cu panglică -->
    <g transform="rotate(-5 800 580)">
      <rect x="660" y="500" width="300" height="180" fill="#e4dcc6" class="o"/>
      <rect x="670" y="490" width="300" height="180" fill="#efe4c4" class="o"/>
      <path d="M670 490 L820 590 L970 490" class="l"/>
      <path d="M820 490 V670 M670 580 H970" stroke="#6f8fb0" stroke-width="12"/>
    </g>
    <!-- nota de hotel -->
    <g transform="rotate(6 1170 570)">
      <rect x="1050" y="470" width="250" height="210" fill="#f3ecd6" class="o"/>
      <path d="M1076 560 H1270 M1076 590 H1270 M1076 620 H1200" class="t"/>
    </g>
    <!-- flautul -->
    <path d="M660 760 L1080 742" stroke="#1b130d" stroke-width="26" stroke-linecap="round"/>
    <path d="M660 760 L1080 742" stroke="#3a2416" stroke-width="18" stroke-linecap="round"/>
    <g fill="#c9a24e"><circle cx="760" cy="755" r="6"/><circle cx="820" cy="752" r="6"/><circle cx="880" cy="750" r="6"/><circle cx="940" cy="747" r="6"/></g>
    <!-- cutiuța goală -->
    <rect x="1150" y="720" width="110" height="80" fill="#7c3333" class="o"/>
    <rect x="1162" y="732" width="86" height="56" fill="#3a1f26" class="o"/>
  </g>
  <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
    <text x="1100" y="166" font-size="26" transform="rotate(-4 1100 166)">L. P.</text>
    <text x="1176" y="524" font-size="26" transform="rotate(6 1170 570)">HÔTEL</text>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<!-- ===== zone active ===== -->
<g id="hotspots">
  <rect class="hs" data-id="palarie" x="130" y="88" width="170" height="80" rx="14"/>
  <rect class="hs" data-id="valiza" x="1186" y="46" width="272" height="118" rx="14"/>
  <rect class="hs" data-id="z_v_eticheta" data-parent="valiza" x="970" y="106" width="256" height="170" rx="14"/>
  <rect class="hs" data-id="z_v_camasi" data-parent="valiza" x="272" y="476" width="346" height="316" rx="14"/>
  <rect class="hs" data-id="z_v_scrisori" data-parent="valiza" x="650" y="476" width="336" height="216" rx="14"/>
  <rect class="hs" data-id="z_v_nota" data-parent="valiza" x="1036" y="456" width="280" height="240" rx="14"/>
  <rect class="hs" data-id="z_v_flaut" data-parent="valiza" x="644" y="726" width="450" height="52" rx="14"/>
  <rect class="hs" data-id="z_v_cutie" data-parent="valiza" x="1140" y="712" width="130" height="96" rx="12"/>
  <rect class="hs" data-id="fereastra" x="610" y="160" width="380" height="270" rx="16"/>
  <rect class="hs" data-id="felix" x="256" y="306" width="150" height="330" rx="18"/>
  <rect class="hs" data-id="geanta" x="94" y="512" width="150" height="116" rx="14"/>
  <rect class="hs" data-id="z_g_stetoscop" data-parent="geanta" x="260" y="330" width="410" height="390" rx="16"/>
  <rect class="hs" data-id="z_g_tratat" data-parent="geanta" x="730" y="190" width="350" height="260" rx="14"/>
  <rect class="hs" data-id="z_g_carte" data-parent="geanta" x="1090" y="196" width="270" height="170" rx="14"/>
  <rect class="hs" data-id="z_g_foto" data-parent="geanta" x="1050" y="450" width="262" height="290" rx="14"/>
  <rect class="hs" data-id="pascalopol" x="1214" y="306" width="150" height="330" rx="18"/>
  <circle class="hs" data-id="baston" cx="1392" cy="556" r="26"/>
  <rect class="hs" data-id="ziar" x="584" y="524" width="198" height="48" rx="10"/>
  <rect class="hs" data-id="z_z_foto" data-parent="ziar" x="604" y="546" width="52" height="19" rx="3"/>
  <rect class="hs" data-id="z_z_titlu" data-parent="ziar" x="656" y="546" width="30" height="18" rx="3"/>
  <rect class="hs" data-id="z_z_anunt" data-parent="ziar" x="722" y="550" width="46" height="15" rx="3"/>
  <rect class="hs" data-id="ceai" x="950" y="486" width="76" height="90" rx="12"/>
  <rect class="hs" data-id="fotografie" x="780" y="450" width="116" height="92" rx="10"/>
  <rect class="hs" data-id="z_femeia" data-parent="fotografie" x="800" y="468" width="32" height="56" rx="5"/>
  <rect class="hs" data-id="z_barbat" data-parent="fotografie" x="838" y="468" width="34" height="56" rx="5"/>
  <rect class="hs" data-id="z_dos" data-parent="fotografie" x="870" y="512" width="16" height="16" rx="3"/>
</g>
</svg>`,

  // n = nume, o = obiecte, f = fapte
  words: {
    felix:      { text: 'Felix',      cat: 'n' },
    sima:       { text: 'Sima',       cat: 'n' },
    leonida:    { text: 'Leonida',    cat: 'n' },
    pascalopol: { text: 'Pascalopol', cat: 'n' },
    otilia:     { text: 'Otilia',     cat: 'n' },
    marculescu: { text: 'Mărculescu', cat: 'n' },
    stanica:    { text: 'Stănică',    cat: 'n' },
    ratiu:      { text: 'Rațiu',      cat: 'n' },
    georgeta:   { text: 'Georgeta',   cat: 'n' },
    costache:   { text: 'Costache',   cat: 'n' },
    aglae:      { text: 'Aglae',      cat: 'n' },
    paris:      { text: 'Paris',      cat: 'o' },
    argentina:  { text: 'Argentina',  cat: 'o' },
    spania:     { text: 'Spania',     cat: 'o' },
    libertatea: { text: 'libertatea', cat: 'o' },
    politica:   { text: 'politică',   cat: 'o' },
    profesor:   { text: 'profesor',   cat: 'o' },
    enigma:     { text: 'enigmă',     cat: 'o' },
    mosia:      { text: 'moșie',      cat: 'o' }
  },

  people: [
    { id: 'ochelari', crop: '250 290 144 144',  first: 'felix',    last: 'sima' },
    { id: 'carunt',   crop: '1206 290 144 144', first: 'leonida',  last: 'pascalopol' },
    { id: 'doamna',   crop: '800 470 32 32',    first: 'otilia',   last: 'marculescu' },
    { id: 'deputat',  crop: '609.5 544.5 19 19',    first: 'stanica',  last: 'ratiu' },
    { id: 'sotie',    crop: '630.5 544.5 19 19',    first: 'georgeta', last: 'ratiu' }
  ],

  items: {
    carte: {
      kind: 'tag',
      title: 'Cartea de vizită',
      text: '«Prof. dr. Felix {sima|Sima}, {profesor|profesor} universitar. Facultatea de Medicină, București.» Băiatul venit cu o valiză în strada Antim a ajuns departe.',
      icon: '<rect x="8" y="20" width="48" height="28" fill="#f3ecd6"/><path d="M16 30h22M16 38h14"/>'
    },
    fotoveche: {
      kind: 'tag',
      title: 'O fotografie veche',
      text: 'O fată cu bucle, râzând. Pe dos, cu cerneală decolorată: «{otilia|Otilia} {marculescu|Mărculescu}, strada Antim, 1909.» A purtat-o cu el toți anii aceștia.',
      icon: '<rect x="12" y="8" width="40" height="48" fill="#d8c9a6"/><circle cx="32" cy="26" r="9" fill="#8a7450"/><path d="M18 50 Q20 36 32 36 Q44 36 46 50 Z" fill="#8a7450"/>'
    },
    eticheta: {
      kind: 'tag',
      title: 'Eticheta din capac',
      text: '«{leonida|Leonida} {pascalopol|Pascalopol}, moșier.» Valiza a văzut multe gări.',
      icon: '<path d="M20 10 H54 V54 H20 L8 42 V22 Z" fill="#dcc592"/><circle cx="18" cy="32" r="4" fill="#1b130d"/><path d="M30 24h16M30 34h16M30 44h10"/>'
    },
    scrisoare: {
      kind: 'letter',
      title: 'Ultima scrisoare din teanc',
      text: '«Dragul meu, îți mulțumesc că mi-ai redat {libertatea|libertatea}. Ai fost bun cu mine cum n-a fost nimeni. Nu fi trist. A ta, Otilia.»',
      icon: '<path d="M8 18 L56 14 L58 46 L10 50 Z" fill="#efe4c4"/><path d="M8 18 L33 36 L56 14"/><path d="M32 14 V50" stroke="#6f8fb0" stroke-width="5"/>'
    },
    nota: {
      kind: 'letter',
      title: 'O notă de hotel',
      text: '«Hôtel, {paris|Paris}. Domnul și doamna Pascalopol, trei luni.» Dedesubt, cu creionul: «Apoi două săptămâni în {spania|Spania}, la cererea ei.»',
      icon: '<rect x="12" y="10" width="40" height="44" fill="#f3ecd6"/><path d="M18 24h28M18 32h28M18 40h16"/>'
    }
  },

  clues: {
    felix: {
      title: 'Bărbatul cu ochelari',
      text: 'Un bărbat de vreo treizeci și ceva de ani, sobru, cu ochelari. Bătrânul din fața lui îl privește lung, apoi îi întinde mâna: «Dumneata ești… {felix|Felix}? Băiatul din strada Antim?»'
    },
    geanta: {
      title: 'Geanta de piele',
      inside: true,
      sound: 'case',
      text: 'O geantă de medic, purtată mult. Catarama se deschide ușor.'
    },
    z_g_stetoscop: {
      title: 'Stetoscopul',
      text: 'Un stetoscop bun, de om care își face meseria cu grijă.'
    },
    z_g_tratat: {
      title: 'Cartea',
      text: 'Un tratat gros de medicină. Pe copertă, numele autorului e chiar al stăpânului genții.'
    },
    z_g_carte: {
      title: 'Un carton alb',
      text: 'O carte de vizită, prinsă de căptușeală.',
      items: ['carte']
    },
    z_g_foto: {
      title: 'O fotografie îngălbenită',
      text: 'O fotografie mică, cu colțurile tocite, ascunsă sub celelalte lucruri.',
      items: ['fotoveche']
    },
    pascalopol: {
      title: 'Bătrânul cărunt',
      text: 'Un domn bătrân, elegant, cu barbă albă. Vorbește încet: «Am ținut la ea ca un părinte și ca un bărbat, și n-am știut niciodată care din doi. Mi-am vândut o parte din {mosia|moșie} ca să-i fac toate voile.»'
    },
    baston: {
      title: 'Bastonul',
      text: 'Un baston cu mâner de argint, tocit de palmă. Pe mâner, două inițiale: «L. P.»'
    },
    valiza: {
      title: 'Valiza din plasă',
      inside: true,
      sound: 'case',
      text: 'O valiză veche de piele, plină de etichete de hotel.'
    },
    z_v_eticheta: {
      title: 'Capacul valizei',
      text: 'O etichetă de carton, prinsă în capac.',
      items: ['eticheta']
    },
    z_v_camasi: {
      title: 'Cămășile',
      text: 'Cămăși scumpe, purtate până la fir. Banii nu mai sunt ce au fost.'
    },
    z_v_scrisori: {
      title: 'Un teanc de scrisori',
      text: 'Scrisori legate cu panglică albastră, toate cu același scris de femeie.',
      items: ['scrisoare']
    },
    z_v_nota: {
      title: 'O hârtie de hotel',
      text: 'O notă de plată, păstrată ca amintire.',
      items: ['nota']
    },
    z_v_flaut: {
      title: 'Flautul',
      text: 'Flautul la care cânta seara, pentru ea. Nu a mai fost scos din valiză de mult.'
    },
    z_v_cutie: {
      title: 'Cutiuța goală',
      text: 'O cutiuță de catifea, goală. Inelul cu safir a plecat odată cu ea.'
    },
    fotografie: {
      title: 'Fotografia',
      zoom: { cx: 836, cy: 494, w: 240 },
      text: 'Bătrânul scoate din buzunar o fotografie și o întinde peste măsuță. «Uită-te bine la ea. Pentru mine a rămas o {enigma|enigmă}.»'
    },
    z_femeia: {
      title: 'Doamna din fotografie',
      text: 'O doamnă foarte elegantă, cu părul tuns scurt și o pălărie la modă. Bărbatul cu ochelari o privește mult. E fata de altădată, {otilia|Otilia}, și totuși nu mai e ea.'
    },
    z_barbat: {
      title: 'Bărbatul de lângă ea',
      text: 'Un bărbat străin, oacheș, cu o floare la butonieră. Nu e niciunul dintre cei doi din compartiment.'
    },
    z_dos: {
      title: 'Colțul îndoit',
      text: 'Pe dosul fotografiei, ștampila unui atelier: «Buenos Aires, {argentina|Argentina}.» Acolo trăiește ea acum.'
    },
    ziar: {
      title: 'Ziarul de pe măsuță',
      zoom: { cx: 690, cy: 552, w: 250 },
      text: 'Ziarul de azi, lăsat deschis la prima pagină.'
    },
    z_z_foto: {
      title: 'Fotografia din ziar',
      text: 'Un domn gras, cu mustață, și o doamnă cu pălărie mare. Dedesubt: «Dl. deputat {stanica|Stănică} {ratiu|Rațiu} și soția sa, {georgeta|Georgeta}, la inaugurarea unui bloc.»'
    },
    z_z_titlu: {
      title: 'Articolul',
      text: '«O carieră strălucită în {politica|politică}: de la avocat fără procese la om cu avere.» Nimeni nu întreabă de unde au venit primii bani.'
    },
    z_z_anunt: {
      title: 'Un anunț mic',
      text: '«Casa bătrânească din strada Antim, a răposatului {costache|Costache} Giurgiuveanu, moștenită de sora sa {aglae|Aglae}, se dărâmă luna aceasta.»'
    },
    fereastra: {
      title: 'Fereastra',
      text: 'Câmpia trece pe lângă geam, cu stâlpii de telegraf unul după altul. Soarele apune peste Bărăgan.'
    },
    ceai: {
      title: 'Paharul de ceai',
      text: 'Un ceai care s-a răcit. Cei doi au uitat de el de când a apărut fotografia.'
    },
    palarie: {
      title: 'Pălăria din plasă',
      text: 'O pălărie sobră, de profesor. Stăpânul ei nu mai e băiatul sfios de altădată.'
    }
  },

  deduction: [
    'După moartea bătrânului, ',
    { slot: 's1', answer: 'otilia' },
    ' s-a măritat cu ',
    { slot: 's2', answer: 'leonida', full: 'pascalopol' },
    ' și au plecat la ',
    { slot: 's3', answer: 'paris' },
    '. După câțiva ani, el i-a redat ',
    { slot: 's4', answer: 'libertatea' },
    ', iar ea trăiește acum în ',
    { slot: 's5', answer: 'argentina' },
    ', cu alt bărbat. ',
    { slot: 's6', answer: 'felix', full: 'sima' },
    ' a ajuns ',
    { slot: 's7', answer: 'profesor' },
    '. ',
    { slot: 's8', answer: 'stanica', full: 'ratiu' },
    ' a intrat în ',
    { slot: 's9', answer: 'politica' },
    ' și s-a însurat cu ',
    { slot: 's10', answer: 'georgeta', full: 'ratiu' },
    '. Pentru cei doi bărbați din compartiment, Otilia a rămas o ',
    { slot: 's11', answer: 'enigma' },
    '.'
  ],

  ending:
    '<p>Otilia s-a măritat cu Pascalopol și a plecat cu el în lume. După câțiva ani, ' +
    'el i-a redat libertatea, iar ea a ajuns departe, lângă un străin. Felix a devenit ' +
    'profesor universitar. Stănică a intrat în politică, cu banii furați de sub o saltea.</p>' +
    '<p>În tren, bătrânul moșier îi arată lui Felix o fotografie. Doamna din ea e frumoasă, ' +
    'dar nu mai seamănă cu fata nebunatică de altădată. Acasă, Felix scoate vechea fotografie ' +
    'a Otiliei și înțelege că fata aceea nu mai există decât acolo. Niciunul dintre cei doi ' +
    'bărbați care au iubit-o nu a ajuns să o cunoască. Aceasta este enigma Otiliei.</p>'
};
