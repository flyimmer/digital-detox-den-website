# Digital Detox Den Website

Netlify-ready MVP website for the Digital Detox Den community hub.

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm test
npm run build
```

## Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- SPA fallback: `public/_redirects`

The self-test scoring data lives in `src/data/quiz.ts`; the scoring and tie-break logic lives in `src/lib/scoring.ts`.
