# KISS - The Ultimate Stealth Date Game 💦

A landing page for the most degen stealth game where two players hunt each other in a dark park with water pistols.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - Component-based UI library
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Actions** - CI/CD for automated deployment

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── StarsBackground.jsx  # Animated starfield background
│   │   ├── Hero.jsx             # Main hero section with CTA
│   │   ├── About.jsx            # "WTF is this?" section
│   │   ├── Features.jsx         # Game features grid
│   │   ├── HowToPlay.jsx        # Step-by-step instructions
│   │   ├── CTA.jsx              # Final call-to-action
│   │   └── Footer.jsx           # Footer with credits
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles and animations
├── .github/
│   └── workflows/
│       └── deploy.yml           # GitHub Actions workflow
├── vite.config.js               # Vite configuration
├── tailwind.config.js           # Tailwind configuration
└── postcss.config.js            # PostCSS configuration
```

## Development

### Prerequisites

- Node.js 20 or higher
- npm

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Deployment to GitHub Pages

The project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Instructions

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - Every push to the `main` branch triggers the deployment workflow
   - The workflow builds the app and deploys to GitHub Pages
   - Your site will be available at: `https://<username>.github.io/landing_page_for_game/`

3. **Manual Deployment**:
   - Go to the "Actions" tab in your repository
   - Select the "Deploy to GitHub Pages" workflow
   - Click "Run workflow" to manually trigger a deployment

### Workflow Details

The GitHub Actions workflow (`.github/workflows/deploy.yml`) performs the following:

1. Checks out the code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Builds the project with `npm run build`
5. Uploads the `dist/` folder as a Pages artifact
6. Deploys to GitHub Pages

## Configuration

### Base Path

The `base` path in `vite.config.js` is set to `/landing_page_for_game/` to match the repository name for GitHub Pages deployment. If you rename your repository, update this value:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

## Features

- ✨ Modern SPA architecture with React
- 🎨 Beautiful gradient animations and effects
- ⭐ Animated starfield background
- 📱 Fully responsive design
- 🚀 Fast build and hot reload with Vite
- 🤖 Automated CI/CD with GitHub Actions
- 🎯 Component-based architecture for easy maintenance

## Components

Each section of the original HTML has been split into a separate React component:

- **StarsBackground**: Generates and animates the starfield
- **Hero**: Main landing section with logo, tagline, and primary CTA
- **About**: Explains what the game is about
- **Features**: Showcases game features in a grid layout
- **HowToPlay**: Step-by-step guide for playing the game
- **CTA**: Final call-to-action to encourage downloads/signups
- **Footer**: Copyright and legal information

## License

Built with 💖 by degens, for degens
