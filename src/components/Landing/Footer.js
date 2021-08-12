import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="nav">
        <div className="social__media">
          <small className="small">Bárbara Morán(2021)</small>
          <a
            className="sm__link github"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/BarbaraMoran"
          >
            <i class="fab fa-github"></i>
          </a>
          <a
            className="sm__link"
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/BarbsMoran"
          >
            <i class="fab fa-twitter"></i>
          </a>
          <a
            className="sm__link"
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/barbaramorandev"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            className="sm__link"
            target="_blank"
            rel="noreferrer"
            title="barbaramoranrr@gmail.com"
            href="mailto:barbaramoranrr@gmail.com"
          >
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
