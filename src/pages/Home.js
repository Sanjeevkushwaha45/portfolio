import React from 'react';
import './Home.css';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="home" id="home">
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Sanjeev Kumar Kushwaha</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer
            </p>
            <p className="hero-description">
              I create beautiful, functional, and user-centered digital experiences.
              Passionate about clean code and innovative solutions.
            </p>
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
          <div className="hero-image">
            <div className="profile-image">
              <div className="image-placeholder">
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="skills-preview">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-icon">⚛️</div>
              <h3>Frontend</h3>
              <p>React, JavaScript, HTML5, CSS3</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🚀</div>
              <h3>Backend</h3>
              <p>Java, spring boot, hibernate, MySQL</p>
            </div>
            <div className="skill-item">
              <div className="skill-icon">🛠️</div>
              <h3>Tools & Technologies</h3>
              <p>Git, VS Code, Postman, Database Management</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
