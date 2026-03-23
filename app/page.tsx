'use client';

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { SkillsSection } from '@/components/skills';
import { ExperienceSection } from '@/components/experience';
import { ProjectsSection } from '@/components/projects';
import { AiChatSection } from '@/components/ai-chat';
import { useLanguage } from '@/components/language-provider';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30 relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full" />
        <div className="absolute top-1/2 left-0 w-[600px] h-[800px] bg-emerald-900/10 blur-[150px] rounded-full" />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <AiChatSection />
        <SkillsSection />
        <ExperienceSection />
        
        <footer className="py-8 text-center border-t border-zinc-900 mt-20">
          <p className="text-zinc-600 font-mono text-sm">
            {t.footer}
          </p>
        </footer>
      </div>
    </main>
  );
}
