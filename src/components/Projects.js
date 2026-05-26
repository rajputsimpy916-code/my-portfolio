import React from 'react';

const projects = [
  {
    title: 'TinyGallery — Smart Storage Vault',
    desc: 'Privacy-first image storage app with client-side data isolation, PIN security system, and JS compression engine storing 100,000+ images in Cloudinary.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Cloudinary API'],
    live: 'https://lnkd.in/gXX83NMH',
    github: 'https://github.com/Simpysingh9',
    
  },
  {
    title: 'BudgetBuddy — Smart Budgeting Tool',
    desc: 'Financial tracking tool that secured Top 10 position at HackQuest 25. User-centric interface to simplify personal finance management.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    live: '#',
    github: 'https://github.com/Simpysingh9',
    
  },
  {
    title: 'Weather App — IBM Internship',
    desc: 'Full-stack responsive Weather Application with live backend API integration, real-time data delivery and cross-device compatibility.',
    tags: ['HTML', 'CSS', 'JavaScript', 'REST API'],
    live: 'https://lnkd.in/gFt_jv58',
    github: 'https://github.com/Simpysingh9',
    
  },
];

export default function Projects() {
  const s = {
    section: { padding: '6rem 2.5rem', background: 'transparent' },
    inner: { maxWidth: '900px', margin: '0 auto' },
    tag: {
      fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
      color: '#00e5ff', fontWeight: 600, marginBottom: '0.75rem', display: 'block',
    },
    h2: {
      fontFamily: "'Press Start 2P', cursive", fontWeight: 1000,
      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#e2e8f0',
      marginBottom: '0.75rem', letterSpacing: '-0.02em',
    },
    sub: { color: '#64748b', fontSize: '1.1rem', marginBottom: '4rem', fontFamily: "'Press Start 1P', cursive" },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      background: 'rgba(6,20,22,0.85)', border: '1px solid #00e5ff', borderRadius: '20px',
      padding: '1.5rem', transition: 'all 0.3s', cursor: 'default',
      position: 'relative', overflow: 'hidden', backdropFilter: 'blur(8px)',
      fontFamily: "'Press Start 2P', cursive",
    },
    emoji: { fontSize: '2.5rem', marginBottom: '1rem', display: 'block' },
    cardTitle: {
      fontFamily: "'Press Start 1P', cursive", fontWeight: 1100, fontSize: '1.5rem',
      color: '#e2e8f0', marginBottom: '0.8rem',
    },
    cardDesc: {
      fontSize: '0.8rem', color: '#64748b', lineHeight: 1.8, marginBottom: '1.5rem',
    },
    tags: { display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' },
    tagPill: {
      fontSize: '0.72rem', padding: '0.25rem 0.6rem', borderRadius: '4px',
      background: 'rgba(110,231,183,0.08)', color: '#00e5ff',
      border: '1px solid rgba(110,231,183,0.15)', fontWeight: 800,fontFamily: "'Press Start 1P', cursive",
    },
    links: { display: 'flex', gap: '1rem' },
    link: {
      fontSize: '0.6rem', color: '#818cf8', textDecoration: 'none',
      fontWeight: 200, display: 'flex', alignItems: 'center', gap: '0.3rem',
      transition: 'color 0.2s',
    },
  };

  return (
    <section style={s.section} id="projects">
      <div style={s.inner}>
      
        <h2 style={s.h2}>Projects</h2>
        <p style={s.sub}>Real projects I've built — from hackathons to internships </p>
        <div style={s.grid}>
          {projects.map(p => (
            <div key={p.title} style={s.card}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(21, 204, 228, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(110, 229, 231, 0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#1e1e2e';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <span style={s.emoji}>{p.emoji}</span>
              <div style={s.cardTitle}>{p.title}</div>
              <div style={s.cardDesc}>{p.desc}</div>
              <div style={s.tags}>
                {p.tags.map(t => (
                  <span key={t} style={s.tagPill}>{t}</span>
                ))}
              </div>
              <div style={s.links}>
                <a href={p.live} target="_blank" rel="noreferrer" style={s.link}
                  onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#818cf8'}
                >🔗 Live Demo</a>
                <a href={p.github} target="_blank" rel="noreferrer" style={{...s.link, display: 'inline-flex', alignItems: 'center', gap: '0.4rem'}}
                  onMouseEnter={e => e.currentTarget.style.color = '#00e5ff'}
                  onMouseLeave={e => e.currentTarget.style.color = '#818cf8'}
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github" style={{width: '16px', height: '16px', filter: 'invert(1)'}} />
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}