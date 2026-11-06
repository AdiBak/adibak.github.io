import React from "react";
import "../assets/styles/Timeline.scss";
import "../assets/styles/Communities.scss";

const communities = [
  {
    name: "NASA Open Science Data Repository AWG",
    role: "Research Collaborator",
    date: "Oct 2026 – Present",
    summary: "Working group for collaborative analysis and reuse of NASA open space-biology data.",
    href: "https://science.nasa.gov/biological-physical/data/awg/",
  },
  {
    name: "Ronin Institute for Independent Scholarship 2.0",
    role: "Research Scholar",
    date: "Oct 2026 – Present",
    summary: "Nonprofit community supporting independent scholarly research.",
    href: "https://ronininstitute.org/",
  },
  {
    name: "Humane Intelligence",
    role: "AI in Public Health Working Group",
    date: "Sep 2026 – Present",
    summary: "Nonprofit community for AI evaluation, red-teaming, and bias bounties.",
    href: "https://humane-intelligence.org/",
  },
  {
    name: "Cohere Labs Community",
    role: "Open Science Collaborator",
    date: "Jul 2026 – Present",
    summary: "Open science community for machine learning research.",
    href: "https://labscommunity.cohere.com/",
  },
];

function Communities() {
  return (
    <section id="groups" className="communities-section page-section">
      <h2 className="section-label">Research groups</h2>
      <div className="experience-list">
        {communities.map((item) => (
          <article key={item.name} className="experience-item">
            <div className="experience-body">
              <div className="experience-meta">
                <div>
                  <h3 className="experience-title">
                    {item.name}
                    <a
                      className="text-link community-site"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Site
                    </a>
                  </h3>
                  <p className="experience-organization">{item.role}</p>
                </div>
                {item.date && <span className="experience-date">{item.date}</span>}
              </div>
              <p className="experience-highlight">{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Communities;
