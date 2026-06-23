import React from "react";
import arizonaLogo from '../assets/images/experience/arizona.png';
import handshakeLogo from '../assets/images/experience/handshake.png';
import spanLogo from '../assets/images/experience/span.png';
import brightSparksLogo from '../assets/images/experience/bright-sparks.png';
import nasaLogo from '../assets/images/experience/nasa.png';
import '../assets/styles/Timeline.scss';

const experiences = [
  {
    date: "May 2026 - Present",
    title: "Machine Learning Research Assistant",
    organization: "University of Arizona Space Sciences & Astrobiology Initiative",
    logo: arizonaLogo,
    logoAlt: "University of Arizona logo",
    bullets: [
      "Contributing to YOLO dataset and model development for automated Mars slope streak detection analyzing HiRISE images",
      "Developing OpenCV detection pipeline using contrast filtering, texture analysis, and bounding box on GeoTIFF raster data",
    ],
  },
  {
    date: "Dec 2025 - Present",
    title: "AI Fellow",
    organization: "Handshake AI",
    logo: handshakeLogo,
    logoAlt: "Handshake logo",
    bullets: [
      "Designed LLM evaluation specifications and scoring criteria for geometry-constrained 3D model generation, measuring dimensional accuracy, topological consistency, and spatial reasoning in AI outputs",
      "Crafted multimodal benchmark datasets and ground-truth validation assets in CAD/Blender to enable model performance analysis on structured design tasks",
      "Conducted independent research into LLM behavior and prompt design strategies across multimodal contexts, analyzing failure modes and few-shot reasoning patterns in diverse engineering design scenarios",
    ],
  },
  {
    date: "Oct 2025 - Present",
    title: "Software Development Lead",
    organization: "Students for Patients Advocacy Nationwide (SPAN)",
    logo: spanLogo,
    logoAlt: "SPAN logo",
    bullets: [
      "Leading end-to-end technical development for healthcare-access advocacy nonprofit, modernizing full stack React and Supabase platform and delivering high-visibility dashboard features for members and executive leadership",
      "Architected automated onboarding via Supabase Edge Functions integrated with Resend and CloudFlare email routing, eliminating manual processing and registering 20+ members in 3 months",
      "Delivered legislative operations system featuring task assignment and review, bill research, and outreach coordination capabilities, supporting tracking and publication of 50+ bills",
      "Established robust foundation for scalability and security through granular role-based access control, optimized proposal asset delivery workflows, and reliable performance with code splitting and lazy loading",
    ],
  },
  {
    date: "Jun 2025 - Sep 2025",
    title: "Software Engineering Intern",
    organization: "Bright Sparks Academy",
    logo: brightSparksLogo,
    logoAlt: "Bright Sparks Academy logo",
    bullets: [
      "Contributed to platform development for edtech mentorship nonprofit reaching 250+ students, developing responsive dashboards, question forms, and interactive whiteboards to facilitate personalized K-12 learning outcomes",
      "Optimized platform scalability to support 5,000+ sessions tracked by implementing Firebase real-time synchronization within role-based dynamic Next.js and React interfaces for concurrent collaboration",
      "Streamlined development in cross-functional 20-member team, utilizing GitHub Kanban workflow, code reviews, and structured PRs to drive accessibility, code quality, and scalability",
    ],
  },
  {
    date: "May 2024 - Aug 2024",
    title: "Undergraduate Research Collaborator",
    organization: "NASA Proposal Writing and Evaluation Experience (NPWEE)",
    logo: nasaLogo,
    logoAlt: "L'SPACE logo",
    bullets: [
      "Co-authored innovation proposal for semi-autonomous multi-material centrifugal 3D-printing system aimed at enhancing layer adhesion under microgravity, addressing additive manufacturing NASA technology taxonomy",
      "Synthesized literature and cost analysis across materials prototyping, testing, and validation, contributing to research and proposal development in 11-member interdisciplinary team, strengthening engineering design and technical writing",
    ],
  },
];

function Timeline() {
  return (
    <div id="experience" className="experience-section">
      <div className="items-container experience-container">
        <h1>Experience</h1>
        <div className="experience-scroll" tabIndex={0} role="region" aria-label="Work experience">
          <div className="experience-track">
            {experiences.map((exp) => (
              <article key={`${exp.title}-${exp.date}`} className="experience-card">
                <div className="experience-card-header">
                  <span className="experience-logo" aria-hidden="true">
                    <img src={exp.logo} alt={exp.logoAlt} loading="lazy" decoding="async" />
                  </span>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <h3 className="experience-title">{exp.title}</h3>
                <p className="experience-organization">{exp.organization}</p>
                <ul className="experience-bullets">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
