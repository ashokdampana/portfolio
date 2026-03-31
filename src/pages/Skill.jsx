export default function Skill() {
  const skillCategories = [
    {
      name: "Frontend",
      icon: "🎨",
      skills: [
        "React.js",
        "React Hooks",
        "Redux",
        "Context API",
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "Responsive Design"
      ]
    },
    {
      name: "Backend",
      icon: "⚙️",
      skills: [
        "Node.js",
        "Express.js",
        "REST API Design",
        "MVC Architecture",
        "Socket.io",
        "WebSockets",
        "Middleware",
        "Scalable Architecture"
      ]
    },
    {
      name: "Database",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "NoSQL Design",
        "Schema Design",
        "Query Optimization"
      ]
    },
    {
      name: "Authentication & Security",
      icon: "🔐",
      skills: [
        "JWT Authentication",
        "bcrypt",
        "Role-Based Access Control",
        "Cookie-based Sessions",
        "Environment Variables"
      ]
    },
    {
      name: "Testing",
      icon: "✅",
      skills: [
        "Jest",
        "Supertest",
        "Unit Testing",
        "API Testing",
        "Postman"
      ]
    },
    {
      name: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        "Git",
        "GitHub",
        "Code Review",
        "Vercel",
        "Render",
        "CI/CD",
        "npm"
      ]
    },
    {
      name: "Familiar Technologies",
      icon: "📚",
      skills: [
        "TypeScript",
        "Redis",
        "TanStack Query",
        "Cloudinary",
        "Docker (Basics)",
        "Next.js"
      ]
    },
    {
      name: "Soft Skills",
      icon: "🤝",
      skills: [
        "Problem Solving",
        "Communication",
        "Time Management",
        "Agile / Scrum",
        "Cross-functional Collaboration"
      ]
    }
  ];

  const proficiencies = [
    {
      category: "Full-Stack Development",
      level: "Advanced",
      percentage: 85
    },
    {
      category: "React.js & Frontend",
      level: "Advanced",
      percentage: 85
    },
    {
      category: "Node.js & Backend",
      level: "Advanced",
      percentage: 80
    },
    {
      category: "MongoDB & Databases",
      level: "Intermediate",
      percentage: 75
    },
    {
      category: "DevOps & Deployment",
      level: "Intermediate",
      percentage: 70
    },
    {
      category: "Testing & Quality",
      level: "Intermediate",
      percentage: 75
    }
  ];

  return (
    <div className="container-inner">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="section-title">Skills & Expertise</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          A comprehensive overview of my technical skills, tools, and proficiencies 
          across the MERN stack and web development ecosystem.
        </p>
      </section>

      {/* Proficiency Levels */}
      <section className="py-12 md:py-16 border-b border-gray-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
          Core Proficiencies
        </h2>

        <div className="space-y-6">
          {proficiencies.map((prof, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-neutral-900 dark:text-white">
                  {prof.category}
                </h3>
                <span className="badge-purple">{prof.level}</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-neutral-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-linear-to-r from-purple-500 to-purple-600 h-full rounded-full transition-all duration-500"
                  style={{ width: `${prof.percentage}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {prof.percentage}%
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
          Technical Skills
        </h2>

        <div className="grid-2 gap-6 lg:grid-cols-3">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="card-lg">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-purple-400"></span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievement Stats */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <div className="grid-3 text-center">
          <div className="card">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              12+
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              API Endpoints Built
            </p>
          </div>
          <div className="card">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              8+
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Components Created
            </p>
          </div>
          <div className="card">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              20+
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Concurrent Users Supported
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <div className="card-lg card-accent text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Want to Work on Something Together?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm always interested in new projects and learning opportunities. 
            Let's build something amazing!
          </p>
          <a href="mailto:ashokdampana@gmail.com" className="btn-primary">
            Send Me an Email
          </a>
        </div>
      </section>
    </div>
  );
}