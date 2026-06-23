import React from "react";
import profileImage from '../assets/images/profilepic.jpg';
import '../assets/styles/Main.scss';

function Main() {
  return (
    <section className="hero page-section">
      <div className="hero-inner">
        <img
          className="hero-photo"
          src={profileImage}
          alt="Aditya Bakshi"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero-content">
          <h1>Aditya Bakshi</h1>
          <p className="hero-tagline">Hey! I'm interested in machine learning &amp; AI.</p>
          <div className="hero-links">
            <a className="text-link" href="https://github.com/AdiBak" target="_blank" rel="noreferrer">GitHub</a>
            <a className="text-link" href="https://www.linkedin.com/in/-adityabakshi-/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="text-link" href="mailto:adibak1058@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
