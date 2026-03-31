import { Link } from 'react-router-dom';

export default function Project() {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "A production-ready, scalable full-stack e-commerce platform with JWT authentication and role-based access control.",
      image: "🛍️",
      tech: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "REST API", "JWT", "bcrypt"],
      features: [
        "Support for 5+ product categories",
        "Cart management and order tracking",
        "Secure user authentication with JWT",
        "Admin dashboard with CRUD operations",
        "Role-based access control",
        "Fully responsive design"
      ],
      links: {
        live: "https://ecommerce-3vlgo9pwt-ashokdampanas-projects.vercel.app",
        github: "https://github.com/ashokdampana/ecommerce"
      },
      highlights: [
        "12+ REST API endpoints",
        "Unit tests with Jest & Supertest",
        "CI/CD deployment with Git",
        "Frontend on Vercel, Backend on Render"
      ]
    },
    {
      title: "Real-Time Chat Application",
      description: "A scalable real-time chat application with WebSockets, JWT authentication, and persistent chat history.",
      image: "💬",
      tech: ["Node.js", "Express.js", "MongoDB", "Socket.io", "React.js", "JWT", "WebSockets"],
      features: [
        "Real-time bidirectional messaging",
        "20+ concurrent users support",
        "Typing indicators",
        "Online/offline user status",
        "Complete chat history persistence",
        "JWT-based authentication"
      ],
      links: {
        github: "https://github.com/ashokdampana/online_chat"
      },
      highlights: [
        "Socket.io for real-time updates",
        "React Hooks & Context API",
        "Fully responsive interface",
        "Complete chat history in MongoDB"
      ]
    }
  ];

  return (
    <div className="container-inner">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="section-title">My Projects</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          A collection of full-stack projects showcasing my expertise in building 
          scalable, feature-rich applications with modern technologies.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-16 space-y-12">
        {projects.map((project, idx) => (
          <div key={idx} className="card-lg">
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div className="md:col-span-2">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-5xl shrink-0">{project.image}</span>
                  <div>
                    <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold text-neutral-900 dark:text-white mb-3">
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-purple-600 dark:text-purple-400 shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Live
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                  Tech Stack
                </h3>
                <div className="space-y-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <div key={i} className="badge-purple">
                      {tech}
                    </div>
                  ))}
                </div>

                <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                  Highlights
                </h3>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-gray-700 dark:text-gray-300 text-sm"
                    >
                      <span className="text-purple-600 dark:text-purple-400">
                        ⭐
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
          Project Statistics
        </h2>

        <div className="grid-3 gap-6">
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              2
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Full-Stack Projects
            </p>
          </div>
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              20K+
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Lines of Code
            </p>
          </div>
          <div className="card text-center">
            <p className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              100%
            </p>
            <p className="text-gray-600 dark:text-gray-400 font-medium">
              Deployed & Live
            </p>
          </div>
        </div>
      </section>

      {/* Skills Demonstrated */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8">
          Skills Demonstrated
        </h2>

        <div className="grid-2 lg:grid-cols-3 gap-6">
          {[
            "Full-Stack Development",
            "REST API Design",
            "JWT Authentication",
            "Real-Time Communication",
            "Database Design",
            "State Management",
            "Responsive Design",
            "Testing & QA",
            "DevOps & Deployment"
          ].map((skill, idx) => (
            <div key={idx} className="skillitem flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-600 dark:bg-purple-400"></span>
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <div className="card-lg card-accent text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Interested in Collaborating?
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I'm open to new projects, freelance opportunities, and full-time positions. 
            Let's create something amazing together!
          </p>
          <Link to="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}