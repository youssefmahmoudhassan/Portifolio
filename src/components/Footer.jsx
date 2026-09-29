import { Link } from 'react-router-dom';
import { ArrowUpRight, Heart } from 'lucide-react';
export default function Footer() {
  return <footer className="footer"><div className="container footer-inner"><Link to="/" className="brand"><span className="brand-mark">Y</span><span>Y <i>&</i> Y<span className="brand-dot">.</span></span></Link><p>Two minds. One shared vision. <Heart size={13} className="inline-heart" /></p><Link className="back-top" to="/">Back to top <ArrowUpRight size={15} /></Link></div></footer>;
}
