import React, { useEffect, useState } from 'react';
import { portfolioData } from '../data/portfolio';

type HeaderProps = {
    activeSection: string;
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closeMenu();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <header className={activeSection === 'top' ? 'site-header' : 'site-header is-compact'}>
            <a className="brand" href="#top" onClick={closeMenu}>
                <span className="brand-mark">PR</span>
            <span className="brand-name">{portfolioData.profile.name}</span>
            </a>
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
            <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
                <ul>
                    <li><a onClick={closeMenu} className={activeSection === 'about' ? 'is-active' : ''} href="#about">About</a></li>
                    <li><a onClick={closeMenu} className={activeSection === 'skills' ? 'is-active' : ''} href="#skills">Skills</a></li>
                    <li><a onClick={closeMenu} className={activeSection === 'experience' ? 'is-active' : ''} href="#experience">Experience</a></li>
                    <li><a onClick={closeMenu} className={activeSection === 'education' ? 'is-active' : ''} href="#education">Education</a></li>
                    <li><a onClick={closeMenu} className={activeSection === 'work' ? 'is-active' : ''} href="#work">Projects</a></li>
                    <li><a onClick={closeMenu} className={activeSection === 'contact' ? 'is-active' : ''} href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a className="header-link" href={`mailto:${portfolioData.profile.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </header>
    );
};

export default Header;