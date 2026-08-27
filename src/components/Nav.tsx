import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="notch-corner bg-brand-purple text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase underline-offset-4 hover:underline ${
                  isActive ? 'underline' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Button
          as={NavLink}
          to="/contact"
          variant="solid"
          className="hidden !bg-brand-orange text-brand-purple hover:!bg-white md:inline-flex"
        >
          Book a Free Consultation
        </Button>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex w-6 flex-col gap-1.5 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 px-6 pb-6 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </NavLink>
          ))}
          <Button
            as={NavLink}
            to="/contact"
            onClick={() => setOpen(false)}
            className="!bg-brand-orange text-brand-purple"
          >
            Book a Free Consultation
          </Button>
        </nav>
      )}
    </header>
  )
}
