import React, { useEffect, useState } from 'react';

const roles = ['Full-stack Developer'];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    setTimeout(() => setEntered(true), 300);

    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const s = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 2.5rem',
      position: 'relative',
      overflow: 'hidden',
      background:
        'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,255,0.05) 0%, transparent 70%)',
    },

    grid: {
      position: 'absolute',
      inset: 0,
      opacity: 0.15,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Cdefs%3E%3Cstyle%3E.cls%7Bfill:none;stroke:%2300e5ff;stroke-width:1%7D%3C/style%3E%3C/defs%3E%3Ccircle class='cls' cx='400' cy='250' r='180' stroke-dasharray='8,6'/%3E%3Ccircle class='cls' cx='400' cy='250' r='130' stroke-dasharray='4,8'/%3E%3Ccircle class='cls' cx='400' cy='250' r='80'/%3E%3C/svg%3E")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },

    inner: {
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      position: 'relative',
      zIndex: 2,
    },

    heroContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4rem',
      flexWrap: 'wrap',
    },

    photoBox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    photoRing: {
      width: '320px',
      height: '320px',
      borderRadius: '50%',
      padding: '5px',
      background:
        'linear-gradient(135deg, #00e5ff, #004d5a, #001a20)',
      boxShadow: '0 0 40px rgba(0,229,255,0.4)',
      overflow: 'hidden',
      
    },

    photo: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block',
    },

    textBox: {
      maxWidth: '600px',
    },

    h1: {
    
      fontFamily: "'Press Start 2P', cursive",
      fontWeight: 800,
      color: '#e2e8f0',
      lineHeight: 1,
      margin: 0,
    },

    hi: {
      display: 'block',
      fontSize: 'clamp(4rem, 9vw, 7rem)',
    },

    name: {
      display: 'block',
      fontSize: 'clamp(2rem, 5vw, 4.5rem)',
      marginTop: '10px',
    },

    role: {
      marginTop: '20px',
      fontFamily: 'Syne, sans-serif',
      fontWeight: 700,
      fontSize: 'clamp(2rem, 4vw, 3.5rem)',
      background: 'linear-gradient(135deg, #00e5ff, #00bcd4)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      opacity: entered ? 1 : 0,
      transform: entered ? 'translateY(0)' : 'translateY(40px)',
      transition: 'all 1s ease',
    },

    bio: {
      marginTop: '1.5rem',
      fontSize: '1rem',
      color: '#94a3b8',
      lineHeight: 1.8,
      maxWidth: '500px',
      fontFamily: 'DM Sans, sans-serif',
    },
  };

  return (
    <section style={s.section} id="hero">
      <style>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 30px rgba(0,229,255,0.3);
          }
          50% {
            box-shadow: 0 0 60px rgba(0,229,255,0.7);
          }
          100% {
            box-shadow: 0 0 30px rgba(0,229,255,0.3);
          }
        }
      `}</style>

      <div style={s.grid}></div>

      <div style={s.inner}>
        <div style={s.heroContent}>

          {/* LEFT IMAGE */}
         <div
  style={{
    ...s.photoBox,
    flexDirection: 'column',
  }}
>
  <div style={s.photoRing}>
    <img
      src="/photo.jpg"
      alt="Simpy Kumari"
      style={s.photo}
    />
  </div>

  {/* NAME */}
  <h2
    style={{
      marginTop: '20px',
      fontSize: '1rem',
      fontWeight: '700',
      color: '#ffffff',
      fontFamily: "'Press Start 2P', cursive",
      letterSpacing: '1px',
      marginBottom: '8px',
    }}
  >
    Simpy Kumari
  </h2>

  {/* ROLE */}
  <p
    style={{
      fontSize: '1.2rem',
      color: '#00e5ff',
      fontWeight: '600',
      fontFamily: "'Press Start 2P', cursive",
      margin: 0,
    }}
  >
    Full-stack Developer
  </p>
</div>

  

          {/* ABOUT ME SECTION */}
<div style={s.textBox}>
  
  <h1
    style={{
      fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
      color: '#00e5ff',
      marginBottom: '1.5rem',
      fontFamily: "'Press Start 2P', cursive",
      textShadow: '0 0 5px #00e5ff',
    }}
  >
    About Me
  </h1>

  <p
    style={{
      fontSize: '1.1rem',
      lineHeight: '2',
      color: '#94a3b8',
      maxWidth: '600px',
      fontFamily: "'Press Start 1P', cursive",
    }}
  >
    Hii, I'm Simpy Kumari, a passionate Full stack Developer
    who loves building modern, responsive, and userfriendly
    web applications. I enjoy working with React, JavaScript,
    Node.js, and frontend design to create clean digital
    experiences. Currently, I am improving my skills in
    full stack development and exploring advanced 
    technologies.
  </p>

</div>

        </div>
      </div>
    </section>
  );
}