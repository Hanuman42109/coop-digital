import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import PlaceholderImage from '../components/PlaceholderImage'

const sections = [
  {
    title: 'More Eyes on Your Business',
    intro:
      "We helped a Philadelphia moving company increase their online presence so they can attain more qualified leads. Coop Digital's services led to:",
    stats: [
      '68% increase in website traffic',
      '49% growth in reach and impressions',
      '52% increase in local search visibility',
    ],
    impact:
      'More people know your name, understand what you offer, and have a reason to check you out.',
  },
  {
    title: 'An Audience That Actually Engages',
    intro:
      "A wellness brand wanted more genuine engagement from people who are actually interested in their content and products. Coop Digital's services led to:",
    stats: [
      '82% growth in qualified audience engagement',
      '64% increase in interactions on social media',
      '48% improvement in followers',
    ],
    impact:
      "You're not just building an audience. You're building a group of people who recognize your business and want to stay connected to it.",
  },
  {
    title: 'Attention That Turns Into Action',
    intro:
      "A local gym wanted increased memberships during their slower summer months. Coop Digital's services led to:",
    stats: ['56% increase in qualified inquiries', '41% increase in memberships'],
    impact:
      'Your marketing becomes more than awareness, it starts contributing to real business goals.',
  },
  {
    title: 'Data You Can Actually Use',
    intro:
      "We turn performance data into clear, easy-to-digest insights so you know what's working and what's not. Coop Digital provides:",
    stats: [
      'Simple performance reporting',
      'Clear explanations of what your numbers mean',
      'Recommendations backed by data',
    ],
    impact: 'Less guessing. More intentional decisions about how to grow your business.',
  },
  {
    title: 'A Community That Comes Back',
    intro:
      "The strongest businesses don't just attract customers. They build relationships. Coop Digital's community-centered marketing has produced:",
    stats: [
      '83% growth in community engagement',
      '96% retention rate',
      'New partnerships and collaboration opportunities',
      'Stronger relationships between your brand and the people you serve',
    ],
    impact:
      "People don't just discover your business. They remember it, return to it, recommend it, and become part of its growth.",
  },
]

export default function Impact() {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = sections[activeIndex]

  const goNext = () => setActiveIndex((prev) => (prev + 1) % sections.length)
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + sections.length) % sections.length)

  return (
    <div className="bg-brand-purple pb-20 text-white">
      <div className="mx-auto max-w-4xl px-6 pt-10">
        <PlaceholderImage
          src="/images/hood.jpg"
          alt="Philadelphia neighborhood"
          label="Impact photo"
          className="h-56 w-full rounded-2xl object-cover md:h-72"
        />
      </div>

      <div className="mx-auto mt-10 max-w-4xl rounded-3xl border-4 border-brand-lavender bg-white px-8 py-12 text-brand-purple md:px-16">
        <h1 className="font-display text-2xl font-bold md:text-3xl md:whitespace-nowrap">
          Marketing That Shines a Light on Communities.
        </h1>
        <h2 className="mt-4 font-display text-lg font-bold">
          What Impact Looks Like
        </h2>

        <div className="mt-10">
          <div
            role="button"
            tabIndex={0}
            onClick={goNext}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                goNext()
              }
            }}
            className="w-full cursor-pointer rounded-2xl border-4 border-brand-purple bg-brand-lavender px-6 py-8 text-left text-brand-purple shadow-[inset_0_0_0_3px_white,8px_8px_0_0_var(--color-brand-orange)] transition-all hover:-translate-y-0.5 hover:shadow-[inset_0_0_0_3px_white,10px_10px_0_0_var(--color-brand-orange)] active:translate-y-0.5 active:shadow-[inset_0_0_0_3px_white,4px_4px_0_0_var(--color-brand-orange)] md:px-10"
            aria-label="Show next impact point"
          >
            <h3 className="font-display text-xl font-bold">
              {activeIndex + 1}. {active.title}
            </h3>
            <p className="mt-3 leading-relaxed">{active.intro}</p>
            <ul className="mt-5 list-disc space-y-2.5 pl-6 marker:text-brand-purple">
              {active.stats.map((stat) => (
                <li key={stat} className="leading-relaxed">
                  {stat}
                </li>
              ))}
            </ul>
            <p className="mt-5 leading-relaxed">
              <span className="font-bold">The impact:</span> {active.impact}
            </p>
          </div>

          <div className="mt-10 flex items-center justify-center gap-12">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous impact point"
              className="font-display text-3xl font-bold text-brand-purple/60 transition-colors hover:text-brand-purple"
            >
              ‹
            </button>

            <div className="flex items-center gap-3">
              {sections.map((section, index) => (
                <button
                  key={section.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to impact point ${index + 1}`}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    index === activeIndex
                      ? 'bg-brand-purple'
                      : 'bg-brand-purple/30'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next impact point"
              className="font-display text-3xl font-bold text-brand-purple/60 transition-colors hover:text-brand-purple"
            >
              ›
            </button>
          </div>

          <p className="mt-3 text-center text-sm text-brand-purple/60">
            {activeIndex + 1} of {sections.length}
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <Button as={Link} to="/contact">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  )
}
