'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Terminal, Globe, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/50 py-4' : 'bg-zinc-950/0 backdrop-blur-none border-b border-zinc-800/0 py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 font-mono font-bold text-xl tracking-tighter hover:opacity-80 transition-opacity cursor-pointer"
        >
          <Terminal className="w-6 h-6 text-emerald-500" />
          <span>DEV<span className="text-emerald-500">.</span>AI</span>
        </button>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#projects" className="hover:text-emerald-400 transition-colors">{t.nav.projects}</a>
          <a href="#ai-interview" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t.nav.chat}
          </a>
          <a href="#skills" className="hover:text-emerald-400 transition-colors">{t.nav.skills}</a>
          <a href="#experience" className="hover:text-emerald-400 transition-colors">{t.nav.experience}</a>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 mr-2 pr-4 border-r border-zinc-800">
            {t.hero.socials?.github && <a href={t.hero.socials.github} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Github className="w-4 h-4" /></a>}
            {t.hero.socials?.linkedin && <a href={t.hero.socials.linkedin} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-emerald-400 transition-colors"><Linkedin className="w-4 h-4" /></a>}
            {t.hero.socials?.email && <a href={t.hero.socials.email} className="text-zinc-400 hover:text-emerald-400 transition-colors"><Mail className="w-4 h-4" /></a>}
          </div>
          <button 
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-emerald-400 transition-colors"
          >
            <Globe className="w-4 h-4" />
            <span>{lang === 'zh' ? 'EN' : '中文'}</span>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
