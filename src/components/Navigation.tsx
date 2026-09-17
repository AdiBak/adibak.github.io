import React, { useEffect, useState } from "react";
import '../assets/styles/Navigation.scss';

const navItems = [
  { label: 'Education', id: 'education' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
] as const;

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

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      <header className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <div className="site-nav-inner">
          <a href="#top" className="site-nav-name">
            Aditya Bakshi
          </a>
          <nav className="site-nav-links" aria-label="Main">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
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
          onClick={closeMenu}
        />
        <div className="site-nav-drawer-panel">
          <button type="button" className="site-nav-drawer-close" onClick={closeMenu}>
            Close
          </button>
          <div className="site-nav-drawer-links">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
