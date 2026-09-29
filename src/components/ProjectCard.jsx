import { motion } from 'framer-motion';
import { ArrowUpRight, Image as ImageIcon, Github } from 'lucide-react';
export default function ProjectCard({ project, index }) {
  const hasImage = Boolean(project.image.trim());
  const content = <>
    <div className="project-image">
      {hasImage ? <img src={project.image} alt={`${project.title} preview`} loading="lazy" /> : <div className="image-placeholder"><ImageIcon size={32} strokeWidth={1.3} /><span>ADD PROJECT IMAGE HERE</span><small>public/projects/your-image.png</small></div>}
      <span className="project-open"><ArrowUpRight size={20} /></span>
    </div>
    <div className="project-info"><div className="project-heading"><span className="project-number">0{index + 1}</span><span className="project-category">{project.category}</span></div><h3>{project.title}</h3><p>{project.description || 'ADD PROJECT DESCRIPTION HERE — explain what you built, the problem it solves, and what you learned.'}</p><div className="tech-list">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-link-label"><Github size={15} /> View project <ArrowUpRight size={15} /></div></div>
  </>;
  return <motion.article className="project-card" initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}>
    {project.github.trim() ? <a href={project.github} target="_blank" rel="noreferrer" className="project-card-link" aria-label={`Open ${project.title} project`}>{content}</a> : <div className="project-card-link" title="Add your project link in src/data.js">{content}</div>}
  </motion.article>;
}
