import React from 'react';
import './Home.css';

// Import icons from the icons folder
import pythonIcon from './icons/python-icon.png';
import sqlIcon from './icons/sql-icon.png';
import pandasIcon from './icons/pandas-icon.png';
import numpyIcon from './icons/numpy-icon.png';
import tableauIcon from './icons/tableau-icon.png';
import excelIcon from './icons/excel-icon.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hi, I'm Rajveer, a data science enthusiast.</h1>
          <p>
            I work with data to identify trends, create predictive models, and automate processes to help businesses make better decisions. By analyzing data, I provide insights that support growth, improve efficiency, and solve problems. My focus is on using practical solutions to help organizations leverage the power of data for smarter decision-making.
          </p>
          <a href="/projects" className="cta-btn">View My Projects</a>
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-me-section">
        <div className="about-me-content">
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
              I work with data to identify trends, build predictive models, and streamline complex processes, all with the goal of helping businesses make more informed decisions. By analyzing data from different sources, I uncover patterns and insights that drive growth, improve efficiency, and solve key challenges. I focus on providing actionable, data-driven solutions that can be applied to real-world problems. My approach is always practical, aiming to turn data into a powerful tool that helps organizations make smarter, more confident decisions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <h3>Skills</h3>
            <ul>
              <li>
                <span>Python</span>
                <img src={pythonIcon} alt="Python" />
              </li>
              <li>
                <span>Excel</span>
                <img src={excelIcon} alt="Excel" />
              </li>
              <li>
                <span>SQL</span>
                <img src={sqlIcon} alt="SQL" />
              </li>
              <li>
                <span>Pandas</span>
                <img src={pandasIcon} alt="Pandas" />
              </li>
              <li>
                <span>NumPy</span>
                <img src={numpyIcon} alt="NumPy" />
              </li>
              <li>
                <span>Tableau</span>
                <img src={tableauIcon} alt="Tableau" />
              </li>
            </ul>
          </div>
        </div>
        <a href="/connect" className="cta-btn">Contact Me</a>
      </div>
    </div>
  );
};

export default Home;
