import type { ComponentPropsWithoutRef, ElementType } from 'react'

type ButtonProps<T extends ElementType> = {
  as?: T
  variant?: 'solid' | 'outline'
} & ComponentPropsWithoutRef<T>

const base =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-colors'

const variants = {
  solid: 'bg-brand-purple text-white hover:bg-brand-purple-light',
  outline:
    'border-2 border-brand-purple text-brand-purple hover:bg-brand-purple hover:text-white',
}

export default function Button<T extends ElementType = 'button'>({
  as,
  variant = 'solid',
  className = '',
  ...props
}: ButtonProps<T>) {
  const Component = as || 'button'
  return (
    <Component
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  )
}
