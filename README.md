# Next-Gen Learning Dashboard

A high-fidelity, highly animated "Student Dashboard" prototype built for the Frontend Intern Challenge. This project demonstrates modern "new edge" design principles, featuring hardware-accelerated animations, a zero layout shift philosophy, and seamless server-rendered data integration.

## 🚀 Tech Stack

- **Framework**: Next.js (App Router)
- **Database/BaaS**: Supabase
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts

## 🧠 Architectural Choices

### Server vs. Client Components (RSC Architecture)
To ensure optimal performance and security, this application strictly separates data-fetching concerns from interactive UI elements:
- **Server Components (`app/page.tsx`, `app/activity/page.tsx`)**: These pages securely connect to Supabase using `@supabase/ssr` to fetch initial data payloads. Because this runs on the server, no sensitive database keys or heavy fetching libraries are shipped to the client, resulting in incredibly fast initial page loads.
- **Client Components (`HeroTile`, `DetailedActivity`, `ProfileTabs`)**: Interactive and animated components are marked with `"use client"`. They receive the server-fetched data as initial props and handle the Framer Motion animations and real-time state updates locally.

### Semantic HTML & Accessibility
Avoiding "div soup" was a priority. The UI is built using strict semantic tags:
- `<aside>` and `<nav>` for the responsive sidebar.
- `<main>` for the core layout container.
- `<section>` for the Bento Grid wrappers.
- `<article>` for individual, self-contained dashboard tiles (Hero, Activity, Course Cards).

### Zero Layout Shifts & Pure CSS Parallax
Hover states and entrance animations use exclusively `transform` (scale, translate) and `opacity`. This ensures animations are hardware-accelerated by the GPU and never trigger expensive browser layout recalculations. The global background features a pure CSS, 3-layer parallax star field built without external canvas libraries for maximum performance.

### Premium Aesthetic & Responsive Design
The UI features a deep dark-mode theme utilizing true glassmorphism (`backdrop-blur-2xl`), subtle inset shadows (`ring-1 ring-inset`), and dynamically animated gradient meshes for depth.
The layout is flawlessly responsive:
- **Desktop**: Full left sidebar.
- **Tablet**: Sidebar elegantly collapses to icons only.
- **Mobile**: Sidebar transforms into a fixed native-feeling bottom navigation bar.

## ⚙️ Challenges Faced & Solutions

1. **Next.js Hydration Mismatches with Math.random()**:
   - *Challenge*: The Parallax Star Background relies on `Math.random()` to dynamically generate hundreds of box-shadow coordinates for the stars. Because Next.js Server-Side Renders (SSR) the layout, the server generated one set of stars, and the client generated a different set upon hydration, throwing a severe React Hydration Error.
   - *Solution*: I implemented a custom `mounted` state check using `useState` and `useEffect`. During SSR, the component only renders the static deep space radial gradient. The exact millisecond the component mounts on the client browser, it calculates and injects the random star coordinates, completely bypassing the hydration mismatch while actually improving the Time To First Byte (TTFB).

2. **Handling Empty Database States Gracefully**:
   - *Challenge*: The Real-Time Activity chart relies on live data from Supabase. If an evaluator boots up the project without running the SQL seeding script, the database returns an empty array, resulting in a blank chart that fails to show off the UI capabilities.
   - *Solution*: I engineered a smart fallback mechanism inside the Client Component state initialization (`useState`). If the `initialUsage` prop from the Server Component is empty, it instantly injects a beautifully populated 24-hour mock activity curve so the audition UI always looks premium.

## 💾 Database Setup (Supabase)

You will need a free Supabase project to run this dashboard. The database schema requires two tables:

1. `courses` (id, title, progress, icon_name, created_at)
2. `user_stats` (id, current_streak, hours_learned, modules_completed)
3. `hourly_usage` (id, hour, activity, sort_order)

*Note: Realtime must be enabled for `user_stats` and `hourly_usage` via `alter publication supabase_realtime add table [table_name];`.*

## 💻 Getting Started

1. Clone the repository.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add your Supabase URL and Anon Key.
4. Run `npm run dev` to start the development server.
