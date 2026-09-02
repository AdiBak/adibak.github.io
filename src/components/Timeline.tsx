import React from "react";
import deepiriLogo from '../assets/images/experience/deepiri.png';
import arizonaLogo from '../assets/images/experience/arizona.png';
import handshakeLogo from '../assets/images/experience/handshake.png';
import spanLogo from '../assets/images/experience/span.png';
import brightSparksLogo from '../assets/images/experience/bright-sparks.png';
import nasaLogo from '../assets/images/experience/nasa.png';
import '../assets/styles/Timeline.scss';

const experiences = [
  {
    date: "Jun 2026 – Sep 2026",
    title: "AI Systems Engineer Intern",
    organization: "Deepiri",
    logo: deepiriLogo,
    logoAlt: "Deepiri logo",
    highlights: [
      "Trained a melody MLP on OpenScore Lieder and built a vocal pipeline that turns lyrics into sung output in the Studio timeline.",
      "Integrated ML mood ranking and built a real time conducting interface with MediaPipe and Web Audio for MIDI score synced cues.",
    ],
  },
  {
    date: "May 2026 – Aug 2026",
    title: "Machine Learning Research Assistant",
    organization: "University of Arizona",
    logo: arizonaLogo,
    logoAlt: "University of Arizona logo",
    highlights: [
      "Built an automated slope streak detection pipeline on NASA HiRISE imagery across 8000 x 8000 GeoTIFF tiles using contrast residual and hysteresis thresholding.",
      "Labeled 1,000+ oriented bounding boxes in a custom review tool and trained an EfficientNet-B0 classifier that reached 0.90 F1.",
    ],
  },
  {
    date: "Dec 2025 – Present",
    title: "AI Evaluation Fellow",
    organization: "Handshake AI",
    logo: handshakeLogo,
    logoAlt: "Handshake logo",
    highlights: [
      "Evaluate multimodal generative AI with structured rubrics and preference ranking, assessing contextual personalization and failure modes.",
      "Designed benchmark datasets in CAD and Blender for geometry constrained 3D generation, measuring dimensional accuracy and spatial reasoning.",
    ],
  },
  {
    date: "Oct 2025 – Present",
    title: "Software Development Lead",
    organization: "Students for Patients Advocacy Nationwide (SPAN)",
    logo: spanLogo,
    logoAlt: "SPAN logo",
    highlights: [
      "Own full stack development on React and Supabase, including Edge Functions, RLS hardened access, and role based dashboards across management, policy, HR, and classroom programs.",
      "Automated onboarding with RoBERTa text screening registered 30+ members; legislative ops with Legiscan API integration now tracks 50+ proposals.",
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
      "Implemented Firebase real time messaging in our Next.js stack for concurrent collaboration, scaling past 5,000 tracked sessions.",
    ],
  },
  {
    date: "May 2024 – Aug 2024",
    title: "Undergraduate Research Collaborator",
    organization: "NASA L'SPACE (NPWEE)",
    logo: nasaLogo,
    logoAlt: "L'SPACE logo",
    highlights: [
      "Coauthored an innovation proposal for semi autonomous multi material centrifugal 3D printing to improve layer adhesion in microgravity.",
      "Synthesized literature and cost analysis across materials prototyping and validation on an 11 person interdisciplinary team.",
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
