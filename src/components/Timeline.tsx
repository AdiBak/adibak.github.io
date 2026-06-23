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
      "Building an OpenCV pipeline with contrast filtering and bounding boxes on GeoTIFF raster data.",
      "Working with the team on a YOLO model to automatically detect Martian slope streaks from HiRISE imagery.",
    ],
  },
  {
    date: "Dec 2025 – Present",
    title: "AI Fellow",
    organization: "Handshake AI",
    logo: handshakeLogo,
    logoAlt: "Handshake logo",
    highlights: [
      "Designed evaluation rubrics that score LLMs on dimensional accuracy and spatial reasoning in 3D and document generation.",
      "Built CAD/Blender validation assets to benchmark how models handle structured engineering design problems.",
    ],
  },
  {
    date: "Oct 2025 – Present",
    title: "Software Development Lead",
    organization: "Students for Patients Advocacy Nationwide (SPAN)",
    logo: spanLogo,
    logoAlt: "SPAN logo",
    highlights: [
      "Lead web development for a healthcare advocacy nonprofit, shipping dashboards, onboarding flows, and role based access in React and Supabase.",
      "Set up automated onboarding that brought in over 25 members in 3 months, plus a legislative ops tool now tracking 50+ proposals.",
    ],
  },
  {
    date: "Jun 2025 – Sep 2025",
    title: "Software Engineering Intern",
    organization: "Bright Sparks Academy",
    logo: brightSparksLogo,
    logoAlt: "Bright Sparks Academy logo",
    highlights: [
      "Developed dashboards, question forms, and interactive whiteboards for one on one K-12 tutoring as the platform grew to serve over 250 students.",
      "Rolled out Firebase real time sync in our Next.js stack so tutors and students could collaborate during live sessions, scaling past 5,000 tracked sessions.",
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    title: "Undergraduate Research Collaborator",
    organization: "NASA L'SPACE (NPWEE)",
    logo: nasaLogo,
    logoAlt: "L'SPACE logo",
    highlights: [
      "Coauthored an innovation proposal for centrifugal 3D printing in microgravity with an 11 person undergraduate team.",
      "Helped pull together literature reviews and cost estimates for materials prototyping and validation.",
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
