# DevOverflow

A Q&A platform for developers, similar to Stack Overflow. You can ask questions, answer them, vote, save questions to your collection and get an AI-generated answer suggestion when you're stuck.

**Live demo:** https://dev-overflow-xi.vercel.app

<img width="1914" height="885" alt="image" src="https://github.com/user-attachments/assets/97ff9e78-dce4-4a46-aeda-9e8f4ddd7be7" />


## What you can do

- Sign up with email and password, or log in with GitHub or Google
- Ask questions with a Markdown editor and tag them
- Answer questions, upvote and downvote, and save questions to your collection
- Search and filter questions, with pagination
- Get recommended questions based on the tags you interact with
- Generate an answer suggestion with AI (OpenAI API)
- Browse tags, other users and their profiles, and edit your own profile
- Look for developer jobs near you (JSearch API)
- Switch between light and dark mode

## Tech stack

- **Frontend:** Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Server Actions and API routes, Auth.js (NextAuth v5)
- **Database:** MongoDB with Mongoose, including transactions
- **Forms and validation:** React Hook Form and Zod
- **AI:** Vercel AI SDK with the OpenAI API
- **Deployment:** Vercel

## Run it locally

```bash
git clone https://github.com/RaedNaamoun/devoverflow.git
cd devoverflow
npm install
```

Create a `.env.local` file with these variables:

```
MONGODB_URI=
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
OPENAI_API_KEY=
NEXT_PUBLIC_RAPID_API_KEY=
```

Then start the dev server:

```bash
npm run dev
```

and open http://localhost:3000.

## About this project

I built DevOverflow while working through *The Ultimate Next.js Course* by JS Mastery. My goal was to really understand the newer Next.js features (Server Actions, the App Router, caching) and how to build a full-stack app with authentication and a database from start to finish, not just copy the code.

I'm currently adding tests to it as part of the JS Mastery Next.js testing course (Jest, React Testing Library and Playwright).
