// Capitolul IV — scena, indiciile și deducția.
// Toată grafica este desenată în cod (SVG).
window.SCENE5 = {
  id: 'c5',
  num: 'IV',
  title: 'Pachetul de sub saltea',
  blurb: 'Miezul nopții. În camera unui bătrân s-a întâmplat ceva.',
  theme: 'green',
  thumb: '120 150 1000 562',
  track: 'waltz',
  dossier: 'Dosar · Str. Antim, 1909',
  question: 'Ce s-a întâmplat în noaptea aceea?',

  svg: `
<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Camera lui moș Costache, noaptea">
<defs>
  <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#42635a"/><stop offset="1" stop-color="#27403a"/>
  </linearGradient>
  <linearGradient id="gFloor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#74502f"/><stop offset="1" stop-color="#3b2516"/>
  </linearGradient>
  <linearGradient id="gHall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#e9b25c"/><stop offset="1" stop-color="#8a5524"/>
  </linearGradient>
  <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#141f3d"/><stop offset="1" stop-color="#31456e"/>
  </linearGradient>
  <radialGradient id="gCandle" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffcf7a" stop-opacity="0.6"/>
    <stop offset="0.4" stop-color="#ffb650" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#ffb650" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gVig" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.5" stop-color="#07050a" stop-opacity="0"/>
    <stop offset="1" stop-color="#07050a" stop-opacity="0.85"/>
  </radialGradient>
  <pattern id="pWall" width="90" height="120" patternUnits="userSpaceOnUse">
    <g fill="#d9b25a" opacity="0.17">
      <path d="M45 14 C58 32 58 46 45 60 C32 46 32 32 45 14 Z"/>
      <path d="M45 60 C62 62 70 74 66 90 C54 86 46 76 45 60 Z"/>
      <path d="M45 60 C28 62 20 74 24 90 C36 86 44 76 45 60 Z"/>
      <circle cx="45" cy="100" r="5"/>
      <circle cx="0" cy="60" r="4"/><circle cx="90" cy="60" r="4"/>
    </g>
  </pattern>
  <filter id="fInk" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="7" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fGrain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="3"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1.1 -0.35"/>
  </filter>
  <style>
    .o { stroke:#1b130d; stroke-width:3.5; stroke-linejoin:round; stroke-linecap:round; }
    .l { fill:none; stroke:#1b130d; stroke-width:3; stroke-linecap:round; stroke-linejoin:round; }
    .t { fill:none; stroke:#1b130d; stroke-width:2; stroke-linecap:round; opacity:.55; }
  </style>
</defs>

<g filter="url(#fInk)">

  <!-- perete -->
  <rect x="-20" y="-20" width="1640" height="650" fill="url(#gWall)"/>
  <rect x="-20" y="-20" width="1640" height="650" fill="url(#pWall)"/>
  <rect x="-20" y="96" width="1640" height="10" fill="#1f302b"/>
  <rect x="-20" y="582" width="1640" height="42" fill="#2a1a0f" class="o"/>
  <rect x="-20" y="-20" width="1640" height="64" fill="#1f302b" class="o"/>
  <path d="M0 52 h1600" stroke="#c9a24e" stroke-width="3" opacity=".35"/>
  <path d="M1056 110 l12 28 l-9 20 l14 30 M1310 106 l-8 26 l12 20 M474 108 l10 24 l-6 18" class="t"/>
  <path d="M1600 44 L1516 44 M1600 44 L1600 134 M1600 44 L1538 112 M1560 44 Q1566 84 1600 92 M1530 44 Q1546 104 1600 122" fill="none" stroke="#d8e0dc" stroke-width="1.5" opacity=".5"/>

  <!-- podea -->
  <rect x="-20" y="622" width="1640" height="300" fill="url(#gFloor)"/>
  <g stroke="#22140a" stroke-width="2.5" opacity="0.55">
    <line x1="100" y1="622" x2="-512" y2="900"/><line x1="200" y1="622" x2="-325" y2="900"/>
    <line x1="300" y1="622" x2="-137" y2="900"/><line x1="400" y1="622" x2="50" y2="900"/>
    <line x1="500" y1="622" x2="237" y2="900"/><line x1="600" y1="622" x2="425" y2="900"/>
    <line x1="700" y1="622" x2="612" y2="900"/><line x1="800" y1="622" x2="800" y2="900"/>
    <line x1="900" y1="622" x2="987" y2="900"/><line x1="1000" y1="622" x2="1175" y2="900"/>
    <line x1="1100" y1="622" x2="1362" y2="900"/><line x1="1200" y1="622" x2="1550" y2="900"/>
    <line x1="1300" y1="622" x2="1737" y2="900"/><line x1="1400" y1="622" x2="1925" y2="900"/>
    <line x1="1500" y1="622" x2="2112" y2="900"/>
  </g>

  <!-- covor -->
  <ellipse cx="985" cy="775" rx="350" ry="88" fill="#6d2b2b" class="o"/>
  <ellipse cx="985" cy="775" rx="315" ry="72" fill="none" stroke="#c99a4a" stroke-width="5" stroke-dasharray="16 10"/>
  <ellipse cx="985" cy="775" rx="250" ry="52" fill="#5a2020"/>
  <g fill="none" stroke="#c99a4a" stroke-width="3" opacity=".6"><path d="M800 775 l40 -18 l40 18 l-40 18 Z M940 775 l40 -18 l40 18 l-40 18 Z M1080 775 l40 -18 l40 18 l-40 18 Z"/></g>

  <!-- ===== ușa și holul ===== -->
  <rect x="100" y="128" width="322" height="496" fill="#3a2416" class="o"/>
  <rect x="128" y="156" width="266" height="466" fill="url(#gHall)"/>
  <!-- lampa de pe hol -->
  <circle cx="330" cy="215" r="46" fill="#fff0c0" opacity="0.35"/>
  <path d="M316 232 L344 232 L338 204 Q330 190 322 204 Z" fill="#fff3cf" class="o"/>
  <line x1="330" y1="156" x2="330" y2="196" class="l"/>
  <!-- umbra Aglaei pe peretele holului -->
  <g fill="#4a2c12" opacity="0.72" class="lurk">
    <circle cx="170" cy="250" r="15"/>
    <ellipse cx="162" cy="285" rx="26" ry="31"/>
    <path d="M150 312 Q128 330 128 380 L128 622 L196 622 L190 380 Q188 330 176 312 Z"/>
    <path d="M186 290 L204 300 L186 306 Z"/>
  </g>
  <!-- foaia ușii, deschisă -->
  <path d="M394 156 L506 192 L506 660 L394 622 Z" fill="#583820" class="o"/>
  <path d="M410 190 L490 214 L490 380 L410 366 Z" fill="#4a2e19" class="o"/>
  <path d="M410 400 L490 414 L490 620 L410 592 Z" fill="#4a2e19" class="o"/>
  <circle cx="494" cy="398" r="8" fill="#c99a4a" class="o"/>
  <path d="M420 230 q10 60 0 120 M470 250 q8 50 0 100 M430 440 q10 70 0 130 M474 450 q8 60 0 130" class="t"/>

  <ellipse cx="265" cy="624" rx="84" ry="9" fill="#000" opacity=".34"/>
  <!-- ===== Stănică ===== -->
  <g class="vol fidget">
    <!-- pantofi, pantaloni -->
    <ellipse cx="226" cy="618" rx="30" ry="11" fill="#14100c" class="o"/>
    <ellipse cx="304" cy="620" rx="30" ry="11" fill="#14100c" class="o"/>
    <path d="M214 470 L204 612 L248 612 L262 505 L282 614 L326 614 L312 470 Z" fill="#45434a" class="o"/>
    <!-- haina -->
    <path d="M196 338 Q262 300 332 338 L350 500 Q264 528 178 500 Z" fill="#2c2622" class="o"/>
    <path d="M262 330 L262 512" class="t"/>
    <circle cx="270" cy="400" r="4" fill="#c99a4a"/><circle cx="270" cy="440" r="4" fill="#c99a4a"/>
    <rect x="252" y="308" width="34" height="28" fill="#e3ad85"/>
    <path d="M252 308 V336 M286 308 V336" class="l"/>
    <!-- guler și cravată -->
    <path d="M240 322 L262 350 L286 322 Z" fill="#efe8d6" class="o"/>
    <path d="M256 336 L270 336 L266 372 L260 372 Z" fill="#8f2c2c" class="o"/>
    <!-- brațul din spate -->
    <path d="M204 348 Q186 400 196 458" fill="none" stroke="#1b130d" stroke-width="40" stroke-linecap="round"/>
    <path d="M204 348 Q186 400 196 458" fill="none" stroke="#2c2622" stroke-width="33" stroke-linecap="round"/>
    <circle cx="197" cy="470" r="14" fill="#e3ad85" class="o"/>
    <!-- pachetul cu bani -->
    <g transform="rotate(-12 322 410)">
      <rect x="282" y="378" width="86" height="60" fill="#dccb9e" class="o"/>
      <line x1="282" y1="408" x2="368" y2="408" class="l"/>
      <line x1="325" y1="378" x2="325" y2="438" class="l"/>
      <path d="M352 370 L384 362 L390 384 L360 390 Z" fill="#a3b98c" class="o"/>
      <path d="M346 364 L372 352 L380 370" fill="#b9cba0" class="o"/>
    </g>
    <!-- brațul care strânge pachetul -->
    <path d="M324 350 Q360 392 318 428" fill="none" stroke="#1b130d" stroke-width="40" stroke-linecap="round"/>
    <path d="M324 350 Q360 392 318 428" fill="none" stroke="#2c2622" stroke-width="33" stroke-linecap="round"/>
    <circle cx="306" cy="432" r="15" fill="#e3ad85" class="o"/>
    <path d="M297 438 Q306 446 315 438" fill="none" stroke="#e8c14e" stroke-width="5" stroke-linecap="round"/>
    <!-- buzunar și bilet -->
    <path d="M296 478 L340 472" class="l"/>
    <g transform="rotate(14 322 462)">
      <rect x="308" y="440" width="28" height="36" fill="#e3bfe0" class="o"/>
      <line x1="314" y1="450" x2="330" y2="450" class="t"/>
      <line x1="314" y1="458" x2="328" y2="458" class="t"/>
    </g>
    <!-- cap -->
    <ellipse cx="224" cy="276" rx="9" ry="13" fill="#d59c75" class="o"/>
    <path d="M222 262 Q220 222 268 222 Q316 222 314 268 Q316 318 270 324 Q226 320 222 262 Z" fill="#e3ad85" class="o"/>
    <path d="M228 300 Q268 334 310 298" class="t"/>
    <!-- ochi care privesc înapoi -->
    <g transform="translate(9 0)"><ellipse cx="270" cy="266" rx="9" ry="7" fill="#fff"/></g><g transform="translate(9 0)"><circle class="glance" cx="275" cy="267" r="4" fill="#1b130d"/></g>
    <g transform="translate(9 0)"><ellipse cx="298" cy="266" rx="8" ry="7" fill="#fff"/></g><g transform="translate(9 0)"><circle class="glance" cx="302" cy="267" r="4" fill="#1b130d"/></g>
    <g transform="translate(9 0)"><path d="M258 252 L280 248" class="l"/></g><g transform="translate(9 0)"><path d="M290 247 L310 253" class="l"/></g>
    <g transform="translate(9 0)"><path d="M286 268 Q296 282 286 286" class="l"/></g>
    <!-- mustață și zâmbet -->
    <g transform="translate(9 0)"><path d="M256 294 Q270 284 286 292 Q302 284 316 292 Q302 304 286 298 Q270 304 256 294 Z" fill="#1b130d"/></g>
    <g transform="translate(9 0)"><path d="M276 308 Q290 314 302 306" class="l"/></g>
    <!-- pălărie -->
    <path d="M220 232 Q222 172 268 170 Q314 172 316 232 Z" fill="#17130f" class="o"/>
    <g transform="translate(9 0)"><ellipse cx="268" cy="232" rx="66" ry="11" fill="#17130f" class="o"/></g>
    <path d="M222 220 L314 220" stroke="#4a3a2a" stroke-width="6"/>
    <g transform="translate(9 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="246" cy="292" rx="8" ry="5"/><ellipse cx="306" cy="286" rx="8" ry="5"/></g></g>
    <path d="M240 330 L228 384 M288 330 L300 374" class="t"/>
    <path class="sweat" d="M320 248 q-6 10 0 14 q6 -4 0 -14 Z" fill="#bfe0ea" stroke="#1b130d" stroke-width="1.5"/>
    <path d="M226 244 q-4 14 2 22 M310 244 q4 12 0 20" fill="none" stroke="#1b130d" stroke-width="6" stroke-linecap="round"/>
    <path d="M236 192 q10 -13 28 -13" stroke="#5a5048" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M204 452 h36 M296 454 h36 M232 482 L226 606 M294 482 L302 608 M246 318 q24 12 48 0" class="t"/>
    <ellipse cx="198" cy="457" rx="15" ry="6" fill="#efe8d6" class="o"/>
    <path d="M212 614 q10 -5 20 0 M290 616 q10 -5 20 0" stroke="#6b6b70" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <g transform="translate(9 0)"><circle cx="273" cy="264" r="1.7" fill="#fff"/></g><g transform="translate(9 0)"><circle cx="300" cy="264" r="1.7" fill="#fff"/></g>
    <g transform="translate(9 0)"><g class="blink" style="animation-delay:-1.2s"><ellipse cx="270" cy="266" rx="10" ry="8" fill="#e3ad85"/><path d="M260 267 q10 4 20 0" class="l"/><ellipse cx="298" cy="266" rx="9" ry="8" fill="#e3ad85"/><path d="M289 267 q9 4 18 0" class="l"/></g></g>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><path d="M222 384 h30" stroke="#5a5048" stroke-width="1.4"/><rect x="226" y="368" width="24" height="16" fill="#f3ecd6" stroke="#1b130d" stroke-width="1" transform="rotate(-8 238 376)"/><text x="238" y="376" font-size="5" transform="rotate(-8 238 376)">RAȚIU</text><text x="238" y="381" font-size="3.4" transform="rotate(-8 238 376)">avocat</text><path d="M322 466 c-4 -4 -4 -8 0 -6 c4 -2 4 2 0 6 Z" fill="#a8452f" transform="rotate(14 322 462)"/></g>
  </g>

  <!-- ===== fereastra ===== -->
  <rect x="560" y="150" width="240" height="322" fill="#2c1c11" class="o"/>
  <rect x="574" y="164" width="212" height="294" fill="url(#gSky)"/>
  <circle cx="728" cy="226" r="58" fill="#f4edd3" opacity="0.14"/>
  <circle cx="728" cy="226" r="30" fill="#f4edd3"/>
  <circle cx="738" cy="218" r="6" fill="#ded6b8"/><circle cx="720" cy="236" r="4" fill="#ded6b8"/>
  <g fill="#f4edd3" class="twinkle"><circle cx="604" cy="196" r="2"/><circle cx="640" cy="250" r="2"/><circle cx="610" cy="300" r="1.6"/><circle cx="668" cy="190" r="1.6"/><circle cx="762" cy="300" r="2"/></g>
  <path d="M574 458 L574 400 L610 372 L646 400 L646 420 L690 420 L690 380 L706 380 L706 420 L740 392 L786 424 L786 458 Z" fill="#0d1424"/>
  <rect x="660" y="434" width="10" height="12" fill="#e9b25c"/>
  <line x1="680" y1="164" x2="680" y2="458" stroke="#2c1c11" stroke-width="9"/>
  <line x1="574" y1="306" x2="786" y2="306" stroke="#2c1c11" stroke-width="9"/>
  <!-- perdele -->
  <line x1="524" y1="136" x2="836" y2="136" stroke="#1b130d" stroke-width="8" stroke-linecap="round"/>
  <path d="M538 136 Q574 300 546 486 L602 486 Q590 300 612 136 Z" fill="#7c3333" class="o sway"/>
  <path d="M822 136 Q786 300 814 486 L758 486 Q770 300 748 136 Z" fill="#7c3333" class="o sway" style="animation-delay:-3s"/>
  <path d="M566 150 Q582 300 570 478 M790 150 Q776 300 788 478" class="t"/>

  <!-- ===== scrinul de sub fereastră ===== -->
  <g class="vol">
  <ellipse cx="686" cy="628" rx="130" ry="10" fill="#000" opacity=".3"/>
  <rect x="584" y="504" width="204" height="112" fill="#5a3a20" class="o"/>
  <rect x="576" y="494" width="220" height="14" fill="#3a2416" class="o"/>
  <rect x="594" y="516" width="184" height="28" fill="#4a2e19" class="o"/>
  <rect x="594" y="550" width="184" height="28" fill="#4a2e19" class="o"/>
  <rect x="594" y="584" width="184" height="26" fill="#4a2e19" class="o"/>
  <g fill="#c99a4a" class="o"><circle cx="640" cy="530" r="5"/><circle cx="732" cy="530" r="5"/><circle cx="640" cy="564" r="5"/><circle cx="732" cy="564" r="5"/><circle cx="640" cy="597" r="5"/><circle cx="732" cy="597" r="5"/></g>
  <path d="M600 522 h60 M600 556 h60 M600 590 h60" stroke="#8a6238" stroke-width="3" stroke-linecap="round"/>
  <rect x="588" y="614" width="14" height="10" fill="#3a2416" class="o"/><rect x="770" y="614" width="14" height="10" fill="#3a2416" class="o"/>
  <path d="M606 496 q36 -12 72 0 Z" fill="#efe8d6" class="o"/>
  <path d="M628 494 L633 466 Q642 456 651 466 L656 494 Z" fill="#6f8f9a" class="o"/>
  <path d="M642 460 q-10 -22 -22 -26 M642 460 q4 -26 16 -30 M642 460 q-2 -20 0 -34" class="l"/>
  <g fill="#a8452f"><circle cx="620" cy="434" r="5"/><circle cx="658" cy="430" r="5"/><circle cx="642" cy="424" r="5"/></g>
  </g>

  <!-- ===== dulapul ===== -->
  <g class="vol">
  <ellipse cx="895" cy="628" rx="82" ry="10" fill="#000" opacity=".3"/>
  <path d="M832 196 Q895 168 958 196 L958 206 L832 206 Z" fill="#3a2416" class="o"/>
  <rect x="838" y="204" width="114" height="410" fill="#5a3a20" class="o"/>
  <rect x="846" y="216" width="46" height="300" fill="#4a2e19" class="o"/>
  <rect x="898" y="216" width="46" height="300" fill="#4a2e19" class="o"/>
  <path d="M856 230 h26 v270 h-26 Z M908 230 h26 v270 h-26 Z" class="t"/>
  <circle cx="889" cy="370" r="5" fill="#c99a4a" class="o"/><circle cx="901" cy="370" r="5" fill="#c99a4a" class="o"/>
  <rect x="846" y="526" width="98" height="74" fill="#4a2e19" class="o"/>
  <circle cx="895" cy="563" r="6" fill="#c99a4a" class="o"/>
  <path d="M866 250 q8 100 0 230 M918 250 q8 100 0 230 M860 548 h70" class="t"/>
  <path d="M850 222 l10 18 M902 222 l10 18" stroke="#8a6238" stroke-width="3" stroke-linecap="round"/>
  <rect x="842" y="612" width="14" height="12" fill="#3a2416" class="o"/><rect x="934" y="612" width="14" height="12" fill="#3a2416" class="o"/>
  </g>

  <!-- ===== ceasul ===== -->
  <g transform="translate(150 0)">
  <path d="M868 196 L900 172 L932 196 L932 336 L868 336 Z" fill="#4a2e1b" class="o"/>
  <circle cx="900" cy="222" r="24" fill="#efe4c4" class="o"/>
  <line x1="900" y1="222" x2="900" y2="204" class="l"/><line x1="900" y1="222" x2="902" y2="208" class="l"/>
  <rect x="880" y="258" width="40" height="66" fill="#2a1a0f" class="o"/>
  <g class="pend"><line x1="900" y1="258" x2="900" y2="302" class="l"/>
  <circle cx="900" cy="308" r="9" fill="#c99a4a" class="o"/></g>
  </g>

  <!-- ===== portretul Otiliei ===== -->
  <g class="vol">
  <ellipse cx="1180" cy="246" rx="66" ry="82" fill="#b8913e" class="o"/>
  <ellipse cx="1180" cy="246" rx="52" ry="68" fill="#56707a" class="o"/>
  <path d="M1126 210 q10 -50 54 -44" fill="none" stroke="#f0d68c" stroke-width="4" stroke-linecap="round"/>
  <path d="M1138 300 Q1150 268 1180 266 Q1210 268 1222 300 Q1204 314 1180 314 Q1156 314 1138 300 Z" fill="#efe7d2"/>
  <rect x="1173" y="246" width="14" height="24" fill="#f0cdac"/>
  <path d="M1154 226 Q1152 190 1180 188 Q1208 190 1206 226 Q1214 262 1200 276 Q1206 250 1198 236 L1162 236 Q1154 250 1160 276 Q1146 262 1154 226 Z" fill="#b07a3a"/>
  <ellipse cx="1180" cy="230" rx="19" ry="24" fill="#f0cdac"/>
  <path d="M1160 222 Q1168 200 1180 204 Q1194 200 1200 222 Q1188 212 1180 214 Q1170 212 1160 222 Z" fill="#b07a3a"/>
  <circle cx="1173" cy="230" r="2" fill="#1b130d"/><circle cx="1187" cy="230" r="2" fill="#1b130d"/>
  <path d="M1174 242 Q1180 246 1186 242" fill="none" stroke="#9a4a3a" stroke-width="2" stroke-linecap="round"/>
  </g>

  <!-- ===== patul ===== -->
  <g class="vol">
  <path d="M1388 322 Q1410 300 1432 322 L1432 640 L1388 640 Z" fill="#3a2416" class="o"/>
  <rect x="954" y="452" width="30" height="188" fill="#3a2416" class="o"/>
  <circle cx="969" cy="446" r="13" fill="#c99a4a" class="o"/>
  <!-- ascunzătoarea goală -->
  <path d="M984 540 L1200 548 L1200 580 L984 580 Z" fill="#150d07" class="o"/>
  <path d="M1010 552 q10 -14 20 0 q8 12 18 -2 M1090 556 q8 -16 18 -2 q8 10 16 -4 M1150 558 q6 -12 14 0" fill="none" stroke="#dccb9e" stroke-width="3" stroke-linecap="round"/>
  <rect x="970" y="574" width="430" height="30" fill="#4d301b" class="o"/>
  <rect x="990" y="604" width="16" height="34" fill="#3a2416" class="o"/><rect x="1360" y="604" width="16" height="34" fill="#3a2416" class="o"/>
  <!-- salteaua ridicată -->
  <path d="M990 452 L1390 506 L1390 566 L1196 556 L1002 520 Z" fill="#d3c7a6" class="o"/>
  <g stroke="#6f809a" stroke-width="3" opacity="0.7">
    <line x1="1040" y1="462" x2="1048" y2="528"/><line x1="1100" y1="470" x2="1106" y2="538"/>
    <line x1="1160" y1="478" x2="1164" y2="548"/><line x1="1220" y1="486" x2="1222" y2="556"/>
    <line x1="1280" y1="494" x2="1282" y2="560"/><line x1="1340" y1="502" x2="1340" y2="563"/>
  </g>
  <!-- pernă și pătură -->
  <ellipse cx="1332" cy="492" rx="56" ry="24" fill="#f0e9d6" class="o" transform="rotate(8 1332 492)"/>
  <path d="M1322 486 q12 8 26 2" class="t"/>
  <path d="M1196 508 L1388 528 L1392 610 Q1330 700 1236 694 Q1150 688 1132 640 Q1180 600 1196 508 Z" fill="#7d3c2f" class="o"/>
  <path d="M1230 520 Q1216 610 1170 650 M1300 528 Q1296 620 1250 686 M1360 534 Q1362 600 1330 660" class="t"/>
  <path d="M1140 640 Q1190 668 1240 692" stroke="#c99a4a" stroke-width="5" fill="none"/>
  </g>

  <path d="M1212 560 Q1202 640 1162 676 M1262 566 Q1264 650 1216 690 M1322 572 Q1332 650 1292 692" fill="none" stroke="#c99a4a" stroke-width="5" opacity=".7"/>
  <rect x="1396" y="350" width="28" height="200" fill="#4a2e19" class="o"/>
  <path d="M1286 502 q8 8 16 0 q8 8 16 0 q8 8 16 0" fill="none" stroke="#c9c0a8" stroke-width="3"/>
  <!-- ===== noptiera ===== -->
  <g class="vol">
  <rect x="1452" y="472" width="118" height="152" fill="#523420" class="o"/>
  <rect x="1442" y="460" width="138" height="14" fill="#3a2416" class="o"/>
  <rect x="1464" y="492" width="94" height="44" fill="#462b18" class="o"/>
  <circle cx="1511" cy="514" r="6" fill="#c99a4a" class="o"/>
  <rect x="1464" y="548" width="94" height="64" fill="#462b18" class="o"/>
  <circle cx="1511" cy="580" r="6" fill="#c99a4a" class="o"/>
  <path d="M1470 498 h40 M1470 554 h40" stroke="#7a5230" stroke-width="3" stroke-linecap="round"/>
  <!-- lumânare -->
  <ellipse cx="1476" cy="458" rx="24" ry="7" fill="#c99a4a" class="o"/>
  <rect x="1469" y="408" width="14" height="48" fill="#f3e9c9" class="o"/>
  <path class="flame" d="M1476 404 Q1464 388 1476 366 Q1488 388 1476 404 Z" fill="#ffd27a" stroke="#e58a2a" stroke-width="2.5"/>
  <!-- doctorie -->
  <rect x="1516" y="418" width="24" height="42" fill="#5f8672" class="o"/>
  <rect x="1522" y="404" width="12" height="14" fill="#c9a777" class="o"/>
  <rect x="1519" y="430" width="18" height="14" fill="#efe4c4"/>
  <path d="M1520 424 v30" stroke="#bfe0d0" stroke-width="3" stroke-linecap="round"/>
  <!-- chitanță și bilet -->
  <path d="M1536 456 L1590 450 L1596 492 L1560 498 Z" fill="#efe4c4" class="o"/>
  <path d="M1548 464 L1582 460 M1550 474 L1586 470 M1554 484 L1576 481" class="t"/>
  </g>

  <!-- ===== tratatul lui Felix ===== -->
  <g transform="rotate(-9 890 640)">
    <rect x="852" y="640" width="78" height="10" fill="#efe4c4" class="o"/>
    <rect x="848" y="620" width="82" height="24" fill="#3f5a4d" class="o"/>
    <line x1="862" y1="632" x2="900" y2="632" stroke="#c99a4a" stroke-width="3"/>
  </g>

  <!-- ===== bancnote scăpate ===== -->
  <g class="o" fill="#a3b98c">
    <rect x="640" y="748" width="58" height="30" transform="rotate(-14 669 763)"/>
    <rect x="556" y="712" width="52" height="27" transform="rotate(20 582 725)"/>
    <rect x="480" y="676" width="46" height="24" transform="rotate(-8 503 688)"/>
  </g>
  <g fill="none" stroke="#5d7350" stroke-width="2">
    <ellipse cx="669" cy="763" rx="11" ry="8" transform="rotate(-14 669 763)"/>
    <ellipse cx="582" cy="725" rx="10" ry="7" transform="rotate(20 582 725)"/>
    <ellipse cx="503" cy="688" rx="9" ry="6" transform="rotate(-8 503 688)"/>
  </g>

  <ellipse cx="1020" cy="802" rx="215" ry="13" fill="#000" opacity=".3"/>
  <!-- ===== moș Costache ===== -->
  <g class="vol">
    <!-- picioare -->
    <ellipse cx="1206" cy="764" rx="20" ry="11" fill="#e6bd98" class="o"/>
    <ellipse cx="1212" cy="788" rx="20" ry="11" fill="#e6bd98" class="o"/>
    <!-- cămașa de noapte -->
    <path d="M866 742 Q878 704 960 706 L1150 716 Q1192 722 1196 754 L1192 792 Q1050 812 904 800 Q852 792 866 742 Z" fill="#ebe5d4" class="o"/>
    <path d="M960 716 Q990 760 970 800 M1050 720 Q1076 762 1060 804 M1130 724 Q1150 760 1140 798" class="t"/>
    <!-- brațul întins spre ușă -->
    <path d="M900 752 Q830 790 772 786" fill="none" stroke="#1b130d" stroke-width="36" stroke-linecap="round"/>
    <path d="M900 752 Q830 790 772 786" fill="none" stroke="#ebe5d4" stroke-width="29" stroke-linecap="round"/>
    <circle cx="752" cy="786" r="14" fill="#e6bd98" class="o"/>
    <path d="M742 778 L726 772 M740 786 L722 786 M742 794 L727 800" stroke="#1b130d" stroke-width="9" stroke-linecap="round"/>
    <path d="M742 778 L726 772 M740 786 L722 786 M742 794 L727 800" stroke="#e6bd98" stroke-width="5" stroke-linecap="round"/>
    <!-- cap chel -->
    <ellipse cx="838" cy="736" rx="38" ry="34" fill="#e6bd98" class="o"/>
    <path d="M862 712 q14 -2 14 12 M868 730 q14 0 10 14 M862 750 q12 4 6 14" fill="none" stroke="#f4f1ea" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="846" cy="742" rx="6" ry="9" fill="#d9a983" class="o"/>
    <path d="M812 730 l10 8 M822 730 l-10 8" class="l"/>
    <path d="M800 742 q-8 4 -2 10" class="l"/>
    <ellipse cx="814" cy="756" rx="9" ry="6" fill="#7a3a34" class="o"/>
    <g fill="#9fb7c6"><circle cx="930" cy="752" r="4"/><circle cx="990" cy="756" r="4"/><circle cx="1050" cy="760" r="4"/></g>
    <path d="M822 716 q14 -6 26 0 M818 724 q16 -6 30 0" class="t"/>
    <path d="M1186 730 q8 6 0 12 q8 6 0 12 q8 6 0 12 q8 6 0 12" class="l"/>
  </g>
  <!-- papuc -->
  <path d="M1086 836 Q1090 816 1120 818 Q1150 822 1150 838 Q1118 846 1086 836 Z" fill="#7c3333" class="o"/>

</g>

<!-- ===== detalii mărunte, vizibile doar de aproape ===== -->
<g id="details" font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
  <path d="M1548 488 l34 -4" stroke="#a8452f" stroke-width="1.4"/>
  <text x="1528" y="441" font-size="5">Dr.V.</text>
  <circle cx="1511" cy="527" r="2.4"/>
  <path d="M1506 530 l-5 5 M1516 530 l4 6 M1511 532 v6" stroke="#c9a777" stroke-width=".9"/>
</g>

<!-- ===== lumini ===== -->
<rect x="0" y="0" width="1600" height="900" fill="#0c1436" opacity="0.30"/>
<path d="M128 622 L394 622 L640 900 L-60 900 Z" fill="#ffb85a" opacity="0.13"/>
<path d="M574 458 L786 458 L1020 900 L500 900 Z" fill="#cfe0ff" opacity="0.07"/>
<circle class="glow" cx="1476" cy="392" r="360" fill="url(#gCandle)"/>
<g fill="#fff"><circle class="mote" cx="660" cy="560" r="2"/><circle class="mote" style="animation-delay:-5s" cx="724" cy="650" r="1.6"/><circle class="mote" style="animation-delay:-9s" cx="640" cy="720" r="2"/></g>
<circle cx="330" cy="215" r="170" fill="url(#gCandle)" opacity="0.7"/>
<rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
<rect x="0" y="0" width="1600" height="900" filter="url(#fGrain)" opacity="0.5"/>

<!-- ===== interioare: se văd doar când sunt deschise ===== -->
<g class="interior" id="in-scrin">
  <rect x="0" y="0" width="1600" height="900" fill="#1a110a"/>
  <g filter="url(#fInk)">
    <rect x="140" y="90" width="1320" height="720" fill="#5a3a20" class="o"/>
    <rect x="190" y="140" width="1220" height="620" fill="#7a5632" class="o"/>
    <path d="M190 300 H1410 M190 462 H1410 M190 624 H1410" class="t"/>
    <circle cx="800" cy="840" r="16" fill="#c99a4a" class="o"/>
    <!-- batiste -->
    <rect x="232" y="184" width="300" height="220" fill="#e4dcc6" class="o"/>
    <rect x="252" y="204" width="300" height="220" fill="#efe8d6" class="o"/>
    <path d="M252 314 H552 M402 204 V424" class="t"/>
    <path d="M500 380 l30 20 M490 390 l30 20" stroke="#6f809a" stroke-width="3"/>
    <!-- chitanța, pe jumătate sub cutie -->
    <path d="M600 300 L934 282 L952 476 L620 494 Z" fill="#efe4c4" class="o"/>
    <path d="M640 404 L900 390 M642 430 L902 416 M646 456 L800 448" class="t"/>
    <circle cx="872" cy="444" r="28" fill="none" stroke="#a8452f" stroke-width="6"/>
    <!-- cutia de tutun -->
    <rect x="640" y="186" width="264" height="176" rx="16" fill="#7c3333" class="o"/>
    <rect x="664" y="210" width="216" height="128" rx="8" fill="none" stroke="#e8c14e" stroke-width="5"/>
    <!-- legătura de chei -->
    <circle cx="1150" cy="282" r="62" fill="none" stroke="#1b130d" stroke-width="18"/>
    <circle cx="1150" cy="282" r="62" fill="none" stroke="#9aa3a0" stroke-width="9"/>
    <g fill="#9aa3a0" class="o">
      <path d="M1194 326 L1290 400 L1276 418 L1262 406 L1250 420 L1236 408 L1180 344 Z"/>
      <path d="M1150 344 L1160 452 L1138 454 L1140 436 L1122 436 L1124 418 L1132 344 Z"/>
      <path d="M1100 320 L1020 396 L1034 412 L1048 400 L1062 414 L1116 338 Z"/>
    </g>
    <!-- fotografie veche -->
    <g transform="rotate(-6 1170 590)">
      <rect x="1040" y="486" width="262" height="210" fill="#d8c9a6" class="o"/>
      <rect x="1058" y="502" width="226" height="160" fill="#8a7450"/>
      <circle cx="1130" cy="556" r="26" fill="#c9b48a"/><path d="M1090 662 Q1094 590 1130 588 Q1166 590 1170 662 Z" fill="#c9b48a"/>
      <circle cx="1214" cy="590" r="20" fill="#c9b48a"/><path d="M1186 662 Q1188 616 1214 614 Q1240 616 1242 662 Z" fill="#c9b48a"/>
      <g fill="#a08a60"><circle cx="1196" cy="584" r="9"/><circle cx="1232" cy="584" r="9"/><circle cx="1214" cy="572" r="10"/></g>
    </g>
    <!-- mărunțișuri -->
    <g fill="#e8c14e" class="o"><ellipse cx="350" cy="560" rx="26" ry="20"/><ellipse cx="416" cy="606" rx="26" ry="20"/><ellipse cx="330" cy="650" rx="26" ry="20"/></g>
    <rect x="500" y="580" width="110" height="40" rx="8" fill="#f3e9c9" class="o" transform="rotate(-14 555 600)"/>
    <path d="M700 620 q40 -30 80 0 q40 30 80 0" fill="none" stroke="#dccb9e" stroke-width="7" stroke-linecap="round"/>
    <path d="M662 204 q70 -12 140 0" stroke="#b25a52" stroke-width="5" fill="none" stroke-linecap="round" class="hi"/>
    <g fill="none" stroke="#a8862f" stroke-width="3" class="hi"><ellipse cx="350" cy="560" rx="15" ry="11"/><ellipse cx="416" cy="606" rx="15" ry="11"/><ellipse cx="330" cy="650" rx="15" ry="11"/></g>
    <path d="M1106 250 q20 -26 54 -28" stroke="#e4eae8" stroke-width="5" fill="none" stroke-linecap="round" class="hi"/>
    <g fill="#5a3a20" class="hi"><ellipse cx="300" cy="712" rx="18" ry="8"/><ellipse cx="1000" cy="176" rx="15" ry="7"/><ellipse cx="1340" cy="724" rx="18" ry="8"/></g>
    <path d="M270 220 q60 14 120 0 M270 250 q60 14 120 0" stroke="#cfc6ae" stroke-width="3" fill="none" stroke-linecap="round" class="hi"/>
  </g>
  <text x="772" y="288" font-family="Courier New, monospace" font-weight="bold" font-size="40" fill="#e8c14e" text-anchor="middle">TUTUN</text>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<g class="interior" id="in-dulap">
  <rect x="0" y="0" width="1600" height="900" fill="#120b07"/>
  <g filter="url(#fInk)">
    <rect x="250" y="40" width="1100" height="820" fill="#3a2416" class="o"/>
    <rect x="300" y="80" width="1000" height="740" fill="#24160d" class="o"/>
    <rect x="300" y="204" width="1000" height="18" fill="#4a2e19" class="o"/>
    <path d="M320 262 H1280" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/>
    <path d="M320 262 H1280" stroke="#9aa3a0" stroke-width="6" stroke-linecap="round"/>
    <!-- cutia de pălării -->
    <rect x="372" y="118" width="220" height="86" fill="#6b5a3a" class="o"/>
    <ellipse cx="482" cy="118" rx="118" ry="24" fill="#8a7450" class="o"/>
    <path d="M372 160 H592" class="t"/>
    <rect x="760" y="150" width="300" height="54" fill="#7d3c2f" class="o"/><rect x="780" y="110" width="260" height="42" fill="#5f8672" class="o"/>
    <!-- paltonul -->
    <path d="M520 264 q0 -22 16 -14" class="l"/>
    <path d="M430 300 Q520 270 610 300 L642 704 L398 704 Z" fill="#2c2622" class="o"/>
    <path d="M520 290 V704 M486 296 L470 380 M554 296 L570 380" class="t"/>
    <rect x="556" y="540" width="44" height="34" fill="#efe4c4" class="o" transform="rotate(-8 578 557)"/>
    <rect x="540" y="560" width="76" height="64" fill="#4a3f36" class="o"/>
    <path d="M546 566 h64 M546 618 h64" stroke="#dccb9e" stroke-width="2" stroke-dasharray="6 5"/>
    <!-- halatul -->
    <path d="M780 264 q0 -22 16 -14" class="l"/>
    <path d="M700 300 Q780 272 860 300 L884 724 L676 724 Z" fill="#6b5a3a" class="o"/>
    <path d="M780 290 V724" class="t"/>
    <path d="M692 470 H872" stroke="#3a2a14" stroke-width="12"/>
    <rect x="800" y="600" width="50" height="46" fill="#8a7450" class="o"/>
    <!-- fracul ros de molii -->
    <path d="M1030 264 q0 -22 16 -14" class="l"/>
    <path d="M950 300 Q1030 272 1110 300 L1132 644 L1060 600 L1030 700 L1000 600 L928 644 Z" fill="#45434a" class="o"/>
    <path d="M1030 290 V600 M1000 296 L984 370 M1060 296 L1076 370" class="t"/>
    <g fill="#24160d"><circle cx="980" cy="440" r="8"/><circle cx="1080" cy="500" r="10"/><circle cx="1010" cy="560" r="6"/><circle cx="1090" cy="400" r="5"/></g>
    <!-- ghete -->
    <path d="M950 800 L950 740 L1000 740 L1004 776 L1050 786 L1050 804 Z" fill="#14100c" class="o"/>
    <path d="M1070 800 L1070 740 L1120 740 L1124 776 L1170 786 L1170 804 Z" fill="#14100c" class="o"/>
    <!-- sul de hârtie -->
    <rect x="380" y="752" width="360" height="46" rx="23" fill="#cfd8e0" class="o"/>
    <ellipse cx="740" cy="775" rx="12" ry="23" fill="#e6edf2" class="o"/>
    <path d="M540 752 V798" stroke="#a8452f" stroke-width="10"/>
    <g fill="#6b5a3a" class="o"><circle cx="534" cy="380" r="6"/><circle cx="534" cy="440" r="6"/><circle cx="534" cy="500" r="6"/></g>
    <path d="M372 178 H592" stroke="#a8452f" stroke-width="8" class="hi"/>
    <path d="M720 320 L708 700 M840 320 L852 700" class="t"/>
    <path d="M962 752 v22 M1082 752 v22" stroke="#6b6b70" stroke-width="5" fill="none" stroke-linecap="round" class="hi"/>
    <path d="M448 330 q-10 160 -20 340 M590 330 q10 160 20 340" class="t"/>
  </g>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<!-- ===== zone active ===== -->
<g id="hotspots">
  <rect class="hs" data-id="dulap" x="838" y="200" width="116" height="400" rx="12"/>
  <rect class="hs" data-id="scrin" x="580" y="498" width="212" height="122" rx="12"/>
  <rect class="hs" data-id="z_s_batiste" data-parent="scrin" x="228" y="180" width="330" height="250" rx="14"/>
  <rect class="hs" data-id="z_s_tutun" data-parent="scrin" x="636" y="182" width="272" height="150" rx="14"/>
  <rect class="hs" data-id="z_s_hartie" data-parent="scrin" x="610" y="370" width="344" height="126" rx="14"/>
  <rect class="hs" data-id="z_s_chei" data-parent="scrin" x="1010" y="210" width="290" height="250" rx="14"/>
  <rect class="hs" data-id="z_s_foto" data-parent="scrin" x="1030" y="474" width="290" height="240" rx="14"/>
  <rect class="hs" data-id="z_d_cutie" data-parent="dulap" x="360" y="92" width="246" height="112" rx="14"/>
  <rect class="hs" data-id="z_d_buzunar" data-parent="dulap" x="530" y="530" width="96" height="100" rx="12"/>
  <rect class="hs" data-id="z_d_frac" data-parent="dulap" x="930" y="290" width="200" height="400" rx="14"/>
  <rect class="hs" data-id="z_d_ghete" data-parent="dulap" x="940" y="730" width="240" height="84" rx="12"/>
  <rect class="hs" data-id="z_d_plan" data-parent="dulap" x="370" y="742" width="390" height="66" rx="14"/>
  <rect class="hs" data-id="carteajos" x="836" y="606" width="110" height="64" rx="10"/>
  <rect class="hs" data-id="umbra" x="128" y="222" width="62" height="400" rx="8"/>
  <rect class="hs" data-id="stanica" x="190" y="166" width="170" height="466" rx="16"/>
  <circle class="hs" data-id="bilet" data-parent="stanica" cx="324" cy="460" r="24"/>
  <rect class="hs" data-id="z_carte" data-parent="stanica" x="220" y="362" width="36" height="28" rx="8"/>
  <rect class="hs" data-id="z_pachet" data-parent="stanica" x="282" y="352" width="112" height="70" rx="10"/>
  <circle class="hs" data-id="z_verigheta" data-parent="stanica" cx="304" cy="436" r="14"/>
  <rect class="hs" data-id="z_sticla" data-parent="noptiera" x="1508" y="398" width="38" height="66" rx="8"/>
  <rect class="hs" data-id="z_hartii" data-parent="noptiera" x="1546" y="444" width="54" height="58" rx="8"/>
  <rect class="hs" data-id="z_sertar" data-parent="noptiera" x="1460" y="488" width="102" height="52" rx="8"/>
  <rect class="hs" data-id="z_lumanare" data-parent="noptiera" x="1452" y="362" width="50" height="104" rx="10"/>
  <rect class="hs" data-id="bancnote" x="462" y="662" width="250" height="126" rx="14"/>
  <rect class="hs" data-id="ceas" x="1010" y="166" width="80" height="176" rx="10"/>
  <ellipse class="hs" data-id="portret" cx="1180" cy="246" rx="74" ry="90"/>
  <rect class="hs" data-id="saltea" x="976" y="440" width="232" height="146" rx="14"/>
  <rect class="hs" data-id="noptiera" x="1436" y="356" width="162" height="274" rx="12"/>
  <rect class="hs" data-id="costache" x="712" y="696" width="524" height="122" rx="20"/>
</g>
</svg>`,

  // n = nume, o = obiecte, f = fapte
  words: {
    costache:     { text: 'Costache',     cat: 'n' },
    giurgiuveanu: { text: 'Giurgiuveanu', cat: 'n' },
    stanica:      { text: 'Stănică',      cat: 'n' },
    ratiu:        { text: 'Rațiu',        cat: 'n' },
    otilia:       { text: 'Otilia',       cat: 'n' },
    marculescu:   { text: 'Mărculescu',   cat: 'n' },
    aglae:        { text: 'Aglae',        cat: 'n' },
    tulea:        { text: 'Tulea',        cat: 'n' },
    olimpia:      { text: 'Olimpia',      cat: 'n' },
    georgeta:     { text: 'Georgeta',     cat: 'n' },
    felix:        { text: 'Felix',        cat: 'n' },
    sima:         { text: 'Sima',         cat: 'n' },
    pascalopol:   { text: 'Pascalopol',   cat: 'n' },
    banii:        { text: 'banii',        cat: 'o' },
    salteaua:     { text: 'salteaua',     cat: 'o' },
    sertarul:     { text: 'sertarul',     cat: 'o' },
    testament:    { text: 'testament',    cat: 'o' },
    atac:         { text: 'atac',         cat: 'o' },
    furat:        { text: 'furat',        cat: 'f' },
    daruit:       { text: 'dăruit',       cat: 'f' }
  },

  // Persoanele din scenă: decupaj din desen + numele corect
  people: [
    { id: 'batran',  crop: '772 672 132 132',  first: 'costache', last: 'giurgiuveanu' },
    { id: 'barbat',  crop: '190 172 156 156',  first: 'stanica',  last: 'ratiu' },
    { id: 'fata',    crop: '1122 176 116 116', first: 'otilia',   last: 'marculescu' },
    { id: 'umbra',   crop: '118 222 104 104',  first: 'aglae',    last: 'tulea' }
  ],

  // Obiecte care pot fi găsite. {id|text} marchează un cuvânt care poate fi adunat.
  items: {
    chitanta: {
      kind: 'letter',
      title: 'Chitanța de la bancă',
      text: '«Dl. {costache|Costache} {giurgiuveanu|Giurgiuveanu}, proprietar, str. Antim, a ridicat astăzi toți {banii|banii} din cont.» Bătrânul nu avea încredere în nimeni și îi voia aproape de el.',
      icon: '<rect x="14" y="8" width="36" height="48" fill="#efe4c4"/><path d="M20 18h24M20 26h24M20 34h16"/><circle cx="40" cy="45" r="6" fill="#a8452f"/>'
    },
    reteta: {
      kind: 'letter',
      title: 'Rețeta doctorului',
      text: '«Pentru dl. Giurgiuveanu, după primul {atac|atac}: liniște deplină. O a doua criză i-ar putea fi fatală. Chemat de d-na {aglae|Aglae} {tulea|Tulea}, sora bolnavului. — Dr. Vasiliad»',
      icon: '<rect x="20" y="22" width="24" height="34" fill="#5f8672"/><rect x="26" y="10" width="12" height="12" fill="#c9a777"/><rect x="23" y="32" width="18" height="14" fill="#efe4c4"/>'
    },
    biletpas: {
      kind: 'letter',
      title: 'Un bilet împăturit',
      text: '«Cocoane Costache, depune banii pe numele domnișoarei {marculescu|Mărculescu}, cât mai e vreme. Fă-i măcar un {testament|testament}. — {pascalopol|Pascalopol}»',
      icon: '<path d="M10 20 L54 14 L56 46 L12 52 Z" fill="#efe4c4"/><path d="M10 20 L33 36 L54 14"/>'
    },
    carte: {
      kind: 'tag',
      title: 'Cartea de vizită',
      text: '«{ratiu|Rațiu} — avocat. Procese, moșteniri, succesiuni.» Pe dos, cu creionul: «Soția, {olimpia|Olimpia}: de vorbit despre divorț.»',
      icon: '<rect x="8" y="20" width="48" height="28" fill="#f3ecd6"/><path d="M16 30h22M16 38h14"/>'
    },
    bilet: {
      kind: 'letter',
      title: 'Bilețelul parfumat',
      text: '«{stanica|Stănică} dragule, te aștept. Când vei fi liber și cu stare, vom fi fericiți. A ta, {georgeta|Georgeta}.»',
      icon: '<rect x="16" y="10" width="32" height="44" fill="#e3bfe0" transform="rotate(8 32 32)"/><path d="M32 40 C22 32 24 24 32 29 C40 24 42 32 32 40 Z" fill="#a8452f"/>'
    },
    bancnota: {
      kind: 'tag',
      title: 'O bancnotă',
      text: 'O bancnotă nouă, care încă miroase a bancă. E la fel cu cea care se ivește din pachetul strâns sub braț de bărbatul din ușă.',
      icon: '<rect x="6" y="18" width="52" height="28" fill="#a3b98c"/><ellipse cx="32" cy="32" rx="9" ry="7"/><path d="M12 24h6M46 40h6"/>'
    },
    sfoara: {
      kind: 'tag',
      title: 'Sfori rupte',
      text: 'Sfoară groasă, ruptă cu mâna. E aceeași sfoară cu care e legat pachetul din brațele bărbatului de la ușă.',
      icon: '<path d="M8 40 q8 -22 16 0 q8 22 16 0 q6 -18 14 -6" stroke="#dccb9e" stroke-width="5"/><path d="M8 40 q8 -22 16 0 q8 22 16 0 q6 -18 14 -6" stroke-width="1.5"/>'
    },
    carnet: {
      kind: 'letter',
      title: 'Carnețelul cu datornici',
      text: '«Datornici: {stanica|Stănică} {ratiu|Rațiu}, 20 de lei. Nu i-a mai dat înapoi. Să nu-l mai las singur prin casă.»',
      icon: '<rect x="14" y="8" width="36" height="48" fill="#efe4c4"/><path d="M22 8v48M28 20h16M28 30h16M28 40h10"/>'
    },
    plan: {
      kind: 'letter',
      title: 'Planul unei case',
      text: '«Casă pentru Otilia. De început la primăvară.» Hârtia e îngălbenită: primăvara aceea n-a mai venit, iar bătrânul n-a făcut nici casa, nici un {testament|testament}.',
      icon: '<rect x="8" y="22" width="48" height="20" rx="10" fill="#cfd8e0"/><path d="M30 22v20" stroke="#a8452f" stroke-width="5"/>'
    },
    tratat: {
      kind: 'tag',
      title: 'Tratatul de anatomie',
      text: '«Anatomie descriptivă». Pe prima pagină, cu cerneală: «{felix|Felix} {sima|Sima}, student la Medicină». Stăpânul cărții nu este în cameră.',
      icon: '<path d="M14 10 L46 8 L50 50 L18 54 Z" fill="#3f5a4d"/><path d="M18 54 L22 58 L54 54 L50 50" fill="#efe4c4"/><path d="M22 20 L40 19"/>'
    }
  },

  // Zonele din scenă
  clues: {
    costache: {
      title: 'Bătrânul de pe covor',
      text: 'Un bătrân chel, în cămașă de noapte, zace lângă pat cu mâna întinsă spre ușă, de parcă ar fi vrut să prindă pe cineva. Nu mai respiră. Pe gulerul cămășii e cusută o monogramă: «C. G.»'
    },
    saltea: {
      title: 'Patul răvășit',
      text: '{salteaua|Salteaua} a fost ridicată în grabă. Dedesubt au rămas câteva sfori rupte și urma dreptunghiulară a unui pachet care a stat mult timp acolo. Ascunzătoarea e goală.',
      items: ['sfoara']
    },
    noptiera: {
      title: 'Noptiera',
      zoom: { cx: 1420, cy: 472, w: 410 },
      text: 'Arde o lumânare. Pe noptieră sunt câteva lucruri mărunte, lăsate în grabă.'
    },
    z_sticla: {
      title: 'Sticluța de doctorie',
      text: 'E aproape plină: bolnavul n-a luat nimic din ea. Sub sticluță stă împăturită hârtia doctorului.',
      items: ['reteta']
    },
    z_hartii: {
      title: 'Hârtia de pe margine',
      text: 'Un bilet împăturit, lăsat la vedere pe marginea noptierei.',
      items: ['biletpas']
    },
    scrin: {
      title: 'Scrinul de sub fereastră',
      inside: true,
      sound: 'drawer',
      text: 'Sertarul de sus nu e încuiat. Înăuntru, mărunțișurile unui om care nu aruncă nimic.'
    },
    z_s_hartie: {
      title: 'Hârtia de sub cutie',
      text: 'O hârtie cu ștampilă roșie, ascunsă pe jumătate sub cutia de tutun.',
      items: ['chitanta']
    },
    z_s_tutun: {
      title: 'Cutia de tutun',
      text: 'Tutun mărunțit cu grijă. Bătrânul îl vinde cu țigara, chiar și celor din casă.'
    },
    z_s_chei: {
      title: 'Legătura de chei',
      text: 'Chei de la toate ușile și dulapurile. Niciuna n-a fost folosită în noaptea asta: hoțul n-a avut nevoie de ele.'
    },
    z_s_foto: {
      title: 'O fotografie veche',
      text: 'O femeie și o fetiță cu bucle. Pe dos: «Soția mea și fetița ei». Fetița e fata din portretul de deasupra patului.'
    },
    z_s_batiste: {
      title: 'Batistele',
      text: 'Batiste vechi, cârpite de mai multe ori. Nimic ascuns între ele.'
    },
    dulap: {
      title: 'Dulapul',
      inside: true,
      sound: 'wardrobe',
      text: 'Ușile scârțâie. Miroase a naftalină și a haine purtate zeci de ani.'
    },
    z_d_buzunar: {
      title: 'Buzunarul cârpit',
      text: 'Din buzunarul paltonului iese colțul unui carnețel.',
      items: ['carnet']
    },
    z_d_plan: {
      title: 'Un sul de hârtie',
      text: 'Un sul legat cu panglică roșie, uitat pe fundul dulapului.',
      items: ['plan']
    },
    z_d_cutie: {
      title: 'Cutia de pălării',
      text: 'Nicio pălărie înăuntru: doar cuie, balamale și clanțe ruginite, strânse de la case dărâmate.'
    },
    z_d_frac: {
      title: 'Hainele',
      text: 'Un frac ros de molii și un halat peticit. Bătrânul avea avere, dar nu și-a cumpărat o haină nouă de ani de zile.'
    },
    z_d_ghete: {
      title: 'Ghetele',
      text: 'Ghete cu tălpile schimbate de multe ori. Nimic ascuns în ele.'
    },
    z_sertar: {
      title: 'Sertarul',
      text: '{sertarul|Sertarul} e încuiat. În jurul broaștei sunt zgârieturi vechi, dar în noaptea asta nu l-a forțat nimeni: hoțul știa exact unde să caute.'
    },
    z_lumanare: {
      title: 'Lumânarea',
      text: 'A ars mai mult de jumătate. Bătrânul veghea, treaz, cu ochii pe ușă.'
    },
    portret: {
      title: 'Portretul de deasupra patului',
      text: 'O fată tânără, cu bucle. Pe ramă, o plăcuță: «{otilia|Otilia}, fe-fetița mea». Bătrânul i-a promis de multe ori că îi va asigura viitorul, dar nu i-a {daruit|dăruit} niciodată nimic sigur. Amâna mereu pe a doua zi.'
    },
    stanica: {
      title: 'Bărbatul din ușă',
      zoom: { cx: 290, cy: 430, w: 440 },
      text: 'Un bărbat gras, cu mustață, iese grăbit privind peste umăr. Ascunde ceva sub braț.'
    },
    z_pachet: {
      title: 'Pachetul de sub braț',
      text: 'Un pachet gros, legat cu sfoară, din care se ivește colțul unei bancnote. Îl strânge la piept ca pe un copil.'
    },
    z_verigheta: {
      title: 'Verigheta',
      text: 'O verighetă pe care o tot răsucește pe deget, de parcă l-ar strânge. Omul acesta e însurat, dar nu pare bucuros de asta.'
    },
    z_carte: {
      title: 'Buzunarul de la piept',
      text: 'Din buzunar se ițește un carton alb, tipărit cu litere mărunte.',
      items: ['carte']
    },
    bilet: {
      title: 'Buzunarul hainei',
      text: 'Din buzunarul de jos iese un bilețel liliachiu, cu scris de femeie și o inimioară desenată.',
      items: ['bilet']
    },
    bancnote: {
      title: 'Urme pe podea',
      text: 'Câteva bancnote scăpate pe jos, una după alta, de la pat până la ușă. Cineva le-a {furat|furat} în mare grabă și nu s-a mai oprit să le adune.',
      items: ['bancnota']
    },
    umbra: {
      title: 'O umbră pe hol',
      text: 'Pe peretele holului se vede umbra unei femei cu coc. Se aude o șoaptă aspră: «Eu sunt sora lui! Mie mi se cuvine tot.» În noaptea asta însă a ajuns prea târziu.'
    },
    carteajos: {
      title: 'O carte uitată',
      text: 'Un tratat gros, căzut lângă perete. Cineva învăța aici, la căpătâiul bolnavului.',
      items: ['tratat']
    },
    ceas: {
      sound: 'bell',
      title: 'Ceasul de perete',
      text: 'Bate miezul nopții. Toată casa din strada Antim pare că își ține respirația.'
    }
  },

  deduction: [
    { slot: 's1', answer: 'costache', full: 'giurgiuveanu' },
    ' își retrăsese ',
    { slot: 's2', answer: 'banii' },
    ' de la bancă și îi ținea ascunși sub ',
    { slot: 's3', answer: 'salteaua' },
    ' patului. ',
    { slot: 's4', answer: 'stanica', full: 'ratiu' },
    ', care îl pândea de mult, a intrat în cameră și i-a ',
    { slot: 's5', answer: 'furat' },
    ' pachetul. Văzându-se jefuit, bătrânul a avut un nou ',
    { slot: 's6', answer: 'atac' },
    ' și a murit. Cu banii aceștia, hoțul o va părăsi pe ',
    { slot: 's7', answer: 'olimpia', full: 'ratiu' },
    ' ca să se însoare cu ',
    { slot: 's8', answer: 'georgeta' },
    '.'
  ],

  ending:
    '<p>Stănică Rațiu a furat pachetul cu bani de sub salteaua lui moș Costache. ' +
    'Bătrânul, văzându-se jefuit, a murit pe loc. Cu averea furată, Stănică a părăsit-o pe Olimpia ' +
    'și s-a însurat cu Georgeta.</p>' +
    '<p>Otilia a rămas fără nimic. Tatăl ei vitreg a iubit-o, dar zgârcenia l-a împiedicat ' +
    'să-i asigure viitorul. Ea a plecat cu Pascalopol, iar Felix a rămas doar cu o fotografie ' +
    'și cu o întrebare: cine a fost, de fapt, Otilia?</p>' +
    '<blockquote>«A fost o fată delicioasă, dar ciudată. Pentru mine e o enigmă.»<br>— Pascalopol</blockquote>'
};
