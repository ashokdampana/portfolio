# Portfolio Website with Tailwind CSS v4

Your MERN Stack portfolio website is now fully built with **Tailwind CSS v4** and is ready to run!

## 🎨 What's Been Created

### **Core Files**

1. **[src/index.css](src/index.css)** - Global Tailwind configuration with custom utility classes
   - Tailwind @import and default configuration
   - Custom reusable utility classes for all components
   - CSS variables for light/dark mode support
   - Pre-configured color scheme (purple accent)

2. **[src/App.jsx](src/App.jsx)** - Main application with routing
   - React Router setup for all pages
   - Navigation bar with active link detection
   - Professional footer with social links
   - Responsive mobile menu structure

### **Page Components**

3. **[src/pages/Home.jsx](src/pages/Home.jsx)** - Landing page
   - Hero section with call-to-action buttons
   - Statistics cards (2+ Projects, 5+ Skills, 200+ Hours)
   - Featured skills highlight
   - Conversion-focused CTA section

4. **[src/pages/About.jsx](src/pages/About.jsx)** - Professional background
   - Journey and overview section
   - Internship experience details
   - Education timeline with CGPA
   - Certifications section
   - Quick facts sidebar

5. **[src/pages/Skill.jsx](src/pages/Skill.jsx)** - Technical expertise
   - Core proficiency levels with progress bars
   - 8 skill categories with organized lists
   - Achievement statistics
   - Interactive skill visualization

6. **[src/pages/Project.jsx](src/pages/Project.jsx)** - Portfolio showcase
   - 2 featured projects with detailed descriptions
   - Feature lists with checkmarks
   - Technology stack badges
   - Live demo and GitHub links
   - Skills demonstrated section

7. **[src/pages/Contact.jsx](src/pages/Contact.jsx)** - Contact information
   - Functional contact form with email integration
   - Multiple contact methods (email, phone, location)
   - Social media connection cards
   - Response time expectations
   - Availability status

## 🎯 Tailwind CSS v4 Features

### **Custom Utility Classes** (from index.css)

To keep JSX clean, long Tailwind classes are abstracted:

```css
/* Navigation */
.nav-container      /* Fixed header with styling */
.nav-inner         /* Main nav layout */
.nav-link          /* Nav items */
.nav-link-active   /* Active nav state */

/* Containers */
.container-main    /* Main content area */
.container-inner   /* Max-width wrapper */

/* Hero Section */
.hero-section      /* Hero container */
.hero-title        /* Main heading */
.hero-subtitle     /* Subheading */
.hero-description  /* Description text */

/* Buttons */
.btn-primary       /* Primary action button */
.btn-secondary     /* Secondary action button */
.btn-ghost         /* Outline button */

/* Cards */
.card              /* Standard card container */
.card-lg           /* Large card container */
.card-accent       /* Accent/highlight card */

/* Grid Layouts */
.grid-2            /* 2-column responsive grid */
.grid-3            /* 3-column responsive grid */

/* Typography */
.section-title     /* Section heading */
.section-description /* Section description */

/* Badges */
.badge             /* Gray badge */
.badge-purple      /* Purple accent badge */

/* Forms */
.form-input        /* Input field styling */
.form-label        /* Label styling */

/* Social */
.social-button     /* Social media button */
.footer            /* Footer container */
.footer-container  /* Footer inner wrapper */
```

## 📦 Project Structure

```
portfolio/
├── src/
│   ├── App.jsx                 # Main app with router
│   ├── index.css               # Tailwind config + utilities
│   ├── main.jsx                # React entry point
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── About.jsx           # About page
│   │   ├── Skill.jsx           # Skills page
│   │   ├── Project.jsx         # Projects page
│   │   └── Contact.jsx         # Contact page
│   └── assets/
├── public/
├── package.json                # Dependencies (Tailwind v4 included)
├── vite.config.js              # Vite + @tailwindcss/vite
├── eslint.config.js
└── index.html                  # HTML entry point
```

## 🚀 How to Run

### **Step 1: Start Development Server**

Open a terminal in your project directory and run:

```bash
npm run dev
```

The server will start at `http://localhost:5173`

### **Step 2: If PowerShell Execution Policy Blocks npm**

If you see a PowerShell error, change the execution policy:

1. Open PowerShell as Administrator
2. Run this command:
   ```powershell
   Set-ExecutionPolicy RemoteSigned
   ```
3. Type `Y` to confirm
4. Then try `npm run dev` again

Alternative: Use Command Prompt (cmd) instead of PowerShell:
```cmd
cd c:\Vscoder\projects_mern\portfolio
npm run dev
```

## 🎨 Styling System

### **Responsive Breakpoints**
- Mobile-first design
- `md:` for tablet screens (768px+)
- `lg:` for desktop screens (1024px+)

### **Dark Mode**
- Automatic dark mode support via `dark:` prefix
- Uses system preference with `prefers-color-scheme`
- Auto-switches between light and dark CSS variables

### **Color Scheme**
- **Primary Color**: Purple (#aa3bff light, #c084fc dark)
- **Text**: Gray with high contrast for accessibility
- **Backgrounds**: White (light), Neutral-900 (dark)
- **Borders**: Subtle gray with dark mode support

## 📱 Component Examples

### **Using Custom Classes**

Instead of writing:
```jsx
<div className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-neutral-900...">
```

You can use the utility class:
```jsx
<nav className="nav-container">
```

### **Responsive Grid**

```jsx
<div className="grid-3">  {/* 3 cols on desktop, 2 on tablet, 1 on mobile */}
  {items.map(item => <div key={item.id}>{item}</div>)}
</div>
```

### **Cards**

```jsx
<div className="card">Small card content</div>
<div className="card-lg">Large card content</div>
<div className="card-lg card-accent">Purple highlighted card</div>
```

### **Buttons**

```jsx
<button className="btn-primary">Primary Action</button>
<button className="btn-secondary">Secondary Action</button>
<a href="#" className="btn-ghost">Ghost Button</a>
```

## ✨ Features Implemented

✅ **Responsive Design** - Works on mobile, tablet, desktop
✅ **Dark Mode Support** - Automatic theme switching
✅ **Custom Utility Classes** - Clean, reusable styling
✅ **React Router** - Smooth page navigation
✅ **SEO Friendly** - Semantic HTML structure
✅ **Tailwind v4** - Latest Tailwind CSS features
✅ **Fast Performance** - Vite + Tailwind optimization
✅ **Professional Styling** - Purple accent color scheme
✅ **Form Handling** - Working contact form with email integration
✅ **Social Integration** - Links to GitHub, LinkedIn, Email

## 🔧 Build & Deployment

### **Build for Production**

```bash
npm run build
```

This creates a `dist/` folder with optimized files.

### **Preview Production Build**

```bash
npm run preview
```

### **Deploy**

- **Frontend**: Deploy `dist/` folder to Vercel, Netlify, or GitHub Pages
- **Already Configured**: 
  - Vite for optimal bundle size
  - Tailwind CSS purging unused styles
  - Source maps for debugging

## 📝 Notes

- All CSS is now generated from Tailwind utility classes
- No separate CSS files needed (except index.css for utilities)
- Customization is done through Tailwind config or index.css utilities
- Typography, colors, and spacing follow Tailwind standards
- The portfolio is fully responsive and accessible

## 🎓 Your Resume Converted

Your resume information is now presented as:
- **Home**: Overview and quick stats
- **About**: Background, education, experience
- **Skills**: Technical skills with proficiency levels
- **Projects**: Detailed project showcase with links
- **Contact**: Multiple ways to reach you

---

**Ready to show the world your skills! 🚀**

Happy coding! If you need any modifications, just let me know.
