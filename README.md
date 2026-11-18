# Vinayak Unde, portfolio

A multi-page portfolio built with **Next.js (App Router) + TypeScript**. No UI libraries, no Tailwind: plain CSS in `src/app/globals.css`.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Needs Node 18.18+ (Node 20+ recommended).

## Pages

| Route | File |
| --- | --- |
| `/` | `src/app/page.tsx` (terminal-style home with the `ls ~/portfolio` list) |
| `/about` | `src/app/about/page.tsx` (3D globe, experience, education, skills) |
| `/project-work` | `src/app/project-work/page.tsx` |
| `/research` | `src/app/research/page.tsx` |
| `/achievements` | `src/app/achievements/page.tsx` |
| `/certifications` | `src/app/certifications/page.tsx` |
| `/contact` | `src/app/contact/page.tsx` |

## Where to edit things

- **Projects:** `src/data/projects.ts`
- **Skills:** `src/data/skills.ts`
- **Nav, links, email, and the home `ls` descriptions:** `src/data/site.ts`
- **Resume:** replace `public/Vinayak_Unde_Resume.pdf` (the About page and footer link to it)
- **Background:** `src/components/NetworkBackground.tsx` (3D node network + moving grid; tune node count and speed at the top)
- **Project Work transitions:** `src/components/Projects.tsx` and the `.tile` / `.sweep` / `.pp` rules at the end of `globals.css`
- **Certificates:** drop files in `public/certificates/`, then edit the `certs` array in `src/app/certifications/page.tsx`
- **Copyright and competition details:** `research/page.tsx` and `achievements/page.tsx`. The copyright image is cropped to the header and registration number on purpose, because the full extract lists private home addresses.
- **ConnectWise logo:** in `about/page.tsx`, replace the ring mark with the official icon (save the SVG in `public/` and use an `<img>`). Check ConnectWise's brand guidelines before using it.

## Notes

- Page transitions: `src/app/template.tsx` re-mounts on every navigation, so each page fades in and starts at the top (no leftover scroll position).
- The globe (`src/components/Globe.tsx`) is drawn in plain SVG with no map library: land dots come from coarse continent polygons, and the camera follows the plane from Mumbai to Los Angeles.
- The contact form builds a `mailto:` link, so it needs no backend.
- Deploy on Vercel by importing the repo, or run `next build` anywhere Node runs.
