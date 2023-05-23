# PlantUbanus: App

PlantUrbanus is a fullstack app for managing houseplants. This is the front-end, a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Abstractly speaking it can be seen as the foundation for any fullstack app that uses a server connected to MongoDB as a database with two types of document models: User and Plant (or Product, or Book, or Item).

## About this app

I have used MaterialUI due to familiarity, but NextJS apps are typically paired with Tailwind CSS.

If I were to revisit the code of this app, I would perhaps chose to refactor some of it, particularly the axios functions and the components, for brevity and clarity. You should use your judgement if you are using these files to scaffold your own project.

### To do

- add feature to progress pictures to each plant

### Weather and Astronomy data

Many thanks to [The Norwegian Meteorological Institute (MET)]("https://api.met.no/license_data.html") for their great API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
