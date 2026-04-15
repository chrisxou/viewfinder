interface VeilLogoProps {
  size?: number
  variant?: 'full' | 'mark'
  theme?: 'dark' | 'light'
  className?: string
}

export default function VeilLogo({
  size = 64,
  variant = 'full',
  theme = 'dark',
  className = '',
}: VeilLogoProps) {
  const color = theme === 'dark' ? '#ffffff' : '#0a0a0a'
  const colorMuted = theme === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)'
  const colorDash = theme === 'dark' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.6)'

  const s = size
  const totalWidth = variant === 'full' ? s + s * 3.6 : s

  const bLen = s * 0.25
  const bW   = s * 0.125
  const tick = s * 0.078
  const mid  = s * 0.5

  const r1x = s * 0.28
  const r1s = s * 0.44
  const r2x = s * 0.375
  const r2s = s * 0.25

  return (
    <svg
      width={totalWidth}
      height={s}
      viewBox={`0 0 ${totalWidth} ${s}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Veil — Photo · Video"
    >
      {/* Corner brackets */}
      <polyline points={`${bW},${bW + bLen} ${bW},${bW} ${bW + bLen},${bW}`}             stroke={color} strokeWidth="1.4" strokeLinecap="square"/>
      <polyline points={`${s - bW - bLen},${bW} ${s - bW},${bW} ${s - bW},${bW + bLen}`} stroke={color} strokeWidth="1.4" strokeLinecap="square"/>
      <polyline points={`${bW},${s - bW - bLen} ${bW},${s - bW} ${bW + bLen},${s - bW}`} stroke={color} strokeWidth="1.4" strokeLinecap="square"/>
      <polyline points={`${s - bW - bLen},${s - bW} ${s - bW},${s - bW} ${s - bW},${s - bW - bLen}`} stroke={color} strokeWidth="1.4" strokeLinecap="square"/>

      {/* Tick marks */}
      <line x1={mid} y1={bW}     x2={mid} y2={bW + tick}     stroke={color} strokeWidth="0.75"/>
      <line x1={mid} y1={s - bW} x2={mid} y2={s - bW - tick} stroke={color} strokeWidth="0.75"/>
      <line x1={bW}     y1={mid} x2={bW + tick}     y2={mid} stroke={color} strokeWidth="0.75"/>
      <line x1={s - bW} y1={mid} x2={s - bW - tick} y2={mid} stroke={color} strokeWidth="0.75"/>

      {/* Dashed middle rect */}
      <rect x={r1x} y={r1x} width={r1s} height={r1s} stroke={colorDash} strokeWidth="0.5" strokeDasharray="2 3"/>

      {/* Solid inner rect */}
      <rect x={r2x} y={r2x} width={r2s} height={r2s} stroke={color} strokeWidth="0.75"/>

      {variant === 'full' && (
        <>
          {/* Divider */}
          <line
            x1={s + s * 0.22}
            y1={s * 0.18}
            x2={s + s * 0.22}
            y2={s * 0.82}
            stroke={color}
            strokeWidth="0.4"
            opacity="0.2"
          />

          {/* VEIL wordmark */}
          <text
            x={s + s * 0.38}
            y={s * 0.39}
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontSize={s * 0.5}
            fontWeight="200"
            letterSpacing={s * 0.18}
            fill={color}
            dominantBaseline="middle"
          >
            VEIL
          </text>

          {/* PHOTO · VIDEO — same x, letter-spacing tuned to match VEIL width */}
          <text
            x={s + s * 0.38}
            y={s * 0.79}
            fontFamily="'DM Sans', system-ui, sans-serif"
            fontSize={s * 0.14}
            fontWeight="200"
            letterSpacing={s * 0.055}
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
