import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "VillagePe Pro",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring payment integration and admin dashboard.",
      image: "🏛",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
      image: "📋",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "🌤️",
      technologies: ["React", "API Integration", "Chart.js", "CSS3"],
      github: "#",
      live: "#"
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with data visualization, scheduling tools, and performance metrics.",
      image: "📊",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      github: "#",
      live: "#"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing projects, skills, and professional experience.",
      image: "💼",
      technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
      github: "#",
      live: "#"
    },
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend, featuring payment integration and admin dashboard.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
  ];

  return (
    <div className="projects" id="projects">
      <div className="container">
        <h1 className="page-title">My Projects</h1>
        <p className="page-subtitle">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>GitHub</span>
                    <span>🔗</span>
                  </a>
                  <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                    <span>Live Demo</span>
                    <span>🚀</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
