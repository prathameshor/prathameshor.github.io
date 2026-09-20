import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';

type HeaderProps = {
    activeSection: string;
};

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className={activeSection === 'top' ? 'site-header' : 'site-header is-compact'}>
            <a className="brand" href="#top">
                <span className="brand-mark">PR</span>
            <span className="brand-name">{portfolioData.profile.name}</span>
            </a>
            <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? 'Close' : 'Menu'}</button>
            <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
                <ul>
                    <li><a className={activeSection === 'about' ? 'is-active' : ''} href="#about">About</a></li>
                    <li><a className={activeSection === 'skills' ? 'is-active' : ''} href="#skills">Skills</a></li>
                    <li><a className={activeSection === 'experience' ? 'is-active' : ''} href="#experience">Experience</a></li>
                    <li><a className={activeSection === 'education' ? 'is-active' : ''} href="#education">Education</a></li>
                    <li><a className={activeSection === 'work' ? 'is-active' : ''} href="#work">Projects</a></li>
                    <li><a className={activeSection === 'contact' ? 'is-active' : ''} href="#contact">Contact</a></li>
                </ul>
            </nav>
            <a className="header-link" href={`mailto:${portfolioData.profile.email}`}>Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </header>
    );
};

export default Header;