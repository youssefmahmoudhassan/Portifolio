# Y & Y Developer Portfolio

A responsive three-page React portfolio for a frontend/UI-UX developer and a backend developer. Built with Vite, React Router, Framer Motion, Lucide icons, and custom CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Customize projects

Open `src/data.js` and edit the `projects` array. Each project has:

- `title`: project name
- `image`: image path, for example `/projects/weather-app.png`
- `description`: project description
- `github`: URL the card should open (use a deployed/live URL if that is what you want visitors to see)
- `technologies`: array of languages/tools
- `category`: Frontend, Backend, or Full stack

To add project images, create `public/projects/` and place images there. Example: `public/projects/weather-app.png`.

Empty image, description, and link fields are intentionally left blank in `src/data.js`; placeholder instructions show in the UI until you fill them in. Cards only become clickable links when a project URL is provided.

## Contact form

The form uses `mailto:` and opens the visitor's email application; it does not store or send messages through a server. For a real web form, connect a form service or backend endpoint.

## Before publishing

Run `npm run build`, then deploy to Vercel, Netlify, or another static hosting provider. If using GitHub Pages, configure the Vite base path for your repository.
