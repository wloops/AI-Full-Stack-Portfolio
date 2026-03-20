'use client';

import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-400 mb-8"
        >
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6"
        >
          {t.hero.title1} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">{t.hero.title2}</span>
          <br /> {t.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects" className="group relative px-8 py-4 bg-emerald-500 text-zinc-950 font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 flex items-center gap-2">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-2">
              <Code2 className="w-5 h-5" />
              {t.hero.btn1}
            </span>
          </a>
          
          <a href="#ai-interview" className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 text-zinc-100 font-semibold rounded-full transition-all hover:bg-zinc-800 flex items-center gap-2 group">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{t.hero.btn2}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-emerald-500" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 flex items-center justify-center gap-6 text-zinc-500"
        >
          <a href="#" className="hover:text-emerald-400 transition-colors p-2"><Github className="w-6 h-6" /></a>
          <a href="#" className="hover:text-emerald-400 transition-colors p-2"><Linkedin className="w-6 h-6" /></a>
          <a href="#" className="hover:text-emerald-400 transition-colors p-2"><Mail className="w-6 h-6" /></a>
        </motion.div>
      </div>
    </section>
  );
}
