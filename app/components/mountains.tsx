const Mountains = () => (
  <svg
    className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-[32vh] w-full min-w-[900px]"
    viewBox="0 0 1440 500"
    preserveAspectRatio="xMidYMax slice"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="ridgeBack" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#b9bcbf" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#b9bcbf" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="ridgeFront" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#e4e5e6" stopOpacity="0.28" />
        <stop offset="60%" stopColor="#7d8083" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#7d8083" stopOpacity="0" />
      </linearGradient>
      <filter id="soften" x="-10%" y="-10%" width="120%" height="120%">
        <feGaussianBlur stdDeviation="8" />
      </filter>
    </defs>

    <g filter="url(#soften)">
      <path d="M0,360 L220,260 L420,330 L680,220 L900,320 L1150,250 L1440,300 L1440,500 L0,500 Z" fill="url(#ridgeBack)" />
      <path d="M0,420 L260,300 L480,400 L720,240 L960,390 L1200,320 L1440,370 L1440,500 L0,500 Z" fill="url(#ridgeFront)" />
    </g>
  </svg>
);

export default Mountains;
