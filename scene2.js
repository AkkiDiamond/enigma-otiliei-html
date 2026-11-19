// Capitolul II — Trăsura de la poartă. Scena, indiciile și deducția.
// Toată grafica este desenată în cod (SVG).
window.SCENE2 = {
  id: 'c2',
  num: 'II',
  title: 'Trăsura de la poartă',
  blurb: 'În curtea vecină, un bătrân vesel e condus spre o trăsură.',
  theme: 'ochre',
  thumb: '700 250 880 495',
  track: 'lull',
  dossier: 'Dosar · Curtea Tulea, toamna',
  question: 'Unde este dus bătrânul?',

  svg: `
<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Curtea casei Tulea, într-o după-amiază de toamnă">
<defs>
  <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#8fb4cf"/><stop offset=".7" stop-color="#e6d6b0"/><stop offset="1" stop-color="#f0c890"/>
  </linearGradient>
  <linearGradient id="gFloor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#b79a62"/><stop offset="1" stop-color="#6f5632"/>
  </linearGradient>
  <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e0cc94"/><stop offset="1" stop-color="#bfa56a"/>
  </linearGradient>
  <radialGradient id="gCandle" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffe6a8" stop-opacity="0.55"/>
    <stop offset="1" stop-color="#ffd27a" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gVig" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.55" stop-color="#1a1206" stop-opacity="0"/>
    <stop offset="1" stop-color="#1a1206" stop-opacity="0.8"/>
  </radialGradient>
  <filter id="fInk" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="29" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fGrain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="13"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.1 -0.4"/>
  </filter>
  <style>
    .o { stroke:#1b130d; stroke-width:3.5; stroke-linejoin:round; stroke-linecap:round; }
    .l { fill:none; stroke:#1b130d; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }
    .t { fill:none; stroke:#1b130d; stroke-width:2; stroke-linecap:round; opacity:.55; }
  </style>
</defs>

<!-- cer și nori (în afara filtrului, ca norii să poată pluti) -->
<rect x="0" y="0" width="1600" height="560" fill="url(#gSky)"/>
<circle cx="1380" cy="150" r="150" fill="url(#gCandle)"/>
<circle cx="1380" cy="150" r="46" fill="#fff3cf"/>
<path class="cloud" d="M700 150 q30 -38 76 -16 q34 -34 78 -2 q52 -6 56 30 Z" fill="#f4efe0" opacity=".9"/>
<path class="cloud slow" d="M1000 240 q24 -28 58 -12 q26 -24 60 -2 q38 -4 42 22 Z" fill="#f4efe0" opacity=".8"/>

<g filter="url(#fInk)">

  <!-- acoperișuri și copaci în depărtare -->
  <path d="M620 470 L700 430 L780 470 L860 440 L940 470 L1040 420 L1140 470 L1240 440 L1340 470 L1440 430 L1540 470 L1620 450 V560 H620 Z" fill="#8a9a7a" class="o"/>
  <g fill="#6a7a5a" class="o"><circle cx="900" cy="440" r="40"/><circle cx="1260" cy="436" r="46"/><circle cx="1480" cy="450" r="34"/></g>

  <!-- pământul curții -->
  <rect x="-20" y="540" width="1640" height="380" fill="url(#gFloor)"/>
  <path d="M-20 560 H1620" stroke="#8a6f44" stroke-width="5"/>
  <g fill="none" stroke="#8a6f44" stroke-width="4" stroke-linecap="round" opacity=".7">
    <path d="M120 720 q30 -12 60 0 M520 800 q30 -12 60 0 M700 760 q30 -12 60 0 M1100 820 q30 -12 60 0 M1320 760 q30 -12 60 0 M880 850 q30 -12 60 0"/>
  </g>
  <g fill="#7f8f4a" class="o">
    <path d="M40 700 l8 -26 l8 26 l8 -30 l8 30 Z"/><path d="M620 690 l8 -24 l8 24 l8 -28 l8 28 Z"/><path d="M1220 700 l8 -24 l8 24 l8 -28 l8 28 Z"/>
  </g>

  <!-- ===== gardul și copacul ===== -->
  <g class="vol">
    <path d="M640 474 H1200 M640 548 H1200" stroke="#1b130d" stroke-width="14" stroke-linecap="round"/>
    <path d="M640 474 H1200 M640 548 H1200" stroke="#8a6a4a" stroke-width="8" stroke-linecap="round"/>
    <g fill="#a8845a" class="o">
      <path d="M660 600 V450 L674 432 L688 450 V600 Z"/><path d="M722 600 V450 L736 432 L750 450 V600 Z"/>
      <path d="M784 600 V450 L798 432 L812 450 V600 Z"/><path d="M846 600 V450 L860 432 L874 450 V600 Z"/>
      <path d="M908 600 V450 L922 432 L936 450 V600 Z"/><path d="M970 600 V450 L984 432 L998 450 V600 Z"/>
      <path d="M1032 600 V450 L1046 432 L1060 450 V600 Z"/><path d="M1094 600 V450 L1108 432 L1122 450 V600 Z"/>
    </g>
    <rect x="1176" y="400" width="30" height="230" fill="#6b4a2c" class="o"/>
    <path d="M1170 400 L1191 376 L1212 400 Z" fill="#4a2e19" class="o"/>
  </g>
  <path d="M700 470 Q704 380 690 300 M694 340 Q660 300 648 250 M696 320 Q730 280 742 226 M676 290 Q664 268 668 240 M730 270 Q752 260 764 238 M692 300 Q700 250 690 200" fill="none" stroke="#3a2416" stroke-width="13" stroke-linecap="round"/>
  <g fill="#d9862f" class="o">
    <ellipse cx="648" cy="246" rx="11" ry="7"/><ellipse cx="744" cy="222" rx="11" ry="7"/><ellipse cx="766" cy="236" rx="10" ry="6"/><ellipse cx="690" cy="198" rx="11" ry="7"/><ellipse cx="668" cy="238" rx="10" ry="6"/>
  </g>
  <g fill="#d9862f" stroke="#1b130d" stroke-width="2">
    <ellipse class="leaf" cx="720" cy="260" rx="9" ry="6"/>
    <ellipse class="leaf" style="animation-delay:-3s" cx="660" cy="280" rx="8" ry="5"/>
    <ellipse class="leaf" style="animation-delay:-6s" cx="750" cy="250" rx="9" ry="6"/>
  </g>

  <!-- ===== strada: trăsura ===== -->
  <g class="vol">
    <ellipse cx="1420" cy="676" rx="210" ry="14" fill="#000" opacity=".3"/>
    <path d="M1500 470 H1620" stroke="#1b130d" stroke-width="6"/>
    <path d="M1276 430 Q1276 404 1302 404 H1480 Q1506 404 1506 430 V566 H1276 Z" fill="#1c1a1e" class="o"/>
    <path d="M1276 430 Q1276 404 1302 404 H1480 Q1506 404 1506 430" fill="none" stroke="#4a4850" stroke-width="5"/>
    <rect x="1300" y="428" width="92" height="66" fill="#5f7f8a" class="o"/>
    <path d="M1310 438 l24 40" stroke="#dfeaec" stroke-width="5" stroke-linecap="round" opacity=".7"/>
    <path d="M1404 420 V566" class="t"/>
    <circle cx="1424" cy="506" r="6" fill="#c9a24e" class="o"/>
    <path d="M1276 566 H1506 L1530 590 H1256 Z" fill="#2c2a30" class="o"/>
    <rect x="1250" y="596" width="54" height="10" fill="#4a4850" class="o"/>
    <!-- capra vizitiului -->
    <path d="M1506 470 H1576 V540 H1506 Z" fill="#2c2a30" class="o"/>
    <rect x="1500" y="456" width="86" height="16" fill="#6d2b2b" class="o"/>
    <!-- roți -->
    <g>
      <circle cx="1326" cy="622" r="58" fill="none" stroke="#1b130d" stroke-width="16"/>
      <circle cx="1326" cy="622" r="58" fill="none" stroke="#7a3b1e" stroke-width="8"/>
      <path d="M1326 564 V680 M1268 622 H1384 M1285 581 L1367 663 M1367 581 L1285 663" stroke="#7a3b1e" stroke-width="5"/>
      <circle cx="1326" cy="622" r="11" fill="#c9a24e" class="o"/>
      <circle cx="1486" cy="622" r="58" fill="none" stroke="#1b130d" stroke-width="16"/>
      <circle cx="1486" cy="622" r="58" fill="none" stroke="#7a3b1e" stroke-width="8"/>
      <path d="M1486 564 V680 M1428 622 H1544 M1445 581 L1527 663 M1527 581 L1445 663" stroke="#7a3b1e" stroke-width="5"/>
      <circle cx="1486" cy="622" r="11" fill="#c9a24e" class="o"/>
    </g>
  </g>
  <!-- vizitiul, așezat pe capră, cu fața spre cai -->
  <g class="vol breath" style="animation-delay:-4s"><g transform="translate(-16 0)">
    <path d="M1548 526 H1616 V536 H1548 Z" fill="#2c2a30" class="o"/>
    <!-- picioarele: coapsele pe capră, gambele în jos, pe scândura de picioare -->
    <path d="M1566 464 L1584 464 L1584 522 L1568 522 Z" fill="#3e3226" class="o"/>
    <path d="M1520 446 L1588 448 Q1600 460 1592 474 L1520 474 Z" fill="#5a4a38" class="o"/>
    <path d="M1576 462 L1598 462 L1598 522 L1580 522 Z" fill="#5a4a38" class="o"/>
    <ellipse cx="1580" cy="526" rx="12" ry="6" fill="#14100c" class="o"/>
    <ellipse cx="1594" cy="526" rx="13" ry="7" fill="#14100c" class="o"/>
    <!-- biciul, ținut drept în sus -->
    <path d="M1582 300 Q1560 290 1564 310 Q1570 328 1552 334" fill="none" stroke="#1b130d" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M1594 440 L1582 300" stroke="#1b130d" stroke-width="7" stroke-linecap="round"/>
    <path d="M1594 440 L1582 300" stroke="#6b4a2c" stroke-width="3.5" stroke-linecap="round"/>
    <!-- haina, cu poala peste genunchi -->
    <path d="M1514 402 Q1542 386 1570 398 L1578 470 Q1546 480 1508 472 Z" fill="#3d4a3a" class="o"/>
    <path d="M1528 450 Q1558 446 1586 454 L1584 474 Q1556 480 1526 474 Z" fill="#3d4a3a" class="o"/>
    <path d="M1540 456 q20 -2 40 4" class="t"/>
    <!-- brațul din spate, cu hățurile -->
    <path d="M1526 412 Q1544 444 1584 446" fill="none" stroke="#1b130d" stroke-width="20" stroke-linecap="round"/>
    <path d="M1526 412 Q1544 444 1584 446" fill="none" stroke="#33402f" stroke-width="13" stroke-linecap="round"/>
    <circle cx="1588" cy="447" r="7" fill="#c99a78" class="o"/>
    <!-- pelerina -->
    <path d="M1508 406 Q1542 386 1576 402 L1584 434 Q1544 448 1502 434 Z" fill="#4c5c45" class="o"/>
    <path d="M1522 432 q4 -10 2 -20 M1564 434 q-2 -10 0 -20" class="t"/>
    <!-- brațul din față -->
    <path d="M1558 412 Q1566 440 1590 440" fill="none" stroke="#1b130d" stroke-width="22" stroke-linecap="round"/>
    <path d="M1558 412 Q1566 440 1590 440" fill="none" stroke="#4c5c45" stroke-width="15" stroke-linecap="round"/>
    <path d="M1592 442 Q1608 448 1620 454 M1588 449 Q1606 456 1620 460" fill="none" stroke="#1b130d" stroke-width="2.5"/>
    <circle cx="1594" cy="439" r="8" fill="#d9a983" class="o"/>
    <!-- fularul -->
    <path d="M1526 384 Q1546 396 1566 384 L1568 396 Q1546 410 1524 396 Z" fill="#8a2019" class="o"/>
    <path d="M1530 398 L1524 424 L1536 422 L1538 400 Z" fill="#8a2019" class="o"/>
    <circle cx="1552" cy="402" r="3" fill="#d9a441"/>
    <!-- capul, întors spre cai -->
    <rect x="1538" y="368" width="16" height="18" fill="#d9a983"/>
    <ellipse cx="1524" cy="356" rx="5" ry="8" fill="#d9a983" class="o"/>
    <ellipse cx="1546" cy="354" rx="23" ry="26" fill="#d9a983" class="o"/>
    <path d="M1524 340 Q1520 364 1534 378 L1540 370 Q1530 358 1531 340 Z" fill="#8c8c90" stroke="#1b130d" stroke-width="1.6" stroke-linejoin="round"/>
    <g fill="#c9605a" opacity=".45"><ellipse cx="1538" cy="364" rx="6" ry="4"/><ellipse cx="1564" cy="364" rx="4" ry="4"/></g>
    <ellipse cx="1546" cy="350" rx="5" ry="6" fill="#fff"/><ellipse cx="1562" cy="350" rx="4.5" ry="6" fill="#fff"/>
    <circle cx="1548.5" cy="351" r="2.8" fill="#1b130d"/><circle cx="1564" cy="351" r="2.6" fill="#1b130d"/>
    <circle cx="1549.4" cy="349.6" r="1" fill="#fff"/><circle cx="1564.8" cy="349.6" r="1" fill="#fff"/>
    <g class="blink" style="animation-delay:-1.3s"><ellipse cx="1546" cy="350" rx="6.5" ry="7" fill="#d9a983"/><ellipse cx="1562" cy="350" rx="6" ry="7" fill="#d9a983"/><path d="M1540 351 q6 3 12 0 M1557 351 q5 3 10 0" class="l"/></g>
    <path d="M1539 341 q6 -4 12 -1 M1557 340 q6 -3 11 1" fill="none" stroke="#5a5a60" stroke-width="3.5" stroke-linecap="round"/>
    <ellipse cx="1560" cy="361" rx="5" ry="4.5" fill="#c98466" stroke="#1b130d" stroke-width="2"/>
    <path d="M1559 367 Q1550 364 1540 371 Q1549 369 1554 371 Q1558 370 1560 369 Q1563 370 1567 371 Q1573 369 1578 370 Q1569 364 1561 367 Z" fill="#8c8c90" stroke="#1b130d" stroke-width="1.5" stroke-linejoin="round"/>
    <!-- jobenul -->
    <path d="M1528 300 Q1546 294 1564 300 L1562 332 L1530 332 Z" fill="#1c1a1e" class="o"/>
    <rect x="1530" y="322" width="32" height="8" fill="#6d2b2b"/>
    <path d="M1535 304 V320" stroke="#4a4850" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="1546" cy="333" rx="30" ry="6" fill="#1c1a1e" class="o"/>
  </g></g>

  <!-- ===== casa Tulea ===== -->
  <g class="vol">
    <rect x="-20" y="150" width="650" height="474" fill="url(#gWall)" class="o"/>
    <path d="M-40 156 L300 22 L666 156 Z" fill="#7a3b2a" class="o"/>
    <path d="M40 126 H570 M110 98 H500 M180 70 H430" stroke="#5a2a1e" stroke-width="4"/>
    <rect x="470" y="40" width="50" height="80" fill="#8a4a3a" class="o"/>
    <rect x="-20" y="150" width="650" height="16" fill="#3a2416" class="o"/>
    <path d="M30 420 l22 40 l-14 30 M590 250 l-16 34 l12 26" class="t"/>
    <rect x="-20" y="560" width="650" height="64" fill="#8a7450" class="o"/>
    <!-- ușa -->
    <rect x="380" y="232" width="172" height="392" fill="#4a2e19" class="o"/>
    <rect x="396" y="248" width="140" height="376" fill="#22150c"/>
    <path d="M380 232 Q466 190 552 232 Z" fill="#3a2416" class="o"/>
    <rect x="352" y="606" width="228" height="22" fill="#9a8a6a" class="o"/><rect x="336" y="626" width="260" height="22" fill="#8a7a5a" class="o"/>
    <!-- fereastra -->
    <rect x="104" y="244" width="204" height="224" fill="#5a3a20" class="o"/>
    <rect x="120" y="260" width="172" height="192" fill="#3d5560"/>
    <rect x="96" y="464" width="220" height="16" fill="#3a2416" class="o"/>
    <path d="M236 464 V440 Q250 426 264 440 V464 Z" fill="#a8452f" class="o"/>
    <path d="M250 440 q-10 -20 -20 -22 M250 440 q4 -22 14 -26" class="l"/>
    <circle cx="230" cy="416" r="6" fill="#d9507a" class="o"/><circle cx="264" cy="412" r="6" fill="#d9507a" class="o"/>
  </g>

  <!-- Aurica, la fereastră -->
  <g>
    <path d="M166 452 Q170 400 206 396 Q242 400 246 452 Z" fill="#c58a96" class="o"/>
    <rect x="198" y="370" width="16" height="30" fill="#efd0b4"/>
    <path d="M198 370 V400 M214 370 V400" class="l"/>
    <ellipse cx="206" cy="344" rx="25" ry="36" fill="#efd0b4" class="o"/>
    <path d="M181 340 Q180 304 206 304 Q232 304 231 340 Q222 320 206 324 Q190 320 181 340 Z" fill="#8a6a44" class="o"/>
    <path d="M194 300 L206 308 L218 300 L214 314 L198 314 Z" fill="#a8452f" class="o"/>
    <g transform="translate(5 0)"><ellipse cx="197" cy="344" rx="5" ry="5" fill="#fff"/></g><g transform="translate(5 0)"><circle cx="199.5" cy="344" r="2.8" fill="#1b130d"/></g>
    <g transform="translate(5 0)"><ellipse cx="216" cy="344" rx="5" ry="5" fill="#fff"/></g><g transform="translate(5 0)"><circle cx="218.5" cy="344" r="2.8" fill="#1b130d"/></g>
    <g transform="translate(5 0)"><path d="M206 350 q-3 9 2 11" class="l"/></g>
    <g transform="translate(5 0)"><path d="M198 366 Q206 362 214 366" class="l"/></g>
    <g transform="translate(5 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="192" cy="356" rx="6" ry="4"/><ellipse cx="220" cy="356" rx="6" ry="4"/></g></g>
    <g transform="translate(5 0)"><g class="blink" style="animation-delay:-2.1s"><ellipse cx="197" cy="344" rx="6.5" ry="6" fill="#efd0b4"/><path d="M191 345 q6 3 12 0" class="l"/><ellipse cx="216" cy="344" rx="6.5" ry="6" fill="#efd0b4"/><path d="M210 345 q6 3 12 0" class="l"/></g></g>
  </g>
  <path d="M120 260 Q150 340 126 452 L158 452 Q150 340 170 260 Z" fill="#efe8d6" class="o sway"/>
  <path d="M292 260 Q262 340 286 452 L254 452 Q262 340 242 260 Z" fill="#efe8d6" class="o sway" style="animation-delay:-4s"/>

  <!-- ===== Aglae, în ușă ===== -->
  <g class="vol breath" style="animation-delay:-1s">
    <path d="M418 394 Q466 364 514 394 L530 608 L402 608 Z" fill="#3b2a4a" class="o"/>
    <path d="M440 420 L436 600 M492 420 L498 600" class="t"/>
    <path d="M416 452 Q466 430 516 452 L512 486 Q466 468 420 486 Z" fill="#4a3860" class="o"/>
    <circle cx="430" cy="470" r="11" fill="#e8c3a0" class="o"/><circle cx="502" cy="470" r="11" fill="#e8c3a0" class="o"/>
    <rect x="454" y="356" width="24" height="30" fill="#e8c3a0"/>
    <path d="M454 356 V386 M478 356 V386" class="l"/>
    <path d="M440 384 Q466 410 492 384 L486 372 L446 372 Z" fill="#efe8d6" class="o"/>
    <circle cx="466" cy="394" r="6" fill="#a8452f" class="o"/>
    <circle cx="466" cy="276" r="20" fill="#6f6259" class="o"/>
    <ellipse cx="466" cy="326" rx="37" ry="41" fill="#e8c3a0" class="o"/>
    <path d="M430 318 Q432 282 466 282 Q500 282 502 318 Q486 296 466 298 Q446 296 430 318 Z" fill="#6f6259" class="o"/>
    <g transform="translate(8 0)"><path d="M444 318 L460 326 M488 318 L472 326" class="l"/></g>
    <g transform="translate(8 0)"><ellipse cx="453" cy="332" rx="6" ry="5" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="456" cy="332" r="3.2" fill="#1b130d"/></g><g transform="translate(8 0)"><ellipse cx="479" cy="332" rx="6" ry="5" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="482" cy="332" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(8 0)"><path d="M466 336 q-6 11 2 13" class="l"/></g>
    <g transform="translate(8 0)"><path d="M452 358 Q466 350 480 358" class="l"/></g>
    <g transform="translate(8 0)"><path d="M448 354 q-4 7 0 12 M484 354 q4 7 0 12" class="t"/></g>
    <circle cx="432" cy="342" r="4" fill="#e8c14e" class="o"/><circle cx="500" cy="342" r="4" fill="#e8c14e" class="o"/>
    <circle cx="506" cy="520" r="9" fill="none" stroke="#1b130d" stroke-width="7"/><circle cx="506" cy="520" r="9" fill="none" stroke="#c9a24e" stroke-width="3"/>
    <path d="M504 530 l-4 22 M510 530 l6 20" stroke="#9aa3a0" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(8 0)"><g class="blink" style="animation-delay:-4.2s"><ellipse cx="453" cy="332" rx="6" ry="5.5" fill="#e8c3a0"/><path d="M447 333 q6 4 12 0" class="l"/><ellipse cx="479" cy="332" rx="6" ry="5.5" fill="#e8c3a0"/><path d="M473 333 q6 4 12 0" class="l"/></g></g>
  </g>

  <!-- ===== Olimpia, cu copilul ===== -->
  <ellipse cx="602" cy="646" rx="74" ry="9" fill="#000" opacity=".3"/>
  <g class="vol breath" style="animation-delay:-6s">
    <path d="M556 432 Q602 402 648 432 L666 644 L540 644 Z" fill="#7d8f62" class="o"/>
    <path d="M574 520 L568 636 M630 520 L638 636" class="t"/>
    <g transform="rotate(9 602 401)"><rect x="590" y="392" width="24" height="34" fill="#efcdb0"/></g>
    <g transform="rotate(9 602 401)"><path d="M590 392 V426 M614 392 V426" class="l"/></g>
    <g transform="rotate(9 602 401)"><ellipse cx="602" cy="362" rx="40" ry="39" fill="#efcdb0" class="o"/></g>
    <g transform="rotate(9 602 401)"><path d="M563 354 Q563 318 602 318 Q641 318 641 354 Q622 334 602 336 Q582 334 563 354 Z" fill="#3a2a22" class="o"/></g>
    <g transform="rotate(9 602 401)"><circle cx="563" cy="366" r="15" fill="#3a2a22" class="o"/></g>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><path d="M578 360 q10 6 20 0 M606 360 q10 6 20 0" class="l"/></g></g>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><ellipse cx="588" cy="370" rx="6" ry="5" fill="#fff"/></g></g><g transform="rotate(9 602 401)"><g transform="translate(7 0)"><circle cx="591" cy="373" r="3" fill="#1b130d"/></g></g>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><ellipse cx="616" cy="370" rx="6" ry="5" fill="#fff"/></g></g><g transform="rotate(9 602 401)"><g transform="translate(7 0)"><circle cx="619" cy="373" r="3" fill="#1b130d"/></g></g>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><path d="M602 374 q-5 9 2 11" class="l"/></g></g>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><path d="M590 394 Q602 388 614 394" class="l"/></g></g>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="578" cy="384" rx="8" ry="5"/><ellipse cx="628" cy="384" rx="8" ry="5"/></g></g></g>
    <!-- copilul înfășat -->
    <path d="M552 480 Q556 448 604 446 Q652 448 656 480 Q652 508 604 510 Q556 508 552 480 Z" fill="#efe8d6" class="o"/>
    <path d="M566 470 q38 16 76 0 M572 492 q32 10 64 0" class="t"/>
    <circle cx="634" cy="462" r="13" fill="#f2d2b6" class="o"/>
    <path d="M628 462 q6 4 12 0" class="l"/>
    <g transform="rotate(9 602 401)"><g transform="translate(7 0)"><g class="blink" style="animation-delay:-2.7s"><ellipse cx="588" cy="370" rx="7.5" ry="6.5" fill="#efcdb0"/><path d="M581 371 q7 4 14 0" class="l"/><ellipse cx="616" cy="370" rx="7.5" ry="6.5" fill="#efcdb0"/><path d="M609 371 q7 4 14 0" class="l"/></g></g></g>
  </g>

  <!-- ===== cutia de scrisori, pe stâlp ===== -->
  <g class="vol">
    <rect x="688" y="476" width="14" height="170" fill="#6b4a2c" class="o"/>
    <path d="M668 440 Q668 420 695 420 Q722 420 722 440 V482 H668 Z" fill="#4a5a6a" class="o"/>
    <rect x="678" y="446" width="34" height="6" fill="#1b130d"/>
    <path d="M722 448 h12 v-16 h10" fill="none" stroke="#a8452f" stroke-width="5" stroke-linecap="round"/>
    <path d="M682 468 l10 -8 l10 8" class="t"/>
  </g>

  <!-- ===== Titi la șevalet ===== -->
  <ellipse cx="800" cy="700" rx="130" ry="11" fill="#000" opacity=".3"/>
  <g class="vol">
    <path d="M846 660 L880 400 M950 660 L916 400 M898 400 L898 640" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/>
    <path d="M846 660 L880 400 M950 660 L916 400 M898 400 L898 640" stroke="#8a6a4a" stroke-width="6" stroke-linecap="round"/>
    <rect x="846" y="404" width="104" height="128" fill="#efe8d6" class="o"/>
    <path d="M846 492 Q880 470 910 488 Q930 476 950 490 V532 H846 Z" fill="#7f9f8a"/>
    <path d="M846 470 Q880 452 950 468 V490 Q930 476 910 488 Q880 470 846 492 Z" fill="#9fb7c6"/>
    <path d="M872 486 V452 M872 460 q-10 -8 -14 -18 M872 456 q10 -8 14 -18" stroke="#3a5a3a" stroke-width="4" fill="none" stroke-linecap="round"/>
    <circle cx="924" cy="430" r="9" fill="#f0d68c"/>
    <rect x="846" y="532" width="104" height="10" fill="#6b4a2c" class="o"/>
    <rect x="850" y="396" width="34" height="24" fill="#f3ecd6" class="o" transform="rotate(-8 867 408)"/>
  </g>
  <g class="vol rock">
    <path d="M722 598 H800 M728 598 V694 M794 598 V694 M714 700 Q762 712 810 700" stroke="#1b130d" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M722 598 H800 M728 598 V694 M794 598 V694 M714 700 Q762 712 810 700" stroke="#6b4a2c" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M762 596 L836 600 L844 690 L812 690 L806 632 L762 630 Z" fill="#45434a" class="o"/>
    <ellipse cx="832" cy="694" rx="26" ry="9" fill="#14100c" class="o"/>
    <path d="M722 502 Q762 478 802 502 L808 610 L718 610 Z" fill="#6f7f9a" class="o"/>
    <path d="M740 520 q22 10 44 0" class="t"/>
    <path d="M796 518 Q826 512 842 494" fill="none" stroke="#1b130d" stroke-width="26" stroke-linecap="round"/>
    <path d="M796 518 Q826 512 842 494" fill="none" stroke="#6f7f9a" stroke-width="19" stroke-linecap="round"/>
    <circle cx="846" cy="490" r="11" fill="#f0c9a6" class="o"/>
    <path class="stitch l" style="transform-origin: 0 100%" d="M850 486 L872 470"/>
    <rect x="753" y="460" width="18" height="32" fill="#f0c9a6"/>
    <path d="M753 460 V492 M771 460 V492" class="l"/>
    <ellipse cx="762" cy="430" rx="32" ry="37" fill="#f0c9a6" class="o"/>
    <path d="M730 430 Q728 390 762 390 Q796 390 794 430 Q788 404 762 408 Q740 404 730 430 Z" fill="#7a5a3a" class="o"/>
    <path d="M762 392 V410" class="t"/>
    <g transform="translate(7 0)"><ellipse cx="752" cy="432" rx="6" ry="7" fill="#fff"/></g><g transform="translate(7 0)"><circle cx="755" cy="433" r="3.5" fill="#1b130d"/></g>
    <g transform="translate(7 0)"><ellipse cx="776" cy="432" rx="6" ry="7" fill="#fff"/></g><g transform="translate(7 0)"><circle cx="779" cy="433" r="3.5" fill="#1b130d"/></g>
    <g transform="translate(7 0)"><path d="M764 438 q-4 9 3 11" class="l"/></g>
    <g transform="translate(7 0)"><ellipse cx="766" cy="456" rx="6" ry="4" fill="#b5625a" class="o"/></g>
    <g transform="translate(7 0)"><g fill="#c9605a" opacity=".4"><ellipse cx="744" cy="446" rx="7" ry="5"/><ellipse cx="784" cy="446" rx="7" ry="5"/></g></g>
    <g transform="translate(7 0)"><g class="blink" style="animation-delay:-0.9s"><ellipse cx="752" cy="432" rx="7.5" ry="8" fill="#f0c9a6"/><path d="M745 433 q7 4 14 0" class="l"/><ellipse cx="776" cy="432" rx="7.5" ry="8" fill="#f0c9a6"/><path d="M769 433 q7 4 14 0" class="l"/></g></g>
  </g>

  <!-- ===== cufărul ===== -->
  <g class="vol">
    <ellipse cx="950" cy="800" rx="74" ry="9" fill="#000" opacity=".3"/>
    <path d="M892 742 Q892 716 918 716 H982 Q1008 716 1008 742 V796 H892 Z" fill="#7a5230" class="o"/>
    <path d="M892 744 H1008 M918 716 V796 M982 716 V796" class="l"/>
    <rect x="940" y="738" width="20" height="16" fill="#c9a24e" class="o"/>
  </g>

  <!-- ===== Simion și Stănică ===== -->
  <ellipse cx="1070" cy="696" rx="150" ry="12" fill="#000" opacity=".3"/>
  <g class="vol breath" style="animation-delay:-3s">
    <ellipse cx="988" cy="690" rx="24" ry="9" fill="#7c3333" class="o"/><ellipse cx="1036" cy="692" rx="24" ry="9" fill="#7c3333" class="o"/>
    <path d="M966 474 Q1010 448 1054 474 L1068 688 L952 688 Z" fill="#ebe5d4" class="o"/>
    <path d="M990 600 Q996 650 988 686 M1034 600 Q1030 650 1038 686" class="t"/>
    <path d="M958 478 Q1010 446 1062 478 L1070 560 Q1010 540 950 560 Z" fill="#8a6a4a" class="o"/>
    <path d="M956 556 l-4 14 M972 552 l-2 14 M1050 552 l2 14 M1066 556 l4 14" class="l"/>
    <g transform="rotate(-4 1010 443)"><ellipse cx="972" cy="410" rx="6" ry="10" fill="#e6bd98" class="o"/></g>
    <g transform="rotate(-4 1010 443)"><ellipse cx="1010" cy="404" rx="37" ry="39" fill="#e6bd98" class="o"/></g>
    <g transform="rotate(-4 1010 443)"><path d="M974 390 Q980 360 1010 362 Q1040 360 1046 390" fill="none" stroke="#f4f1ea" stroke-width="10" stroke-linecap="round"/></g>
    <g transform="rotate(-4 1010 443)"><g transform="translate(7 0)"><path d="M978 414 Q982 470 1010 476 Q1038 470 1042 414 Q1026 432 1010 428 Q994 432 978 414 Z" fill="#f4f1ea" class="o"/></g></g>
    <g transform="rotate(-4 1010 443)"><g transform="translate(7 0)"><path d="M990 400 q7 -7 14 0 M1016 400 q7 -7 14 0" class="l"/></g></g>
    <g transform="rotate(-4 1010 443)"><g transform="translate(7 0)"><path d="M1010 404 q-5 10 2 12" class="l"/></g></g>
    <g transform="rotate(-4 1010 443)"><g transform="translate(7 0)"><path d="M996 432 Q1010 446 1024 432" fill="#7a3a34" class="o"/></g></g>
    <g transform="rotate(-4 1010 443)"><g transform="translate(7 0)"><g fill="#c9605a" opacity=".4"><ellipse cx="986" cy="416" rx="8" ry="5"/><ellipse cx="1034" cy="416" rx="8" ry="5"/></g></g></g>
    <!-- gherghef -->
    <circle cx="1004" cy="560" r="32" fill="#efe4c4" class="o"/>
    <circle cx="1004" cy="560" r="32" fill="none" stroke="#7a5230" stroke-width="7"/>
    <path d="M986 552 l7 12 l7 -12 l7 12 l7 -12" fill="none" stroke="#a8452f" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="974" cy="572" r="11" fill="#e6bd98" class="o"/>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><text x="1004" y="582" font-size="6" fill="#a8452f">Simion</text></g>
  </g>
  <g class="vol fidget" style="animation-delay:-5s">
    <ellipse cx="1088" cy="692" rx="28" ry="10" fill="#14100c" class="o"/><ellipse cx="1150" cy="694" rx="28" ry="10" fill="#14100c" class="o"/>
    <path d="M1078 570 L1068 686 L1108 686 L1118 600 L1132 688 L1172 688 L1164 570 Z" fill="#45434a" class="o"/>
    <path d="M1052 424 Q1112 388 1172 424 L1188 588 Q1112 610 1040 588 Z" fill="#2c2622" class="o"/>
    <path d="M1112 420 V596 M1090 420 L1078 480 M1134 420 L1146 476" class="t"/>
    <circle cx="1120" cy="480" r="4" fill="#c99a4a"/><circle cx="1120" cy="520" r="4" fill="#c99a4a"/>
    <path d="M1090 410 L1112 440 L1134 410 Z" fill="#efe8d6" class="o"/>
    <path d="M1106 424 L1118 424 L1114 458 L1110 458 Z" fill="#8f2c2c" class="o"/>
    <rect x="1098" y="372" width="28" height="30" fill="#e3ad85"/>
    <path d="M1098 372 V402 M1126 372 V402" class="l"/>
    <ellipse cx="1156" cy="338" rx="8" ry="12" fill="#d59c75" class="o"/>
    <path d="M1068 328 Q1066 288 1112 288 Q1158 288 1156 332 Q1158 380 1113 386 Q1070 382 1068 328 Z" fill="#e3ad85" class="o"/>
    <g transform="translate(-9 0)"><ellipse cx="1090" cy="332" rx="9" ry="7" fill="#fff"/></g><g transform="translate(-9 0)"><circle class="glance" cx="1094" cy="333" r="4" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><ellipse cx="1118" cy="332" rx="8" ry="7" fill="#fff"/></g><g transform="translate(-9 0)"><circle class="glance" cx="1122" cy="333" r="4" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><path d="M1080 318 L1100 314 M1110 314 L1130 320" class="l"/></g>
    <g transform="translate(-9 0)"><path d="M1104 334 Q1114 348 1104 352" class="l"/></g>
    <path d="M1076 360 Q1090 350 1106 358 Q1122 350 1136 358 Q1122 370 1106 364 Q1090 370 1076 360 Z" fill="#1b130d"/>
    <g transform="translate(-9 0)"><path d="M1094 374 Q1108 382 1122 372" class="l"/></g>
    <path d="M1066 298 Q1068 238 1112 236 Q1156 238 1158 298 Z" fill="#17130f" class="o"/>
    <g transform="translate(-9 0)"><ellipse cx="1112" cy="298" rx="64" ry="11" fill="#17130f" class="o"/></g>
    <path d="M1068 286 L1156 286" stroke="#4a3a2a" stroke-width="6"/>
    <g transform="translate(-9 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="1080" cy="352" rx="9" ry="6"/><ellipse cx="1136" cy="350" rx="8" ry="5"/></g></g>
    <g transform="translate(-9 0)"><g class="blink" style="animation-delay:-1.2s"><ellipse cx="1090" cy="332" rx="10" ry="8" fill="#e3ad85"/><path d="M1080 333 q10 4 20 0" class="l"/><ellipse cx="1118" cy="332" rx="9" ry="8" fill="#e3ad85"/><path d="M1109 333 q9 4 18 0" class="l"/></g></g>
    <!-- mâna care îl ține de braț -->
    <path d="M1058 440 Q1038 490 1052 530" fill="none" stroke="#1b130d" stroke-width="38" stroke-linecap="round"/>
    <path d="M1058 440 Q1038 490 1052 530" fill="none" stroke="#2c2622" stroke-width="31" stroke-linecap="round"/>
    <circle cx="1052" cy="540" r="14" fill="#e3ad85" class="o"/>
    <!-- mâna care arată spre trăsură -->
    <path d="M1166 438 Q1212 430 1246 412" fill="none" stroke="#1b130d" stroke-width="36" stroke-linecap="round"/>
    <path d="M1166 438 Q1212 430 1246 412" fill="none" stroke="#2c2622" stroke-width="29" stroke-linecap="round"/>
    <circle cx="1254" cy="408" r="13" fill="#e3ad85" class="o"/>
    <path d="M1264 404 L1284 396" stroke="#1b130d" stroke-width="10" stroke-linecap="round"/><path d="M1264 404 L1284 396" stroke="#e3ad85" stroke-width="5" stroke-linecap="round"/>
    <path d="M1140 548 h36" class="l"/>
    <path d="M1146 548 L1150 524 L1170 526 L1168 548 Z" fill="#efe4c4" class="o"/>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><text x="1158" y="540" font-size="4.5" transform="rotate(4 1158 540)">BILET</text></g>
  </g>

  <!-- ===== găinile ===== -->
  <g>
    <ellipse cx="300" cy="792" rx="46" ry="8" fill="#000" opacity=".3"/>
    <path d="M262 770 Q262 738 300 738 Q340 738 336 772 Q320 790 290 788 Q262 786 262 770 Z" fill="#b5623a" class="o"/>
    <path d="M334 760 l22 -16 l-6 26 Z" fill="#8a4a2a" class="o"/>
    <path d="M284 788 v14 M306 788 v14" class="l"/>
    <g class="peck">
      <circle cx="266" cy="742" r="15" fill="#b5623a" class="o"/>
      <path d="M252 742 l-14 5 l14 4 Z" fill="#e8c14e" class="o"/>
      <path d="M260 728 q4 -10 10 -2 q6 -8 8 4" fill="#a8452f" class="o"/>
      <circle cx="262" cy="740" r="2.5" fill="#1b130d"/>
    </g>
    <ellipse cx="410" cy="826" rx="42" ry="8" fill="#000" opacity=".3"/>
    <path d="M376 806 Q376 778 410 778 Q446 778 442 808 Q428 824 402 822 Q376 820 376 806 Z" fill="#efe8d6" class="o"/>
    <path d="M440 798 l20 -14 l-6 24 Z" fill="#d8cfb8" class="o"/>
    <path d="M396 822 v12 M416 822 v12" class="l"/>
    <g class="peck" style="animation-delay:-1.6s">
      <circle cx="380" cy="782" r="14" fill="#efe8d6" class="o"/>
      <path d="M367 782 l-13 5 l13 4 Z" fill="#e8c14e" class="o"/>
      <path d="M374 769 q4 -10 10 -2 q6 -8 8 4" fill="#a8452f" class="o"/>
      <circle cx="376" cy="780" r="2.5" fill="#1b130d"/>
    </g>
  </g>

</g>

<!-- ===== detalii mărunte, vizibile doar de aproape ===== -->
<g id="details" font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
  <text x="934" y="526" font-size="6" fill="#3a2416">Titi T.</text>
  <text x="867" y="411" font-size="4.5" transform="rotate(-8 867 408)">Salutări</text>
  <text x="695" y="470" font-size="6" fill="#dfeaec">POȘTA</text>
</g>

<!-- ===== lumini ===== -->
<rect x="0" y="0" width="1600" height="900" fill="#ffb060" opacity="0.08"/>
<path d="M1380 150 L1620 420 L1620 900 L900 900 Z" fill="#fff0c0" opacity="0.06"/>
<rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
<rect x="0" y="0" width="1600" height="900" filter="url(#fGrain)" opacity="0.45"/>

<!-- ===== interioare: se văd doar când sunt deschise ===== -->
<g class="interior" id="in-cufar">
  <rect x="0" y="0" width="1600" height="900" fill="#1a110a"/>
  <g filter="url(#fInk)">
    <rect x="160" y="60" width="1280" height="780" rx="30" fill="#7a5230" class="o"/>
    <rect x="210" y="110" width="1180" height="680" rx="16" fill="#9a7450" class="o"/>
    <path d="M210 330 H1390 M210 560 H1390" class="t"/>
    <g fill="#c9a24e" class="o"><path d="M166 66 h70 l-70 70 Z M1434 66 h-70 l70 70 Z M166 834 h70 l-70 -70 Z M1434 834 h-70 l70 -70 Z"/></g>
    <!-- un singur rând de haine -->
    <rect x="262" y="170" width="380" height="290" fill="#e4dcc6" class="o"/>
    <rect x="282" y="160" width="380" height="280" fill="#efe8d6" class="o"/>
    <path d="M282 300 H662 M430 160 L470 210 L510 160" class="t"/>
    <!-- broderii -->
    <g transform="rotate(-5 950 300)">
      <rect x="760" y="170" width="380" height="270" fill="#efe4c4" class="o"/>
      <g stroke="#a8452f" stroke-width="7" stroke-linecap="round"><path d="M800 220 l24 24 m0 -24 l-24 24 M870 220 l24 24 m0 -24 l-24 24 M940 220 l24 24 m0 -24 l-24 24 M1010 220 l24 24 m0 -24 l-24 24 M1080 220 l24 24 m0 -24 l-24 24"/></g>
      <g stroke="#2f6f68" stroke-width="7" stroke-linecap="round"><path d="M800 380 l24 24 m0 -24 l-24 24 M870 380 l24 24 m0 -24 l-24 24 M940 380 l24 24 m0 -24 l-24 24 M1010 380 l24 24 m0 -24 l-24 24 M1080 380 l24 24 m0 -24 l-24 24"/></g>
      <path d="M860 310 q30 -30 60 0 q30 30 60 0 q30 -30 60 0" fill="none" stroke="#e8c14e" stroke-width="7" stroke-linecap="round"/>
    </g>
    <!-- gheme -->
    <g class="o"><circle cx="330" cy="640" r="62" fill="#a8452f"/><circle cx="470" cy="670" r="54" fill="#2f6f68"/><circle cx="590" cy="630" r="48" fill="#e8c14e"/></g>
    <path d="M290 620 q40 -30 80 6 M300 660 q40 20 70 -10 M436 652 q34 -22 68 8 M560 616 q30 -16 60 6" class="t"/>
    <!-- ochelari și papuci -->
    <g>
      <circle cx="820" cy="640" r="42" fill="#cfe6ea" fill-opacity=".3" class="o"/><circle cx="930" cy="640" r="42" fill="#cfe6ea" fill-opacity=".3" class="o"/>
      <path d="M862 640 H888 M778 636 L740 610 M972 636 L1010 610" class="l"/>
    </g>
    <path d="M1080 700 Q1080 600 1140 596 Q1200 600 1200 700 Q1140 720 1080 700 Z" fill="#7c3333" class="o"/>
    <path d="M1220 700 Q1220 600 1280 596 Q1340 600 1340 700 Q1280 720 1220 700 Z" fill="#7c3333" class="o"/>
    <path d="M1100 640 q40 -20 80 0 M1240 640 q40 -20 80 0" stroke="#5a2020" stroke-width="6" fill="none" class="hi"/>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<g class="interior" id="in-cutie">
  <rect x="0" y="0" width="1600" height="900" fill="#12161a"/>
  <g filter="url(#fInk)">
    <path d="M260 200 Q260 80 800 80 Q1340 80 1340 200 V820 H260 Z" fill="#4a5a6a" class="o"/>
    <path d="M330 240 Q330 150 800 150 Q1270 150 1270 240 V760 H330 Z" fill="#1c2630" class="o"/>
    <rect x="560" y="100" width="480" height="24" fill="#12161a" class="o"/>
    <!-- ușița deschisă -->
    <path d="M260 220 L120 260 V800 L260 820 Z" fill="#5a6a7a" class="o"/>
    <circle cx="160" cy="530" r="14" fill="#c9a24e" class="o"/>
    <!-- ziar rulat -->
    <rect x="390" y="560" width="520" height="90" rx="44" fill="#e4dcc6" class="o"/>
    <ellipse cx="910" cy="605" rx="20" ry="44" fill="#efe8d6" class="o"/>
    <path d="M430 590 H860 M430 616 H820" class="t"/>
    <!-- plic -->
    <g transform="rotate(-7 640 380)">
      <rect x="420" y="270" width="440" height="250" fill="#efe4c4" class="o"/>
      <path d="M420 270 L640 410 L860 270" class="l"/>
      <rect x="780" y="286" width="60" height="70" fill="#a8452f" class="o"/>
    </g>
    <!-- nota avocatului -->
    <g transform="rotate(6 1040 430)">
      <rect x="900" y="300" width="300" height="340" fill="#f3ecd6" class="o"/>
      <path d="M930 400 H1170 M930 440 H1170 M930 480 H1170 M930 520 H1090" class="t"/>
      <circle cx="1130" cy="580" r="30" fill="none" stroke="#24364a" stroke-width="6"/>
    </g>
    <!-- o frunză uscată -->
    <path d="M1040 700 Q1100 660 1160 700 Q1100 740 1040 700 Z" fill="#d9862f" class="o"/>
    <path d="M1040 700 H1160" class="t"/>
  </g>
  <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
    <text x="1050" y="362" font-size="28" transform="rotate(6 1040 430)">AVOCAT</text>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<!-- ===== zone active ===== -->
<g id="hotspots">
  <rect class="hs" data-id="aurica" x="104" y="244" width="204" height="224" rx="14"/>
  <rect class="hs" data-id="aglae" x="404" y="252" width="124" height="356" rx="18"/>
  <rect class="hs" data-id="olimpia" x="540" y="316" width="122" height="330" rx="18"/>
  <rect class="hs" data-id="cutie" x="664" y="414" width="84" height="74" rx="12"/>
  <rect class="hs" data-id="z_m_plic" data-parent="cutie" x="400" y="240" width="480" height="300" rx="16"/>
  <rect class="hs" data-id="z_m_nota" data-parent="cutie" x="890" y="290" width="330" height="370" rx="16"/>
  <rect class="hs" data-id="z_m_ziar" data-parent="cutie" x="380" y="550" width="560" height="110" rx="16"/>
  <rect class="hs" data-id="sevalet" x="712" y="386" width="246" height="290" rx="18"/>
  <rect class="hs" data-id="z_semnatura" data-parent="sevalet" x="908" y="508" width="48" height="28" rx="6"/>
  <rect class="hs" data-id="z_ilustrata" data-parent="sevalet" x="844" y="390" width="46" height="36" rx="8"/>
  <rect class="hs" data-id="z_privire" data-parent="sevalet" x="734" y="408" width="62" height="56" rx="12"/>
  <rect class="hs" data-id="cufar" x="884" y="708" width="132" height="96" rx="14"/>
  <rect class="hs" data-id="z_c_haine" data-parent="cufar" x="254" y="150" width="420" height="320" rx="16"/>
  <rect class="hs" data-id="z_c_broderii" data-parent="cufar" x="740" y="150" width="420" height="310" rx="16"/>
  <rect class="hs" data-id="z_c_gheme" data-parent="cufar" x="262" y="570" width="390" height="170" rx="16"/>
  <rect class="hs" data-id="z_c_ochelari" data-parent="cufar" x="730" y="586" width="290" height="110" rx="16"/>
  <rect class="hs" data-id="z_c_papuci" data-parent="cufar" x="1066" y="586" width="290" height="140" rx="16"/>
  <rect class="hs" data-id="pereche" x="956" y="238" width="336" height="462" rx="20"/>
  <circle class="hs" data-id="z_gherghef" data-parent="pereche" cx="1004" cy="560" r="36"/>
  <rect class="hs" data-id="z_brat" data-parent="pereche" x="1030" y="478" width="46" height="78" rx="10"/>
  <rect class="hs" data-id="z_hartie" data-parent="pereche" x="1138" y="516" width="42" height="40" rx="8"/>
  <rect class="hs" data-id="vizitiu" x="1496" y="290" width="100" height="180" rx="14"/>
  <rect class="hs" data-id="trasura" x="1262" y="400" width="232" height="200" rx="16"/>
  <rect class="hs" data-id="gaini" x="236" y="716" width="230" height="124" rx="16"/>
</g>
</svg>`,

  // n = nume, o = obiecte, f = fapte
  words: {
    aglae:    { text: 'Aglae',    cat: 'n' },
    simion:   { text: 'Simion',   cat: 'n' },
    titi:     { text: 'Titi',     cat: 'n' },
    aurica:   { text: 'Aurica',   cat: 'n' },
    olimpia:  { text: 'Olimpia',  cat: 'n' },
    stanica:  { text: 'Stănică',  cat: 'n' },
    tulea:    { text: 'Tulea',    cat: 'n' },
    ratiu:    { text: 'Rațiu',    cat: 'n' },
    vasiliad: { text: 'Vasiliad', cat: 'n' },
    costache: { text: 'Costache', cat: 'n' },
    trasura:  { text: 'trăsura',  cat: 'o' },
    ospiciu:  { text: 'ospiciu',  cat: 'o' },
    plimbare: { text: 'plimbare', cat: 'o' },
    gherghef: { text: 'gherghef', cat: 'o' },
    averea:   { text: 'averea',   cat: 'o' },
    pacalit:  { text: 'păcălit',  cat: 'f' },
    vindecat: { text: 'vindecat', cat: 'f' }
  },

  people: [
    { id: 'coc',     crop: '396 256 140 140',   first: 'aglae',   last: 'tulea' },
    { id: 'barba',   crop: '940 334 140 140',   first: 'simion',  last: 'tulea' },
    { id: 'pictor',  crop: '694 362 136 136',   first: 'titi',    last: 'tulea' },
    { id: 'geam',    crop: '150 290 112 112',   first: 'aurica',  last: 'tulea' },
    { id: 'copil',   crop: '532 292 140 140',   first: 'olimpia', last: 'ratiu' },
    { id: 'palarie', crop: '1040 240 146 146',  first: 'stanica', last: 'ratiu' }
  ],

  items: {
    internare: {
      kind: 'letter',
      title: 'Biletul din buzunar',
      text: '«Bilet de internare la {ospiciu|ospiciu}. Bolnav: Simion {tulea|Tulea}. Adus de ginerele său, dl. avocat {ratiu|Rațiu}. Certificat medical: Dr. {vasiliad|Vasiliad}.» Nicăieri nu scrie când va ieși {vindecat|vindecat}.',
      icon: '<rect x="14" y="8" width="36" height="48" fill="#efe4c4"/><path d="M20 18h24M20 26h24M20 34h24M20 42h14"/><circle cx="42" cy="46" r="5" stroke="#a8452f"/>'
    },
    plic: {
      kind: 'letter',
      title: 'Un plic nedeschis',
      text: 'Pe plic: «Doamnei {aglae|Aglae} {tulea|Tulea}, stăpâna casei.» Pe dos, expeditorul: «De la fratele dumitale, {costache|Costache}, din casa de alături.»',
      icon: '<path d="M8 18 L56 14 L58 46 L10 50 Z" fill="#efe4c4"/><path d="M8 18 L33 36 L56 14"/>'
    },
    nota: {
      kind: 'tag',
      title: 'Nota avocatului',
      text: '«Stimată doamnă, odată bolnavul internat, {averea|averea} casei rămâne pe numele dumneavoastră și al copiilor. Nu mai e nevoie de semnătura lui.»',
      icon: '<rect x="12" y="8" width="40" height="48" fill="#f3ecd6"/><path d="M18 20h28M18 28h28M18 36h18"/><circle cx="40" cy="46" r="6" stroke="#24364a"/>'
    },
    broderie: {
      kind: 'tag',
      title: 'Broderiile',
      text: 'Zeci de bucăți de pânză cusute cu răbdare, toate la fel. Bătrânul nu a mai făcut altceva de ani de zile: stă cu un {gherghef|gherghef} în brațe și coase.',
      icon: '<rect x="10" y="12" width="44" height="40" fill="#efe4c4"/><path d="M18 22l8 8m0 -8l-8 8M34 22l8 8m0 -8l-8 8M18 38l8 8m0 -8l-8 8M34 38l8 8m0 -8l-8 8" stroke="#a8452f"/>'
    }
  },

  clues: {
    aurica: {
      title: 'Fata de la fereastră',
      text: 'Privește printre perdele, cu ochii la domnul cu pălărie. Pe pervaz, lângă ghiveci, un caiet de romanțe cu numele ei: «{aurica|Aurica}». Nu coboară să-și ia rămas-bun de la tatăl ei.'
    },
    aglae: {
      title: 'Femeia din ușă',
      text: 'Stă cu brațele încrucișate în pragul casei ei, cu cheile la brâu. Nu varsă o lacrimă. «{stanica|Stănică}, grăbește-te, până nu se răzgândește!»'
    },
    olimpia: {
      title: 'Femeia cu copilul',
      text: 'Ține în brațe un prunc înfășat și se uită în pământ. Bătrânul îi face cu mâna, vesel: «Pa, {olimpia|Olimpia}, fata tatii!» Poartă aceeași verighetă ca domnul cu pălărie.'
    },
    cutie: {
      title: 'Cutia de scrisori',
      inside: true,
      sound: 'cabinet',
      text: 'O cutie de tablă, prinsă de stâlpul gardului. Ușița nu e încuiată.'
    },
    z_m_plic: {
      title: 'Un plic',
      text: 'Un plic cu timbru roșu, pus deasupra celorlalte hârtii.',
      items: ['plic']
    },
    z_m_nota: {
      title: 'O foaie cu ștampilă',
      text: 'O foaie scrisă curat, cu o ștampilă albastră în colț.',
      items: ['nota']
    },
    z_m_ziar: {
      title: 'Ziarul',
      text: 'Ziarul de ieri, încă nedesfăcut. În casa asta nu citește nimeni.'
    },
    sevalet: {
      title: 'Tânărul de la șevalet',
      zoom: { cx: 850, cy: 480, w: 480 },
      text: 'Un tânăr se leagănă pe scaun, înainte și înapoi, și pictează fără să ridice ochii. Tatăl lui trece la doi pași de el.'
    },
    z_semnatura: {
      title: 'Colțul pânzei',
      text: 'În colțul de jos, cu vopsea maro, o semnătură mică: «{titi|Titi} T.»'
    },
    z_ilustrata: {
      title: 'Cartea poștală',
      text: 'O ilustrată prinsă de șevalet. Tânărul nu pictează ce vede: copiază cartea poștală, linie cu linie.'
    },
    z_privire: {
      title: 'Privirea lui',
      text: 'Ochi mari și goi. Mama lui îl crede artist. Vecinii spun că seamănă cu tatăl său mai mult decât ar vrea ea.'
    },
    cufar: {
      title: 'Cufărul',
      inside: true,
      sound: 'case',
      text: 'Un cufăr mic, făcut în grabă și lăsat lângă gard.'
    },
    z_c_haine: {
      title: 'Hainele',
      text: 'O singură cămașă de noapte, împăturită. Pentru o plimbare nu trebuie cufăr, iar pentru o plecare lungă nu ajunge o cămașă.'
    },
    z_c_broderii: {
      title: 'Bucățile de pânză',
      text: 'Un teanc de pânze cusute cu roșu și verde.',
      items: ['broderie']
    },
    z_c_gheme: {
      title: 'Ghemele de lână',
      text: 'Trei gheme, puse cu grijă. Cineva a știut că fără ele bătrânul nu ar fi plecat de bunăvoie.'
    },
    z_c_ochelari: {
      title: 'Ochelarii',
      text: 'Ochelarii lui de cusut, cu o lentilă crăpată.'
    },
    z_c_papuci: {
      title: 'Papucii',
      text: 'O pereche de papuci noi. Acolo unde merge, nu va avea nevoie de ghete.'
    },
    pereche: {
      title: 'Bătrânul și domnul cu pălărie',
      zoom: { cx: 1090, cy: 500, w: 620 },
      text: 'Un bătrân cu barbă albă, în cămașă de noapte, râde ca un copil. Domnul cu pălărie îl duce de braț: «Hai, tată socrule, mergem la {plimbare|plimbare}! Uite ce {trasura|trăsura} frumoasă ne așteaptă.»'
    },
    z_gherghef: {
      title: 'Ce ține la piept',
      text: 'Bătrânul își strânge la piept lucrul de mână. Pe pânză și-a cusut, cu lână roșie, numele: «{simion|Simion}».'
    },
    z_brat: {
      title: 'Mâna de pe braț',
      text: 'Îl ține strâns, cu degetele albite. Nimeni nu strânge așa pe cineva pe care îl duce la plimbare.'
    },
    z_hartie: {
      title: 'Buzunarul hainei',
      text: 'Din buzunarul domnului cu pălărie iese colțul unei hârtii tipărite.',
      items: ['internare']
    },
    vizitiu: {
      title: 'Vizitiul',
      text: 'Stă pe capră, cu biciul în mână, și nu se uită în curte. «Domnul avocat mi-a plătit dinainte și mi-a zis să tac. Bătrânul e {pacalit|păcălit}: crede că îl plimb prin oraș.»'
    },
    trasura: {
      sound: 'drawer',
      title: 'Trăsura',
      text: 'O trăsură închisă, cu perdelele trase. Ușa se încuie pe dinafară.'
    },
    gaini: {
      sound: 'cluck',
      title: 'Găinile',
      text: 'Ciugulesc liniștite. În curtea asta, numai ele se poartă ca de obicei.'
    }
  },

  deduction: [
    { slot: 's1', answer: 'simion', full: 'tulea' },
    ', bătrânul care coase de ani de zile, și-a pierdut mințile. Soția lui, ',
    { slot: 's2', answer: 'aglae', full: 'tulea' },
    ', nu-l mai vrea în casă. Ginerele ei, ',
    { slot: 's3', answer: 'stanica', full: 'ratiu' },
    ', l-a ',
    { slot: 's4', answer: 'pacalit' },
    ': i-a spus că merg la ',
    { slot: 's5', answer: 'plimbare' },
    ' și îl urcă în ',
    { slot: 's6', answer: 'trasura' },
    ' de la poartă. De fapt îl duce la ',
    { slot: 's7', answer: 'ospiciu' },
    ', cu un certificat de la doctorul ',
    { slot: 's8', answer: 'vasiliad' },
    '. Fiul lor, ',
    { slot: 's9', answer: 'titi', full: 'tulea' },
    ', nici nu ridică ochii de la pânză.'
  ],

  ending:
    '<p>Simion Tulea, bătrânul care broda toată ziua, a fost dus la ospiciu de propriul ginere. ' +
    'Stănică l-a păcălit că merg la plimbare, cu un bilet de internare în buzunar ' +
    'și cu un certificat de la prietenul său, doctorul Vasiliad.</p>' +
    '<p>Aglae l-a privit din ușă fără o lacrimă: odată cu el pleca și ultima piedică ' +
    'dintre ea și avere. Titi a pictat mai departe, Aurica a rămas la fereastră, ' +
    'iar Olimpia a tăcut. Peste gard, în casa de alături, mai e un bătrân cu bani: fratele ei, Costache.</p>'
};
