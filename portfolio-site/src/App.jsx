import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [showSectionIndicator, setShowSectionIndicator] = useState(false)

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false) // Close mobile menu after navigation
      
      // Show section indicator
      setShowSectionIndicator(true)
      setTimeout(() => setShowSectionIndicator(false), 2000)
    }
  }

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            if (activeSection !== section) {
              setActiveSection(section)
              // Show section indicator when scrolling to new section
              setShowSectionIndicator(true)
              setTimeout(() => setShowSectionIndicator(false), 2000)
            }
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Antonio Bravo</h2>
          </div>
          
          {/* Desktop Navigation */}
          <div className="nav-links">
            <button 
              className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>
            <button 
              className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => scrollToSection('about')}
            >
              About
            </button>
            <button 
              className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>
            <button 
              className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>
            <button 
              className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className={`mobile-nav-link ${activeSection === 'home' ? 'active' : ''}`}
            onClick={() => scrollToSection('home')}
          >
            Home
          </button>
          <button 
            className={`mobile-nav-link ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className={`mobile-nav-link ${activeSection === 'projects' ? 'active' : ''}`}
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className={`mobile-nav-link ${activeSection === 'skills' ? 'active' : ''}`}
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className={`mobile-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section id="home" className="section home-section">
          <div className="container">
            <h1 className="hero-title">Antonio Bravo</h1>
            <p className="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section about-section">
          <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a passionate developer who loves creating innovative solutions 
                  and bringing ideas to life through code. With a strong foundation 
                  in both frontend and backend development, I enjoy building 
                  user-friendly applications that solve real-world problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">Project 1</div>
                </div>
                <div className="project-content">
                  <h3>E-Commerce Platform</h3>
                  <p>A full-stack e-commerce solution with React, Node.js, and MongoDB.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">Node.js</span>
                    <span className="tech-tag">MongoDB</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">Project 2</div>
                </div>
                <div className="project-content">
                  <h3>Task Management App</h3>
                  <p>A collaborative task management application with real-time updates.</p>
                  <div className="project-tech">
                    <span className="tech-tag">Vue.js</span>
                    <span className="tech-tag">Firebase</span>
                    <span className="tech-tag">Tailwind</span>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-image">
                  <div className="project-placeholder">Project 3</div>
                </div>
                <div className="project-content">
                  <h3>Portfolio Website</h3>
                  <p>A responsive portfolio website built with modern web technologies.</p>
                  <div className="project-tech">
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">CSS3</span>
                    <span className="tech-tag">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <h2 className="section-title">Skills & Technologies</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Vue.js</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Tailwind CSS</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express</span>
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">Django</span>
                  <span className="skill-tag">PostgreSQL</span>
                  <span className="skill-tag">MongoDB</span>
                </div>
              </div>

              <div className="skill-category">
                <h3>Tools & Others</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">AWS</span>
                  <span className="skill-tag">Figma</span>
                  <span className="skill-tag">Jest</span>
                  <span className="skill-tag">Webpack</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <div className="contact-item">
                  <h3>Email</h3>
                  <p>antonio.bravo@example.com</p>
                </div>
                <div className="contact-item">
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/antoniobravo</p>
                </div>
                <div className="contact-item">
                  <h3>GitHub</h3>
                  <p>github.com/antoniobravo</p>
                </div>
              </div>
              <div className="contact-form">
                <form>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Section Indicator */}
      <div className={`section-indicator ${showSectionIndicator ? 'show' : ''}`}>
        <div className="indicator-content">
          <span className="indicator-text">
            {activeSection === 'home' && 'Home'}
            {activeSection === 'about' && 'About'}
            {activeSection === 'projects' && 'Projects'}
            {activeSection === 'skills' && 'Skills'}
            {activeSection === 'contact' && 'Contact'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
