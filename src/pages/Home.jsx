import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowRight, Code2, Layers3, MousePointer2, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { skills, team } from '../data';

export default function Home() {
  return <main>
    <section className="hero container">
      <div className="hero-copy">
        <motion.div className="eyebrow" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .5 }}><span className="status-dot" /> INDEPENDENT DEVELOPER DUO</motion.div>
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}>We build digital<br />things <span className="gradient-text">together.</span></motion.h1>
        <motion.p className="hero-description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .25 }}>One frontend mind. One backend mind. A shared love for turning ambitious ideas into smooth, useful digital experiences.</motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35 }}><Link to="/projects" className="button button-primary">Explore our work <ArrowRight size={17} /></Link><Link to="/contact" className="button button-ghost">Meet the team <ArrowDownRight size={17} /></Link></motion.div>
        <div className="hero-social-proof"><div className="avatar-stack"><span>YM</span><span>YE</span></div><p><strong>Two developers</strong><br />building one vision</p></div>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .75, delay: .2 }}>
        <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" /><div className="visual-glow" />
        <div className="floating-tag tag-top"><Sparkles size={15} /> Ideas → Impact</div>
        <div className="code-window"><div className="window-bar"><div className="window-dots"><b /><b /><b /></div><span>our-next-project.jsx</span><span className="window-live">● LIVE</span></div><div className="code-content"><span className="code-muted">01</span><span><em>const</em> team = {'{'}</span><span className="code-muted">02</span><span>&nbsp; frontend: <strong>'Youssef'</strong>,</span><span className="code-muted">03</span><span>&nbsp; backend: <strong>'Youssef'</strong>,</span><span className="code-muted">04</span><span>&nbsp; mindset: <i>'always building'</i></span><span className="code-muted">05</span><span>{'}'};</span><span className="code-cursor">▍</span></div><div className="code-window-footer"><span><span className="status-dot" /> All systems creative</span><span>v.01</span></div></div>
        <div className="floating-card float-card-one"><span className="float-icon mint"><Code2 size={17} /></span><span><strong>Clean code</strong><small>Built with purpose</small></span></div><div className="floating-card float-card-two"><span className="float-icon blue"><Layers3 size={17} /></span><span><strong>Thoughtful design</strong><small>Details matter</small></span></div><div className="visual-corner-mark">Y<span>&</span>Y</div>
      </motion.div>
      <div className="hero-bottom-note"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
    </section>

    <section className="intro-strip"><div className="container strip-inner"><span>CURIOUS BY NATURE</span><span className="strip-star">✳</span><span>BUILDING FOR PEOPLE</span><span className="strip-star">✳</span><span>BETTER, TOGETHER</span><span className="strip-star">✳</span></div></section>

    <section className="section container skills-section"><div className="section-heading"><div><span className="section-kicker">WHAT WE BRING</span><h2>Different strengths.<br /><span className="gradient-text">One team.</span></h2></div><p>From the first pixel to the final API response, we enjoy building experiences that feel as good as they work.</p></div><div className="skills-grid">{skills.map((skill, i) => <motion.div key={skill} className="skill-pill" whileHover={{ y: -5, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}><span className={`skill-index skill-index-${i % 4}`}>0{i + 1}</span><span>{skill}</span><MousePointer2 size={14} className="skill-arrow" /></motion.div>)}</div></section>

    <section className="team-section"><div className="container"><div className="section-heading"><div><span className="section-kicker">THE PEOPLE BEHIND THE PIXELS</span><h2>Meet your <span className="gradient-text">builders.</span></h2></div><p>Two different specialties, the same curiosity, and a shared goal: making the web a little better.</p></div><div className="team-grid">{team.map((person, i) => <motion.article className={`team-card ${person.accent}`} key={person.email} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .12 }}><div className="team-card-top"><span className="team-label">TEAM MEMBER / 0{i + 1}</span><span className="team-visual-avatar">{person.initials}</span></div><h3>{person.name}</h3><p className="team-role">{person.role}</p><p className="team-bio">{i === 0 ? 'Focused on clear interfaces, responsive layouts, and thoughtful user experiences.' : 'Focused on reliable server-side logic, APIs, data, and the systems that power great products.'}</p><Link to="/contact" className="text-link">Say hello <ArrowRight size={15} /></Link></motion.article>)}</div></div></section>

    <section className="cta-section container"><div className="cta-panel"><div className="cta-orb" /><span className="section-kicker">HAVE SOMETHING IN MIND?</span><h2>Let’s make it<br /><span className="gradient-text">happen.</span></h2><p>Have an idea, a project, or just want to talk tech? We’d love to hear from you.</p><Link to="/contact" className="button button-primary">Start a conversation <ArrowRight size={17} /></Link><span className="cta-decoration">Y&Y</span></div></section>
  </main>;
}
