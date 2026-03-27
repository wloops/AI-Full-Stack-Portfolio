'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Cpu, 
  GitMerge, 
  Users, 
  User, 
  Database, 
  Bot, 
  Server, 
  Layout, 
  UserCheck, 
  RotateCcw, 
  Workflow, 
  ArrowDown,
  TerminalSquare,
  GitPullRequest,
  Search,
  BrainCircuit,
  XCircle,
  CheckCircle,
  MessageSquare,
  Rocket
} from 'lucide-react';
import { dict, Language } from '@/lib/i18n';

const icons = {
  ShieldCheck,
  Cpu,
  GitMerge,
  Users,
};

function Node({ type, icon: Icon, title, children, className = '' }: any) {
  const styles = {
    human: 'border-purple-500/30 bg-purple-500/10 text-purple-300 shadow-[0_0_15px_rgba(168,85,247,0.1)]',
    ai: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
    sys: 'border-amber-500/30 bg-amber-500/10 text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]',
  };

  return (
    <div className={`relative p-4 rounded-xl border backdrop-blur-sm flex flex-col items-center text-center gap-2 ${styles[type as keyof typeof styles]} ${className}`}>
      {Icon && <Icon className="w-5 h-5 mb-1 opacity-80" />}
      <span className="font-medium text-sm md:text-base">{title}</span>
      {children && <div className="text-xs opacity-80 mt-2">{children}</div>}
    </div>
  );
}

function Merge2To1() {
  return (
    <>
      <div className="md:hidden flex flex-col items-center my-2 opacity-50">
        <div className="w-px h-8 bg-zinc-600" />
        <ArrowDown className="w-4 h-4 text-zinc-600 -mt-1" />
      </div>
      <div className="hidden md:grid grid-cols-2 gap-8 w-full h-12 opacity-50 relative">
        <div className="absolute top-6 left-[25%] right-[25%] h-px bg-zinc-600" />
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-px h-6 bg-zinc-600" />
        <ArrowDown className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 text-zinc-600" />
        
        <div className="relative flex justify-center items-start h-full">
          <div className="w-px h-6 bg-zinc-600" />
        </div>
        <div className="relative flex justify-center items-start h-full">
          <div className="w-px h-6 border-l-2 border-dashed border-zinc-600" />
        </div>
      </div>
    </>
  );
}

function Split1To3({ label }: { label?: string }) {
  return (
    <>
      <div className="md:hidden flex flex-col items-center my-2 opacity-50">
        {label && <span className="text-xs mb-1 text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded-full border border-zinc-800">{label}</span>}
        <div className="w-px h-8 bg-zinc-600" />
        <ArrowDown className="w-4 h-4 text-zinc-600 -mt-1" />
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4 w-full h-16 opacity-50 relative">
        <div className="absolute top-8 left-[16.66%] right-[16.66%] h-px bg-zinc-600" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-600" />
        {label && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-xs text-emerald-400/80 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 whitespace-nowrap">{label}</span>
          </div>
        )}
        
        <div className="relative flex justify-center items-end h-full">
          <div className="w-px h-8 bg-zinc-600" />
          <ArrowDown className="absolute bottom-0 translate-y-1/2 w-4 h-4 text-zinc-600" />
        </div>
        <div className="relative flex justify-center items-end h-full">
          <div className="w-px h-8 bg-zinc-600" />
          <ArrowDown className="absolute bottom-0 translate-y-1/2 w-4 h-4 text-zinc-600" />
        </div>
        <div className="relative flex justify-center items-end h-full">
          <div className="w-px h-8 bg-zinc-600" />
          <ArrowDown className="absolute bottom-0 translate-y-1/2 w-4 h-4 text-zinc-600" />
        </div>
      </div>
    </>
  );
}

function Merge3To1({ label }: { label?: string }) {
  return (
    <>
      <div className="md:hidden flex flex-col items-center my-2 opacity-50">
        {label && <span className="text-xs mb-1 text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded-full border border-zinc-800">{label}</span>}
        <div className="w-px h-8 bg-zinc-600" />
        <ArrowDown className="w-4 h-4 text-zinc-600 -mt-1" />
      </div>
      <div className="hidden md:grid grid-cols-3 gap-4 w-full h-16 opacity-50 relative">
        <div className="absolute top-8 left-[16.66%] right-[16.66%] h-px bg-zinc-600" />
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-600" />
        {label && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <span className="text-xs text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded-full border border-zinc-800 whitespace-nowrap">{label}</span>
          </div>
        )}
        <ArrowDown className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 text-zinc-600" />
        
        <div className="relative flex justify-center items-start h-full">
          <div className="w-px h-8 bg-zinc-600" />
        </div>
        <div className="relative flex justify-center items-start h-full">
          <div className="w-px h-8 bg-zinc-600" />
        </div>
        <div className="relative flex justify-center items-start h-full">
          <div className="w-px h-8 bg-zinc-600" />
        </div>
      </div>
    </>
  );
}

function SimpleArrow({ label, dashed }: { label?: string, dashed?: boolean }) {
  return (
    <div className="flex flex-col items-center my-2 opacity-50">
      {label && <span className="text-xs mb-1 text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded-full border border-zinc-800">{label}</span>}
      <div className={`w-px h-8 ${dashed ? 'border-l-2 border-dashed border-zinc-600' : 'bg-zinc-600'}`} />
      <ArrowDown className="w-4 h-4 text-zinc-600 -mt-1" />
    </div>
  );
}

export function AiWorkflow({ lang }: { lang: Language }) {
  const [activeTab, setActiveTab] = useState<'arch' | 'cicd'>('arch');
  const content = dict[lang].workflow;
  const d = content.diagram.nodes;
  const c = content.diagram.cicd;

  return (
    <section id="workflow" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/10 text-emerald-500 text-sm font-medium mb-4 border border-emerald-500/20">
            {content.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
            {content.title1} <span className="text-emerald-500">{content.title2}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            {content.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.items.map((item, index) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`glass-panel p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-emerald-500/30 transition-colors duration-500 ${
                  index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Background Glow Effect */}
                <div className="absolute -inset-px bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-500 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]">
                    <Icon className="w-6 h-6 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-100 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                
                {/* Decorative Grid Pattern for Cards */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-grid-pattern opacity-10 pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Diagram Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-zinc-100 tracking-tight mb-6">
              {activeTab === 'arch' ? content.diagram.title : c.title}
            </h3>
            
            {/* Tab Switcher */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setActiveTab('arch')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'arch' 
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                    : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:text-zinc-200'
                }`}
              >
                {content.diagram.tabs.arch}
              </button>
              <button
                onClick={() => setActiveTab('cicd')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === 'cicd' 
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' 
                    : 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:text-zinc-200'
                }`}
              >
                {content.diagram.tabs.cicd}
              </button>
            </div>
          </div>
          
          {/* Architecture Diagram Tab */}
          {activeTab === 'arch' && (
            <div className="relative p-6 md:p-10 glass-panel rounded-3xl border border-white/5 bg-zinc-900/20">
              {/* Background Grid */}
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none rounded-3xl" />
              
              <div className="relative z-10">
              {/* Row 1 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div className="flex flex-col items-center h-full">
                  <Node type="human" title={d.prd} icon={User} className="w-full h-full justify-center" />
                </div>
                <div className="flex flex-col items-center h-full">
                  <Node type="sys" title={d.rag} icon={Database} className="w-full h-full">
                    <div className="flex flex-col gap-1.5 mt-3 text-xs text-amber-200/70">
                      <div className="bg-amber-500/10 px-2 py-1.5 rounded border border-amber-500/20">{d.rag1}</div>
                      <div className="bg-amber-500/10 px-2 py-1.5 rounded border border-amber-500/20">{d.rag2}</div>
                      <div className="bg-amber-500/10 px-2 py-1.5 rounded border border-amber-500/20">{d.rag3}</div>
                    </div>
                  </Node>
                </div>
              </div>

              <Merge2To1 />

              {/* --- REJECT LOOP WRAPPER --- */}
              <div className="relative w-full">
                {/* Reject Loop Lines (Desktop) */}
                <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                  {/* Top-Left Corner (Goes to Architect Agent) */}
                  <div className="absolute top-[2.5rem] bottom-[50%] left-[4%] right-[83.33%] border-t-2 border-l-2 border-dashed border-red-500/30 rounded-tl-xl">
                    {/* Arrow pointing right into Architect Agent */}
                    <div className="absolute top-[-7px] right-[-6px] text-red-500/50 -rotate-90">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                    {/* Arrow pointing up on the left vertical line */}
                    <div className="absolute bottom-[20%] left-[-7px] text-red-500/50 rotate-180">
                      <ArrowDown className="w-3 h-3" />
                    </div>
                  </div>
                  
                  {/* Bottom-Left Corner (Comes from Human Review) */}
                  <div className="absolute top-[50%] bottom-[2.5rem] left-[4%] right-[75%] border-b-2 border-l-2 border-dashed border-red-500/30 rounded-bl-xl">
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex justify-center relative z-10">
                  <Node type="ai" title={d.architect} icon={Bot} className="w-full md:w-2/3" />
                </div>
                
                <Split1To3 label={d.specs} />

                {/* Row 3 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative z-10">
                  <Node type="ai" title={d.specData} icon={Database} className="h-full" />
                  <Node type="ai" title={d.specService} icon={Server} className="h-full" />
                  <Node type="ai" title={d.specView} icon={Layout} className="h-full" />
                </div>

                <Merge3To1 />

                {/* Row 4 */}
                <div className="flex justify-center relative z-10 w-full">
                  <Node type="human" title={d.review} icon={UserCheck} className="w-full md:w-1/2" />
                  
                  {/* Reject Loop Badge */}
                  <div className="absolute left-[6%] top-1/2 -translate-y-1/2 hidden md:flex items-center z-20 w-[18%]">
                    <div className="flex items-start gap-2 text-red-400/80 text-xs border border-red-500/20 bg-red-500/10 px-3 py-2 rounded-lg shadow-lg backdrop-blur-md w-full">
                      <RotateCcw className="w-3 h-3 shrink-0 mt-0.5" />
                      <span className="whitespace-normal leading-tight">{d.reject}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* --- END REJECT LOOP WRAPPER --- */}

              <SimpleArrow label={d.approve} />

              {/* Row 5 */}
              <div className="flex justify-center">
                <Node type="sys" title={d.langgraph} icon={Workflow} className="w-full md:w-2/3" />
              </div>

              <Split1To3 />

              {/* Row 6 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Node type="ai" title={d.agentDb} icon={Database} className="h-full" />
                <Node type="ai" title={d.agentBackend} icon={Server} className="h-full" />
                <Node type="ai" title={d.agentFrontend} icon={Layout} className="h-full" />
              </div>

              <Merge3To1 />

              {/* Row 7 */}
              <div className="flex justify-center">
                <Node type="ai" title={d.reviewer} icon={ShieldCheck} className="w-full md:w-2/3" />
              </div>
            </div>
          </div>
          )}

          {/* CI/CD Diagram Tab */}
          {activeTab === 'cicd' && (
            <div className="relative p-6 md:p-10 glass-panel rounded-3xl border border-white/5 bg-zinc-900/20">
              <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none rounded-3xl" />
              
              <div className="relative z-10 flex flex-col items-center gap-0 w-full">
                
                {/* --- REJECT LOOP WRAPPER --- */}
                <div className="relative w-full">
                  {/* Reject Loop Lines (Desktop) */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
                    {/* Top-Left Corner (Goes to Dev) */}
                    <div className="absolute top-[2.5rem] bottom-[50%] left-[-2rem] w-[2rem] border-t-2 border-l-2 border-dashed border-red-500/30 rounded-tl-xl">
                      {/* Arrow pointing right into Dev */}
                      <div className="absolute top-[-7px] right-[-6px] text-red-500/50 -rotate-90">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                      {/* Arrow pointing up on the left vertical line */}
                      <div className="absolute bottom-[20%] left-[-7px] text-red-500/50 rotate-180">
                        <ArrowDown className="w-3 h-3" />
                      </div>
                    </div>
                    
                    {/* Bottom-Left Corner (Comes from Block MR) */}
                    <div className="absolute top-[50%] bottom-[2.5rem] left-[-2rem] w-[2rem] border-b-2 border-l-2 border-dashed border-red-500/30 rounded-bl-xl">
                    </div>
                  </div>

                  {/* Stage 1: Commit */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full relative z-10">
                    <Node type="human" title={c.dev} icon={User} className="h-full" />
                    <Node type="sys" title={c.ide} icon={TerminalSquare} className="h-full" />
                    <Node type="sys" title={c.git} icon={GitPullRequest} className="h-full" />
                    
                    {/* Horizontal Connectors for Stage 1 (Desktop only) */}
                    <div className="hidden md:block absolute top-1/2 left-[16.66%] right-[83.33%] h-[2px] bg-zinc-700/50 -translate-y-1/2 -z-10">
                      <ArrowDown className="absolute right-[-6px] top-[-7px] text-zinc-500/50 -rotate-90 w-3 h-3" />
                    </div>
                    <div className="hidden md:block absolute top-1/2 left-[50%] right-[50%] h-[2px] bg-zinc-700/50 -translate-y-1/2 -z-10">
                      <ArrowDown className="absolute right-[-6px] top-[-7px] text-zinc-500/50 -rotate-90 w-3 h-3" />
                    </div>
                  </div>

                  {/* Vertical Connector to CI Pipeline */}
                  <div className="w-full flex justify-end relative h-16 z-10">
                    <div className="absolute right-[16.66%] top-0 bottom-0 w-[2px] bg-zinc-700/50">
                      <ArrowDown className="absolute bottom-[-6px] left-[-5px] text-zinc-500/50 w-3 h-3" />
                    </div>
                    <div className="absolute right-[18%] top-1/2 -translate-y-1/2 text-xs text-zinc-400 bg-zinc-900/80 px-2 py-1 rounded-md border border-zinc-800">
                      {c.trigger}
                    </div>
                  </div>

                  {/* Stage 2: Quality Gate (The Core) */}
                  <div className="w-full border-2 border-blue-500/20 bg-blue-500/5 p-6 md:p-8 rounded-2xl relative z-10 shadow-[inset_0_0_30px_rgba(59,130,246,0.05)]">
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-zinc-900 px-4 py-1 rounded-full border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider flex items-center gap-2 whitespace-nowrap">
                      <Search className="w-3 h-3" />
                      {c.gate}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                      <Node type="sys" title={c.sonar} icon={Search} className="h-full border-blue-500/20 bg-blue-500/10 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]" />
                      <div className="relative h-full">
                        <Node type="ai" title={c.agent} icon={BrainCircuit} className="h-full" />
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[90%] text-[10px] text-emerald-400/80 bg-emerald-950/80 border border-emerald-500/20 px-2 py-1 rounded text-center whitespace-nowrap">
                          {c.agentDesc}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vertical Connector to Decision */}
                  <div className="w-full flex justify-center relative h-16 z-10">
                    <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-700/50">
                      <ArrowDown className="absolute bottom-[-6px] left-[-5px] text-zinc-500/50 w-3 h-3" />
                    </div>
                  </div>

                  {/* Stage 3: Decision Split */}
                  <div className="w-full relative z-10">
                    {/* Split Lines */}
                    <div className="hidden md:block absolute top-0 left-[25%] right-[25%] h-[2px] bg-zinc-700/50 z-0">
                      <div className="absolute left-0 top-0 bottom-[-2rem] w-[2px] bg-zinc-700/50">
                        <ArrowDown className="absolute bottom-[-6px] left-[-5px] text-zinc-500/50 w-3 h-3" />
                      </div>
                      <div className="absolute right-0 top-0 bottom-[-2rem] w-[2px] bg-zinc-700/50">
                        <ArrowDown className="absolute bottom-[-6px] left-[-5px] text-zinc-500/50 w-3 h-3" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 md:pt-12">
                      {/* Fail Path */}
                      <div className="flex flex-col items-center relative">
                        <div className="text-red-400 mb-4 flex items-center gap-2 text-sm font-medium bg-red-500/10 px-3 py-1 rounded-full border border-red-500/20">
                          <XCircle className="w-4 h-4" /> 
                          {c.fail}
                        </div>
                        <Node type="sys" title={c.block} icon={MessageSquare} className="w-full border-red-500/30 bg-red-500/10 text-red-300 shadow-[0_0_15px_rgba(239,68,68,0.1)]" />
                      </div>

                      {/* Pass Path */}
                      <div className="flex flex-col items-center">
                        <div className="text-emerald-400 mb-4 flex items-center gap-2 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                          <CheckCircle className="w-4 h-4" /> 
                          {c.pass}
                        </div>
                        <Node type="sys" title={c.deploy} icon={Rocket} className="w-full border-emerald-500/30 bg-emerald-500/10 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.1)]" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* --- END REJECT LOOP WRAPPER --- */}

              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
