# 🚀 Ashok Kumar - MERN Stack Developer Portfolio

A modern, responsive portfolio website built with **React 19**, **Tailwind CSS v4**, and **Vite**. Showcasing projects, skills, and professional experience in full-stack web development.

## 🎯 Features

✨ **Modern Design**
- Fully responsive (mobile, tablet, desktop)
- Dark mode support with system preference detection
- Smooth navigation and transitions
- Professional purple accent color scheme

🎨 **Professional Sections**
- Hero landing page with call-to-action
- About page with education and experience details
- Skills showcase with 8+ categories
- Project portfolio with live links and GitHub repos
- Functional contact form with validation
- Social media integration

⚡ **Technical Excellence**
- React Router v7 for seamless navigation
- Tailwind CSS v4 with custom utility classes
- Form validation with error handling
- Loading states and user feedback
- SEO optimized with meta tags
- Accessibility features (ARIA labels)

## 📋 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.0+ | UI library |
| **React Router** | 7.0+ | Client-side routing |
| **Tailwind CSS** | 4.0+ | Utility-first styling |
| **Vite** | 6.0+ | Build tool & dev server |
| **Node.js** | 16+ | Runtime environment |

## 🛠️ Installation

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager

### Steps

1. **Clone the repository** (or navigate to project folder)
```bash
cd c:\Vscoder\projects_mern\portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The portfolio will open at `http://localhost:5173`

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder.

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally before deployment.

### Lint Code
```bash
npm run lint
```
Runs ESLint to check code quality and style.

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Landing page with hero section
│   │   ├── About.jsx         # Background, education, experience
│   │   ├── Skill.jsx         # Skills showcase and competencies
│   │   ├── Project.jsx       # Project portfolio
│   │   └── Contact.jsx       # Contact form and information
│   ├── App.jsx               # Main app with routing
│   ├── index.css             # Global styles & Tailwind utilities
│   └── main.jsx              # React entry point
├── public/                   # Static assets
├── index.html               # HTML entry point with meta tags
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── eslint.config.js         # ESLint rules
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🎨 Customization

### Update Your Information
Edit the respective page files to add your own:

- **`Home.jsx`** - Hero section, name, title, tagline
- **`About.jsx`** - Education, experience, certifications
- **`Skill.jsx`** - Technical skills and competencies
- **`Project.jsx`** - Your project details and links
- **`Contact.jsx`** - Contact information

### Change Color Scheme
Edit `src/index.css` to modify the purple accent color:
```css
:root {
  --primary: #aa3bff;      /* Main purple */
  --primary-light: #c084fc; /* Lighter shade */
}
```

### Modify Tailwind Classes
Custom utility classes are defined in `src/index.css` under `@layer utilities`. Add or modify them there for reusable classes.

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Vercel auto-detects Vite and deploys
4. Your site goes live instantly!

### Deploy to Netlify
1. Connect your GitHub repo to [Netlify](https://netlify.com)
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

### Deploy to GitHub Pages
1. Add to `vite.config.js`:
```javascript
export default {
  base: '/portfolio/',
  // ... rest of config
}
```
2. Run: `npm run build`
3. Push `dist/` folder to `gh-pages` branch

## 📧 Contact & Links

- **Email:** ashokdampana@gmail.com
- **GitHub:** [github.com/ashokdampana](https://github.com/ashokdampana)
- **LinkedIn:** [linkedin.com/in/ashokdampana](https://linkedin.com/in/ashokdampana)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with [Vite](https://vitejs.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Icons and emojis for visual enhancement

---

**Made with ❤️ by Ashok Kumar | MERN Stack Developer**


