import React from 'react';

const socialLinks = [
  { 
    name: 'GitHub', 
    url: 'https://github.com/Simpysingh9',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    filter: true,
  },
  { 
    name: 'LinkedIn', 
    url: 'https://www.linkedin.com/in/simpy-kumari-823ba0352/',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    filter: false,
  },
  { 
    name: 'LeetCode', 
    url: 'https://leetcode.com/u/Simpy_Singh/',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png',
    filter: true,
  },
];
export default function Footer() {
  const s = {
    footer: { padding: '3rem 2.5rem', borderTop: '1px solid #1e1e2e', background: 'transparent' },
    inner: {
      maxWidth: '900px', margin: '0 auto',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem',
    },
    left: {},
    name: {
      fontFamily: 'Syne, sans-serif', fontWeight: 800,
      fontSize: '1.2rem', color: '#00e5ff', marginBottom: '0.3rem',
    },
    college: {
      fontSize: '0.8rem', color: '#64748b',
    },
    links: { display: 'flex', gap: '1rem' },
    link: {
      display: 'flex', alignItems: 'center', gap: '0.4rem',
      padding: '0.6rem 1.2rem', borderRadius: '8px',
      border: '1px solid #1e1e2e', color: '#94a3b8',
      textDecoration: 'none', fontSize: '0.85rem',
      transition: 'all 0.2s', fontWeight: 500,
    },
    bottom: {
      maxWidth: '900px', margin: '2rem auto 0',
      paddingTop: '1.5rem', borderTop: '1px solid #1e1e2e',
      display: 'flex', justifyContent: 'space-between',
      flexWrap: 'wrap', gap: '0.5rem',
    },
    copy: { color: '#374151', fontSize: '0.8rem' },
    email: {
      color: '#64748b', fontSize: '0.8rem',
      textDecoration: 'none',
    },
  };

  return (
    <footer style={s.footer}>
      
        <div style={s.links}>
          {socialLinks.map(l => (
            <a key={l.name} href={l.url} target="_blank" rel="noreferrer" style={s.link}
              onMouseEnter={e => { e.currentTarget.style.borderColor='#00e5ff'; e.currentTarget.style.color='#00e5ff'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor='#1e1e2e'; e.currentTarget.style.color='#94a3b8'; }}
            >
             <img src={l.icon} alt={l.name} style={{width: '16px', height: '16px', objectFit: 'contain', filter: l.filter ? 'invert(1)' : 'none'}} /> {l.name}
            </a>
          ))}
        
      </div>
     
    </footer>
  );
}