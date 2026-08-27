import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PlaceholderImage from '../components/PlaceholderImage'

const services = [
  'Meta Ads Planning & Execution',
  'Google Search Ads Planning & Execution',
  'Social Media Management',
  'Creative Services',
  'Experiential Marketing',
]

export default function Services() {
  return (
    <div className="bg-brand-purple pb-20 text-white">
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <PlaceholderImage
          src="/images/services-hats.jpg"
          alt="Coop Digital branded trucker hats"
          label="Services photo"
          className="h-56 w-full rounded-2xl object-cover md:h-72"
        />
      </div>

      <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-brand-cream px-8 py-12 text-brand-purple md:px-16">
        <h1 className="font-display text-4xl font-bold">Services</h1>
        <p className="mt-6">
          Schedule a free consultation and we'll discuss what services make
          sense. We offer a comprehensive free evaluation of your business to
          pinpoint opportunities for growth.
        </p>

        <ul className="mt-8 space-y-4 text-center font-display text-xl font-bold">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/contact">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
