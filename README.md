# 🤖 AI Career Coach (IntelliRise)

**AI Career Coach** is a modern AI-powered web application that helps users grow professionally with tools like resume building, AI-generated cover letters, interview preparation, and career insights.

🚀 **Live Demo:**  
👉 https://ai-career-coach-qdmo.onrender.com/

---

## ✨ Features

- 🧠 AI-powered career guidance
- 📄 Resume builder & optimization
- ✍️ AI-generated cover letters
- 🎤 Mock interview preparation
- 📊 Career insights dashboard
- 🔐 Authentication (Sign In / Sign Up)
- ⚡ Background jobs using Inngest

---

## 🛠️ Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** PostgreSQL + Prisma ORM
- **Background Jobs:** Inngest
- **Deployment:** Render
- **Auth:** Clerk / Custom Auth (as implemented)

---

## 📂 Project Structure

AI-Career-Coach/
```text
├── app/ # Next.js App Router
├── prisma/ # Prisma schema & migrations
├── lib/ # Utilities & helpers
├── public/ # Static assets
├── middleware.ts
├── package.json
└── README.md
---

## ⚙️ Environment Variables

Create a `.env` file and add:

```env
DATABASE_URL=your_database_url
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key
NEXT_PUBLIC_APP_URL=https://ai-career-coach-qdmo.onrender.com

---
Running Locally
npm install
npm run dev


