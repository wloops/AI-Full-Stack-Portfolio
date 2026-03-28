'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, User, Layout, Server, Cpu, BrainCircuit, Search, Database, Network } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ArchitectureViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Fixed coordinates in a 1600x900 virtual canvas
const NODES = [
  { id: 'user', label: '用户', x: 150, y: 450, icon: User, tech: 'Client', desc: '发起查询与文档上传' },
  { id: 'frontend', label: '前端', x: 400, y: 450, icon: Layout, tech: 'Next.js + Tailwind', desc: '交互界面与状态管理' },
  { id: 'api', label: 'FastAPI', x: 700, y: 450, icon: Server, tech: 'Backend', desc: '核心业务逻辑与流式响应' },
  { id: 'llm', label: 'LLM', x: 1100, y: 150, icon: BrainCircuit, tech: '大语言模型', desc: '上下文理解与答案生成' },
  { id: 'embed', label: 'Embedding', x: 1100, y: 350, icon: Cpu, tech: 'Text Embedding', desc: '文本向量化处理' },
  { id: 'retrieval', label: 'Retrieval', x: 1100, y: 550, icon: Search, tech: '向量检索', desc: '召回 Top-K 相关切片' },
  { id: 'db', label: 'PostgreSQL + pgvector', x: 1450, y: 450, icon: Database, tech: 'Relational & Vector DB', desc: '会话持久化与高维向量索引' },
];

const EDGES = [
  { source: 'user', target: 'frontend', animated: true },
  { source: 'frontend', target: 'api', animated: true },
  { source: 'api', target: 'llm', animated: true },
  { source: 'api', target: 'embed', animated: true },
  { source: 'api', target: 'retrieval', animated: true },
  { source: 'api', target: 'db', animated: true },
  { source: 'embed', target: 'db', animated: true },
  { source: 'retrieval', target: 'db', animated: true },
];

export function ArchitectureViewer({ isOpen, onClose }: ArchitectureViewerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Helper to draw smooth bezier curves between nodes
  const getPath = (sourceId: string, targetId: string) => {
    const source = NODES.find(n => n.id === sourceId);
    const target = NODES.find(n => n.id === targetId);
    if (!source || !target) return '';

    const sx = source.x;
    const sy = source.y;
    const tx = target.x;
    const ty = target.y;

    // Control points for horizontal cubic bezier
    const cx1 = sx + (tx - sx) / 2;
    const cy1 = sy;
    const cx2 = sx + (tx - sx) / 2;
    const cy2 = ty;

    return `M ${sx} ${sy} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${tx} ${ty}`;
  };

  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-zinc-950/90 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-7xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950/50">
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5 text-emerald-500" />
                <h3 className="font-mono font-bold text-zinc-100">System Architecture</h3>
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 ml-2">
                  Live Data Flow
                </span>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-zinc-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Canvas Area with horizontal scroll for smaller screens */}
            <div className="w-full overflow-x-auto bg-grid-pattern">
              <div className="relative min-w-[1200px] w-full aspect-video overflow-hidden">
                {/* SVG Layer for Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1600 900" preserveAspectRatio="none">
                  {EDGES.map((edge, i) => {
                    const path = getPath(edge.source, edge.target);
                    return (
                      <g key={i}>
                        {/* Base Line */}
                        <motion.path
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.2 }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.1, ease: "easeInOut" }}
                          d={path}
                          fill="none"
                          stroke="#10b981"
                          strokeWidth="3"
                        />
                        {/* Animated Flow Line */}
                        {edge.animated && (
                          <motion.path
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 2 + i * 0.1 }}
                            d={path}
                            fill="none"
                            stroke="#34d399"
                            strokeWidth="3"
                            strokeDasharray="8 16"
                          >
                            <animate attributeName="stroke-dashoffset" from="24" to="0" dur="1s" repeatCount="indefinite" />
                          </motion.path>
                        )}
                      </g>
                    );
                  })}
                </svg>

                {/* HTML Layer for Nodes */}
                {NODES.map((node, i) => {
                  const Icon = node.icon;
                  return (
                    <div
                      key={node.id}
                      className="absolute w-0 h-0 flex items-center justify-center"
                      style={{ 
                        left: `${(node.x / 1600) * 100}%`, 
                        top: `${(node.y / 900) * 100}%`,
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          type: 'spring', 
                          damping: 20, 
                          stiffness: 200, 
                          delay: i * 0.1 
                        }}
                        className="relative group"
                      >
                      {/* Node Card */}
                      <div className="relative z-10 flex flex-col items-center justify-center w-24 sm:w-32 p-3 bg-zinc-950 border border-zinc-800 rounded-xl shadow-xl hover:border-emerald-500/50 hover:shadow-emerald-500/10 transition-all cursor-crosshair">
                      <div className="p-2 bg-zinc-900 rounded-lg mb-2 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-xs sm:text-sm font-bold text-zinc-200 text-center leading-tight">
                        {node.label}
                      </span>
                      <span className="text-[10px] sm:text-xs font-mono text-zinc-500 mt-1 text-center">
                        {node.tech}
                      </span>

                      {/* Tooltip (Hover) */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-3 bg-zinc-800 border border-zinc-700 rounded-lg shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 transition-all z-50">
                        <p className="text-xs text-zinc-300 leading-relaxed">
                          {node.desc}
                        </p>
                        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-800 border-b border-r border-zinc-700 rotate-45" />
                      </div>
                    </div>

                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-emerald-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  if (!mounted) return null;

  return createPortal(modalContent, document.body);
}
