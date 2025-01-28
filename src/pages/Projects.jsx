import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectTiles = [
    { title: 'Project 1', description: 'This is a brief description of project 1' },
    { title: 'Project 2', description: 'This is a brief description of project 2' },
    { title: 'Project 3', description: 'This is a brief description of project 3' },
    { title: 'Project 4', description: 'This is a brief description of project 4' },
    { title: 'Project 5', description: 'This is a brief description of project 5' },
  ];

  return (
    <div className="projects">
      <div className="projects-heading">
        <h1>My Projects</h1>
        <p>Explore the projects I have worked on, ranging from data analysis to machine learning applications.</p>
      </div>

      <div className="project-grid">
        {projectTiles.map((project, index) => (
          <div className="project-tile" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button className="view-btn">View Project</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
