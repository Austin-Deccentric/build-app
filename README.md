# TOTC Landing Experience

This repository contains a Next.js landing page for the TOTC online education platform. It is built with React, TypeScript, Tailwind CSS, DaisyUI, and modern Next.js page routing.
Live at: [Totc Live](https://build-app-nu.vercel.app/)
## Project Overview

The app renders a marketing-driven landing page with the following sections:

- Hero section with CTA buttons and animated imagery
- Success/metrics section highlighting platform benefits
- About section with instructor and student cards
- Feature panels for classroom, assessments, discussions, and management
- Testimonials section with user feedback and rating visuals
- News and resources feed with feature article cards
- Navigation bar with responsive mobile menu
- Login/Register page with interactive form toggles

## Key Technologies

- Next.js 16.3.0
- React 19.2.8
- TypeScript 5
- Tailwind CSS v4
- DaisyUI 5
- React Icons
- Bun package manager configured in `package.json`

## App Structure

- `src/pages/` - top-level pages including home and login
- `src/layout/` - global layout, navbar, and footer components
- `src/component/landing/` - landing page sections and cards
- `src/styles/globals.css` - Tailwind and DaisyUI theme setup
- `public/images/` - image assets used across the UI

## Available Pages

- `/` - main landing page
- `/login` - login/register experience

## Local Development

### Install dependencies

If you are using Bun:

```bash
bun install
```

If you prefer npm:

```bash
npm install
```

### Run the app locally

```bash
bun dev
```

Or with npm:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser to view the site.

### Build for production

```bash
bun build
```

Or with npm:

```bash
npm run build
```

### Start production server

```bash
bun start
```

Or with npm:

```bash
npm start
```

## Notes

- The app uses the page router under `src/pages`.
- The login page contains client-side state for toggling between login and register modes.
- Navigation links include `/courses`, `/career`, `/blog`, `/about` even though those pages are not yet implemented in this repo.

## Contribution

Feel free to extend the landing page by adding real routes, backend integration, or additional features such as authentication and content pages.

## License

This project has no license configured in the repository. Add a `LICENSE` file if you want to publish it under an open-source license.
