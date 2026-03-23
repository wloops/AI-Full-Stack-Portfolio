'use client';

import { motion, useMotionValue, useMotionTemplate } from 'motion/react';
import { MouseEvent } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';
import { ScrambleText } from '@/components/scramble-text';
import { AICodingEffect } from '@/components/ai-coding-effect';
import { AIUIEffect } from '@/components/ai-ui-effect';

export function HeroSection() {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden group"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-20"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(16, 185, 129, 0.12),
              transparent 80%
            )
          `,
        }}
      />

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: ['-50%', '-40%', '-50%'],
          y: ['-50%', '-60%', '-50%'],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-emerald-500/20 blur-[100px] rounded-full pointer-events-none" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-teal-500/20 blur-[100px] rounded-full pointer-events-none" 
      />

      {/* Left Background: AI Coding Effect */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[400px] lg:w-[500px] h-[500px] hidden md:block opacity-30 pointer-events-none z-0"
           style={{
             maskImage: 'linear-gradient(to right, black 20%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to right, black 20%, transparent 100%)'
           }}>
        <AICodingEffect className="w-full h-full" />
      </div>

      {/* Right Background: AI UI Generation Effect */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] lg:w-[500px] h-[500px] hidden md:block opacity-40 pointer-events-none z-0"
           style={{
             maskImage: 'linear-gradient(to left, black 20%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to left, black 20%, transparent 100%)'
           }}>
        <AIUIEffect className="w-full h-full" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-mono text-zinc-400 mb-8 mx-auto"
        >
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-12"
        >
          <ScrambleText text={t.hero.title1} delay={100} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600">
            <ScrambleText text={t.hero.title2} delay={400} />
          </span>
          <br /> <ScrambleText text={t.hero.title3} delay={700} />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.hero.desc}
        </motion.p>

        {/* Tech Tags */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
          className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto"
        >
          {t.hero.tags?.map((tag: string, index: number) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-4 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-mono text-emerald-400/80 hover:text-emerald-400 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-colors cursor-default backdrop-blur-sm shadow-sm"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
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
      </div>
    </section>
  );
}
