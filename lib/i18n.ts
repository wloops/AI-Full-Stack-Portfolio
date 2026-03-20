export type Language = 'zh' | 'en';

export const dict = {
  zh: {
    nav: { skills: '技能', experience: '经历', projects: '项目', chat: 'AI 导览', resume: '简历' },
    hero: {
      badge: 'Hello, World! 我是候选人',
      title1: '探索我的',
      title2: 'AI 与 Web',
      title3: '项目',
      desc: '专注大前端与 AI 全栈开发。这里展示了我构建的生产级 Web 应用、AI 智能体工作流以及高性能交互界面。',
      btn1: '浏览核心项目',
      btn2: '与我的 AI 导览对话'
    },
    projects: {
      badge: '项目展示',
      title1: '精选',
      title2: '项目',
      desc: '深入业务场景，解决实际问题。这里展示了我主导架构和开发的核心项目，涵盖 AI 智能体、流式交互与高性能渲染。',
      viewAll: '在 GitHub 上查看全部',
      demo: '在线演示',
      source: '源码',
      list: [
        {
          title: 'Agentic Workflow Builder',
          description: '基于 React Flow 和 LangGraph 的可视化 AI 智能体编排工具。支持拖拽式构建多 Agent 协作流，实时流式输出执行过程。',
          tech: ['Next.js', 'React Flow', 'LangGraph', 'FastAPI', 'SSE']
        },
        {
          title: 'Real-time RAG Search',
          description: '企业级知识库问答引擎。采用 Vercel AI SDK 实现极致的流式打字机体验，结合 Pinecone 向量检索。',
          tech: ['Vue 3', 'Vercel AI SDK', 'Pinecone', 'OpenAI']
        },
        {
          title: 'Streaming UI Components',
          description: '专为大模型应用设计的 React 组件库。内置 Markdown 流式渲染、代码高亮、打字机光标及降级容错机制。',
          tech: ['React', 'Tailwind', 'Framer Motion', 'Radix UI']
        },
        {
          title: 'High-Performance Canvas',
          description: '支持万人在线的协同白板。采用 CRDT (Yjs) 解决冲突，WebGL 渲染引擎突破 DOM 性能瓶颈。',
          tech: ['TypeScript', 'Yjs', 'WebGL', 'WebSockets']
        }
      ]
    },
    chat: {
      badge: '互动演示',
      title1: '向',
      title2: 'AI 助理',
      title3: '提问',
      desc: '想了解我的背景？与我的 AI 导览员对话，深入了解我的技术栈和项目经验。',
      aiName: 'AI 导览员',
      online: '在线',
      placeholder: '问问关于 React 的经验...',
      error: '抱歉，网络似乎开小差了。请稍后再试。',
      initialMsg: '你好！我是这个项目的 AI 导览员。你可以问我关于这些项目的技术架构、难点（比如流式渲染、状态同步），或者直接聊聊我的技术栈。'
    },
    skills: {
      title1: '技术',
      title2: '武器库',
      desc: '7年沉淀，打造高可扩展、高性能 Web 应用与 AI 产品的全栈工具箱。',
      categories: ['前端架构', 'AI 集成', '后端与 API', '工程化与 DevOps']
    },
    experience: {
      title1: '职业',
      title2: '旅程',
      list: [
        {
          role: '资深前端架构师',
          company: 'TechNova AI',
          period: '2022 - 至今',
          description: '主导企业级 AI 平台的前端架构。将遗留 SPA 迁移至 Next.js App Router，LCP 提升 40%。实现了复杂的大模型流式交互 UI。'
        },
        {
          role: '全栈开发工程师',
          company: 'DataSphere Solutions',
          period: '2019 - 2022',
          description: '使用 Vue 3 和 Node.js 架构并开发实时数据可视化看板。设计 RESTful API 并优化 PostgreSQL 查询以支持高吞吐量数据写入。'
        },
        {
          role: '前端工程师',
          company: 'Creative Web Agency',
          period: '2017 - 2019',
          description: '开发像素级完美、高度动画化的营销网站和电商平台。精通 CSS、复杂动画及跨浏览器兼容性。'
        }
      ]
    },
    footer: '© 2026 用代码与咖啡精心打造。'
  },
  en: {
    nav: { skills: 'Skills', experience: 'Experience', projects: 'Projects', chat: 'AI Chat', resume: 'Resume' },
    hero: {
      badge: 'Hello, World! I am the candidate',
      title1: 'Explore My',
      title2: 'AI & Web',
      title3: 'Projects.',
      desc: 'Focusing on Frontend & AI Full-Stack development. Showcasing production-grade web apps, AI agent workflows, and high-performance UIs.',
      btn1: 'View Core Projects',
      btn2: 'Chat with AI Guide'
    },
    projects: {
      badge: 'Project Showcase',
      title1: 'Featured',
      title2: 'Projects',
      desc: 'Solving real-world problems. Here are the core projects I\'ve architected and developed, covering AI agents, streaming interactions, and high-performance rendering.',
      viewAll: 'View all on GitHub',
      demo: 'Live Demo',
      source: 'Source',
      list: [
        {
          title: 'Agentic Workflow Builder',
          description: 'Visual AI agent orchestration tool based on React Flow and LangGraph. Supports drag-and-drop multi-agent workflows with real-time streaming execution.',
          tech: ['Next.js', 'React Flow', 'LangGraph', 'FastAPI', 'SSE']
        },
        {
          title: 'Real-time RAG Search',
          description: 'Enterprise knowledge base Q&A engine. Uses Vercel AI SDK for ultimate streaming typewriter experience, combined with Pinecone vector search.',
          tech: ['Vue 3', 'Vercel AI SDK', 'Pinecone', 'OpenAI']
        },
        {
          title: 'Streaming UI Components',
          description: 'React component library designed for LLM apps. Built-in Markdown streaming rendering, syntax highlighting, typewriter cursors, and fallback mechanisms.',
          tech: ['React', 'Tailwind', 'Framer Motion', 'Radix UI']
        },
        {
          title: 'High-Performance Canvas',
          description: 'Collaborative whiteboard supporting 10k+ concurrent users. Uses CRDT (Yjs) for conflict resolution and WebGL rendering to break DOM performance bottlenecks.',
          tech: ['TypeScript', 'Yjs', 'WebGL', 'WebSockets']
        }
      ]
    },
    chat: {
      badge: 'Interactive Demo',
      title1: 'Ask the',
      title2: 'AI Assistant',
      title3: '',
      desc: 'Curious about my background? Chat with my AI guide to learn more about my tech stack and project experience.',
      aiName: 'AI Guide',
      online: 'Online',
      placeholder: 'Ask about my React experience...',
      error: 'Sorry, network error. Please try again later.',
      initialMsg: 'Hello! I\'m the AI guide for this portfolio. You can ask me about the technical architecture, challenges (like streaming, state sync), or my overall tech stack.'
    },
    skills: {
      title1: 'Technical',
      title2: 'Arsenal',
      desc: 'A comprehensive toolkit forged over 7 years of building scalable, high-performance web applications and AI-driven products.',
      categories: ['Frontend Architecture', 'AI Integration', 'Backend & APIs', 'Engineering & DevOps']
    },
    experience: {
      title1: 'Career',
      title2: 'Journey',
      list: [
        {
          role: 'Senior Frontend Architect',
          company: 'TechNova AI',
          period: '2022 - Present',
          description: 'Leading the frontend architecture for an enterprise AI platform. Migrated legacy SPA to Next.js App Router, improving LCP by 40%. Implemented complex streaming UI for LLM interactions.'
        },
        {
          role: 'Full-Stack Developer',
          company: 'DataSphere Solutions',
          period: '2019 - 2022',
          description: 'Architected and built real-time data visualization dashboards using Vue 3 and Node.js. Designed RESTful APIs and optimized PostgreSQL queries for high-throughput data ingestion.'
        },
        {
          role: 'Frontend Engineer',
          company: 'Creative Web Agency',
          period: '2017 - 2019',
          description: 'Developed pixel-perfect, highly animated marketing websites and e-commerce platforms. Mastered CSS, animations, and cross-browser compatibility.'
        }
      ]
    },
    footer: '© 2026 Crafted with code & coffee.'
  }
};
