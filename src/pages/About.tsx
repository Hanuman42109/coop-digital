import PlaceholderImage from '../components/PlaceholderImage'

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-bold md:text-5xl">
        Uniting Strategy, Data, Community, and Impact.
      </h1>

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_320px]">
        <div className="space-y-6 leading-relaxed">
          <p>
            At Coop Digital, we believe effective marketing isn't about
            having the biggest budget, it's about telling the right story to
            the right people.
          </p>
          <p>
            We partner with mission-driven businesses, nonprofits, and
            locally owned organizations throughout Greater Philadelphia to
            help them grow through strategic digital marketing, thoughtful
            storytelling, and authentic community engagement. Whether it's
            building a stronger social media presence, launching Meta or
            Google Ads, or creating campaigns that inspire action, our goal
            is simple: help organizations doing meaningful work get the
            visibility they deserve.
          </p>
          <p>
            Founded by Brittany Cooper, Coop Digital was built from a
            passion for both marketing and community. Brittany spent years
            leading digital marketing campaigns for Fortune 500 brands,
            developing strategies across healthcare, retail, education, and
            consumer industries. Working with organizations including
            AstraZeneca, GSK, Scholastic and PetSmart, she learned how to
            create diverse, data-driven campaigns that reach the right
            audience, deliver measurable results, and maximize marketing
            investments.
          </p>
          <p>
            While corporate marketing provided invaluable experience, it
            also revealed an important reality: the organizations making the
            biggest impact in their communities often have the smallest
            marketing budgets. Too many incredible small businesses and
            nonprofits struggle to compete online, not because they lack
            great products or services, but because they lack the resources
            and expertise to tell their story effectively.
          </p>
          <p className="font-semibold">
            That realization became the foundation of Coop Digital.
          </p>
          <p>
            You've already done the hard part by building your business. Let
            Coop Digital help more people discover it through strategic
            advertising, compelling content, and marketing that builds
            lasting community.
          </p>
        </div>

        <figure>
          <PlaceholderImage
            src="/images/founder-brittany.jpg"
            alt="Brittany Cooper, founder of Coop Digital"
            label="Founder photo"
            className="aspect-[4/5] w-full rounded-2xl object-cover"
          />
          <figcaption className="mt-2 text-sm text-brand-purple/70">
            Brittany Cooper, Founder
          </figcaption>
        </figure>
      </div>
    </div>
  )
}
