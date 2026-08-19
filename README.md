# Tobgyel Global Expos 🇧🇹

> **Bhutan's Gateway to International Trade, Culture & Business Events**  
> *Connect • Collaborate • Grow*

An ultra-responsive, modern web platform for **Tobgyel Global Expos**, Bhutan's premier international trade exhibition and event organizer based in Phuentsholing & Thimphu.

---

## 🌟 Overview

Tobgyel Global Expos connects global businesses, investors, innovators, and regional communities through world-class trade exhibitions, B2B matchmaking, and cultural festivals.

This repository contains the complete Next.js 16 web application featuring:
- **Pixel-perfect design alignment** matching official brand guidelines and reference specifications.
- **Mobile-first responsive architecture** supporting all screen viewports (from `320px` mobile devices up to `1440px+` 4K displays).
- **Dedicated App Router pages** for seamless navigation and high SEO performance.

---

## 🚀 Key Features & Pages

- **🏠 Home (`/`)**: Main landing page featuring the Hero section with 3 action CTAs, 5 key highlight metrics, Upcoming Events preview, 4-column Guides Hub, Partners showcase, Latest News, and Contact Footer.
- **📅 Events (`/events`)**: Dedicated showcase for upcoming trade fairs such as the *BIN Trade Showcase 2027* and the *Himalayan Food & Culture Festival*.
- **🏢 Exhibit (`/exhibit`)**: Exhibitor registration portal with booth space options, B2B matchmaking benefits, and prospectus downloads.
- **✈️ Visit (`/visit`)**: Travel and visitor guide detailing flight connections, entry visa logistics, partner hotels, and local transportation.
- **🤝 Partners (`/partners`)**: Comprehensive showcase of Government Ministries, Municipal Thromdes, and Corporate Partners (TATA, DHI, Bank of Bhutan, Drukair, BOB).
- **📰 News (`/news`)**: Press releases, economic partnership announcements, and event schedule updates.
- **✉️ Contact (`/contact`)**: Contact details, interactive world map overlay with gold Bhutan location marker, and message form.

---

## 📱 Mobile Responsiveness Strategy

- **Sticky Navigation Drawer**: Touch-friendly hamburger menu overlay on screens `< 1024px`.
- **Fluid Grid Adaptation**: 
  - Hero CTAs & Stat bars switch from horizontal rows to 1-2 column stacks on mobile.
  - Events cards adapt from `grid-cols-2` to `grid-cols-1`.
  - Info Hub 4-column layout adapts to `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
  - Partner seals & corporate logos wrap dynamically across mobile devices.
  - Contact details and form stack into single-column layout on smaller viewports.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Language**: TypeScript

---

## 📁 Project Structure

```text
tobgyel-global-expos/
├── app/
│   ├── components/       # Reusable UI components
│   │   ├── Footer.tsx          # Contact info, Map overlay & message form
│   │   ├── Header.tsx          # Sticky navigation & mobile drawer menu
│   │   ├── Hero.tsx            # Hero banner & highlight metrics bar
│   │   ├── InfoHub.tsx         # 4-column participant & guide hub
│   │   ├── NewsUpdates.tsx     # News cards grid
│   │   ├── Partners.tsx        # Government & corporate partner logos
│   │   └── UpcomingEvents.tsx  # Event cards & schedules
│   ├── contact/          # /contact page route
│   ├── events/           # /events page route
│   ├── exhibit/          # /exhibit page route
│   ├── news/             # /news page route
│   ├── partners/         # /partners page route
│   ├── visit/            # /visit page route
│   ├── globals.css       # Global styles & brand CSS variables
│   ├── layout.tsx        # Root HTML layout wrapper
│   └── page.tsx          # Home page (/)
├── assets/               # Brand raw assets (logo.jpeg)
├── public/               # Public static assets & images
└── README.md             # Project documentation
```

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/guruwangchuk7/Tobgyel-GlobalExpos.git
   cd Tobgyel-GlobalExpos
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Production Build

To build the project for production:

```bash
npm run build
```

To run the built production bundle:

```bash
npm run start
```

---

## 📜 License & Copyright

© 2024–2026 **Tobgyel Global Expos**. All Rights Reserved.  
P.O. Box 123, Phuentsholing, Chukha, Bhutan.

