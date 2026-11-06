import React from "react";
import "../assets/styles/Timeline.scss";
import "../assets/styles/Publications.scss";

const publications = [
  {
    title:
      "Exposure-Adjusted Pedestrian Harm Is 16 Percent Higher per 10 Percentage Points of Neighborhood Poverty in New York City",
    authors: "A. Bakshi",
    venue: "alphaXiv preprint",
    date: "Nov 2026",
    links: [
      {
        label: "Paper",
        href: "https://www.alphaxiv.org/abs/2611.pedestrian-harm-poverty-exposure-new-york",
      },
      {
        label: "Code",
        href: "https://doi.org/10.5281/zenodo.23754868",
      },
    ],
  },
  {
    title: "Automated Detection of New Slope Streaks on Mars",
    authors: "A. Schiffmaier, A. Bakshi, N. De Campos, N. Schörghofer",
    venue: "AGU Fall Meeting 2026 (accepted)",
    date: "Dec 2026",
    links: [],
  },
];

function Publications() {
  return (
    <section id="publications" className="publications-section page-section">
      <h2 className="section-label">Publications</h2>
      <div className="experience-list">
        {publications.map((pub) => (
          <article key={pub.title} className="experience-item">
            <div className="experience-body">
              <div className="experience-meta">
                <div>
                  <h3 className="experience-title">{pub.title}</h3>
                  <p className="publication-authors">{pub.authors}</p>
                  <p className="experience-organization">{pub.venue}</p>
                </div>
                <span className="experience-date">{pub.date}</span>
              </div>
              {pub.links.length > 0 && (
                <div className="publication-links">
                  {pub.links.map((link) => (
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
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Publications;
