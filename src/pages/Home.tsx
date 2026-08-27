import PlaceholderImage from '../components/PlaceholderImage'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <PlaceholderImage
          src="/images/hero-street.jpg"
          alt="A lively street in Fairmount, Philadelphia"
          label="Hero photo"
          className="h-[420px] w-full object-cover md:h-[520px]"
        />
        <div className="absolute inset-0 bg-brand-purple/70" />
      </section>

      <section className="mx-auto -mt-16 max-w-4xl rounded-3xl bg-brand-lavender px-8 py-12 shadow-lg md:px-16 md:py-16">
        <h1 className="font-display text-4xl leading-tight font-bold md:text-5xl">
          Your business already{' '}
          <span className="text-brand-orange">makes a difference,</span> we're
          just here to help the right people{' '}
          <span className="text-brand-orange">discover it.</span>
        </h1>
        <p className="mt-8 max-w-xl font-medium">
          Coop Digital is a strategic marketing partner helping mission-driven
          businesses, nonprofits, and locally owned organizations grow their
          impact through thoughtful advertising, compelling storytelling, and
          community-focused marketing throughout Greater Philadelphia.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-8 py-16 text-center">
        <h2 className="font-display text-3xl font-bold">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-4 max-w-xl">
          Schedule a free consultation and let's talk about how Coop Digital
          can help more people discover the work you're already doing.
        </p>
        <Button as={Link} to="/contact" className="mt-8">
          Book a Free Consultation
        </Button>
      </section>
    </div>
  )
}
