// import React from 'react';
// import '../styles/Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <h1>WEBMYNE College Predictor</h1>
//       </div>
//       <ul className="navbar-nav">
//         <li><a href="/">Home</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/contact">Contact</a></li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// Navbar.js

import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <h1>WEBMYNE College Predictor</h1>
      </div>
      <div className={`navbar-links ${showLinks ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>
      <button className="navbar-toggle" onClick={toggleLinks}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
    </nav>
  );
};

export default Navbar;



