import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return <AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .2 }}><Routes location={location}><Route path="/" element={<Home />} /><Route path="/projects" element={<Projects />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<Home />} /></Routes></motion.div></AnimatePresence>;
}

export default function App() {
  return <div className="app-shell"><div className="ambient ambient-one" /><div className="ambient ambient-two" /><Navbar /><AnimatedRoutes /><Footer /></div>;
}
