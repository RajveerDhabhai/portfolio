import React from 'react';
import './Connect.css';

import GitHubIcon from './icons/github-icon.png';
import LinkedInIcon from './icons/linkedin-icon.png';
import EmailIcon from './icons/email-icon.png';



const Connect = () => {
  return (
    <div className="connect-page">
      {/* Section 1: Get in Touch */}
      <div className="get-in-touch">
        <h1>Get in Touch</h1>
        <p>
          I'm always excited to connect! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
        </p>
      </div>

      {/* Section 2: Resume + Social Media */}
      <div className="resume-social">
        <button className="resume-btn">View My Resume</button>
        <div className="social-links">
          <a href="#" className="social-link">
            <img src={GitHubIcon} alt="GitHub" /> GitHub
          </a>
          <a href="#" className="social-link">
            <img src={LinkedInIcon} alt="LinkedIn" /> LinkedIn
          </a>
          <a href="mailto:your-email@example.com" className="social-link">
            <img src={EmailIcon} alt="Email" /> Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
