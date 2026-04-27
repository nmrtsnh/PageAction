## PageAction Dashboard V1

A simple and organized product dashboard starter built with:

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS

## Run Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

- `src/app` - routes, layout, and global styles
- `src/components/dashboard` - reusable dashboard UI
- `src/lib` - mock page audit data and summary helpers (`mock-page-audits.ts`)
- `src/types` - shared app data types

## Customize This Starter

1. Update page records in `src/lib/mock-page-audits.ts`
2. Add dashboard sections as routes (e.g. `src/app/pages/page.tsx`)
3. Replace mock summary and selector logic with API-backed data when ready

## Build for Production

```bash
npm run build
npm run start
```
