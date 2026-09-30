# Aktarul Portfolio

Highly animated React + Vite portfolio.

## Stack

- React
- Vite
- CSS
- Three.js
- GitHub public API

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

Import the repository in Vercel and deploy. The project is configured to run
`npm run build` and publish the generated `dist` directory. No environment
variables are required.

## Main files

- `src/App.jsx`
- `src/styles.css`
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/Intro.jsx`
- `src/components/Work.jsx`
- `src/components/ProjectCard.jsx`
- `src/components/GitHubProjects.jsx`
- `src/components/About.jsx`
- `src/components/Skills.jsx`
- `src/components/Education.jsx`
- `src/components/FAQ.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

## GitHub

The GitHub project section uses:

`https://api.github.com/users/Aktarul902/repos`

Change `GITHUB_USER` in `src/components/GitHubProjects.jsx` if needed.

## Contact

Change the email address in `src/components/Contact.jsx`.


## 3D visuals

The hero and project cards use CSS 3D transforms. The GitHub section includes an
interactive Three.js model. No backend is required.

Project preview mockups are stored in:

- `public/previews/printzenz.svg`
- `public/previews/storefront.svg`
- `public/previews/dashboard.svg`

You can replace these SVG files with your real screenshots later without changing the React components.
