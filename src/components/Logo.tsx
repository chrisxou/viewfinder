interface LogoProps {
  size?: number
  className?: string
  variant?: 'full' | 'mark-only'
  theme?: 'dark' | 'light'
}

export default function Logo({
  size = 52,
  className = '',
  variant = 'full',
  theme = 'dark',
}: LogoProps) {
  const color = theme === 'dark' ? '#ffffff' : '#0a0a0a'
  const colorMuted = theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.45)'

  const markW = size * 1.35
  const markH = size
  const cx = markW * 0.39
  const cy = markH * 0.5
  const rOuter = markH * 0.345
  const divX = markW * 0.74
  const dotR = markH * 0.045

  const totalWidth = variant === 'full' ? markW + size * 4.2 : markW

  return (
    <svg
      width={totalWidth}
      height={markH}
      viewBox={`0 0 ${totalWidth} ${markH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Veil — Photo · Video"
    >
      {/* Outer frame */}
      <rect
        x="0.5"
        y="0.5"
        width={markW - 1}
        height={markH - 1}
        stroke={color}
        strokeWidth="0.75"
      />

      {/* Lens circle */}
      <circle cx={cx} cy={cy} r={rOuter} stroke={color} strokeWidth="0.75" />

      {/* Golden-ratio divider line */}
      <line x1={divX} y1="0" x2={divX} y2={markH} stroke={color} strokeWidth="0.4" opacity="0.5" />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={dotR} fill={color} />

      {variant === 'full' && (
        <>
          {/* Separator */}
          <line
            x1={markW + size * 0.28}
            y1={markH * 0.18}
            x2={markW + size * 0.28}
            y2={markH * 0.82}
            stroke={color}
            strokeWidth="0.4"
            opacity="0.2"
          />

          {/* VEIL wordmark — centred slightly above mid to leave room for subtitle */}
          <text
            x={markW + size * 0.52}
            y={markH * 0.38}
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontSize={size * 0.56}
            fontWeight="200"
            letterSpacing={size * 0.1}
            fill={color}
            dominantBaseline="middle"
          >
            VEIL
          </text>

          {/* PHOTO · VIDEO subtitle — aligned to VEIL left edge, correct spacing */}
          <text
            x={markW + size * 0.52}
            y={markH * 0.79}
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontSize={size * 0.14}
            fontWeight="200"
            letterSpacing={size * 0.05}
            fill={colorMuted}
            dominantBaseline="middle"
          >
            PHOTO · VIDEO
          </text>
        </>
      )}
    </svg>
  )
}
