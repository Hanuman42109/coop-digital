import { Link } from 'react-router-dom'
import Button from './Button'

export default function Footer() {
  return (
    <footer className="bg-brand-orange text-brand-purple">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold">Coop Digital.</p>
          <p className="font-display text-lg font-semibold">
            Greater Philadelphia | EST. 2023
          </p>
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end">
          <div className="text-right font-display text-lg font-semibold">
            <a
              href="mailto:hello@coopdigital.org"
              className="underline underline-offset-4 hover:no-underline"
            >
              hello@coopdigital.org
            </a>
            <p>
              <a
                href="https://instagram.com/coopdigitalphl"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:no-underline"
              >
                @coopdigitalphl
              </a>
            </p>
          </div>
          <Button as={Link} to="/contact" variant="solid">
            Book a Free Consultation
          </Button>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 pb-6 text-sm">
        <span>&copy; {new Date().getFullYear()} Coop Digital</span>
        <a
          href="https://instagram.com/coopdigitalphl"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6 fill-brand-purple">
            <path d="M12 2c-2.7 0-3.06.01-4.12.06-1.06.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.37-.47 2.43C2.01 8.94 2 9.3 2 12s.01 3.06.06 4.12c.05 1.06.22 1.79.47 2.43.26.66.6 1.22 1.15 1.77.55.55 1.11.9 1.77 1.15.64.25 1.37.42 2.43.47C8.94 21.99 9.3 22 12 22s3.06-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.15 4.9 4.9 0 0 0 1.15-1.77c.25-.64.42-1.37.47-2.43.05-1.06.06-1.42.06-4.12s-.01-3.06-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 18.55 2.53c-.64-.25-1.37-.42-2.43-.47C15.06 2.01 14.7 2 12 2Zm0 1.8c2.65 0 2.97.01 4.02.06.97.04 1.5.2 1.85.34.46.18.79.4 1.14.75.35.35.57.68.75 1.14.14.35.3.88.34 1.85.05 1.05.06 1.37.06 4.02s-.01 2.97-.06 4.02c-.04.97-.2 1.5-.34 1.85-.18.46-.4.79-.75 1.14-.35.35-.68.57-1.14.75-.35.14-.88.3-1.85.34-1.05.05-1.37.06-4.02.06s-2.97-.01-4.02-.06c-.97-.04-1.5-.2-1.85-.34a3.1 3.1 0 0 1-1.14-.75 3.1 3.1 0 0 1-.75-1.14c-.14-.35-.3-.88-.34-1.85C3.81 14.97 3.8 14.65 3.8 12s.01-2.97.06-4.02c.04-.97.2-1.5.34-1.85.18-.46.4-.79.75-1.14.35-.35.68-.57 1.14-.75.35-.14.88-.3 1.85-.34C10.03 3.81 10.35 3.8 12 3.8Zm0 3.05a5.15 5.15 0 1 0 0 10.3 5.15 5.15 0 0 0 0-10.3Zm0 8.5a3.35 3.35 0 1 1 0-6.7 3.35 3.35 0 0 1 0 6.7Zm5.36-8.7a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
