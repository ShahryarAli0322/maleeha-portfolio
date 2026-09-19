# Maleeha Abid — Portfolio

Personal academic portfolio for a BSc Geography student working in GIS, spatial mapping, and environmental research.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
npm run preview
```

## Deploy on Vercel

1. Import [ShahryarAli0322/maleeha-portfolio](https://github.com/ShahryarAli0322/maleeha-portfolio) in [Vercel](https://vercel.com/new).
2. Framework Preset: **Vite**
3. Root Directory: `.` (leave as the repository root)
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Add these environment variables if the contact form should send email:

| Name | Value |
| --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

7. Deploy. After changing env vars, trigger a new deployment so Vite can bake them into the build.

The contact form works without those keys, but submissions will not send until they are set.

## Update text

Edit `src/data/content.ts`. Page sections read from that file.

## Add files later

| Item | Put the file here |
| --- | --- |
| CV PDF | `public/assets/Maleeha_Abid_CV.pdf` |
| Internship photos / map screenshots / certificate | `public/assets/internship/` (`soil-mapping.jpg`, `digitisation.jpg`, `certificate.jpg`) |
| Map gallery images | `public/assets/maps/` (`gis-map.jpg`, `soil-map.jpg`, `digitisation.jpg`, `academic-map.jpg`) |

After adding images, update the matching entries in `src/data/content.ts` so the placeholder frames can be replaced with real figures.

Do not fill placeholders with stock maps. Only add work that is yours.
