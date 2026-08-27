# Coop Digital

Marketing site for Coop Digital, a Greater Philadelphia marketing partner.

**Live site:** https://coop-digital.vercel.app/

## Stack

Vite + React + TypeScript, routed with React Router, styled with Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

Other scripts:

```bash
npm run build    # type-check and build for production into dist/
npm run preview  # serve the production build locally
npm run lint     # run oxlint
```

## Images

Real photos live in `public/images/` and are referenced by exact filename
(`hero-street.jpg`, `founder-brittany.jpg`, `services-hats.jpg`,
`contact-portrait.jpg`, `coopdigital-logo-final.jpg`). If one of these files
is missing, the site falls back to a labeled placeholder block instead of a
broken image.
