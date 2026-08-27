import { useState } from 'react'

type PlaceholderImageProps = {
  src: string
  alt: string
  label: string
  className?: string
}

export default function PlaceholderImage({
  src,
  alt,
  label,
  className = '',
}: PlaceholderImageProps) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-brand-lavender text-center text-sm font-medium text-brand-purple/70 ${className}`}
      >
        <span className="px-4">
          {label}
          <br />
          <span className="text-xs font-normal opacity-70">
            drop file into public/images
          </span>
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  )
}
