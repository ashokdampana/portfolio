import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setErrors({});
    setIsLoading(true);

    // Simulate sending delay
    setTimeout(() => {
      // Construct mailto link
      const mailtoLink = `mailto:ashokdampana@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setIsLoading(false);

      // Show success message
      setSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 600);
  };

  const contactMethods = [
    {
      title: "Email",
      icon: "✉️",
      value: "ashokdampana@gmail.com",
      link: "mailto:ashokdampana@gmail.com"
    },
    {
      title: "Phone",
      icon: "📱",
      value: "+91 7601038025",
      link: "tel:+917601038025"
    },
    {
      title: "Location",
      icon: "📍",
      value: "Eluru, Andhra Pradesh"
    },
    {
      title: "LinkedIn",
      icon: "🔗",
      value: "linkedin.com/in/ashok-kumar-d-12b80339a",
      link: "https://linkedin.com/in/ashok-kumar-d-12b80339a"
    },
    {
      title: "GitHub",
      icon: "🐙",
      value: "github.com/ashokdampana",
      link: "https://github.com/ashokdampana"
    }
  ];

  return (
    <div className="container-inner">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="section-title">Let's Connect</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
          I'm always open to new opportunities, collaborations, and interesting projects. 
          Feel free to reach out – I'd love to hear from you!
        </p>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Send Me a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                  aria-invalid={errors.email ? 'true' : 'false'}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                  className={`form-input ${errors.subject ? 'border-red-500' : ''}`}
                  aria-invalid={errors.subject ? 'true' : 'false'}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                  className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                  aria-invalid={errors.message ? 'true' : 'false'}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-opacity"
                aria-busy={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>

              {submitted && (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg">
                  Thanks! Your email client will open with the message ready to send.
                </div>
              )}
            </form>
          </div>

          {/* Contact Methods */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Other Ways to Reach Me
            </h2>

            <div className="space-y-4">
              {contactMethods.map((method, idx) => (
                <div key={idx} className="card">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0">{method.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                        {method.title}
                      </h3>
                      {method.link ? (
                        <a
                          href={method.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 hover:underline break-all"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400 break-all">
                          {method.value}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-4">
                Connect on Social Media
              </h3>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ashokdampana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="GitHub"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.19.092-.926.35-1.557.636-1.914-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.817c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.192 20 14.435 20 10.017 20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/ashok-kumar-d-12b80339a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-button"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.292-1.194-2.292-1.195 0-1.38.932-1.38 1.892v4.078H8.368V9.892h2.519v1.028h.035c.348-.66 1.203-1.345 2.475-1.345 2.651 0 3.14 1.745 3.14 4.018v4.744zM7.447 8.52c-.672 0-1.339-.535-1.339-1.208s.667-1.207 1.339-1.207c.672 0 1.339.535 1.339 1.207s-.667 1.208-1.339 1.208zm5.891 9.819H6.368V9.892h6.97v8.447zM17.467 3.447c0 .621-.504 1.125-1.125 1.125s-1.125-.504-1.125-1.125.504-1.125 1.125-1.125 1.125.504 1.125 1.125z" />
                  </svg>
                </a>
                <a
                  href="mailto:ashokdampana@gmail.com"
                  className="social-button"
                  aria-label="Email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <div className="card-lg bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-4">
            <span className="text-4xl shrink-0">⏱️</span>
            <div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                Response Time
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                I typically respond to emails within 24-48 hours. For urgent matters, 
                feel free to call or connect on LinkedIn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="py-12 md:py-16 border-t border-gray-200 dark:border-neutral-700">
        <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-8 text-center">
          What I'm Looking For
        </h2>

        <div className="grid-3 gap-6">
          {[
            {
              title: "Freelance Projects",
              description: "Short-term projects, MVPs, and feature development"
            },
            {
              title: "Full-Time Opportunities",
              description: "MERN Stack Developer or Full-Stack Engineer roles"
            },
            {
              title: "Open Source",
              description: "Contributing to exciting projects and learning"
            }
          ].map((opportunity, idx) => (
            <div key={idx} className="card text-center">
              <h3 className="font-bold text-neutral-900 dark:text-white mb-2">
                {opportunity.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {opportunity.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}