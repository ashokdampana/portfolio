import { Link } from 'react-router-dom';

export default function About() {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI)",
      institution: "SIR CRR College of Engineering",
      period: "2022 – 2025",
      cgpa: "7.18"
    },
    {
      degree: "Diploma in Mechanical Engineering",
      institution: "SIR CRR Polytechnic College",
      period: "2019 – 2022",
      cgpa: "8.5"
    },
    {
      degree: "SSC (10th Grade)",
      institution: "ZPHS Bhimadole",
      period: "2018 – 2019",
      cgpa: "8.8"
    }
  ];

  const experience = [
    {
      title: "Frontend Developer Intern",
      company: "Skilldunia",
      period: "2 Months",
      achievements: [
        "Developed and deployed 8+ responsive web pages using HTML, CSS, and JavaScript",
        "Engineered a full-stack e-commerce application using MERN stack",
        "Designed and built 10+ RESTful API endpoints with JWT authentication",
        "Implemented admin dashboard with CRUD operations and role-based access control",
        "Managed end-to-end deployment on Vercel and Render with CI/CD practices"
      ]
    }
  ];

  return (
    <div className="container-inner">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="section-title">About Me</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          I'm a passionate MERN Stack developer with hands-on experience building 
          full-stack applications. I love solving problems, writing clean code, 
          and creating seamless user experiences.
        </p>
      </section>

      {/* Overview */}
      <section className="py-12 md:py-16">
        <div className="grid-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                As a fresher MERN Stack developer, I've invested over 200 hours 
                learning modern web technologies and best practices. My foundation 
                spans across the entire stack—from responsive React frontends to 
                scalable Node.js backends and NoSQL databases.
              </p>
              <p>
                I'm proficient in building RESTful APIs, implementing JWT authentication, 
                managing state with Redux, and deploying applications with CI/CD practices. 
                Every project I work on is an opportunity to learn, grow, and contribute 
                meaningful code to the developer community.
              </p>
            </div>
          </div>

          <div className="card-lg">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6">
              Quick Facts
            </h3>
            <div className="space-y-4">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Current Location
                </p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  Eluru, Andhra Pradesh
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Languages
                </p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  English, Telugu
                </p>
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                  Interests
                </p>
                <p className="text-neutral-900 dark:text-white font-medium">
                  Open Source • Chess • DSA Practice
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <h2 className="section-title">Experience</h2>

        <div className="space-y-8">
          {experience.map((job, idx) => (
            <div key={idx} className="card-lg">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">
                    {job.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium">
                    {job.company}
                  </p>
                </div>
                <span className="badge-purple">{job.period}</span>
              </div>

              <ul className="space-y-2">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 dark:text-gray-300">
                    <span className="text-purple-600 dark:text-purple-400 shrink-0">
                      ✓
                    </span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <h2 className="section-title">Education</h2>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="card">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-purple-600 dark:text-purple-400">
                    CGPA: {edu.cgpa}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {edu.period}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <h2 className="section-title">Certifications</h2>

        <div className="card-lg bg-linear-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
            MERN Stack Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            NxtWave | 6-Month Course · 200+ Hours · May 2025 - January 2026
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Comprehensive training covering React.js, Node.js, Express.js, MongoDB, 
            authentication, and deployment practices.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you'd like to know more about my experience or discuss potential opportunities, 
            feel free to reach out!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/contact" className="btn-primary">
              Get In Touch
            </Link>
            <a href="mailto:ashokdampana@gmail.com" className="btn-secondary">
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}