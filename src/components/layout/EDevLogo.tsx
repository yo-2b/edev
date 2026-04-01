interface Props {
  id: string
  className?: string
}

/**
 * Rainbow gradient 'e' logomark for E-Dev Multimedia.
 * Pass a unique `id` per usage (e.g. "header", "footer") to avoid
 * duplicate SVG gradient IDs in the same document.
 */
export function EDevLogo({ id, className }: Props) {
  const gradId = `edev-rainbow-${id}`

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#E91E63" />
          <stop offset="16%"  stopColor="#FF5722" />
          <stop offset="32%"  stopColor="#FF9800" />
          <stop offset="48%"  stopColor="#CDDC39" />
          <stop offset="64%"  stopColor="#4CAF50" />
          <stop offset="80%"  stopColor="#2196F3" />
          <stop offset="100%" stopColor="#9C27B0" />
        </linearGradient>
      </defs>
      {/*
        'e' shape:
        - Outer ring arc (r=43) counterclockwise from upper-right to lower-right (long way round)
        - Line inward to inner ring (r=24) lower-right
        - Inner arc clockwise back to upper-right (creates the hole via winding rule)
        - Z closes the middle crossbar (top edge)
        Result: ring open on the right with a middle bar → letter 'e'
      */}
      <path
        d="M 92.6 44 A 43 43 0 1 0 92.6 56 L 73.2 56 A 24 24 0 1 1 73.2 44 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  )
}
