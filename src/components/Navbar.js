import React from 'react';

const links = ['Skills', 'Projects', 'Contact'];

export default function Navbar({ scrolled }) {
  const styles = {
    nav: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '1rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(6,13,15,0.9)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #0e2a30' : '1px solid transparent',
      transition: 'all 0.4s ease',
    },
    left: {
      display: 'flex', alignItems: 'center', gap: '2rem',
    },
    logo: {
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 400, fontSize: '0.8rem',
      color: '#00e5ff', letterSpacing: '0.05em',
      textDecoration: 'none',
      textShadow: '0 0 10px #00e5ff',
    },
    links: { display: 'flex', gap: '2rem', listStyle: 'none' },
    link: {
      color: '#94a3b8', textDecoration: 'none', fontSize: '0.7rem',
      fontWeight: 400, letterSpacing: '0.05em', textTransform: 'uppercase',
      transition: 'color 0.2s',
      fontFamily: "'Press Start 2P', cursive",
    },
    resumeBtn: {
      padding: '0.5rem 1rem', borderRadius: '6px',
      background: 'transparent', color: '#00e5ff',
      fontWeight: 400, fontSize: '0.6rem',
      border: '1px solid #00e5ff', cursor: 'pointer',
      fontFamily: "'Press Start 2P', cursive",
      transition: 'all 0.2s',
      textDecoration: 'none', display: 'inline-flex',
      alignItems: 'center', gap: '0.4rem',
    },
  };

  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        
        <ul style={styles.links}>
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} style={styles.link}
                onMouseEnter={e => e.target.style.color = '#00e5ff'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >{l}</a>
            </li>
          ))}
        </ul>
        
          <a href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          style={styles.resumeBtn}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#00e5ff';
            e.currentTarget.style.color = '#000000';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#00e5ff';
          }}
        >
           RESUME
        </a>
      </div>
    </nav>
  );
}