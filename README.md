# Client-Auth-Lite

A simple client-side authentication system built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **shadcn** library.


## 🚀 Features

- Login page with **Iranian mobile number** validation  
  - Valid formats: `09xxxxxxxxx`, `+989xxxxxxxxx`, `00989xxxxxxxxx`  
- Fetch random user data from `https://randomuser.me/api/`  
- Store user data in **localStorage**  
- Dashboard page showing **user info** (name, email, profile picture)  
- Logout button clears user session  
- Fully **responsive design**  
- Clean UI using **Tailwind CSS** and **shadcn components**  

---

## 📦 Installation & Development

1. Clone the repository:

   ```bash
   git clone <YOUR_GITHUB_REPO_URL>
   cd client-auth-lite

2. Install dependencies:

   npm install


3. Run the development server: 
   
   npm run dev

4. Open [http://localhost:3000](http://localhost:3000)with your browser to see the result  


5. Project Structure:

   client-auth-lite/
├─ app/
│  ├─ dashboard/
│  │  └─ page.tsx       # Dashboard page
│  ├─ login/
│  │  └─ page.tsx       # Login page
│  └─ layout.tsx        # Global layout
├─ components/          # UI components (Input, Button, etc.)
├─ lib/                 # Utility functions (validators)
├─ public/              # Static assets (images, favicon)
├─ styles/              # Global styles (Tailwind)
├─ package.json
└─ README.md

6. Technical Details:

  Framework: Next.js (App Router)

  Language: TypeScript

  Styling: Tailwind CSS

  Components: shadcn library (Button, Input, etc.)

  Client-side storage: localStorage

  API: https://randomuser.me/api/



## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---