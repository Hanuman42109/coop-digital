import { type FormEvent, useState } from 'react'
import Button from '../components/Button'
import PlaceholderImage from '../components/PlaceholderImage'

const initialForm = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)

  const handleChange =
    (field: keyof typeof initialForm) =>
    (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent(
      `New inquiry from ${form.firstName} ${form.lastName}`,
    )
    const body = encodeURIComponent(
      `Name: ${form.firstName} ${form.lastName}\nEmail: ${form.email}\n\n${form.message}`,
    )

    window.location.href = `mailto:hello@coopdigital.org?subject=${subject}&body=${body}`
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl leading-tight font-bold md:text-5xl">
        Ready to Amplify your Digital Presence?
      </h1>
      <p className="mt-4">
        Fill out the form below and be sure to include your business name (if
        applicable). Ask us anything!
      </p>

      <div className="mt-10 grid gap-12 md:grid-cols-[1fr_320px]">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <span className="font-semibold">Name</span>
            <div className="mt-2 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm">First Name (required)</span>
                <input
                  required
                  type="text"
                  value={form.firstName}
                  onChange={handleChange('firstName')}
                  className="mt-1 w-full rounded-md border border-brand-purple/40 px-4 py-2 focus:border-brand-purple focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="text-sm">Last Name (required)</span>
                <input
                  required
                  type="text"
                  value={form.lastName}
                  onChange={handleChange('lastName')}
                  className="mt-1 w-full rounded-md border border-brand-purple/40 px-4 py-2 focus:border-brand-purple focus:outline-none"
                />
              </label>
            </div>
          </div>

          <label className="block">
            <span className="text-sm font-semibold">Email (required)</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              className="mt-1 w-full rounded-md border border-brand-purple/40 px-4 py-2 focus:border-brand-purple focus:outline-none"
            />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Message (required)</span>
            <textarea
              required
              rows={6}
              value={form.message}
              onChange={handleChange('message')}
              className="mt-1 w-full rounded-md border border-brand-purple/40 px-4 py-2 focus:border-brand-purple focus:outline-none"
            />
          </label>

          <Button type="submit">Send</Button>
        </form>

        <PlaceholderImage
          src="/images/contact-portrait.jpg"
          alt="Coop Digital team member wearing a branded trucker hat"
          label="Contact photo"
          className="aspect-[4/5] w-full rounded-2xl object-cover"
        />
      </div>
    </div>
  )
}
