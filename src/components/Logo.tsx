import PlaceholderImage from './PlaceholderImage'

type LogoProps = {
  className?: string
}

export default function Logo({ className = 'h-9 w-9' }: LogoProps) {
  return (
    <PlaceholderImage
      src="/images/coopdigital-logo-final.jpg"
      alt="Coop Digital logo"
      label="Logo"
      className={`${className} object-contain`}
    />
  )
}
