# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a content-driven architecture using Contentlayer for managing projects, experiences, education, and research content.

🔗 **Live Demo**: [portfolio-dusky-five-98.vercel.app](https://portfolio-dusky-five-98.vercel.app/)

## Features

### Core Functionality
- **Dynamic Content Management**: MDX-based content system for projects, experiences, education, and research
- **Responsive Design**: Fully responsive layout optimized for all device sizes
- **Modern UI/UX**: Clean, professional interface with smooth animations using Framer Motion
- **SEO Optimized**: Built-in SEO support with next-seo for better search engine visibility
- **Type-Safe**: Full TypeScript implementation for robust code quality

### Pages & Sections
- **Home**: Hero section with introduction and featured projects
- **Projects**: Showcase of work with detailed project cards including tech stack, impact metrics, and live demos
- **Journey**: Interactive timeline displaying education, experience, and research milestones
- **Resume**: Formatted resume view with downloadable option
- **About**: Personal information and professional background
- **Contact**: Social links and contact information

### Technical Features
- **Content Layer Integration**: Structured content management with automatic type generation
- **GitHub Activity**: Display of GitHub contributions and activity
- **Tech Stack Visualization**: Visual representation of technical skills
- **Dark Mode Ready**: Prepared for theme switching implementation
- **Markdown Support**: Full MDX support with remark and rehype plugins for rich content formatting

## Tech Stack

### Frontend Framework
- **Next.js 14**: React framework with App Router for server-side rendering and static generation
- **React 18**: Latest React features including concurrent rendering
- **TypeScript**: Type-safe development experience

### Styling & UI
- **Tailwind CSS 4**: Utility-first CSS framework with custom configuration
- **Tailwind Typography**: Beautiful typographic defaults for prose content
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Modern icon library
- **React Icons**: Additional icon support
- **Class Variance Authority**: Type-safe component variants

### Content Management
- **Contentlayer2**: Type-safe content management with automatic type generation
- **next-contentlayer2**: Next.js integration for Contentlayer
- **MDX**: Markdown with JSX support for rich content

### Markdown Processing
- **remark-gfm**: GitHub Flavored Markdown support
- **rehype-slug**: Automatic heading ID generation
- **rehype-autolink-headings**: Automatic anchor links for headings

### Development Tools
- **ESLint**: Code linting with Next.js configuration
- **PostCSS**: CSS transformation
- **pnpm**: Fast, disk space efficient package manager
- **Concurrently**: Run multiple commands simultaneously

### Deployment
- **Vercel**: Automatic deployments with preview environments
- **Node.js**: >=18.18.0 required

## Project Structure

```
portfolio/
├── content/              # MDX content files
│   ├── education/        # Education entries
│   ├── experience/       # Work experience entries
│   ├── projects/         # Project entries with details
│   └── research/         # Research work entries
├── public/               # Static assets (images, files)
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── journey/      # Journey timeline page
│   │   ├── projects/     # Projects showcase page
│   │   ├── resume/       # Resume page
│   │   ├── layout.tsx    # Root layout with providers
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   │   ├── Journey/      # Journey timeline components
│   │   ├── common/       # Shared UI components
│   │   ├── github/       # GitHub activity components
│   │   ├── profile/      # Profile-related components
│   │   ├── providers/    # Context providers
│   │   ├── resume/       # Resume components
│   │   ├── Hero.tsx      # Hero section component
│   │   ├── ProfileHeader.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectGrid.tsx
│   │   ├── SocialRow.tsx
│   │   ├── StackCloud.tsx
│   │   ├── TechIcons.tsx
│   │   └── mdx-content.tsx
│   ├── data/             # Static data files
│   │   ├── journeyData.ts
│   │   └── profile.ts
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript type definitions
├── contentlayer.config.ts # Contentlayer configuration
├── next.config.js        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vercel.json           # Vercel deployment configuration
└── package.json          # Project dependencies
```

## Content Schema

### Project
- `title`: Project name
- `slug`: URL-friendly identifier
- `timeframe`: Project duration
- `role`: Your role in the project
- `team`: Team composition (optional)
- `stack`: Array of technologies used
- `summary`: Brief project description
- `impact`: Array of impact metrics/achievements
- `cover`: Cover image path
- `order`: Display order (optional)
- `url`: Live project URL (optional)

### Experience
- `company`: Company name
- `role`: Job title
- `location`: Work location
- `start`: Start date
- `end`: End date
- `stack`: Technologies used
- `order`: Display order (optional)

### Education
- `school`: Institution name
- `degree`: Degree/program name
- `location`: School location
- `graduation`: Graduation date
- `order`: Display order (optional)

### Research
- `org`: Research organization
- `role`: Research role
- `location`: Research location
- `start`: Start date
- `end`: End date
- `project`: Research project name
- `stack`: Technologies/tools used
- `order`: Display order (optional)

## Getting Started

### Prerequisites
- Node.js >= 18.18.0
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/SaiVinay023/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Development Scripts

```bash
# Start development server
pnpm dev

# Development server with polling (useful for WSL/Docker)
pnpm dev:poll

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Run Contentlayer in development mode
pnpm cl:dev

# Build Contentlayer
pnpm cl:build
```

## Content Management

### Adding New Content

1. **Add a Project**: Create a new `.mdx` file in `content/projects/`:
```mdx
---
title: "Your Project Title"
slug: "project-slug"
timeframe: "Jan 2024 - Present"
role: "Full-Stack Developer"
stack: ["Next.js", "TypeScript", "PostgreSQL"]
summary: "Brief project description"
impact: ["Impact metric 1", "Impact metric 2"]
cover: "/images/project-cover.jpg"
order: 1
url: "https://project-url.com"
---

Detailed project description in MDX format...
```

2. **Add Experience**: Create a new `.mdx` file in `content/experience/`
3. **Add Education**: Create a new `.mdx` file in `content/education/`
4. **Add Research**: Create a new `.mdx` file in `content/research/`

### Adding Images
Place images in the `public/` directory and reference them using absolute paths (e.g., `/images/photo.jpg`).

## Customization

### Personal Information
Update your personal information in:
- `src/data/profile.ts`: Bio, skills, contact information
- `src/data/journeyData.ts`: Timeline data

### Styling
- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.ts`
- Theme customization: Modify CSS variables in `globals.css`

### SEO
Update metadata in `src/app/layout.tsx` for site-wide SEO settings.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure build settings
4. Deploy!

### Build Configuration
The project uses Contentlayer for content processing. The build command automatically runs:
```bash
contentlayer2 build && next build
```

### Environment Variables
No environment variables are required for basic functionality. Add any API keys or secrets through your deployment platform's environment settings.

## Performance

- **Lighthouse Score**: Optimized for performance, accessibility, and SEO
- **Static Generation**: Pages are statically generated at build time
- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Code Splitting**: Automatic code splitting for optimal bundle sizes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add some improvement'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available for personal use. Please provide attribution if you use significant portions of the code.

## Contact

- **GitHub**: [@SaiVinay023](https://github.com/SaiVinay023)
- **Website**: [Visit Fulfio](https://www.fulfio.eu/)

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Content powered by [Contentlayer](https://contentlayer.dev/)
- Icons from [Lucide](https://lucide.dev/) and [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

---

⭐ Star this repo if you found it helpful!
