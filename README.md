# Consolidated Zone - Futuristic IT Solutions Website

A modern, dark-themed website for IT services and solutions built with Next.js and Tailwind CSS. The design features futuristic elements including neon accents, glassmorphism, and subtle animations.

![Consolidated Zone Screenshot](public/screenshot.png)

## Features

- 🌙 Dark futuristic theme with neon accents and glassmorphism
- ✨ Responsive design that works on all devices
- 🚀 Fast performance with Next.js
- 💼 Complete business sections (Hero, About, Services, Projects, Partners, Contact)
- 🎨 Modern UI components with hover effects and animations
- 🔍 SEO optimized

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Animation**: CSS transitions and Framer Motion
- **State Management**: React useState/useEffect hooks
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/consolidated-zone.git
   cd consolidated-zone
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
consolidated-zone/
├── public/                  # Static assets
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── layout.tsx       # Main layout component
│   │   ├── page.tsx         # Home page component
│   │   └── globals.css      # Global styles
│   └── components/          # Reusable components
│       ├── Header.tsx       # Website header
│       ├── Footer.tsx       # Website footer
│       ├── Hero.tsx         # Hero section 
│       ├── About.tsx        # About section
│       ├── Services.tsx     # Services section
│       ├── Projects.tsx     # Projects section
│       ├── Partners.tsx     # Partners section
│       └── Contact.tsx      # Contact section
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Customization

- **Colors**: Edit the color variables in `src/app/globals.css` to change the theme colors.
- **Content**: Update the content in the component files to match your business information.
- **Images**: Replace the placeholder images in the `public` directory with your own images.

## Deployment

The easiest way to deploy this website is using [Vercel](https://vercel.com):

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and set up the build configuration.
4. Your site will be deployed and available at a Vercel URL.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React](https://reactjs.org/)
