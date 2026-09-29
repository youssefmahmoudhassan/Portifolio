import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [{ to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' }, { to: '/contact', label: 'Contact' }];
  return <header className="site-header">
    <div className="nav-wrap container">
      <Link to="/" className="brand" onClick={() => setOpen(false)}><span className="brand-mark"><Sparkles size={17} /></span><span>Y <i>&</i> Y<span className="brand-dot">.</span></span></Link>
      <button className="menu-toggle" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)}>{link.label}</NavLink>)}
        <Link className="nav-cta" to="/contact" onClick={() => setOpen(false)}>Let’s talk <span>↗</span></Link>
      </nav>
    </div>
  </header>;
}
