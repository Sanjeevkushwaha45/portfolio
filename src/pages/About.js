import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="page-title">About Me</h1>
            <p className="about-description">
              I'm a passionate full-stack developer with a strong foundation in web development. 
              I love turning complex problems into simple, functional, and efficient solutions.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or learning about the latest 
              development trends and best practices.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <h3>5+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat-item">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat-item">
                <h3>100%</h3>
                <p>Client Satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <div className="image-placeholder">
              <span>👨‍💻</span>
            </div>
          </div>
        </div>

        <div className="timeline">
          <h2 className="section-title">Education & Experience</h2>
          <div className="timeline-item">
            <div className="timeline-date">June 2023</div>
            <div className="timeline-content">
              <h3>Graduation</h3>
              <p>Completed my degree</p>
              <p>Passed out in June 2023, ready to start my professional journey</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2023 - Present</div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <p>Freelance/Projects</p>
              <p>Working on various web development projects using React, Node.js and modern technologies</p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-date">2021 - 2023</div>
            <div className="timeline-content">
              <h3>Student & Learning</h3>
              <p>Self-taught Developer</p>
              <p>Learned web development technologies and built personal projects during studies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
