import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src="https://media.licdn.com/dms/image/v2/D4D03AQGYStZHqTOycw/profile-displayphoto-shrink_800_800/B4DZXKTBtQG8Ac-/0/1742855741818?e=1751500800&v=beta&t=0ECtCoFk450d-E_9ie--gAhjRVLIjJpuVusdn4QLpw8" alt="Avatar" />
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