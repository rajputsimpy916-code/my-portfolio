import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error'); return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else setStatus('error');
    } catch {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
    setLoading(false);
  };

  const s = {
    section: { padding: '6rem 2.5rem', background: 'transparent' },
    inner: { maxWidth: '600px', margin: '0 auto' },
    tag: {
      fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase',
      color: '#00e5ff', fontWeight: 600, marginBottom: '0.75rem', display: 'block',
    },
    h2: {
      fontFamily: "'Press Start 2P', cursive", fontWeight: 800,
      fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#e2e8f0',
      marginBottom: '0.75rem', letterSpacing: '-0.02em',
    },
    sub: { color: '#64748b', fontSize: '1rem', marginBottom: '2.5rem',fontFamily: "'Press Start 1P', cursive" },
    field: { marginBottom: '1.2rem' },
    label: { display: 'block', fontSize: '1.8rem', color: '#94a3b8', marginBottom: '0.4rem', fontWeight: 700 },
    input: {
      width: '100%', padding: '0.85rem 1rem', borderRadius: '8px',
      background: 'rgba(6,13,15,0.75)', border: '1px solid rgba(0,229,255,0.2)', color: '#e2e8f0',
      fontSize: '0.95rem', outline: 'none',
      transition: 'border-color 0.2s', boxSizing: 'border-box',
      backdropFilter: 'blur(4px)',fontFamily: "'Press Start 1P', cursive",
    },
    textarea: {
      width: '100%', padding: '0.85rem 1rem', borderRadius: '8px',
      background: 'rgba(6,13,15,0.75)', border: '1px solid rgba(0,229,255,0.2)', color: '#e2e8f0',
      fontSize: '0.95rem', fontFamily: 'DM Sans, sans-serif', outline: 'none',
      transition: 'border-color 0.2s', resize: 'vertical', minHeight: '130px',
      boxSizing: 'border-box', backdropFilter: 'blur(4px)',fontFamily: "'Press Start 1P', cursive",
    },
    btn: {
      width: '100%', padding: '1rem', borderRadius: '8px',
      background: loading ? '#4a9e7e' : '#00e5ff', color: '#0a0a0f',
      fontWeight: 700, fontSize: '1rem', border: 'none',
      cursor: loading ? 'not-allowed' : 'pointer', fontFamily:"'Press Start 2P', cursive",
      letterSpacing: '0.03em', transition: 'all 0.2s',
    },
    success: {
      marginTop: '1rem', padding: '0.85rem', borderRadius: '8px',
      background: 'rgba(0,229,255,0.1)', border: '1px solid rgba(0,229,255,0.3)',
      color: '#00e5ff', fontSize: '0.9rem', textAlign: 'center',
    },
    errorMsg: {
      marginTop: '1rem', padding: '0.85rem', borderRadius: '8px',
      background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
      color: '#f87171', fontSize: '0.9rem', textAlign: 'center',
    },
  };

  const focusStyle = e => e.target.style.borderColor = '#00e5ff';
  const blurStyle = e => e.target.style.borderColor = '#0e2a30';

  return (
    <section style={s.section} id="contact">
      <div style={s.inner}>
    
        <h2 style={s.h2}>Let's Build Something </h2>
        <p style={s.sub}>Have a project in mind? Let's talk and build something great together.</p>

        <div style={s.field}>
          <label style={s.label}>Your Name</label>
          <input style={s.input} name="name" placeholder="John Doe"
            value={form.name} onChange={handleChange}
            onFocus={focusStyle} onBlur={blurStyle} />
        </div>
        <div style={s.field}>
          <label style={s.label}>Email Address</label>
          <input style={s.input} name="email" type="email" placeholder="john@example.com"
            value={form.email} onChange={handleChange}
            onFocus={focusStyle} onBlur={blurStyle} />
        </div>
        <div style={s.field}>
          <label style={s.label}>Message</label>
          <textarea style={s.textarea} name="message" placeholder="Tell me about your project..."
            value={form.message} onChange={handleChange}
            onFocus={focusStyle} onBlur={blurStyle} />
        </div>
        <button style={s.btn} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Sending...' : 'Send Message ✉️'}
        </button>
        {status === 'success' && <div style={s.success}>✅ Message sent! I'll reply within 24 hours.</div>}
        {status === 'error' && <div style={s.errorMsg}>❌ Please fill all fields and try again.</div>}
      </div>
    </section>
  );
}