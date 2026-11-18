// Illustrations for the project cards (inline SVG so they stay crisp and need no assets).
export function LeafArt(){ return (
<svg viewBox="0 0 480 320" width="100%" role="img" aria-label="Illustration of a crop leaf with disease spots and a detection box" style={{display:"block"}}>
<defs>
<linearGradient id="a-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#0f2410"/><stop offset="1" stopColor="#21501c"/></linearGradient>
<linearGradient id="a-leaf" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#7ad862"/><stop offset="1" stopColor="#2f8f3a"/></linearGradient>
</defs>
<rect width="480" height="320" fill="url(#a-bg)"/>
<circle cx="400" cy="64" r="44" fill="#d9f26a" fillOpacity=".14"/>
<path d="M0 270 Q120 230 240 262 T480 250 V320 H0Z" fill="#163a16"/>
<path d="M0 295 Q150 262 300 290 T480 280 V320 H0Z" fill="#0f2a10"/>
<g transform="translate(240 150) rotate(-20)">
<path d="M-120 0 C-80 -95 60 -105 130 0 C60 105 -80 95 -120 0Z" fill="url(#a-leaf)"/>
<path d="M-120 0 L120 0" stroke="#c6f2b0" strokeWidth="3" strokeLinecap="round"/>
<path d="M-60 0 L-20 -45 M-10 0 L40 -52 M40 0 L82 -38 M-60 0 L-24 42 M-10 0 L38 50 M40 0 L80 34" stroke="#c6f2b0" strokeOpacity=".7" strokeWidth="2" fill="none" strokeLinecap="round"/>
<circle cx="-5" cy="-30" r="14" fill="#7a4a1a"/>
<circle cx="22" cy="28" r="10" fill="#7a4a1a"/>
<circle cx="60" cy="-15" r="8" fill="#8a5a22"/>
</g>
<g fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round">
<path d="M215 92 H195 V112"/><path d="M295 92 H315 V112"/><path d="M215 195 H195 V175"/><path d="M295 195 H315 V175"/>
</g>
<rect x="195" y="68" width="104" height="20" rx="4" fill="#6ee7b7"/>
<text x="204" y="82" fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="500" fill="#06251a">diseased leaf</text>
<rect x="195" y="92" width="120" height="2" fill="#6ee7b7" opacity=".75"><animate attributeName="y" values="92;193;92" dur="3.2s" repeatCount="indefinite"/></rect>
</svg>
)}
export function PharmacyArt(){ return (
<svg viewBox="0 0 480 320" width="100%" role="img" aria-label="Illustration of a map with pharmacy pins and your current location" style={{display:"block"}}>
<defs>
<linearGradient id="b-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#0d2434"/><stop offset="1" stopColor="#091720"/></linearGradient>
</defs>
<rect width="480" height="320" fill="url(#b-bg)"/>
<path d="M0 218 C100 188 160 250 260 214 S420 168 480 198 V250 C420 220 330 252 250 262 S90 226 0 256Z" fill="#14485f" opacity=".6"/>
<rect x="300" y="36" width="132" height="84" rx="14" fill="#15472f" opacity=".75"/>
<g stroke="#2b4d60" strokeWidth="10" strokeLinecap="round" fill="none">
<path d="M-10 90 H490"/><path d="M-10 160 L490 140"/><path d="M110 -10 V330"/><path d="M250 -10 L270 330"/><path d="M380 -10 V330"/>
</g>
<g stroke="#4a7088" strokeWidth="1.5" strokeDasharray="6 8" fill="none">
<path d="M-10 90 H490"/><path d="M-10 160 L490 140"/><path d="M110 -10 V330"/><path d="M250 -10 L270 330"/><path d="M380 -10 V330"/>
</g>
<path d="M180 152 L110 153" stroke="#6ee7b7" strokeWidth="3" strokeDasharray="6 6" fill="none"><animate attributeName="stroke-dashoffset" values="24;0" dur="1.4s" repeatCount="indefinite"/></path>
<g transform="translate(380 92)">
<path d="M0 0 C-16 -16 -18 -30 -9 -38 C-3 -43 3 -43 9 -38 C18 -30 16 -16 0 0Z" fill="#5fb8d4"/>
<circle cy="-27" r="8" fill="#0a1a24"/><path d="M-4 -27 H4 M0 -31 V-23" stroke="#bfe9f5" strokeWidth="2.5" strokeLinecap="round"/>
</g>
<g transform="translate(256 90)">
<path d="M0 0 C-16 -16 -18 -30 -9 -38 C-3 -43 3 -43 9 -38 C18 -30 16 -16 0 0Z" fill="#5fb8d4"/>
<circle cy="-27" r="8" fill="#0a1a24"/><path d="M-4 -27 H4 M0 -31 V-23" stroke="#bfe9f5" strokeWidth="2.5" strokeLinecap="round"/>
</g>
<g transform="translate(110 153)">
<circle r="16" fill="#6ee7b7" fillOpacity=".25"><animate attributeName="r" values="8;26;8" dur="2s" repeatCount="indefinite"/><animate attributeName="fill-opacity" values=".5;0;.5" dur="2s" repeatCount="indefinite"/></circle>
<path d="M0 0 C-16 -16 -18 -30 -9 -38 C-3 -43 3 -43 9 -38 C18 -30 16 -16 0 0Z" fill="#6ee7b7"/>
<circle cy="-27" r="8" fill="#07261b"/><path d="M-4 -27 H4 M0 -31 V-23" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round"/>
</g>
<circle cx="180" cy="152" r="14" fill="#4c8dff" fillOpacity=".3"/><circle cx="180" cy="152" r="7" fill="#4c8dff" stroke="#fff" strokeWidth="2.5"/>
<rect x="64" y="262" width="214" height="44" rx="12" fill="#0e1d28" stroke="#2f5266"/>
<g transform="translate(92 284) rotate(-35)"><rect x="-13" y="-6.5" width="26" height="13" rx="6.5" fill="#6ee7b7"/><path d="M0 -6.5 H6.5 A6.5 6.5 0 0 1 6.5 6.5 H0Z" fill="#ffffff"/></g>
<text x="118" y="289" fontFamily="Inter,sans-serif" fontSize="14" fontWeight="500" fill="#d8f4ea">In stock nearby</text>
</svg>
)}
export function BrainArt(){ return (
<svg viewBox="0 0 480 320" width="100%" role="img" aria-label="Illustration of a brain scan with a highlighted tumor region and a neural network" style={{display:"block"}}>
<defs>
<linearGradient id="c-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#16143e"/><stop offset="1" stopColor="#0a0a1e"/></linearGradient>
<radialGradient id="c-glow" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#ff8a65" stopOpacity=".9"/><stop offset="1" stopColor="#ff8a65" stopOpacity="0"/></radialGradient>
</defs>
<rect width="480" height="320" fill="url(#c-bg)"/>
<circle cx="170" cy="160" r="122" fill="#0d0c26" stroke="#3a3a7a" strokeWidth="2"/>
<circle cx="170" cy="160" r="108" fill="none" stroke="#2a2a5a" strokeWidth="1" strokeDasharray="3 6"/>
<path d="M170 78 C128 74 98 104 96 142 C90 190 118 238 170 244 C222 238 250 190 244 142 C242 104 212 74 170 78Z" fill="#26265e" stroke="#6a6ad0" strokeWidth="2"/>
<path d="M170 80 V243" stroke="#6a6ad0" strokeWidth="2" strokeOpacity=".8"/>
<g fill="none" stroke="#6a6ad0" strokeWidth="2" strokeOpacity=".6" strokeLinecap="round">
<path d="M112 120 q16 -14 34 0 t20 8"/><path d="M108 160 q18 -12 36 2 t22 4"/><path d="M116 200 q16 -12 32 0 t20 10"/>
<path d="M228 120 q-16 -14 -34 0 t-20 8"/><path d="M232 160 q-18 -12 -36 2 t-22 4"/><path d="M224 200 q-16 -12 -32 0 t-20 10"/>
</g>
<circle cx="205" cy="135" r="34" fill="url(#c-glow)"/>
<circle cx="205" cy="135" r="14" fill="#ff8a65"/>
<g fill="none" stroke="#6ee7b7" strokeWidth="3" strokeLinecap="round">
<path d="M189 107 H177 V119"/><path d="M221 107 H233 V119"/><path d="M189 163 H177 V151"/><path d="M221 163 H233 V151"/>
</g>
<rect x="177" y="84" width="72" height="18" rx="4" fill="#6ee7b7"/>
<text x="186" y="97" fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="500" fill="#06251a">tumor</text>
<g stroke="#8ab4ff" strokeWidth="1.5" fill="#1a1a4a">
<rect x="300" y="132" width="44" height="56" rx="4"/><rect x="306" y="126" width="44" height="56" rx="4"/><rect x="312" y="120" width="44" height="56" rx="4"/>
<rect x="380" y="136" width="30" height="42" rx="4"/><rect x="386" y="130" width="30" height="42" rx="4"/>
</g>
<g stroke="#8ab4ff" strokeWidth="1.5" fill="none" strokeLinecap="round">
<path d="M292 160 H300"/><path d="M356 150 H380"/><path d="M416 151 H432"/>
</g>
<circle cx="444" cy="140" r="9" fill="#6ee7b7"/><circle cx="444" cy="164" r="9" fill="#3a3a7a" stroke="#8ab4ff"/>
<text x="300" y="226" fontFamily="JetBrains Mono,monospace" fontSize="12" fill="#b9c3ee">InceptionResNetV2</text>
</svg>
)}
export function WheatArt(){ return (
<svg viewBox="0 0 480 320" width="100%" role="img" aria-label="Illustration of wheat heads with object detection boxes" style={{display:"block"}}>
<defs>
<linearGradient id="d-bg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6a4810"/><stop offset="1" stopColor="#2a1d06"/></linearGradient>
<g id="d-ear">
<path d="M0 0 V-135" stroke="#d9a93a" strokeWidth="3" strokeLinecap="round"/>
<g fill="#f0c455">
<ellipse cx="-8" cy="-90" rx="6" ry="12" transform="rotate(-18 -8 -90)"/><ellipse cx="8" cy="-90" rx="6" ry="12" transform="rotate(18 8 -90)"/>
<ellipse cx="-8" cy="-106" rx="6" ry="12" transform="rotate(-18 -8 -106)"/><ellipse cx="8" cy="-106" rx="6" ry="12" transform="rotate(18 8 -106)"/>
<ellipse cx="-8" cy="-122" rx="6" ry="12" transform="rotate(-18 -8 -122)"/><ellipse cx="8" cy="-122" rx="6" ry="12" transform="rotate(18 8 -122)"/>
<ellipse cx="-8" cy="-138" rx="6" ry="12" transform="rotate(-18 -8 -138)"/><ellipse cx="8" cy="-138" rx="6" ry="12" transform="rotate(18 8 -138)"/>
<ellipse cx="-7" cy="-154" rx="5" ry="10" transform="rotate(-18 -7 -154)"/><ellipse cx="7" cy="-154" rx="5" ry="10" transform="rotate(18 7 -154)"/>
</g>
<path d="M0 -160 L0 -192 M-6 -160 L-14 -190 M6 -160 L14 -190" stroke="#d9a93a" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
</g>
</defs>
<rect width="480" height="320" fill="url(#d-bg)"/>
<circle cx="404" cy="62" r="52" fill="#ffd36b" fillOpacity=".18"/>
<circle cx="404" cy="62" r="26" fill="#ffd36b" fillOpacity=".45"/>
<g opacity=".35">
<use href="#d-ear" transform="translate(40 318) rotate(5) scale(.8)"/>
<use href="#d-ear" transform="translate(155 320) rotate(-4) scale(.85)"/>
<use href="#d-ear" transform="translate(335 320) rotate(3) scale(.8)"/>
<use href="#d-ear" transform="translate(445 318) rotate(-5) scale(.85)"/>
</g>
<use href="#d-ear" transform="translate(110 300) rotate(-6)"/>
<use href="#d-ear" transform="translate(200 310) rotate(4)"/>
<use href="#d-ear" transform="translate(290 300) rotate(-3)"/>
<use href="#d-ear" transform="translate(370 310) rotate(7)"/>
<g fill="none" stroke="#6ee7b7" strokeWidth="2.5">
<rect x="70" y="100" width="52" height="128" rx="3"/>
<rect x="184" y="112" width="52" height="124" rx="3"/>
<rect x="258" y="100" width="50" height="126" rx="3"/>
<rect x="360" y="114" width="52" height="122" rx="3"/>
</g>
<rect x="70" y="80" width="56" height="18" rx="4" fill="#6ee7b7"/>
<text x="78" y="93" fontFamily="JetBrains Mono,monospace" fontSize="12" fontWeight="500" fill="#06251a">wheat</text>
<rect x="0" y="296" width="480" height="24" fill="#241a05"/>
</svg>
)}
export function BooksArt(){ return (
<svg viewBox="0 0 480 320" width="100%" role="img" aria-label="Illustration of a bookshelf with second-hand books, a sell tag, and a listing card" style={{display:"block"}}>
<defs>
<linearGradient id="e-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2d1022"/><stop offset="1" stopColor="#4c1a38"/></linearGradient>
</defs>
<rect width="480" height="320" fill="url(#e-bg)"/>
<rect x="40" y="230" width="250" height="10" rx="3" fill="#7a4230"/>
<rect x="52" y="108" width="26" height="122" fill="#e8607a"/>
<rect x="80" y="92" width="30" height="138" fill="#f5b97a"/>
<rect x="112" y="120" width="24" height="110" fill="#8ab4ff"/>
<rect x="138" y="100" width="28" height="130" fill="#d6a8ff"/>
<rect x="168" y="125" width="22" height="105" fill="#6ee7b7"/>
<g transform="translate(194 230) rotate(18)"><rect x="0" y="-120" width="26" height="120" fill="#f0c455"/></g>
<g stroke="#ffffff" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round">
<path d="M52 140 H78"/><path d="M52 150 H78"/><path d="M80 120 H110"/><path d="M112 150 H136"/><path d="M138 130 H166"/><path d="M138 140 H166"/><path d="M168 150 H190"/>
</g>
<g transform="translate(300 56) rotate(10)">
<path d="M0 0 H70 L88 24 L70 48 H0Z" fill="#6ee7b7"/>
<circle cx="12" cy="24" r="4" fill="#0a2a1f"/>
<text x="26" y="29" fontFamily="JetBrains Mono,monospace" fontSize="14" fontWeight="500" fill="#06251a">SELL</text>
</g>
<rect x="310" y="130" width="140" height="150" rx="14" fill="#1a0b14" stroke="#7a2f55"/>
<rect x="326" y="146" width="48" height="64" rx="4" fill="#f5b97a"/>
<rect x="334" y="156" width="32" height="4" rx="2" fill="#7a4230"/><rect x="334" y="166" width="24" height="4" rx="2" fill="#7a4230"/>
<rect x="384" y="150" width="52" height="8" rx="4" fill="#7a2f55"/><rect x="384" y="166" width="40" height="8" rx="4" fill="#7a2f55"/>
<rect x="326" y="222" width="108" height="8" rx="4" fill="#7a2f55"/>
<rect x="326" y="244" width="108" height="26" rx="8" fill="#6ee7b7"/>
<text x="380" y="262" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#06251a">Buy</text>
</svg>
)}
export function GroceryArt(){ return (
<svg viewBox="0 0 480 320" width="100%" role="img" aria-label="Illustration of a grocery landing page with a basket of fruit" style={{display:"block"}}>
<defs>
<linearGradient id="f-bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#111c42"/><stop offset="1" stopColor="#242f7c"/></linearGradient>
</defs>
<rect width="480" height="320" fill="url(#f-bg)"/>
<rect x="40" y="36" width="400" height="248" rx="16" fill="#0b1230" stroke="#3a4a9a"/>
<path d="M40 52 a16 16 0 0 1 16 -16 H424 a16 16 0 0 1 16 16 V64 H40Z" fill="#141c4a"/>
<circle cx="58" cy="50" r="4" fill="#ff5f57"/><circle cx="72" cy="50" r="4" fill="#febc2e"/><circle cx="86" cy="50" r="4" fill="#28c840"/>
<rect x="64" y="92" width="150" height="14" rx="7" fill="#ffffff" fillOpacity=".92"/>
<rect x="64" y="114" width="118" height="14" rx="7" fill="#ffffff" fillOpacity=".92"/>
<rect x="64" y="142" width="160" height="8" rx="4" fill="#ffffff" fillOpacity=".4"/>
<rect x="64" y="158" width="132" height="8" rx="4" fill="#ffffff" fillOpacity=".4"/>
<rect x="64" y="186" width="98" height="32" rx="16" fill="#6ee7b7"/>
<text x="113" y="207" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="13" fontWeight="600" fill="#06251a">Shop now</text>
<path d="M290 204 C290 150 372 150 372 204" stroke="#d29a55" strokeWidth="6" fill="none" strokeLinecap="round"/>
<circle cx="304" cy="192" r="22" fill="#e8504a"/>
<path d="M304 172 q8 -14 22 -8 q-8 12 -22 8Z" fill="#6fcf5a"/>
<circle cx="342" cy="182" r="22" fill="#f59a3a"/>
<circle cx="374" cy="194" r="20" fill="#8fd65a"/>
<path d="M270 204 H394 L380 262 Q378 270 370 270 H294 Q286 270 284 262Z" fill="#a8672a"/>
<g stroke="#7a4a1c" strokeWidth="2" fill="none"><path d="M274 220 H390"/><path d="M278 238 H386"/><path d="M300 204 L304 270"/><path d="M332 204 V270"/><path d="M364 204 L360 270"/></g>
</svg>
)}
