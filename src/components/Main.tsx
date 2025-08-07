import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {
  const imageUrl = "https://i.ibb.co/GvRgMJZv/IMG-5586.jpg"; // This URL should match the one in .env

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={imageUrl} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AdiBak" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/-adityabakshi-/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Aditya Bakshi</h1>
          <p>Hi! I'm a computer science student at UC Irvine interested in machine learning, web dev, and game dev.</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AdiBak" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/-adityabakshi-/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;