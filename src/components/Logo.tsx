import type { CSSProperties } from 'react'

interface LogoProps {
  size?: number
  className?: string
  variant?: 'full' | 'mark-only'
  theme?: 'dark' | 'light'
}

export default function Logo({
  size = 50,
  className = '',
  variant = 'full',
  theme = 'dark',
}: LogoProps) {
  const color = theme === 'dark' ? '#ffffff' : '#0a0a0a'
  const colorMuted = theme === 'dark' ? 'rgba(255,255,255,0.45)' : 'rgba(0,0,0,0.4)'
  const separatorBg = theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'
  const scale = size / 50

  // All layout values come from CSS vars — avoids inline style warnings
  const vars = {
    '--logo-scale': scale,
    '--logo-color': color,
    '--logo-color-muted': colorMuted,
    '--logo-sep-bg': separatorBg,
  } as CSSProperties

  const markW = 66 * scale
  const markH = 50 * scale

  const mark = (
    <svg width={markW} height={markH} viewBox="0 0 66 50" fill="none" aria-hidden="true">
      <rect x="0.5" y="0.5" width="65" height="49" stroke={color} strokeWidth="0.75" />
      <circle cx="26" cy="25" r="17" fill="none" stroke={color} strokeWidth="0.75" />
      <line x1="48" y1="0" x2="48" y2="50" stroke={color} strokeWidth="0.4" opacity="0.5" />
      <circle cx="26" cy="25" r="2.3" fill={color} />
    </svg>
  )

  if (variant === 'mark-only') {
    return (
      <span className={className} role="img" aria-label="Veil">
        {mark}
      </span>
    )
  }

  return (
    <span className={`logo ${className}`} style={vars} role="img" aria-label="Veil — Photo · Video">
      {mark}
      <span className="logo__sep" />
      <span className="logo__text">
        <span className="logo__name">VEIL</span>
        <span className="logo__sub">PHOTO · VIDEO</span>
      </span>
    </span>
  )
}
