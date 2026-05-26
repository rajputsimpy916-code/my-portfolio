import React from 'react';

const skills = [
  { name: 'Python / C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', filter: false },
  { name: 'HTML5 / CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', filter: false },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', filter: false },
  { name: 'DSA / OOPs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', filter: false },
  { name: 'Cloudinary API', icon: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Cloudinary_logo.svg', filter: false, big: true },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', filter: true },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', filter: false },
  { name: 'Async JS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', filter: false },
  { name: 'DBMS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', filter: false },
];

export default function Skills() {
  const s = {
    section: { padding: '6rem 2.5rem', background: 'transparent' },
    inner: { maxWidth: '900px', margin: '0 auto' },
    tag: {
      fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
      color: '#00e5ff', fontWeight: 600, marginBottom: '0.75rem', display: 'block',
    },
    h2: {
      fontFamily: "'Press Start 2P', cursive", fontWeight: 800,
      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#e2e8f0',
      marginBottom: '0.75rem',
    },
    sub: { color: '#64748b', fontSize: '1rem', marginBottom: '3rem', fontFamily: "'Press Start 1P', cursive" }, 
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      gap: '1rem',
    },
    card: {
      background: 'rgba(6,13,15,0.75)', border: '1px solid #0e2a30',
      borderRadius: '12px', padding: '1rem',
      transition: 'border-color 0.3s, transform 0.2s',
      cursor: 'default',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: '0.5rem', textAlign: 'center',
      minHeight: '100px', maxHeight: '100px',
      fontFamily: "'Press Start 2P', cursive",
    },
    name: {
      fontFamily: "'Press Start 2P', cursive", fontWeight: 300,
      fontSize: '0.85rem', color: '#e2e8f0',
    },
  };

  return (
    <section style={s.section} id="skills">
      <div style={s.inner}>
      
        <h2 style={s.h2}>My Tech Stack</h2>
        <p style={s.sub}>Tools and technologies I use to build projects</p>
        <div style={s.grid}>
          {skills.map(skill => (
            <div key={skill.name} style={s.card}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#00e5ff';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,229,255,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#0e2a30';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
            <img
                src={skill.icon}
                alt={skill.name}
                style={{
                 width: skill.big ? '100px' : '40px',
                 height: skill.big ? '40px' : '40px',
                  objectFit: 'contain',
                  filter: skill.filter ? 'invert(1)' : 'none',
                }}
              />
              <span style={s.name}>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}