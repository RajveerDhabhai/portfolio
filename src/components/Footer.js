import React from 'react';
import './Footer.css';  // Ensure you have this file linked for styling

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer>
      <p>&copy; {currentYear} My Portfolio</p>
    </footer>
  );
}

export default Footer;
