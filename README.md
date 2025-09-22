# Personal Portfolio (Next.js, MongoDB)

A modern, full-stack developer portfolio built with Next.js (App Router), TypeScript, MongoDB, and Context API. Showcasing my skills, projects, experience, and more.

## Features

- **Next.js 13+ (App Router)** for fast, SEO-friendly pages
- **TypeScript** for type safety
- **MongoDB** for dynamic, updatable personal data
- **Context API** for global state management
- **Framer Motion** for smooth animations
- **Modular Components** for easy customization
- **API routes** for contact form and data fetching
- **Responsive Design** for all devices

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Pratham-D14/personal-portfolio.git
cd personal-portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory and add your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database>?retryWrites=true&w=majority
```

### 4. Seed your personal data

- Edit `personalData.tsx` with your info (for initial seeding)
- Run the app and use the provided API or script to seed your MongoDB database

### 5. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your portfolio.

## Project Structure

```
portfolio/
├── public/                # Static assets
├── src/
│   ├── app/               # Next.js app directory
│   ├── components/        # UI components
│   ├── contexts/          # React Context providers
│   ├── lib/               # Utility functions, MongoDB connection
│   ├── models/            # Mongoose models
│   ├── types/             # TypeScript types
│   └── ...
├── personalData.tsx       # Your personal info (for seeding)
├── .env.local             # Environment variables
├── package.json
└── README.md
```

## Customization

- Update `personalData.tsx` for your skills, experience, projects, etc.
- Edit components in `src/components/` for layout and style changes.
- Add new sections or pages as needed.

## Deployment

- Build for production:
  ```bash
  npm run build
  npm start
  ```

## Troubleshooting

- **MongoDB connection errors:** Check your `.env.local` and IP whitelist in MongoDB Atlas.
- **Type errors:** Ensure your data matches the types in `src/types/types.ts`.
- **API errors:** Check your API route signatures and always return a `Response` or `NextResponse`.

---

**Made with ❤️ by Pratham Darji**
