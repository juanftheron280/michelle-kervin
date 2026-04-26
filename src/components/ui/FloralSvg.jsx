export const FloralLeft = ({ className = '' }) => (
  <svg
    width="90"
    height="130"
    viewBox="0 0 90 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M45 130 C45 100 30 80 10 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M45 110 C38 95 22 88 10 78" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M45 90 C38 82 28 80 18 72" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <ellipse cx="8" cy="52" rx="7" ry="12" transform="rotate(-35 8 52)" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <ellipse cx="7" cy="74" rx="6" ry="10" transform="rotate(-20 7 74)" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <ellipse cx="16" cy="68" rx="5" ry="9" transform="rotate(-50 16 68)" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <circle cx="10" cy="52" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="9" cy="75" r="1.2" fill="currentColor" opacity="0.5"/>
    <path d="M45 70 C38 60 32 55 28 48" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
    <ellipse cx="26" cy="45" rx="5" ry="8" transform="rotate(-25 26 45)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="27" cy="36" r="2" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="22" cy="32" r="1.5" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="32" cy="33" r="1.5" stroke="currentColor" strokeWidth="0.7" fill="none"/>
  </svg>
)

export const FloralRight = ({ className = '' }) => (
  <svg
    width="90"
    height="130"
    viewBox="0 0 90 130"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ transform: 'scaleX(-1)' }}
  >
    <path d="M45 130 C45 100 30 80 10 55" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    <path d="M45 110 C38 95 22 88 10 78" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <path d="M45 90 C38 82 28 80 18 72" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <ellipse cx="8" cy="52" rx="7" ry="12" transform="rotate(-35 8 52)" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <ellipse cx="7" cy="74" rx="6" ry="10" transform="rotate(-20 7 74)" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <ellipse cx="16" cy="68" rx="5" ry="9" transform="rotate(-50 16 68)" stroke="currentColor" strokeWidth="0.8" fill="none"/>
    <circle cx="10" cy="52" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="9" cy="75" r="1.2" fill="currentColor" opacity="0.5"/>
    <path d="M45 70 C38 60 32 55 28 48" stroke="currentColor" strokeWidth="0.7" strokeLinecap="round"/>
    <ellipse cx="26" cy="45" rx="5" ry="8" transform="rotate(-25 26 45)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="27" cy="36" r="2" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="22" cy="32" r="1.5" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="32" cy="33" r="1.5" stroke="currentColor" strokeWidth="0.7" fill="none"/>
  </svg>
)

export const FloralSprig = ({ className = '' }) => (
  <svg
    width="160"
    height="50"
    viewBox="0 0 160 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M10 25 C40 25 60 20 80 25 C100 30 120 25 150 25" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round"/>
    <ellipse cx="30" cy="18" rx="5" ry="8" transform="rotate(-15 30 18)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <ellipse cx="50" cy="14" rx="4" ry="7" transform="rotate(-5 50 14)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <ellipse cx="80" cy="12" rx="5" ry="8" transform="rotate(0 80 12)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <ellipse cx="110" cy="14" rx="4" ry="7" transform="rotate(5 110 14)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <ellipse cx="130" cy="18" rx="5" ry="8" transform="rotate(15 130 18)" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="80" cy="7" r="2" stroke="currentColor" strokeWidth="0.7" fill="none"/>
    <circle cx="74" cy="5" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="86" cy="5" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
)

export const WaxSeal = ({ className = '', color = '#6B1F1F' }) => (
  <svg
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="26" cy="26" r="24" fill={color}/>
    <circle cx="26" cy="26" r="20" stroke="rgba(244,239,230,0.2)" strokeWidth="0.5" fill="none"/>
    <path d="M26 14 C26 14 20 20 20 26 C20 32 26 38 26 38 C26 38 32 32 32 26 C32 20 26 14 26 14Z" stroke="rgba(244,239,230,0.5)" strokeWidth="0.8" fill="none"/>
    <path d="M14 26 C14 26 20 20 26 20 C32 20 38 26 38 26 C38 26 32 32 26 32 C20 32 14 26 14 26Z" stroke="rgba(244,239,230,0.5)" strokeWidth="0.8" fill="none"/>
    <circle cx="26" cy="26" r="4" stroke="rgba(244,239,230,0.4)" strokeWidth="0.7" fill="none"/>
  </svg>
)

/* ── Large atmospheric branch — used as section backgrounds ── */
export const BotanicalBranch = ({ color = '#F4EFE6', className = '', style = {} }) => (
  <svg
    width="420"
    height="640"
    viewBox="0 0 420 640"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* Main central stem — tall sweeping curve */}
    <path d="M210 640 C205 580 195 520 185 460 C175 400 165 340 170 280 C175 220 190 165 200 110 C210 55 215 20 210 0"
      stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>

    {/* Primary branches — large, spreading */}
    {/* Branch right at y≈500 */}
    <path d="M188 480 C220 460 255 450 290 440 C320 432 355 428 385 422"
      stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="390" cy="420" rx="12" ry="22" transform="rotate(12 390 420)" stroke={color} strokeWidth="0.9" fill="none" opacity="0.55"/>
    <ellipse cx="375" cy="408" rx="9" ry="17" transform="rotate(5 375 408)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="355" cy="415" rx="8" ry="15" transform="rotate(-8 355 415)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45"/>
    <ellipse cx="330" cy="425" rx="9" ry="16" transform="rotate(-15 330 425)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45"/>
    <ellipse cx="305" cy="435" rx="8" ry="14" transform="rotate(-10 305 435)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>

    {/* Branch left at y≈400 */}
    <path d="M178 390 C148 372 118 362 88 352 C62 344 35 338 10 330"
      stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="7" cy="328" rx="11" ry="20" transform="rotate(-15 7 328)" stroke={color} strokeWidth="0.9" fill="none" opacity="0.55"/>
    <ellipse cx="22" cy="318" rx="9" ry="16" transform="rotate(-8 22 318)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="48" cy="332" rx="8" ry="15" transform="rotate(5 48 332)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45"/>
    <ellipse cx="75" cy="345" rx="9" ry="16" transform="rotate(10 75 345)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.45"/>

    {/* Branch right at y≈300 */}
    <path d="M172 300 C205 282 240 272 272 260 C300 250 328 242 350 232"
      stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
    <ellipse cx="355" cy="230" rx="10" ry="19" transform="rotate(10 355 230)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="338" cy="220" rx="8" ry="15" transform="rotate(3 338 220)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="315" cy="234" rx="8" ry="14" transform="rotate(-12 315 234)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>
    <ellipse cx="290" cy="244" rx="7" ry="13" transform="rotate(-8 290 244)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>

    {/* Branch left at y≈220 */}
    <path d="M174 225 C148 210 120 200 92 188 C68 178 42 170 18 160"
      stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
    <ellipse cx="15" cy="158" rx="10" ry="18" transform="rotate(-18 15 158)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="32" cy="148" rx="8" ry="14" transform="rotate(-10 32 148)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="58" cy="162" rx="7" ry="13" transform="rotate(5 58 162)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>
    <ellipse cx="82" cy="175" rx="7" ry="12" transform="rotate(10 82 175)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>

    {/* Branch right at y≈140 */}
    <path d="M183 142 C212 128 242 118 268 108 C290 100 312 94 330 86"
      stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.55"/>
    <ellipse cx="334" cy="84" rx="9" ry="17" transform="rotate(8 334 84)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <ellipse cx="318" cy="74" rx="7" ry="13" transform="rotate(2 318 74)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="298" cy="87" rx="7" ry="12" transform="rotate(-10 298 87)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>

    {/* Branch left at y≈65 */}
    <path d="M196 68 C172 56 148 46 124 36 C104 28 82 20 60 12"
      stroke={color} strokeWidth="0.8" strokeLinecap="round" opacity="0.5"/>
    <ellipse cx="57" cy="10" rx="8" ry="15" transform="rotate(-20 57 10)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="74" cy="0" rx="7" ry="12" transform="rotate(-12 74 0)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.4"/>
    <ellipse cx="96" cy="18" rx="6" ry="11" transform="rotate(5 96 18)" stroke={color} strokeWidth="0.6" fill="none" opacity="0.38"/>

    {/* Small petal clusters at branch tips */}
    <circle cx="208" cy="0" r="4" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <circle cx="200" cy="-6" r="3" stroke={color} strokeWidth="0.6" fill="none" opacity="0.35"/>
    <circle cx="216" cy="-5" r="2.5" stroke={color} strokeWidth="0.6" fill="none" opacity="0.35"/>

    {/* Secondary small twigs off main branches */}
    <path d="M245 268 C248 252 250 242 252 230" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="253" cy="227" rx="5" ry="9" transform="rotate(5 253 227)" stroke={color} strokeWidth="0.6" fill="none" opacity="0.32"/>
    <path d="M130 360 C128 346 126 336 124 324" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="123" cy="321" rx="5" ry="9" transform="rotate(-5 123 321)" stroke={color} strokeWidth="0.6" fill="none" opacity="0.32"/>
    <path d="M255 454 C260 440 263 430 265 418" stroke={color} strokeWidth="0.6" strokeLinecap="round" opacity="0.35"/>
    <ellipse cx="266" cy="415" rx="5" ry="8" transform="rotate(8 266 415)" stroke={color} strokeWidth="0.6" fill="none" opacity="0.32"/>
  </svg>
)

/* ── Botanical wreath — used as center watermark ─────────── */
export const FloralWreath = ({ color = '#F4EFE6', className = '', style = {} }) => (
  <svg
    width="380"
    height="380"
    viewBox="0 0 380 380"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
  >
    {/* 8 radiating stems from center (190,190) at 45° intervals */}
    {/* Top */}
    <path d="M190 190 C190 160 188 135 185 110" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="184" cy="107" rx="7" ry="14" transform="rotate(-5 184 107)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="176" cy="118" rx="5" ry="10" transform="rotate(-25 176 118)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="194" cy="116" rx="5" ry="10" transform="rotate(20 194 116)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Top-right */}
    <path d="M190 190 C208 168 224 150 242 132" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="245" cy="129" rx="7" ry="14" transform="rotate(40 245 129)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="254" cy="138" rx="5" ry="10" transform="rotate(20 254 138)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="238" cy="120" rx="5" ry="10" transform="rotate(60 238 120)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Right */}
    <path d="M190 190 C220 190 248 192 272 195" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="275" cy="195" rx="14" ry="7" transform="rotate(5 275 195)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="268" cy="185" rx="10" ry="5" transform="rotate(-15 268 185)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="270" cy="205" rx="10" ry="5" transform="rotate(20 270 205)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Bottom-right */}
    <path d="M190 190 C208 210 224 228 240 248" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="243" cy="251" rx="7" ry="14" transform="rotate(-40 243 251)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="253" cy="242" rx="5" ry="10" transform="rotate(-60 253 242)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="236" cy="262" rx="5" ry="10" transform="rotate(-20 236 262)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Bottom */}
    <path d="M190 190 C190 218 192 244 196 268" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="197" cy="271" rx="7" ry="14" transform="rotate(5 197 271)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="188" cy="262" rx="5" ry="10" transform="rotate(25 188 262)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="206" cy="262" rx="5" ry="10" transform="rotate(-20 206 262)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Bottom-left */}
    <path d="M190 190 C170 210 152 226 136 246" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="133" cy="249" rx="7" ry="14" transform="rotate(40 133 249)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="122" cy="240" rx="5" ry="10" transform="rotate(60 122 240)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="140" cy="260" rx="5" ry="10" transform="rotate(20 140 260)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Left */}
    <path d="M190 190 C162 188 136 186 110 184" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="107" cy="184" rx="14" ry="7" transform="rotate(-5 107 184)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="114" cy="174" rx="10" ry="5" transform="rotate(15 114 174)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="112" cy="194" rx="10" ry="5" transform="rotate(-20 112 194)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Top-left */}
    <path d="M190 190 C172 170 156 152 138 134" stroke={color} strokeWidth="0.9" strokeLinecap="round" opacity="0.6"/>
    <ellipse cx="135" cy="131" rx="7" ry="14" transform="rotate(-40 135 131)" stroke={color} strokeWidth="0.8" fill="none" opacity="0.55"/>
    <ellipse cx="124" cy="140" rx="5" ry="10" transform="rotate(-20 124 140)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>
    <ellipse cx="142" cy="120" rx="5" ry="10" transform="rotate(-60 142 120)" stroke={color} strokeWidth="0.7" fill="none" opacity="0.45"/>

    {/* Central flower */}
    <circle cx="190" cy="190" r="8" stroke={color} strokeWidth="0.8" fill="none" opacity="0.5"/>
    <circle cx="190" cy="190" r="4" fill={color} opacity="0.3"/>
    <circle cx="190" cy="180" r="3.5" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4"/>
    <circle cx="200" cy="190" r="3.5" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4"/>
    <circle cx="190" cy="200" r="3.5" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4"/>
    <circle cx="180" cy="190" r="3.5" stroke={color} strokeWidth="0.6" fill="none" opacity="0.4"/>
  </svg>
)
