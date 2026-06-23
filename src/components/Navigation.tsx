import React, { useEffect, useState } from "react";
import '../assets/styles/Navigation.scss';

const navItems = [['Education', 'education'], ['Experience', 'experience'], ['Projects', 'projects']];

function Navigation() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="site-nav-inner">
          <button type="button" className="site-nav-name" onClick={scrollToTop}>
            Aditya Bakshi
          </button>
          <nav className="site-nav-links" aria-label="Main">
            {navItems.map((item) => (
              <button key={item[0]} type="button" onClick={() => scrollToSection(item[1])}>
                {item[0]}
              </button>
            ))}
          </nav>
          <button
            type="button"
            className="site-nav-menu"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
          >
            Menu
          </button>
        </div>
      </header>

      <div className={`site-nav-drawer${mobileOpen ? ' open' : ''}`} aria-hidden={!mobileOpen}>
        <button
          type="button"
          className="site-nav-drawer-backdrop"
          aria-label="Close menu"
          onClick={() => setMobileOpen(false)}
        />
        <div className="site-nav-drawer-panel">
          <button type="button" className="site-nav-drawer-close" onClick={() => setMobileOpen(false)}>
            Close
          </button>
          <div className="site-nav-drawer-links">
            {navItems.map((item) => (
              <button key={item[0]} type="button" onClick={() => scrollToSection(item[1])}>
                {item[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
