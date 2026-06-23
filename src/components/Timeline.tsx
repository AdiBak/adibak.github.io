import React from "react";
import arizonaLogo from '../assets/images/experience/arizona.png';
import handshakeLogo from '../assets/images/experience/handshake.png';
import spanLogo from '../assets/images/experience/span.png';
import brightSparksLogo from '../assets/images/experience/bright-sparks.png';
import nasaLogo from '../assets/images/experience/nasa.png';
import '../assets/styles/Timeline.scss';

const experiences = [
  {
    date: "May 2026 – Present",
    title: "Machine Learning Research Assistant",
    organization: "University of Arizona · Space Sciences & Astrobiology Initiative",
    logo: arizonaLogo,
    logoAlt: "University of Arizona logo",
    highlights: [
      "I'm collaborating on YOLO models to detect Mars slope streaks from HiRISE imagery.",
      "Also building an OpenCV pipeline with contrast filtering and bounding boxes on GeoTIFF raster data.",
    ],
  },
  {
    date: "Dec 2025 – Present",
    title: "AI Fellow",
    organization: "Handshake AI",
    logo: handshakeLogo,
    logoAlt: "Handshake logo",
    highlights: [
      "I design evaluation rubrics for LLMs generating geometry-constrained 3D models.",
      "Ground-truth assets in CAD/Blender support benchmarking across multimodal engineering design tasks.",
    ],
  },
  {
    date: "Oct 2025 – Present",
    title: "Software Development Lead",
    organization: "Students for Patients Advocacy Nationwide (SPAN)",
    logo: spanLogo,
    logoAlt: "SPAN logo",
    highlights: [
      "I lead platform development on React and Supabase — dashboards, onboarding, and role-based access for a healthcare advocacy nonprofit.",
      "Shipped a legislative ops system that tracks and publishes 50+ bills for member outreach.",
    ],
  },
  {
    date: "Jun 2025 – Sep 2025",
    title: "Software Engineering Intern",
    organization: "Bright Sparks Academy",
    logo: brightSparksLogo,
    logoAlt: "Bright Sparks Academy logo",
    highlights: [
      "I built dashboards, forms, and interactive whiteboards for personalized K-12 tutoring.",
      "Firebase real-time sync in our Next.js app now supports 5,000+ tracked sessions across the platform.",
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    title: "Undergraduate Research Collaborator",
    organization: "NASA L'SPACE (NPWEE)",
    logo: nasaLogo,
    logoAlt: "L'SPACE logo",
    highlights: [
      "I co-authored a proposal for multi-material centrifugal 3D printing aimed at better layer adhesion in microgravity.",
      "Worked with an 11-member team on literature synthesis, cost analysis, and technical writing.",
    ],
  },
];

function Timeline() {
  return (
    <section id="experience" className="experience-section page-section">
      <h2 className="section-label">Experience</h2>
      <div className="experience-list">
        {experiences.map((exp) => (
          <article key={`${exp.title}-${exp.date}`} className="experience-item">
            <img
              className="experience-logo"
              src={exp.logo}
              alt={exp.logoAlt}
              loading="lazy"
              decoding="async"
            />
            <div className="experience-body">
              <div className="experience-meta">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p className="experience-organization">{exp.organization}</p>
                </div>
                <span className="experience-date">{exp.date}</span>
              </div>
              <div className="experience-highlights">
                {exp.highlights.map((line) => (
                  <p key={line} className="experience-highlight">{line}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Timeline;
