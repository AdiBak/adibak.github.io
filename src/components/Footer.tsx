import React from "react";
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer className="site-footer page-section">
      <p>© {new Date().getFullYear()} Aditya Bakshi</p>
    </footer>
  );
}

export default Footer;
