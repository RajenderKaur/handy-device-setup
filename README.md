# HandyDeviceSetup

A modern, responsive web application for a home entertainment device setup and installation service. This project is a professional business website built with React and modern web technologies, featuring smooth animations, beautiful UI components, and comprehensive service information.

## 🎯 About the Project

HandyDeviceSetup is a full-featured website designed for a home entertainment setup service company. The platform provides information about various services including TV mounting, home theater installation, streaming device setup, and smart home integration. This project demonstrates modern web development practices with a focus on user experience, responsive design, and clean code architecture.

## ✨ Features

- **Modern UI/UX Design**: Beautiful, responsive interface built with Tailwind CSS and shadcn/ui components
- **Smooth Animations**: Page transitions and scroll animations powered by Framer Motion
- **Multi-page Navigation**: 
  - Home page with hero section, services, features, testimonials, and blog preview
  - Services page with detailed service information
  - About page with company information
  - Blog page with articles and guides
  - Contact page with contact form
  - Terms and Privacy pages
  - PrimeVideo TV setup guide
- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized build with Vite for lightning-fast load times
- **TypeScript Support**: Type-safe codebase for better development experience
- **SEO Friendly**: Proper routing and meta tags for better search engine optimization

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Language**: TypeScript 5.5.3
- **Styling**: Tailwind CSS 3.4.11
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM 6.26.2
- **Animations**: Framer Motion 12.12.1
- **Icons**: React Icons 5.5.0
- **Form Handling**: React Hook Form 7.56.4 with Zod validation
- **State Management**: TanStack Query 5.56.2

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js**: Version 18.x or higher ([Download Node.js](https://nodejs.org/))
- **npm**: Comes bundled with Node.js (or use yarn/pnpm as an alternative)

## 🚀 How to Run the Project

### Step 1: Install Dependencies

First, navigate to the project directory and install all required dependencies:

```bash
npm install
```

### Step 2: Start the Development Server

Run the development server with hot-reload:

```bash
npm run dev
```

The application will be available at `http://localhost:8080`

### Step 3: Build for Production (Optional)

To create a production build:

```bash
npm run build
```

This will create an optimized production build in the `dist` directory.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
handy-device-setup/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── web.config
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ui/            # shadcn/ui components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── ServiceCard.jsx
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Blog.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── constants/         # Constants and data
│   │   └── index.js
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── utils/             # Helper utilities
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── dist/                  # Production build output
├── package.json           # Project dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Key Components

- **Navbar**: Responsive navigation bar with mobile menu
- **Hero**: Eye-catching hero section with call-to-action
- **ServiceCard**: Reusable card component for displaying services
- **FeatureCard**: Component for showcasing company features
- **TestimonialCard**: Customer testimonial display component
- **BlogPostCard**: Blog post preview card
- **ContactForm**: Contact form with validation
- **CallButton**: Floating call button for easy contact
- **Footer**: Comprehensive footer with links and information

## 🌐 Pages

- **Home** (`/`): Landing page with all main sections
- **About** (`/about`): Company information and mission
- **Services** (`/services`): Detailed service offerings
- **Blog** (`/blog`): Blog posts and articles
- **Contact** (`/contact`): Contact form and information
- **Terms** (`/terms`): Terms of service
- **Privacy** (`/privacy`): Privacy policy
- **PrimeVideo TV Setup** (`/primevideocomtv`): Setup guide for PrimeVideo TV

## 🔧 Project Configuration

The project uses:
- **Vite** as the build tool (configured in `vite.config.ts`)
- **Tailwind CSS** for styling (configured in `tailwind.config.ts`)
- **TypeScript** for type safety (configured in `tsconfig.json`)

The development server runs on port 8080 by default.
