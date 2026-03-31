import { Link } from 'react-router-dom';

export default function Home() {
  const skills = ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'REST APIs'];

  return (
    <div className="container-inner">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="max-w-3xl">
          <h1 className="hero-title">
            Hi, I'm <span className="text-purple-600 dark:text-purple-400">Ashok Kumar</span>
          </h1>
          <p className="hero-subtitle">
            MERN Stack Developer | Full-Stack Engineer
          </p>
          <p className="hero-description">
            Passionate about building scalable, user-friendly web applications. 
            Experienced in developing and deploying full-stack solutions with modern technologies. 
            Let's turn ideas into reality!
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link to="/projects" className="btn-primary">
              View My Work
            </Link>
            <button
              onClick={() => window.location.href = 'mailto:ashokdampana@gmail.com'}
              className="btn-secondary"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 border-t border-b border-gray-200 dark:border-neutral-700">
        <div className="grid-3 text-center">
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              2+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Projects Created
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              5+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Tech Stack
            </p>
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400">
              200+
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Hours of Learning
            </p>
          </div>
        </div>
      </section>

      {/* Skills Highlight */}
      <section className="py-16 md:py-20">
        <h2 className="section-title">Featured Skills</h2>
        <p className="section-description">
          Proficient in modern web technologies and frameworks
        </p>

        <div className="grid-3">
          {skills.map((skill) => (
            <div key={skill} className="card text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-neutral-900 dark:text-white text-lg">
                {skill}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                Production-ready expertise
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 card-lg card-accent mb-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title mb-6">Ready to Build Something Amazing?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Let's collaborate and create exceptional web experiences. 
            I'm available for freelance projects and full-time opportunities.
          </p>
          <button
            onClick={() => window.location.href = 'mailto:ashokdampana@gmail.com'}
            className="btn-primary"
          >
            Start a Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
