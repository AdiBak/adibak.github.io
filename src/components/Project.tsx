import React from "react";
import smartPdfReader from '../assets/images/smart-pdf-reader.png';
import f1GestureController from '../assets/images/f1-gesture-controller.png';
import styleTransferGame from '../assets/images/style-transfer-game.png';
import upscAiLe from '../assets/images/upsc-ai-le.png';
import propulsionParody from '../assets/images/propulsion-parody.png';
import phantomPilgrimage from '../assets/images/phantom-pilgrimage.png';
import '../assets/styles/Project.scss';

const projects = [
  {
    title: "Smart PDF Reader",
    image: smartPdfReader,
    description: "RAG based PDF chat and annotation.",
    tags: ["React", "TypeScript", "RAG", "OpenAI", "Supabase"],
    links: [
      { label: "GitHub", href: "https://github.com/AdiBak/SmartPDFReader" },
      { label: "Demo", href: "https://pdfsmart.vercel.app/" },
    ],
  },
  {
    title: "F1 Gesture Controller",
    image: f1GestureController,
    description: "Hand gesture controlled F1 simulator with computer vision.",
    tags: ["React", "Three.js", "MediaPipe"],
    links: [{ label: "GitHub", href: "https://github.com/AdiBak/f1-gesture-racer" }],
  },
  {
    title: "Style Transfer Game",
    image: styleTransferGame,
    description: "Educational game built around neural style transfer.",
    tags: ["React", "PyTorch", "Cloudinary", "Vercel"],
    links: [
      { label: "GitHub", href: "https://github.com/AdiBak/styletransfergame" },
      { label: "Demo", href: "https://styletransfergame.vercel.app" },
    ],
  },
  {
    title: "Upsc-AI-le",
    image: upscAiLe,
    description: "AI powered image upscaler with real time processing.",
    tags: ["Flask", "Hugging Face", "Redis", "Render"],
    links: [
      { label: "GitHub", href: "https://github.com/AdiBak/upscaile" },
      { label: "Demo", href: "https://upscaile.onrender.com" },
    ],
  },
  {
    title: "Propulsion Parody",
    image: propulsionParody,
    description: "Jetpack joyrider game with a 15 person dev team.",
    tags: ["Unity", "C#", "Itch.io"],
    links: [{ label: "Play", href: "https://frenchfrys.itch.io/propulsion-parody" }],
  },
  {
    title: "Phantom Pilgrimage",
    image: phantomPilgrimage,
    description: "Surreal platformer built with an 11 person dev team.",
    tags: ["Unity", "C#", "Itch.io"],
    links: [{ label: "Play", href: "https://emilye25.itch.io/phantom-pilgrimage" }],
  },
];

function Project() {
  return (
    <section className="projects-section page-section" id="projects">
      <h2 className="section-label">Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <article key={project.title} className="project-item">
            <img
              className="project-thumb"
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
            <div className="project-body">
              <div className="project-top">
                <h3>{project.title}</h3>
                <div className="project-links">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      className="text-link"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <p className="project-summary">{project.description}</p>
              <p className="project-tags">{project.tags.join(' · ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;
