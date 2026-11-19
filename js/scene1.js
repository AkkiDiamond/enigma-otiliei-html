// Capitolul I — O seară de iulie. Scena, indiciile și deducția.
// Toată grafica este desenată în cod (SVG).
window.SCENE1 = {
  id: 'c1',
  num: 'I',
  title: 'O seară de iulie',
  blurb: 'Un tânăr cu o valiză bate la ușa casei din strada Antim.',
  theme: 'wine',
  thumb: '380 190 900 506',
  track: 'salon',
  dossier: 'Dosar · Salonul, iulie 1909',
  question: 'Ce s-a întâmplat în seara aceea?',

  svg: `
<svg viewBox="0 0 1600 900" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Salonul casei din strada Antim, seara">
<defs>
  <linearGradient id="gWall" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a3038"/><stop offset="1" stop-color="#4a1a22"/>
  </linearGradient>
  <linearGradient id="gFloor" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#7a4f2c"/><stop offset="1" stop-color="#3b2314"/>
  </linearGradient>
  <linearGradient id="gSky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#121c3a"/><stop offset="1" stop-color="#33466e"/>
  </linearGradient>
  <radialGradient id="gCandle" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#ffd27a" stop-opacity="0.62"/>
    <stop offset="0.4" stop-color="#ffb650" stop-opacity="0.22"/>
    <stop offset="1" stop-color="#ffb650" stop-opacity="0"/>
  </radialGradient>
  <radialGradient id="gVig" cx="0.5" cy="0.5" r="0.75">
    <stop offset="0.5" stop-color="#0a0406" stop-opacity="0"/>
    <stop offset="1" stop-color="#0a0406" stop-opacity="0.85"/>
  </radialGradient>
  <pattern id="pWall" width="70" height="90" patternUnits="userSpaceOnUse">
    <g fill="#e2b45c" opacity="0.16">
      <rect x="33" y="0" width="4" height="90"/>
      <path d="M35 20 L48 45 L35 70 L22 45 Z"/>
      <circle cx="0" cy="45" r="5"/><circle cx="70" cy="45" r="5"/>
    </g>
  </pattern>
  <filter id="fInk" x="-2%" y="-2%" width="104%" height="104%">
    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="11" result="n"/>
    <feDisplacementMap in="SourceGraphic" in2="n" scale="6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fGrain" x="0" y="0" width="100%" height="100%">
    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2" seed="5"/>
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
  <rect x="-20" y="470" width="1640" height="154" fill="#3a2014" class="o"/>
  <rect x="-20" y="-20" width="1640" height="60" fill="#3a141a" class="o"/>
  <path d="M0 48 h1600" stroke="#e2b45c" stroke-width="3" opacity=".4"/>
  <g class="t">
    <path d="M0 500 H1600 M0 596 H1600"/>
    <path d="M460 500 V596 M600 500 V596 M1100 500 V596 M1560 500 V596"/>
  </g>
  <rect x="-20" y="622" width="1640" height="300" fill="url(#gFloor)"/>
  <g stroke="#22140a" stroke-width="2.5" opacity="0.5">
    <line x1="100" y1="622" x2="-512" y2="900"/><line x1="300" y1="622" x2="-137" y2="900"/>
    <line x1="500" y1="622" x2="237" y2="900"/><line x1="700" y1="622" x2="612" y2="900"/>
    <line x1="900" y1="622" x2="987" y2="900"/><line x1="1100" y1="622" x2="1362" y2="900"/>
    <line x1="1300" y1="622" x2="1737" y2="900"/><line x1="1500" y1="622" x2="2112" y2="900"/>
  </g>

  <!-- covor -->
  <ellipse cx="800" cy="800" rx="430" ry="86" fill="#27484a" class="o"/>
  <ellipse cx="800" cy="800" rx="392" ry="70" fill="none" stroke="#d9a441" stroke-width="5" stroke-dasharray="14 10"/>
  <g fill="none" stroke="#d9a441" stroke-width="3" opacity=".55"><path d="M470 806 l36 -14 l36 14 l-36 14 Z M1058 806 l36 -14 l36 14 l-36 14 Z M800 852 l36 -10 l36 10 l-36 10 Z"/></g>

  <!-- tablou și oglindă pe perete -->
  <rect x="560" y="150" width="110" height="130" fill="#b8913e" class="o"/>
  <rect x="572" y="162" width="86" height="106" fill="#4f6a5a"/>
  <path d="M572 240 Q600 210 628 236 Q646 222 658 240 L658 268 L572 268 Z" fill="#2f4a3c"/>
  <circle cx="640" cy="186" r="9" fill="#f0e2b0"/>
  <ellipse cx="900" cy="200" rx="46" ry="62" fill="#b8913e" class="o"/>
  <ellipse cx="900" cy="200" rx="35" ry="50" fill="#93a9ad"/>
  <path d="M880 170 L900 196 M892 162 L912 190" stroke="#dfeaec" stroke-width="5" stroke-linecap="round"/>

  <!-- lampa din tavan -->
  <g class="lampsway">
  <line x1="800" y1="-10" x2="800" y2="118" stroke="#1b130d" stroke-width="5"/>
  <circle cx="800" cy="196" r="60" fill="#fff0c0" opacity="0.3"/>
  <circle cx="800" cy="192" r="26" fill="#fff3cf" class="o"/>
  <path d="M736 182 L864 182 L832 118 L768 118 Z" fill="#d9a441" class="o"/>
  <path d="M736 182 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0 q8 14 16 0" class="l"/>
  </g>

  <!-- ===== ușa de la intrare ===== -->
  <rect x="90" y="120" width="300" height="504" fill="#3a2416" class="o"/>
  <rect x="116" y="146" width="248" height="476" fill="url(#gSky)"/>
  <g fill="#f4edd3" class="twinkle"><circle cx="150" cy="190" r="2"/><circle cx="200" cy="230" r="1.6"/><circle cx="330" cy="180" r="2"/><circle cx="300" cy="250" r="1.6"/></g>
  <circle class="gas" cx="322" cy="330" r="40" fill="#ffd27a" opacity="0.2"/>
  <rect x="318" y="330" width="6" height="292" fill="#0d1424"/>
  <path d="M308 330 L336 330 L330 306 L314 306 Z" fill="#ffd98a"/>
  <path d="M116 146 L36 182 L36 664 L116 622 Z" fill="#583820" class="o"/>
  <path d="M100 190 L52 210 L52 380 L100 372 Z" fill="#4a2e19" class="o"/>
  <path d="M100 404 L52 410 L52 626 L100 596 Z" fill="#4a2e19" class="o"/>
  <circle cx="48" cy="398" r="8" fill="#c99a4a" class="o"/>
  <path d="M66 230 q8 60 0 130 M84 420 q8 70 0 160" class="t"/>

  <ellipse cx="247" cy="624" rx="72" ry="9" fill="#000" opacity=".34"/>
  <!-- ===== Felix ===== -->
  <g class="vol fidget" style="animation-delay:-2s">
    <ellipse cx="224" cy="618" rx="26" ry="10" fill="#14100c" class="o"/>
    <ellipse cx="272" cy="620" rx="26" ry="10" fill="#14100c" class="o"/>
    <path d="M214 470 L206 612 L240 612 L247 505 L256 614 L290 614 L282 470 Z" fill="#2a3350" class="o"/>
    <path d="M200 346 Q247 322 294 346 L302 482 Q247 498 194 482 Z" fill="#33406a" class="o"/>
    <g fill="#d9a441"><circle cx="247" cy="372" r="4"/><circle cx="247" cy="398" r="4"/><circle cx="247" cy="424" r="4"/><circle cx="247" cy="450" r="4"/></g>
    <rect x="228" y="328" width="38" height="16" fill="#2a3350" class="o"/>
    <!-- brațul cu valiza -->
    <path d="M206 358 Q190 420 198 486" fill="none" stroke="#1b130d" stroke-width="36" stroke-linecap="round"/>
    <path d="M206 358 Q190 420 198 486" fill="none" stroke="#33406a" stroke-width="29" stroke-linecap="round"/>
    <circle cx="198" cy="498" r="13" fill="#f0c9a6" class="o"/>
    <path d="M176 512 Q198 490 220 512" class="l"/>
    <rect x="146" y="510" width="96" height="74" rx="9" fill="#7a5230" class="o"/>
    <path d="M168 510 V584 M220 510 V584" class="t"/>
    <path d="M226 528 L250 522 L254 546 L230 552 Z" fill="#efe4c4" class="o"/>
    <!-- brațul cu scrisoarea -->
    <path d="M290 358 Q322 404 300 440" fill="none" stroke="#1b130d" stroke-width="36" stroke-linecap="round"/>
    <path d="M290 358 Q322 404 300 440" fill="none" stroke="#33406a" stroke-width="29" stroke-linecap="round"/>
    <path d="M282 424 L330 414 L336 448 L288 458 Z" fill="#efe4c4" class="o"/>
    <path d="M282 424 L310 440 L330 414" class="t"/>
    <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><text x="322" y="444" font-size="5" transform="rotate(-11 322 444)">Felix,</text><path d="M314 449 l16 -3" stroke="#1b130d" stroke-width=".8" fill="none"/></g>
    <circle cx="296" cy="446" r="13" fill="#f0c9a6" class="o"/>
    <!-- cap -->
    <rect x="237" y="314" width="20" height="22" fill="#f0c9a6"/>
    <path d="M237 314 V336 M257 314 V336" class="l"/>
    <ellipse cx="247" cy="290" rx="36" ry="40" fill="#f0c9a6" class="o"/>
    <g transform="translate(8 0)"><ellipse cx="236" cy="292" rx="7" ry="8" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="240" cy="293" r="4" fill="#1b130d"/></g>
    <g transform="translate(8 0)"><ellipse cx="260" cy="292" rx="7" ry="8" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="264" cy="293" r="4" fill="#1b130d"/></g>
    <g transform="translate(8 0)"><path d="M226 276 L242 272 M254 272 L270 276" class="l"/></g>
    <g transform="translate(8 0)"><path d="M248 298 q5 8 -2 10" class="l"/></g>
    <g transform="translate(8 0)"><path d="M240 316 q8 4 16 0" class="l"/></g>
    <path d="M210 276 Q247 232 284 276 L284 284 L210 284 Z" fill="#33406a" class="o"/>
    <path d="M212 284 Q250 298 292 286 L288 278 Z" fill="#14100c" class="o"/>
    <g transform="translate(8 0)"><circle cx="247" cy="262" r="5" fill="#d9a441"/></g>
    <g transform="translate(8 0)"><g fill="#c9605a" opacity=".4"><ellipse cx="228" cy="306" rx="8" ry="5"/><ellipse cx="266" cy="306" rx="8" ry="5"/></g></g>
    <ellipse cx="211" cy="296" rx="6" ry="10" fill="#f0c9a6" class="o"/>
    <path d="M214 286 q-2 12 3 18 M280 286 q2 12 -3 18" fill="none" stroke="#5a3a22" stroke-width="5" stroke-linecap="round"/>
    <rect x="214" y="442" width="68" height="12" fill="#1b130d"/><rect x="239" y="439" width="18" height="18" fill="#d9a441" class="o"/>
    <path d="M214 386 h24 M258 386 h24 M226 520 v80 M270 520 v82" class="t"/>
    <path d="M212 612 q10 -5 20 0 M260 614 q10 -5 20 0" stroke="#6b6b70" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <g transform="translate(8 0)"><circle cx="240" cy="290" r="1.7" fill="#fff"/></g><g transform="translate(8 0)"><circle cx="264" cy="290" r="1.7" fill="#fff"/></g>
    <g transform="translate(8 0)"><g class="blink" style="animation-delay:-0.4s"><ellipse cx="236" cy="292" rx="8.5" ry="9" fill="#f0c9a6"/><path d="M227.5 293 q8.5 4 17.0 0" class="l"/><ellipse cx="260" cy="292" rx="8.5" ry="9" fill="#f0c9a6"/><path d="M251.5 293 q8.5 4 17.0 0" class="l"/></g></g>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><text x="240" y="541" font-size="7" transform="rotate(-14 240 541)">F.S.</text></g>
  </g>

  <ellipse cx="440" cy="624" rx="74" ry="9" fill="#000" opacity=".34"/>
  <!-- ===== moș Costache ===== -->
  <g class="vol tremble">
    <ellipse cx="416" cy="618" rx="24" ry="9" fill="#7c3333" class="o"/>
    <ellipse cx="466" cy="620" rx="24" ry="9" fill="#7c3333" class="o"/>
    <path d="M392 474 Q440 444 488 474 L502 612 L378 612 Z" fill="#6b5a3a" class="o"/>
    <path d="M440 460 L440 612" class="t"/>
    <path d="M396 540 H486" stroke="#3a2a14" stroke-width="7"/>
    <!-- mâna cu lumânarea -->
    <path d="M400 486 Q372 506 368 528" fill="none" stroke="#1b130d" stroke-width="30" stroke-linecap="round"/>
    <path d="M400 486 Q372 506 368 528" fill="none" stroke="#6b5a3a" stroke-width="23" stroke-linecap="round"/>
    <circle cx="366" cy="536" r="12" fill="#e6bd98" class="o"/>
    <ellipse cx="366" cy="526" rx="20" ry="6" fill="#c99a4a" class="o"/>
    <rect x="360" y="484" width="12" height="40" fill="#f3e9c9" class="o"/>
    <path class="flame" d="M366 480 Q356 466 366 448 Q376 466 366 480 Z" fill="#ffd27a" stroke="#e58a2a" stroke-width="2.5"/>
    <!-- mâna ridicată -->
    <path d="M482 486 Q510 470 508 440" fill="none" stroke="#1b130d" stroke-width="30" stroke-linecap="round"/>
    <path d="M482 486 Q510 470 508 440" fill="none" stroke="#6b5a3a" stroke-width="23" stroke-linecap="round"/>
    <circle cx="508" cy="428" r="13" fill="#e6bd98" class="o"/>
    <rect x="427" y="438" width="26" height="34" fill="#e6bd98"/>
    <path d="M427 438 V472 M453 438 V472" class="l"/>
    <!-- cap chel -->
    <ellipse cx="440" cy="414" rx="40" ry="36" fill="#e6bd98" class="o"/>
    <path d="M402 406 q-12 0 -10 14 M400 422 q-12 2 -6 14 M478 406 q12 0 10 14 M480 422 q12 2 6 14" fill="none" stroke="#f4f1ea" stroke-width="6" stroke-linecap="round"/>
    <g transform="translate(-9 0)"><circle cx="426" cy="410" r="7" fill="#fff"/></g><g transform="translate(-9 0)"><circle cx="421" cy="411" r="3.5" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><circle cx="452" cy="410" r="7" fill="#fff"/></g><g transform="translate(-9 0)"><circle cx="447" cy="411" r="3.5" fill="#1b130d"/></g>
    <g transform="translate(-9 0)"><path d="M416 396 L432 400 M446 400 L462 396" class="l"/></g>
    <g transform="translate(-9 0)"><ellipse cx="440" cy="434" rx="13" ry="7" fill="#b5625a" class="o"/></g>
    <g transform="translate(-9 0)"><g fill="#c9605a" opacity=".35"><ellipse cx="416" cy="426" rx="8" ry="5"/><ellipse cx="464" cy="426" rx="8" ry="5"/></g></g>
    <ellipse cx="482" cy="416" rx="6" ry="10" fill="#e6bd98" class="o"/>
    <g transform="translate(-9 0)"><path d="M424 392 q16 -7 32 0 M428 384 q12 -5 24 0" class="t"/></g>
    <g transform="translate(-9 0)"><path d="M440 414 q-7 10 1 13" class="l"/></g>
    <path d="M418 458 L440 496 L462 458 L452 452 L440 472 L428 452 Z" fill="#57482c" class="o"/>
    <path d="M470 542 v26 M477 542 v22" class="l"/>
    <g transform="translate(-9 0)"><circle cx="428" cy="408" r="1.7" fill="#fff"/></g><g transform="translate(-9 0)"><circle cx="454" cy="408" r="1.7" fill="#fff"/></g>
    <g transform="translate(-9 0)"><g class="blink" style="animation-delay:-2.6s"><ellipse cx="426" cy="410" rx="8.5" ry="8.5" fill="#e6bd98"/><path d="M417.5 411 q8.5 4 17.0 0" class="l"/><ellipse cx="452" cy="410" rx="8.5" ry="8.5" fill="#e6bd98"/><path d="M443.5 411 q8.5 4 17.0 0" class="l"/></g></g>
  </g>

  <!-- ===== vitrina de perete ===== -->
  <g class="vol">
  <path d="M1404 138 Q1486 112 1568 138 L1568 150 L1404 150 Z" fill="#3a2416" class="o"/>
  <rect x="1410" y="148" width="152" height="186" fill="#4a2e19" class="o"/>
  <rect x="1420" y="158" width="62" height="166" fill="#7f9a98" class="o"/><rect x="1490" y="158" width="62" height="166" fill="#7f9a98" class="o"/>
  <path d="M1420 214 h62 M1420 270 h62 M1490 214 h62 M1490 270 h62" class="l"/>
  <g class="o"><rect x="1430" y="190" width="12" height="24" fill="#5f8672"/><rect x="1450" y="184" width="12" height="30" fill="#a8452f"/><rect x="1502" y="240" width="34" height="30" fill="#6b5a3a"/><circle cx="1520" cy="198" r="12" fill="#e8c14e"/></g>
  <path d="M1428 170 l20 30 M1500 168 l16 26" stroke="#dfeaec" stroke-width="4" stroke-linecap="round" opacity=".7"/>
  <circle cx="1482" cy="244" r="4" fill="#c99a4a" class="o"/><circle cx="1490" cy="244" r="4" fill="#c99a4a" class="o"/>

  <ellipse cx="1256" cy="626" rx="120" ry="9" fill="#000" opacity=".3"/>
  </g>

  <!-- ===== pianul ===== -->
  <g class="vol">
  <rect x="1150" y="402" width="212" height="222" fill="#24140e" class="o"/>
  <path d="M1166 420 v70 M1180 420 v40" stroke="#5a4030" stroke-width="5" stroke-linecap="round"/>
  <rect x="1230" y="598" width="16" height="26" fill="#c99a4a" class="o"/><rect x="1262" y="598" width="16" height="26" fill="#c99a4a" class="o"/>
  <rect x="1140" y="388" width="232" height="16" fill="#1a0e09" class="o"/>
  <rect x="1140" y="500" width="232" height="24" fill="#1a0e09" class="o"/>
  <rect x="1148" y="504" width="216" height="11" fill="#efe4c4"/>
  <g stroke="#1b130d" stroke-width="4"><path d="M1164 504 v8 M1180 504 v8 M1204 504 v8 M1220 504 v8 M1236 504 v8 M1260 504 v8 M1276 504 v8 M1300 504 v8 M1316 504 v8 M1332 504 v8 M1352 504 v8"/></g>
  <path d="M1218 430 L1304 430 L1308 494 L1214 494 Z" fill="#efe4c4" class="o"/>
  <path d="M1226 446 H1296 M1226 458 H1296 M1226 470 H1296 M1226 482 H1296" class="t"/>
  <g fill="#1b130d"><ellipse cx="1240" cy="458" rx="5" ry="4"/><ellipse cx="1258" cy="470" rx="5" ry="4"/><ellipse cx="1276" cy="446" rx="5" ry="4"/><ellipse cx="1290" cy="464" rx="5" ry="4"/></g>
  <rect x="1322" y="352" width="10" height="36" fill="#f3e9c9" class="o"/>
  <path class="flame" style="animation-delay:-.2s" d="M1327 348 Q1319 336 1327 322 Q1335 336 1327 348 Z" fill="#ffd27a" stroke="#e58a2a" stroke-width="2.5"/>
  </g>

  <!-- ===== Otilia (în spatele fotoliului) ===== -->
  <g class="vol breath" style="animation-delay:-4s">
    <path d="M1060 404 Q1102 382 1144 404 L1168 640 L1050 640 Z" fill="#dfe8ee" class="o"/>
    <path d="M1084 420 Q1090 520 1080 630 M1124 420 Q1134 520 1140 630" class="t"/>
    <path d="M1076 402 Q1102 420 1128 402" fill="none" stroke="#9fb7c6" stroke-width="6"/>
    <g transform="rotate(-6 1101 373)"><rect x="1092" y="362" width="18" height="42" fill="#f2d2b6"/></g>
    <g transform="rotate(-6 1101 373)"><path d="M1092 362 V404 M1110 362 V404" class="l"/></g>
    <g transform="rotate(-6 1101 373)"><g fill="#b9823f" class="o">
      <circle cx="1070" cy="330" r="20"/><circle cx="1132" cy="330" r="20"/>
      <circle cx="1066" cy="358" r="16"/><circle cx="1136" cy="358" r="16"/>
      <circle cx="1084" cy="304" r="20"/><circle cx="1118" cy="304" r="20"/>
    </g></g>
    <g transform="rotate(-6 1101 373)"><ellipse cx="1101" cy="338" rx="31" ry="35" fill="#f2d2b6" class="o"/></g>
    <g transform="rotate(-6 1101 373)"><path d="M1072 322 Q1086 300 1101 312 Q1116 300 1130 322 Q1114 314 1101 320 Q1088 314 1072 322 Z" fill="#b9823f"/></g>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><ellipse cx="1090" cy="338" rx="6" ry="7" fill="#fff"/></g></g><g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><circle cx="1086" cy="339" r="3.5" fill="#2f6f68"/></g></g>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><ellipse cx="1112" cy="338" rx="6" ry="7" fill="#fff"/></g></g><g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><circle cx="1108" cy="339" r="3.5" fill="#2f6f68"/></g></g>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><path d="M1090 356 Q1101 366 1112 356" fill="none" stroke="#a8452f" stroke-width="3" stroke-linecap="round"/></g></g>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><g fill="#c9605a" opacity=".4"><ellipse cx="1082" cy="350" rx="8" ry="5"/><ellipse cx="1120" cy="350" rx="8" ry="5"/></g></g></g>
    <g transform="rotate(-6 1101 373)"><path d="M1066 318 q6 -10 16 -8 M1122 300 q10 0 14 10 M1060 350 q4 8 10 8" fill="none" stroke="#e0b46a" stroke-width="3" stroke-linecap="round"/></g>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><path d="M1083 332 l-4 -3 M1119 332 l4 -3" class="l"/></g></g>
    <path d="M1072 406 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0 q6 8 12 0" fill="none" stroke="#fff" stroke-width="2.5"/>
    <path d="M1058 474 H1150" stroke="#6f8fb0" stroke-width="9"/>
    <path d="M1100 474 l-14 -10 v20 Z M1100 474 l14 -10 v20 Z" fill="#6f8fb0" class="o"/>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><circle cx="1092" cy="336" r="1.7" fill="#fff"/></g></g><g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><circle cx="1114" cy="336" r="1.7" fill="#fff"/></g></g>
    <g transform="rotate(-6 1101 373)"><g transform="translate(-7 0)"><g class="blink" style="animation-delay:-3.4s"><ellipse cx="1090" cy="338" rx="7.5" ry="8" fill="#f2d2b6"/><path d="M1082.5 339 q7.5 4 15.0 0" class="l"/><ellipse cx="1112" cy="338" rx="7.5" ry="8" fill="#f2d2b6"/><path d="M1104.5 339 q7.5 4 15.0 0" class="l"/></g></g></g>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><path d="M1073 406 l4 -4 l4 4" stroke="#fff" stroke-width="1" fill="none"/></g>
  </g>

  <g class="vol"><rect x="538" y="452" width="13" height="218" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><rect x="691" y="452" width="13" height="218" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="544" cy="448" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="697" cy="448" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><path d="M544 470 Q621 438 697 470" fill="none" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/><path d="M544 470 Q621 438 697 470" fill="none" stroke="#4a2e19" stroke-width="6" stroke-linecap="round"/></g>
  <!-- ===== Aglae ===== -->
  <g class="vol breath" style="animation-delay:-1s">
    <path d="M556 474 Q620 442 684 474 L702 670 L538 670 Z" fill="#3b2a4a" class="o"/>
    <rect x="608" y="420" width="24" height="34" fill="#e8c3a0"/>
    <path d="M608 420 V454 M632 420 V454" class="l"/>
    <path d="M594 452 Q620 478 646 452 L640 440 L600 440 Z" fill="#efe8d6" class="o"/>
    <circle cx="620" cy="336" r="21" fill="#6f6259" class="o"/>
    <ellipse cx="620" cy="388" rx="39" ry="43" fill="#e8c3a0" class="o"/>
    <path d="M582 380 Q584 342 620 342 Q656 342 658 380 Q640 356 620 358 Q600 356 582 380 Z" fill="#6f6259" class="o"/>
    <g transform="translate(-8 0)"><path d="M596 380 L612 388 M644 380 L628 388" class="l"/></g>
    <g transform="translate(-8 0)"><ellipse cx="606" cy="394" rx="6" ry="5" fill="#fff"/></g><g transform="translate(-8 0)"><circle cx="603" cy="394" r="3.2" fill="#1b130d"/></g><g transform="translate(-8 0)"><ellipse cx="634" cy="394" rx="6" ry="5" fill="#fff"/></g><g transform="translate(-8 0)"><circle cx="631" cy="394" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(-8 0)"><path d="M620 398 q-6 12 2 14" class="l"/></g>
    <g transform="translate(-8 0)"><path d="M604 420 Q620 410 636 420" class="l"/></g>
    <g transform="translate(-8 0)"><g fill="#c9605a" opacity=".28"><ellipse cx="598" cy="408" rx="8" ry="5"/><ellipse cx="642" cy="408" rx="8" ry="5"/></g></g>
    <circle cx="620" cy="462" r="7" fill="#a8452f" class="o"/>
    <circle cx="584" cy="406" r="4" fill="#e8c14e" class="o"/><circle cx="656" cy="406" r="4" fill="#e8c14e" class="o"/>
    <g transform="translate(-8 0)"><path d="M600 416 q-4 8 0 14 M640 416 q4 8 0 14" class="t"/></g>
    <path d="M596 358 q24 -12 48 0" fill="none" stroke="#9a8f86" stroke-width="3" stroke-linecap="round"/>
    <g fill="#c9a24e"><circle cx="620" cy="500" r="4"/><circle cx="620" cy="530" r="4"/><circle cx="620" cy="560" r="4"/></g>
    <g transform="translate(-8 0)"><g class="blink" style="animation-delay:-4.4s"><ellipse cx="606" cy="394" rx="6" ry="5.5" fill="#e8c3a0"/><path d="M600 395 q6 4 12 0" class="l"/><ellipse cx="634" cy="394" rx="6" ry="5.5" fill="#e8c3a0"/><path d="M628 395 q6 4 12 0" class="l"/></g></g>
  </g>

  <g class="vol"><rect x="722" y="468" width="13" height="202" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><rect x="847" y="468" width="13" height="202" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="728" cy="464" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><circle cx="853" cy="464" r="9" fill="#4a2e19" stroke="#1b130d" stroke-width="3.5" stroke-linejoin="round"/><path d="M728 486 Q791 454 853 486" fill="none" stroke="#1b130d" stroke-width="12" stroke-linecap="round"/><path d="M728 486 Q791 454 853 486" fill="none" stroke="#4a2e19" stroke-width="6" stroke-linecap="round"/></g>
  <!-- ===== Aurica ===== -->
  <g class="vol breath" style="animation-delay:-6s">
    <path d="M746 484 Q790 458 834 484 L850 670 L730 670 Z" fill="#c58a96" class="o"/>
    <path d="M772 470 Q790 486 808 470" class="l"/>
    <rect x="781" y="428" width="18" height="52" fill="#efd0b4"/>
    <path d="M781 428 V480 M799 428 V480" class="l"/>
    <ellipse cx="790" cy="396" rx="29" ry="43" fill="#efd0b4" class="o"/>
    <path d="M761 392 Q760 350 790 350 Q820 350 819 392 Q808 366 790 372 Q772 366 761 392 Z" fill="#8a6a44" class="o"/>
    <path d="M776 346 L790 354 L804 346 L800 362 L780 362 Z" fill="#a8452f" class="o"/>
    <g transform="translate(-6 0)"><ellipse cx="779" cy="396" rx="6" ry="6" fill="#fff"/></g><g transform="translate(-6 0)"><circle cx="776" cy="396" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(-6 0)"><ellipse cx="801" cy="396" rx="6" ry="6" fill="#fff"/></g><g transform="translate(-6 0)"><circle cx="798" cy="396" r="3.2" fill="#1b130d"/></g>
    <g transform="translate(-6 0)"><path d="M788 402 q-4 12 3 14" class="l"/></g>
    <g transform="translate(-6 0)"><path d="M780 424 Q790 430 800 424" class="l"/></g>
    <g transform="translate(-6 0)"><g fill="#c9605a" opacity=".45"><ellipse cx="772" cy="410" rx="8" ry="5"/><ellipse cx="808" cy="410" rx="8" ry="5"/></g></g>
    <circle cx="760" cy="406" r="3.5" fill="#f4f1ea" class="o"/><circle cx="820" cy="406" r="3.5" fill="#f4f1ea" class="o"/>
    <path d="M762 480 q7 8 14 0 q7 8 14 0 q7 8 14 0 q7 8 14 0" fill="none" stroke="#f4e6ea" stroke-width="2.5"/>
    <path d="M770 366 q20 -10 40 0" fill="none" stroke="#b08a5a" stroke-width="3" stroke-linecap="round"/>
    <g transform="translate(-6 0)"><circle cx="781" cy="394" r="1.7" fill="#fff"/></g><g transform="translate(-6 0)"><circle cx="803" cy="394" r="1.7" fill="#fff"/></g>
    <g transform="translate(-6 0)"><g class="blink" style="animation-delay:-1.9s"><ellipse cx="779" cy="396" rx="7.5" ry="7" fill="#efd0b4"/><path d="M771.5 397 q7.5 4 15.0 0" class="l"/><ellipse cx="801" cy="396" rx="7.5" ry="7" fill="#efd0b4"/><path d="M793.5 397 q7.5 4 15.0 0" class="l"/></g></g>
  </g>

  <!-- ===== Pascalopol în fotoliu ===== -->
  <g class="vol breath" style="animation-delay:-8s">
    <path d="M900 436 Q985 382 1070 436 L1082 670 L888 670 Z" fill="#5a1f24" class="o"/>
    <path d="M924 474 Q985 442 1046 474 L1062 670 L908 670 Z" fill="#1c1a1e" class="o"/>
    <path d="M962 452 L985 500 L1008 452 Z" fill="#efe8d6" class="o"/>
    <path d="M978 462 L992 462 L988 492 L982 492 Z" fill="#2f6f68" class="o"/>
    <rect x="973" y="412" width="24" height="52" fill="#e6b48e"/>
    <g transform="rotate(5 985 423)"><path d="M973 412 V464 M997 412 V464" class="l"/></g>
    <g transform="rotate(5 985 423)"><ellipse cx="985" cy="380" rx="41" ry="43" fill="#e6b48e" class="o"/></g>
    <g transform="rotate(5 985 423)"><path d="M945 372 Q946 334 985 334 Q1024 334 1025 372 Q1010 350 978 354 Q956 352 945 372 Z" fill="#1c1a1e" class="o"/></g>
    <g transform="rotate(5 985 423)"><path d="M947 372 q-2 12 4 20 M1023 372 q2 12 -4 20" stroke="#9a9a9a" stroke-width="6" fill="none" stroke-linecap="round"/></g>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><ellipse cx="970" cy="382" rx="6" ry="5" fill="#fff"/></g></g><g transform="rotate(5 985 423)"><g transform="translate(9 0)"><circle cx="973" cy="382" r="3.2" fill="#1b130d"/></g></g><g transform="rotate(5 985 423)"><g transform="translate(9 0)"><ellipse cx="1000" cy="382" rx="6" ry="5" fill="#fff"/></g></g><g transform="rotate(5 985 423)"><g transform="translate(9 0)"><circle cx="1003" cy="382" r="3.2" fill="#1b130d"/></g></g>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><path d="M960 370 L978 368 M992 368 L1010 370" class="l"/></g></g>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><path d="M985 386 q-6 12 2 14" class="l"/></g></g>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><path d="M964 404 Q985 396 1006 404 Q985 414 964 404 Z" fill="#1c1a1e"/></g></g>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><path d="M976 416 Q985 430 994 416 Z" fill="#1c1a1e"/></g></g>
    <!-- mâna care întinde cutiuța cu inel -->
    <path d="M1040 486 Q1072 478 1078 452" fill="none" stroke="#1b130d" stroke-width="32" stroke-linecap="round"/>
    <path d="M1040 486 Q1072 478 1078 452" fill="none" stroke="#1c1a1e" stroke-width="25" stroke-linecap="round"/>
    <circle cx="1078" cy="442" r="13" fill="#e6b48e" class="o"/>
    <rect x="1066" y="412" width="26" height="20" fill="#7c3333" class="o"/>
    <ellipse cx="1079" cy="410" rx="8" ry="5" fill="none" stroke="#e8c14e" stroke-width="4"/>
    <circle cx="1079" cy="404" r="4" fill="#4f8fd0" class="o"/>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><g fill="#c9605a" opacity=".5"><ellipse cx="960" cy="396" rx="8" ry="5"/><ellipse cx="1010" cy="396" rx="8" ry="5"/></g></g></g>
    <path d="M950 540 q34 20 70 0" fill="none" stroke="#e8c14e" stroke-width="3"/>
    <path class="sparkle" d="M1079 388 l3 8 l8 3 l-8 3 l-3 8 l-3 -8 l-8 -3 l8 -3 Z" fill="#fff"/>
    <g transform="rotate(5 985 423)"><ellipse cx="944" cy="384" rx="6" ry="10" fill="#e6b48e" class="o"/></g>
    <g transform="rotate(5 985 423)"><path d="M956 350 q28 -12 56 0" fill="none" stroke="#4a4850" stroke-width="3" stroke-linecap="round"/></g>
    <path d="M962 452 L940 520 L972 500 Z M1008 452 L1030 520 L998 500 Z" fill="#2c2a30" class="o"/>
    <path d="M1024 522 l12 -10 l8 12 Z" fill="#efe8d6" class="o"/>
    <g fill="#e8c14e"><circle cx="906" cy="470" r="3"/><circle cx="902" cy="510" r="3"/><circle cx="898" cy="550" r="3"/><circle cx="1064" cy="470" r="3"/><circle cx="1068" cy="510" r="3"/><circle cx="1072" cy="550" r="3"/></g>
    <g transform="rotate(5 985 423)"><g transform="translate(9 0)"><g class="blink" style="animation-delay:-5.1s"><ellipse cx="970" cy="382" rx="6" ry="5.5" fill="#e6b48e"/><path d="M964 383 q6 4 12 0" class="l"/><ellipse cx="1000" cy="382" rx="6" ry="5.5" fill="#e6b48e"/><path d="M994 383 q6 4 12 0" class="l"/></g></g></g>
      <g font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle"><path d="M1002 484 h22" stroke="#efe8d6" stroke-width="1.2"/><rect x="1004" y="474" width="18" height="12" fill="#f3ecd6" stroke="#1b130d" stroke-width="1" transform="rotate(-6 1013 480)"/><text x="1013" y="483" font-size="5" transform="rotate(-6 1013 480)">L.P.</text></g>
  </g>

  <!-- ===== masa de joc ===== -->
  <g class="vol">
  <ellipse cx="800" cy="826" rx="250" ry="20" fill="#000" opacity=".35"/>
  <path d="M772 700 L762 800 L700 824 L900 824 L838 800 L828 700 Z" fill="#3a2416" class="o"/>
  <path d="M530 646 Q536 730 580 742 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 q18 14 36 0 Q1064 730 1070 646 Z" fill="#b8913e" class="o"/>
  <path d="M620 690 Q632 716 628 738 M800 706 V742 M980 690 Q968 716 972 738" class="t"/>
  <g fill="#8f6128" opacity=".7"><circle cx="600" cy="712" r="5"/><circle cx="680" cy="722" r="5"/><circle cx="760" cy="726" r="5"/><circle cx="840" cy="726" r="5"/><circle cx="920" cy="722" r="5"/><circle cx="1000" cy="712" r="5"/></g>
  <ellipse cx="800" cy="646" rx="270" ry="62" fill="#c9a24e" class="o"/>
  <ellipse cx="800" cy="644" rx="236" ry="48" fill="#2f5d4f" class="o"/>
  <!-- cutia de table -->
  <path d="M716 622 L800 618 L800 668 L712 672 Z" fill="#6b4424" class="o"/>
  <path d="M800 618 L884 622 L888 672 L800 668 Z" fill="#5a3a1e" class="o"/>
  <g fill="#efe4c4"><path d="M728 626 l6 20 l6 -20 Z M748 625 l6 20 l6 -20 Z M768 624 l6 20 l6 -20 Z M816 624 l6 20 l6 -20 Z M836 625 l6 20 l6 -20 Z M856 626 l6 20 l6 -20 Z"/></g>
  <g fill="#a8452f"><path d="M738 668 l6 -18 l6 18 Z M758 668 l6 -18 l6 18 Z M826 668 l6 -18 l6 18 Z M846 668 l6 -18 l6 18 Z"/></g>
  <rect x="906" y="640" width="18" height="18" rx="3" fill="#f4f1ea" class="o" transform="rotate(14 915 649)"/>
  <rect x="932" y="654" width="18" height="18" rx="3" fill="#f4f1ea" class="o" transform="rotate(-10 941 663)"/>
  <circle cx="915" cy="649" r="2.5" fill="#1b130d"/><circle cx="937" cy="659" r="2.5" fill="#1b130d"/><circle cx="945" cy="667" r="2.5" fill="#1b130d"/>
  <!-- cărți și bani mărunți -->
  <rect x="632" y="652" width="44" height="30" rx="3" fill="#a8452f" class="o" transform="rotate(-12 654 667)"/>
  <rect x="640" y="646" width="44" height="30" rx="3" fill="#efe4c4" class="o" transform="rotate(-4 662 661)"/>
  <g fill="#e8c14e" class="o"><ellipse cx="700" cy="690" rx="10" ry="5"/><ellipse cx="716" cy="684" rx="10" ry="5"/><ellipse cx="880" cy="692" rx="10" ry="5"/></g>
  </g>

  <!-- brațul Aglaei cu paharul de zaruri -->
  <g class="shakecup">
  <path d="M672 496 Q716 560 728 612" fill="none" stroke="#1b130d" stroke-width="34" stroke-linecap="round"/>
  <path d="M672 496 Q716 560 728 612" fill="none" stroke="#3b2a4a" stroke-width="27" stroke-linecap="round"/>
  <circle cx="730" cy="620" r="13" fill="#e8c3a0" class="o"/>
  <path d="M722 586 L752 580 L748 612 L730 614 Z" fill="#7a5230" class="o"/>
  </g>
  <!-- mâna lui Pascalopol pe masă, cu inele -->
  <path d="M940 494 Q904 566 884 618" fill="none" stroke="#1b130d" stroke-width="34" stroke-linecap="round"/>
  <path d="M940 494 Q904 566 884 618" fill="none" stroke="#1c1a1e" stroke-width="27" stroke-linecap="round"/>
  <circle cx="880" cy="626" r="14" fill="#e6b48e" class="o"/>
  <circle cx="872" cy="632" r="4" fill="#e8c14e"/><circle cx="884" cy="636" r="4" fill="#4f8fd0"/>

  <ellipse cx="1440" cy="726" rx="104" ry="9" fill="#000" opacity=".34"/>
  <!-- ===== Simion în colț ===== -->
  <g class="vol">
    <path d="M1368 474 Q1440 432 1512 474 L1522 660 L1358 660 Z" fill="#4a3a22" class="o"/>
    <rect x="1366" y="656" width="14" height="60" fill="#3a2416" class="o"/><rect x="1500" y="656" width="14" height="60" fill="#3a2416" class="o"/>
    <path d="M1400 640 L1396 712 L1430 712 L1436 660 L1446 712 L1480 712 L1478 640 Z" fill="#45434a" class="o"/>
    <ellipse cx="1410" cy="716" rx="24" ry="9" fill="#7c3333" class="o"/>
    <ellipse cx="1466" cy="718" rx="24" ry="9" fill="#7c3333" class="o"/>
    <path d="M1384 504 Q1440 470 1496 504 L1508 650 L1372 650 Z" fill="#8a6a4a" class="o"/>
    <path d="M1380 648 l-4 14 M1396 650 l-2 14 M1412 650 v14 M1470 650 v14 M1486 650 l2 14 M1502 648 l4 14" class="l"/>
    <path d="M1410 500 Q1440 540 1470 500" class="t"/>
    <g transform="rotate(10 1440 475)"><ellipse cx="1440" cy="436" rx="37" ry="39" fill="#e6bd98" class="o"/></g>
    <g transform="rotate(10 1440 475)"><path d="M1404 420 Q1410 392 1440 394 Q1470 392 1476 420" fill="none" stroke="#f4f1ea" stroke-width="9" stroke-linecap="round"/></g>
    <g transform="rotate(10 1440 475)"><g transform="translate(-5 0)"><path d="M1408 446 Q1412 500 1440 506 Q1468 500 1472 446 Q1456 462 1440 458 Q1424 462 1408 446 Z" fill="#f4f1ea" class="o"/></g></g>
    <g transform="rotate(10 1440 475)"><g transform="translate(-5 0)"><path d="M1420 432 q6 5 12 0 M1448 432 q6 5 12 0" class="l"/></g></g>
    <g transform="rotate(10 1440 475)"><g transform="translate(-5 0)"><path d="M1440 436 q-5 10 2 12" class="l"/></g></g>
    <g transform="rotate(10 1440 475)"><ellipse cx="1478" cy="440" rx="6" ry="10" fill="#e6bd98" class="o"/></g>
    <g transform="rotate(10 1440 475)"><g transform="translate(-5 0)"><path d="M1424 414 q16 -6 32 0" class="t"/></g></g>
    <path d="M1392 540 Q1440 520 1488 540 M1388 596 Q1440 578 1492 596" fill="none" stroke="#6b4f36" stroke-width="4"/>
    <!-- gherghef -->
    <circle cx="1440" cy="580" r="36" fill="#efe4c4" class="o"/>
    <circle cx="1440" cy="580" r="36" fill="none" stroke="#7a5230" stroke-width="7"/>
    <path d="M1420 572 l8 14 l8 -14 l8 14 l8 -14" fill="none" stroke="#a8452f" stroke-width="3.5" stroke-linecap="round"/>
    <circle cx="1404" cy="592" r="12" fill="#e6bd98" class="o"/><circle cx="1476" cy="592" r="12" fill="#e6bd98" class="o"/>
    <path class="stitch l" style="transform-origin: 0 100%" d="M1470 566 L1500 540"/>
    <!-- ghem -->
    <path d="M1470 600 Q1500 700 1368 760" fill="none" stroke="#a8452f" stroke-width="3"/>
    <circle cx="1350" cy="768" r="24" fill="#a8452f" class="o"/>
    <path d="M1332 760 q18 -14 36 4 M1330 774 q20 10 40 -4" class="t"/>
  </g>

</g>

<!-- ===== detalii mărunte, vizibile doar de aproape ===== -->
<g id="details" font-family="Courier New, monospace" font-weight="bold" fill="#1b130d" text-anchor="middle">
  <rect x="690" y="668" width="30" height="20" fill="#efe4c4" stroke="#1b130d" stroke-width="1" transform="rotate(8 705 678)"/>
  <text x="705" y="677" font-size="4" transform="rotate(8 705 678)">A 3</text>
  <text x="705" y="684" font-size="4" transform="rotate(8 705 678)">P 0</text>
</g>

<!-- ===== lumini ===== -->
<rect x="0" y="0" width="1600" height="900" fill="#1a0a10" opacity="0.28"/>
<path d="M116 622 L364 622 L560 900 L-80 900 Z" fill="#cfe0ff" opacity="0.08"/>
<circle class="glow" cx="800" cy="210" r="560" fill="url(#gCandle)"/>
<circle cx="366" cy="462" r="170" fill="url(#gCandle)" opacity="0.8"/>
<circle cx="1327" cy="336" r="130" fill="url(#gCandle)" opacity="0.7"/>
<rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
<rect x="0" y="0" width="1600" height="900" filter="url(#fGrain)" opacity="0.5"/>

<!-- ===== interioare: se văd doar când sunt deschise ===== -->
<g class="interior" id="in-valiza">
  <rect x="0" y="0" width="1600" height="900" fill="#1a110a"/>
  <g filter="url(#fInk)">
    <!-- capacul -->
    <rect x="200" y="40" width="1200" height="364" rx="26" fill="#6b4424" class="o"/>
    <rect x="240" y="72" width="1120" height="300" rx="14" fill="#8a6a4a" class="o"/>
    <path d="M240 172 H1360 M240 272 H1360 M520 72 V372 M800 72 V372 M1080 72 V372" class="t"/>
    <path d="M300 300 H700 V360 H300 Z" fill="#7a5a3c" class="o"/>
    <!-- eticheta prinsă în capac -->
    <path d="M1010 132 L1190 118 L1204 236 L1024 250 Z" fill="#efe4c4" class="o"/>
    <path d="M1040 168 L1170 158 M1044 196 L1174 186 M1048 222 L1120 216" class="t"/>
    <circle cx="1030" cy="142" r="7" fill="#1b130d"/>
    <path d="M1030 142 Q980 110 960 150" class="l"/>
    <!-- balamale -->
    <rect x="200" y="398" width="1200" height="26" fill="#3a2416" class="o"/>
    <g fill="#c99a4a" class="o"><rect x="380" y="392" width="60" height="38"/><rect x="1160" y="392" width="60" height="38"/></g>
    <!-- fundul valizei -->
    <rect x="200" y="424" width="1200" height="440" rx="26" fill="#6b4424" class="o"/>
    <rect x="240" y="452" width="1120" height="384" rx="14" fill="#8a6a4a" class="o"/>
    <!-- cămăși -->
    <rect x="280" y="484" width="364" height="310" fill="#e4dcc6" class="o"/>
    <rect x="296" y="476" width="364" height="300" fill="#efe8d6" class="o"/>
    <path d="M296 576 H660 M296 676 H660" class="t"/>
    <path d="M440 476 L478 524 L516 476" class="l"/>
    <circle cx="478" cy="556" r="5" fill="#9fb7c6"/><circle cx="478" cy="606" r="5" fill="#9fb7c6"/>
    <!-- cărți -->
    <rect x="716" y="500" width="300" height="210" fill="#7c3333" class="o" transform="rotate(5 866 605)"/>
    <rect x="700" y="480" width="300" height="210" fill="#3f5a4d" class="o"/>
    <rect x="730" y="512" width="240" height="70" fill="none" stroke="#c99a4a" stroke-width="5"/>
    <!-- ciorapi și brici -->
    <ellipse cx="770" cy="770" rx="76" ry="32" fill="#45434a" class="o"/>
    <rect x="880" y="752" width="130" height="24" rx="8" fill="#3a2416" class="o"/>
    <!-- fotografia tatălui -->
    <g transform="rotate(5 1200 640)">
      <rect x="1090" y="506" width="226" height="276" fill="#d8c9a6" class="o"/>
      <rect x="1108" y="524" width="190" height="210" fill="#8a7450"/>
      <circle cx="1203" cy="596" r="34" fill="#c9b48a"/>
      <path d="M1150 734 Q1154 650 1203 646 Q1252 650 1256 734 Z" fill="#c9b48a"/>
      <path d="M1178 610 Q1203 656 1228 610 Q1203 624 1178 610 Z" fill="#6b5a3a"/>
    </g>
    <path d="M620 72 V372" stroke="#5a3a20" stroke-width="16" class="hi"/>
    <rect x="600" y="200" width="40" height="30" fill="#c99a4a" class="o"/>
    <g fill="#c99a4a" class="o"><path d="M206 46 h64 l-64 64 Z M1394 46 h-64 l64 64 Z M206 858 h64 l-64 -64 Z M1394 858 h-64 l64 -64 Z"/></g>
    <path d="M750 606 h200 M750 628 h150" stroke="#c99a4a" stroke-width="4" fill="none" stroke-linecap="round" class="hi"/>
    <path d="M336 500 v250 M386 500 v250 M580 500 v250 M622 500 v250" stroke="#c9d6e0" stroke-width="3" fill="none" stroke-linecap="round" class="hi"/>
  </g>
  <text x="1104" y="192" font-family="Courier New, monospace" font-weight="bold" font-size="30" fill="#1b130d" text-anchor="middle" transform="rotate(-4 1104 192)">F. S.</text>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<g class="interior" id="in-vitrina">
  <rect x="0" y="0" width="1600" height="900" fill="#120b07"/>
  <g filter="url(#fInk)">
    <rect x="200" y="40" width="1200" height="820" fill="#4a2e19" class="o"/>
    <rect x="250" y="90" width="1100" height="720" fill="#2a1a10" class="o"/>
    <rect x="250" y="320" width="1100" height="18" fill="#5a3a20" class="o"/>
    <rect x="250" y="566" width="1100" height="18" fill="#5a3a20" class="o"/>
    <!-- sticle și pahare -->
    <g class="o">
      <path d="M330 320 V200 Q330 180 346 176 V140 H374 V176 Q390 180 390 200 V320 Z" fill="#5f8672"/>
      <path d="M430 320 V190 Q430 170 446 166 V120 H474 V166 Q490 170 490 190 V320 Z" fill="#a8452f"/>
      <path d="M540 320 Q520 250 560 220 V180 H600 V220 Q640 250 620 320 Z" fill="#e3aa4c"/>
      <path d="M700 320 V262 H740 V320 Z M770 320 V262 H810 V320 Z M840 320 V262 H880 V320 Z" fill="#bcd3d6"/>
    </g>
    <rect x="340" y="230" width="40" height="40" fill="#efe4c4"/><rect x="440" y="220" width="40" height="44" fill="#efe4c4"/>
    <ellipse cx="1120" cy="300" rx="120" ry="18" fill="#c9a24e" class="o"/>
    <path d="M1040 296 Q1120 200 1200 296 Z" fill="#dfe8ee" class="o"/>
    <!-- catastiful -->
    <rect x="330" y="420" width="290" height="146" fill="#3a2a4a" class="o"/>
    <rect x="330" y="420" width="40" height="146" fill="#2a1c38" class="o"/>
    <rect x="410" y="456" width="170" height="60" fill="#efe4c4" class="o"/>
    <!-- fotografia înrămată -->
    <rect x="760" y="372" width="210" height="194" fill="#b8913e" class="o"/>
    <rect x="780" y="392" width="170" height="154" fill="#8a7450"/>
    <circle cx="840" cy="444" r="24" fill="#c9b48a"/><path d="M804 546 Q806 480 840 476 Q874 480 876 546 Z" fill="#c9b48a"/>
    <circle cx="908" cy="480" r="17" fill="#c9b48a"/><path d="M884 546 Q886 504 908 502 Q930 504 932 546 Z" fill="#c9b48a"/>
    <g fill="#a08a60"><circle cx="894" cy="474" r="8"/><circle cx="922" cy="474" r="8"/><circle cx="908" cy="464" r="9"/></g>
    <!-- cutie de tinichea -->
    <rect x="1080" y="470" width="200" height="96" fill="#6b5a3a" class="o"/>
    <path d="M1080 500 H1280" class="t"/>
    <!-- chei în cuie -->
    <g>
      <path d="M340 620 H700" stroke="#1b130d" stroke-width="8"/>
      <g fill="#9aa3a0" class="o">
        <path d="M372 640 a22 22 0 1 0 0.1 0 Z M364 682 h16 v70 h-16 Z M380 720 h16 v12 h-16 Z"/>
        <path d="M472 640 a22 22 0 1 0 0.1 0 Z M464 682 h16 v84 h-16 Z M480 740 h16 v12 h-16 Z"/>
        <path d="M572 640 a22 22 0 1 0 0.1 0 Z M564 682 h16 v60 h-16 Z M580 714 h16 v12 h-16 Z"/>
        <path d="M672 640 a22 22 0 1 0 0.1 0 Z M664 682 h16 v76 h-16 Z M680 732 h16 v12 h-16 Z"/>
      </g>
    </g>
    <path d="M900 800 q60 -40 120 0 q60 40 120 0" fill="none" stroke="#dccb9e" stroke-width="7" stroke-linecap="round"/>
    <path d="M342 210 v90 M442 200 v100 M556 250 q-8 30 0 56 M708 270 v40 M778 270 v40 M848 270 v40" stroke="#fff" stroke-width="5" opacity=".5" fill="none" stroke-linecap="round" class="hi"/>
    <path d="M1086 486 h60 M1086 530 h110" stroke="#8a7450" stroke-width="4" fill="none" stroke-linecap="round" class="hi"/>
    <path d="M770 380 l14 -8 M956 380 l-14 -8" stroke="#f0d68c" stroke-width="4" fill="none" stroke-linecap="round" class="hi"/>
  </g>
  <text x="495" y="496" font-family="Courier New, monospace" font-weight="bold" font-size="24" fill="#1b130d" text-anchor="middle">CATASTIF</text>
  <rect x="0" y="0" width="1600" height="900" fill="url(#gVig)"/>
</g>

<!-- ===== zone active ===== -->
<g id="hotspots">
  <rect class="hs" data-id="felix" x="190" y="236" width="122" height="392" rx="16"/>
  <rect class="hs" data-id="valiza" x="140" y="500" width="110" height="92" rx="12"/>
  <rect class="hs" data-id="vitrina" x="1408" y="134" width="158" height="204" rx="12"/>
  <rect class="hs" data-id="z_v_eticheta" data-parent="valiza" x="950" y="106" width="270" height="156" rx="14"/>
  <rect class="hs" data-id="z_v_camasi" data-parent="valiza" x="272" y="468" width="396" height="330" rx="14"/>
  <rect class="hs" data-id="z_v_carti" data-parent="valiza" x="690" y="472" width="350" height="250" rx="14"/>
  <rect class="hs" data-id="z_v_foto" data-parent="valiza" x="1076" y="494" width="262" height="300" rx="14"/>
  <rect class="hs" data-id="z_c_sticle" data-parent="vitrina" x="310" y="112" width="590" height="210" rx="14"/>
  <rect class="hs" data-id="z_c_catastif" data-parent="vitrina" x="320" y="408" width="310" height="162" rx="14"/>
  <rect class="hs" data-id="z_c_foto" data-parent="vitrina" x="750" y="362" width="230" height="208" rx="14"/>
  <rect class="hs" data-id="z_c_chei" data-parent="vitrina" x="330" y="604" width="390" height="176" rx="14"/>
  <rect class="hs" data-id="z_f_eticheta" data-parent="felix" x="216" y="512" width="48" height="50" rx="10"/>
  <rect class="hs" data-id="z_scrisoare" data-parent="felix" x="274" y="406" width="70" height="60" rx="10"/>
  <rect class="hs" data-id="costache" x="350" y="372" width="170" height="256" rx="16"/>
  <rect class="hs" data-id="aglae" x="552" y="310" width="150" height="250" rx="16"/>
  <rect class="hs" data-id="aurica" x="738" y="340" width="106" height="230" rx="16"/>
  <rect class="hs" data-id="pascalopol" x="916" y="326" width="128" height="250" rx="16"/>
  <rect class="hs" data-id="otilia" x="1050" y="280" width="112" height="200" rx="16"/>
  <rect class="hs" data-id="pian" x="1176" y="390" width="192" height="130" rx="12"/>
  <ellipse class="hs" data-id="masa" cx="806" cy="652" rx="170" ry="44"/>
  <rect class="hs" data-id="z_table" data-parent="masa" x="706" y="610" width="188" height="68" rx="10"/>
  <rect class="hs" data-id="z_carti" data-parent="masa" x="624" y="638" width="66" height="50" rx="10"/>
  <rect class="hs" data-id="z_scor" data-parent="masa" x="686" y="664" width="40" height="30" rx="8"/>
  <rect class="hs" data-id="z_zaruri" data-parent="masa" x="898" y="632" width="60" height="48" rx="10"/>
  <rect class="hs" data-id="z_inel" data-parent="pascalopol" x="1058" y="394" width="44" height="46" rx="10"/>
  <rect class="hs" data-id="z_vizita" data-parent="pascalopol" x="998" y="468" width="30" height="24" rx="6"/>
  <circle class="hs" data-id="z_maini" data-parent="masa" cx="880" cy="628" r="22"/>
  <rect class="hs" data-id="simion" x="1362" y="388" width="158" height="340" rx="18"/>
</g>
</svg>`,

  // n = nume, o = obiecte, f = fapte
  words: {
    felix:        { text: 'Felix',        cat: 'n' },
    sima:         { text: 'Sima',         cat: 'n' },
    costache:     { text: 'Costache',     cat: 'n' },
    giurgiuveanu: { text: 'Giurgiuveanu', cat: 'n' },
    otilia:       { text: 'Otilia',       cat: 'n' },
    marculescu:   { text: 'Mărculescu',   cat: 'n' },
    leonida:      { text: 'Leonida',      cat: 'n' },
    pascalopol:   { text: 'Pascalopol',   cat: 'n' },
    aglae:        { text: 'Aglae',        cat: 'n' },
    aurica:       { text: 'Aurica',       cat: 'n' },
    simion:       { text: 'Simion',       cat: 'n' },
    tulea:        { text: 'Tulea',        cat: 'n' },
    table:        { text: 'table',        cat: 'o' },
    carti:        { text: 'cărți',        cat: 'o' },
    inel:         { text: 'inel',         cat: 'o' },
    zestre:       { text: 'zestre',       cat: 'o' },
    mostenire:    { text: 'moștenire',    cat: 'o' },
    nimeni:       { text: 'nimeni',       cat: 'f' }
  },

  people: [
    { id: 'licean',  crop: '172 226 150 150',  first: 'felix',    last: 'sima' },
    { id: 'batran',  crop: '374 346 132 132',  first: 'costache', last: 'giurgiuveanu' },
    { id: 'fata',    crop: '1034 268 134 134', first: 'otilia',   last: 'marculescu' },
    { id: 'domn',    crop: '914 306 142 142',  first: 'leonida',  last: 'pascalopol' },
    { id: 'coc',     crop: '548 308 144 144',  first: 'aglae',    last: 'tulea' },
    { id: 'funda',   crop: '724 326 132 132',  first: 'aurica',   last: 'tulea' },
    { id: 'sal',     crop: '1368 366 144 144', first: 'simion',   last: 'tulea' }
  ],

  items: {
    scrisoare: {
      kind: 'letter',
      title: 'Scrisoarea din mâna tânărului',
      text: '«Dragă {felix|Felix}, te aștept la București, în strada Antim. Vei locui la mine cât vei face Facultatea de Medicină. Tutorele tău, {costache|Costache} {giurgiuveanu|Giurgiuveanu}.»',
      icon: '<path d="M8 18 L56 14 L58 46 L10 50 Z" fill="#efe4c4"/><path d="M8 18 L33 36 L56 14"/>'
    },
    eticheta: {
      kind: 'tag',
      title: 'Eticheta valizei',
      text: 'Pe carton, cu cerneală: «F. {sima|Sima}. Iași — București.» Valiza e grea, iar stăpânul ei a mers pe jos de la gară.',
      icon: '<path d="M20 10 H54 V54 H20 L8 42 V22 Z" fill="#dcc592"/><circle cx="18" cy="32" r="4" fill="#1b130d"/><path d="M30 24h16M30 34h16M30 44h10"/>'
    },
    fototata: {
      kind: 'tag',
      title: 'Fotografia unui doctor',
      text: 'Un bărbat sever, cu barbă. Pe dos: «Dr. Iosif {sima|Sima}, Iași». E tatăl băiatului, mort de curând.',
      icon: '<rect x="12" y="8" width="40" height="48" fill="#d8c9a6"/><circle cx="32" cy="26" r="8" fill="#8a7450"/><path d="M18 50 Q20 36 32 36 Q44 36 46 50 Z" fill="#8a7450"/>'
    },
    catastif: {
      kind: 'letter',
      title: 'Catastiful',
      text: '«Chirii încasate. Tutun vândut. Dobânzi.» Fiecare ban e trecut cu grijă. La rubrica «{zestre|zestre} pentru fată» nu e scris nimic.',
      icon: '<rect x="10" y="12" width="44" height="40" fill="#3a2a4a"/><path d="M18 12v40"/><rect x="24" y="22" width="24" height="12" fill="#efe4c4"/>'
    },
    vizita: {
      kind: 'tag',
      title: 'Cartea de vizită',
      text: '«{leonida|Leonida} {pascalopol|Pascalopol}, moșier.» Domnul cel elegant vine aproape în fiecare seară în casa din strada Antim.',
      icon: '<rect x="8" y="20" width="48" height="28" fill="#f3ecd6"/><path d="M16 30h22M16 38h14"/>'
    },
    inel: {
      kind: 'tag',
      title: 'Cutiuța cu inel',
      text: 'Un {inel|inel} cu safir. Domnul cel elegant i-l dăruiește fetei, sub privirile acre ale femeilor de la masă.',
      icon: '<circle cx="32" cy="38" r="15" stroke-width="5" stroke="#e8c14e"/><circle cx="32" cy="38" r="15"/><path d="M24 20 L32 10 L40 20 L32 26 Z" fill="#4f8fd0"/>'
    },
    partitura: {
      kind: 'letter',
      title: 'Caietul de note',
      text: 'Pe copertă, cu scris rotund: «Caiet de note. O. {marculescu|Mărculescu}, Conservator.» Fata din salon cântă aici în fiecare zi.',
      icon: '<rect x="12" y="8" width="40" height="48" fill="#efe4c4"/><path d="M18 20h28M18 28h28M18 36h28M18 44h28"/><ellipse cx="26" cy="32" rx="4" ry="3" fill="#1b130d"/><ellipse cx="38" cy="40" rx="4" ry="3" fill="#1b130d"/>'
    },
    gherghef: {
      kind: 'tag',
      title: 'Gherghef',
      text: 'Pe pânza întinsă, cu lână roșie, bătrânul brodează stângaci: «Casa {tulea|Tulea}». Familia lui locuiește chiar alături.',
      icon: '<circle cx="32" cy="32" r="22" fill="#efe4c4"/><circle cx="32" cy="32" r="22" stroke="#7a5230" stroke-width="5"/><path d="M20 28 l6 10 l6 -10 l6 10 l6 -10" stroke="#a8452f"/>'
    }
  },

  clues: {
    felix: {
      title: 'Tânărul din ușă',
      zoom: { cx: 250, cy: 486, w: 520 },
      text: 'Un băiat de vreo optsprezece ani, abia sosit de la gară. Se uită sfios în jur și nu cunoaște pe nimeni din casă.'
    },
    z_f_eticheta: {
      title: 'Eticheta de pe valiză',
      text: 'O bucată de carton legată de mânerul valizei, scrisă mărunt cu cerneală.',
      items: ['eticheta']
    },
    z_scrisoare: {
      title: 'Scrisoarea din mână',
      text: 'O ține strâns, ca pe un bilet de intrare. Plicul e deschis.',
      items: ['scrisoare']
    },
    valiza: {
      title: 'Valiza',
      inside: true,
      sound: 'case',
      text: 'Încuietorile sar cu un clic. Tot ce are băiatul pe lume încape aici.'
    },
    z_v_eticheta: {
      title: 'Eticheta din capac',
      text: 'Un carton prins cu sfoară de căptușeala capacului.',
      items: ['eticheta']
    },
    z_v_foto: {
      title: 'O fotografie',
      text: 'O fotografie cu colțurile îndoite, pusă cu grijă deasupra hainelor.',
      items: ['fototata']
    },
    z_v_carti: {
      title: 'Cărțile',
      text: 'Manuale de liceu și un atlas de anatomie, citit și răscitit. Băiatul vrea să ajungă doctor.'
    },
    z_v_camasi: {
      title: 'Cămășile',
      text: 'Trei cămăși împăturite de o mână străină. Nu mai are nici mamă, nici tată care să i le calce.'
    },
    vitrina: {
      title: 'Vitrina din perete',
      inside: true,
      sound: 'cabinet',
      text: 'Ușițele de sticlă se deschid cu un clinchet. Aici își ține stăpânul casei lucrurile de preț.'
    },
    z_c_catastif: {
      title: 'Registrul',
      text: 'Un registru gros, cu colțurile roase de atâta răsfoit.',
      items: ['catastif']
    },
    z_c_foto: {
      title: 'Fotografia înrămată',
      text: 'O femeie și o fetiță cu bucle. Pe ramă, gravat: «Soția mea și fetița ei, Otilia {marculescu|Mărculescu}».'
    },
    z_c_chei: {
      title: 'Cheile',
      text: 'Chei numerotate, atârnate în cuie. Stăpânul casei încuie tot, până și cămara.'
    },
    z_c_sticle: {
      title: 'Sticlele',
      text: 'Lichior vechi, păstrat pentru musafirul cel elegant. Ceilalți primesc apă.'
    },

    costache: {
      title: 'Bătrânelul cu lumânarea',
      text: 'Un omuleț chel, cu buze groase, în halat. E stăpânul casei și tutorele băiatului, dar se sperie și se bâlbâie: «Nu-nu-nu știu… nu-nu stă {nimeni|nimeni} aici!»'
    },
    otilia: {
      title: 'Fata cu bucle',
      text: 'O fată subțire, cu părul buclat, îi întinde băiatului mâna: «Dumneata ești Felix? Eu sunt {otilia|Otilia}. Papa, de ce nu-l poftești înăuntru?» E singura care îl primește cu căldură.'
    },
    pascalopol: {
      title: 'Domnul din fotoliu',
      zoom: { cx: 1000, cy: 500, w: 420 },
      text: 'Un domn elegant, cu haine scumpe. «Cucoană {aglae|Aglae}, dați cu zarul», îi spune politicos femeii cu coc.'
    },
    z_inel: {
      title: 'Cutiuța din mână',
      text: 'O cutiuță de catifea, deschisă spre fata cu bucle. Înăuntru sclipește ceva albastru.',
      items: ['inel']
    },
    z_vizita: {
      title: 'Buzunarul de la piept',
      text: 'Din buzunar se vede colțul unui carton alb, cu două inițiale tipărite.',
      items: ['vizita']
    },
    z_maini: {
      title: 'Mâna cu inele',
      text: 'Degete îngrijite, cu două inele grele. Omul acesta nu a muncit niciodată cu mâinile, iar banii nu sunt o grijă pentru el.'
    },
    aglae: {
      title: 'Femeia cu coc',
      text: 'Scutură paharul cu zaruri. «{simion|Simion}, lasă lâna!», strigă spre bătrânul din colț, bărbatul ei. «{aurica|Aurica}, e rândul tău», îi spune fiicei de alături. Pe băiat îl măsoară rece: încă o gură la o casă de la care ea așteaptă o {mostenire|moștenire}.'
    },
    aurica: {
      title: 'Fata cu fundă',
      text: 'O fată trecută de prima tinerețe, slabă, cu ochii după nou-venit. Stă lângă mama ei și visează doar la măritiș și la {zestre|zestre}.'
    },
    masa: {
      title: 'Masa de joc',
      zoom: { cx: 800, cy: 650, w: 540 },
      text: 'Pe postavul verde e mare înghesuială: se joacă pe bani mărunți.'
    },
    z_table: {
      title: 'Cutia deschisă',
      text: 'O cutie de {table|table}, cu puluri albe și roșii. Acesta e jocul serii.'
    },
    z_carti: {
      title: 'Pachetul de pe margine',
      text: 'Un pachet de {carti|cărți}, încă legat. În seara asta nu l-a atins nimeni.'
    },
    z_scor: {
      title: 'Hârtiuța cu scorul',
      text: 'Cu creionul: «A — 3, P — 0». Domnul cel elegant pierde mereu și nu pare deloc supărat.'
    },
    z_zaruri: {
      title: 'Zarurile',
      text: 'Două zaruri de os, îngălbenite de vreme. Femeia cu coc tocmai le-a aruncat.'
    },
    pian: {
      title: 'Pianul',
      sound: 'piano',
      text: 'Un pian cu capacul ridicat și un caiet de note deschis. Clapele sunt încă calde.',
      items: ['partitura']
    },
    simion: {
      title: 'Bătrânul cu șal',
      text: 'Un bătrân cu barbă albă, înfășurat într-un șal, brodează liniștit în colțul lui. Nu ia parte la joc și nu pare să audă ce se vorbește.',
      items: ['gherghef']
    }
  },

  deduction: [
    { slot: 's1', answer: 'felix', full: 'sima' },
    ', orfan sosit de la Iași, vine să locuiască la tutorele său, ',
    { slot: 's2', answer: 'costache', full: 'giurgiuveanu' },
    '. Speriat, bătrânul îi spune că aici nu stă ',
    { slot: 's3', answer: 'nimeni' },
    '. Cea care îl primește cu căldură este ',
    { slot: 's4', answer: 'otilia' },
    '. În salon se joacă ',
    { slot: 's5', answer: 'table' },
    '. Moșierul ',
    { slot: 's6', answer: 'leonida', full: 'pascalopol' },
    ' îi dăruiește fetei un ',
    { slot: 's7', answer: 'inel' },
    ', iar ',
    { slot: 's8', answer: 'aglae', full: 'tulea' },
    ' îl privește pe nou-venit cu dușmănie: se teme pentru ',
    { slot: 's9', answer: 'mostenire' },
    '.'
  ],

  ending:
    '<p>Într-o seară de iulie a anului 1909, Felix Sima ajunge în casa tutorelui său, ' +
    'Costache Giurgiuveanu. Bătrânul avar îl întâmpină cu un «nu stă nimeni aici», ' +
    'iar singura care îl primește cu căldură este Otilia.</p>' +
    '<p>În salon, clanul Tulea joacă table cu moșierul Pascalopol. Aglae vede în băiat ' +
    'un rival la moștenire, Aurica un posibil mire, iar Simion își vede de broderie. ' +
    'Toate firele poveștii sunt deja aici, în jurul unei mese de joc.</p>'
};
