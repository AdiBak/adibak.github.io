import React from "react";
import uciLogo from '../assets/images/experience/uci.png';
import '../assets/styles/Timeline.scss';
import '../assets/styles/Education.scss';

function Education() {
  return (
    <section id="education" className="education-section page-section">
      <h2 className="section-label">Education</h2>
      <div className="experience-list">
        <article className="experience-item">
          <img
            className="experience-logo"
            src={uciLogo}
            alt="UC Irvine logo"
            loading="lazy"
            decoding="async"
          />
          <div className="experience-body">
            <div className="experience-meta">
              <div>
                <h3 className="experience-title">B.S. Computer Science</h3>
                <p className="experience-organization">University of California, Irvine</p>
              </div>
              <span className="experience-date">Sep 2022 – Jun 2026</span>
            </div>
            <p className="experience-highlight">
              Coursework in machine learning, computer vision, data structures and algorithms, software design, data management, and information retrieval. Zot zot zot!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Education;
