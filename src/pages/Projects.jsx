import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';

export default function Projects() {
  return <main className="page-main container projects-page">
    <motion.section className="page-hero" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .55 }}><div className="page-hero-copy"><span className="eyebrow"><span className="status-dot" /> A SELECTION OF OUR WORK</span><h1>Ideas made <span className="gradient-text">real.</span></h1><p>A collection of experiments, team projects, and things we’ve built along the way. Every project is a chance to learn something new.</p><a className="scroll-hint" href="#project-grid">EXPLORE PROJECTS <ArrowDown size={14} /></a></div><div className="page-hero-art"><div className="art-ring ring-a" /><div className="art-ring ring-b" /><div className="art-code"><span>&lt;</span><b>/</b><span>&gt;</span></div><Sparkles className="art-sparkle" size={25} /><span className="art-caption">DESIGN · BUILD · REPEAT</span></div></motion.section>
    <div className="projects-toolbar" id="project-grid"><div><span className="section-kicker">THE PROJECT ARCHIVE</span><h2>Selected work <span className="muted-count">({String(projects.length).padStart(2, '0')})</span></h2></div><p>Click a project card to visit its link.<br />Technologies used are listed on each card.</p></div>
    <section className="projects-grid">{projects.map((project, index) => <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />)}</section>
    <section className="projects-note"><span className="note-mark">✳</span><div><h3>More projects are always in progress.</h3><p>We’re constantly learning, experimenting, and adding new work to the collection.</p></div></section>
  </main>;
}
