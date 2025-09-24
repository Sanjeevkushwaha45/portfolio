import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact" id="contact">
      <div className="container">
        <h1 className="page-title">Get In Touch</h1>
        <p className="page-subtitle">
          I'm always interested in new opportunities and exciting projects.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Let's Connect</h2>
            <p>
              Whether you have a project in mind, want to collaborate, 
              or just want to say hello, I'd love to hear from you!
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>sanjeevkushwaha560@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 8957991614</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>Thanisandra, Bengaluru</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>LinkedIn</span>
                <span>🔗</span>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>GitHub</span>
                <span>🔗</span>
              </a>
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                <span>Twitter</span>
                <span>🔗</span>
              </a>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
