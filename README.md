# MARRKS C — Client Pitch Frontend (Repair Build)

This is the MARRKS C client-pitch frontend using Next.js + JavaScript/JSX.
It follows the uploaded showroom inspiration direction and includes the demo reservation journey.

## Stack
- Next.js 16.3.1
- React 19.2.8
- JavaScript + JSX
- Framer Motion
- Lucide React
- Tailwind CSS 4.3 + PostCSS
- Custom CSS design layer for the showroom-specific visual system

## Demo reservation journey
Products → Product detail → Add to reservation → Reservation cart → Customer details → Showroom date/time → Demo Reservation ID → Print confirmation.

There is intentionally **no online payment**. The demo communicates that customers reserve products online, receive an Order/Reservation ID, visit the showroom, present the ID, collect the reserved products, and pay in person.

## Tailwind setup
This package is configured for Tailwind CSS v4 using the official `@tailwindcss/postcss` PostCSS plugin. Tailwind is imported from `app/globals.css` with `@import "tailwindcss";`. Tailwind v4 does not require a `tailwind.config.js` for this setup.

The `jsconfig.json` is configured for a JavaScript/JSX Next.js project and excludes `node_modules` and `.next` from editor type scanning. This avoids the `estree`, `json-schema`, and `json5` implicit type-library errors.

## Install after replacing the files
If you are extracting this over the current project, run:

```powershell
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm install
npm run dev
```

Then open http://localhost:3000.

## File convention
All React pages/components in this build use `.jsx`.
The product data module intentionally remains `data/products.js` because it is plain JavaScript data, not a React component.

## Logo and favicon
If `public/images/mc-logo.png` exists, the navbar uses it. `app/icon.svg` is included so Next.js can use it as the site favicon.
