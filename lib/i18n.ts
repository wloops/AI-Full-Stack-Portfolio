export type Language = 'zh' | 'en';

export const dict = {
  zh: {
    nav: { skills: '技能', experience: '经历', projects: '项目', chat: 'AI 导览', resume: '简历' },
    hero: {
      badge: 'Hello, World! 我是刘文龙',
      title1: '探索我的',
      title2: '全栈与 AI',
      title3: '项目',
      desc: '7 年全栈研发经验（偏前端），深入掌握 Vue 3/React 生态。专注工程化架构、低代码引擎开发，并致力于将 LLM 深度集成至业务流中。',
      btn1: '浏览核心项目',
      btn2: '与我的 AI 导览对话',
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:wloops@foxmail.com'
      }
    },
    projects: {
      badge: '项目展示',
      title1: '精选',
      title2: '项目',
      desc: '深入业务场景，解决实际问题。这里展示了我主导架构和开发的核心项目，涵盖低代码引擎、大屏可视化与 AI 赋能。',
      viewAll: '在 GitHub 上查看全部',
      viewAllLink: 'https://github.com',
      demo: '在线演示',
      source: '源码',
      details: '查看详情',
      list: [
        {
          title: 'AI 知识库问答平台（RAG + Agent 工作台）',
          description: '正在研发中的 AI 知识库问答平台。结合 RAG 技术与 Agent 工作台，提供智能化的知识检索与问答服务。',
          tech: ['LLM', 'RAG', 'Agent', 'AI 集成'],
          images: [
            'https://picsum.photos/seed/rag1/1200/800',
            'https://picsum.photos/seed/rag2/1200/800',
            'https://picsum.photos/seed/rag3/1200/800'
          ],
          github: 'https://github.com',
          demo: 'https://demo.example.com'
        },
        {
          title: 'HOBY全流程供应链数据服务平台',
          description: '面向政企的大型 B2B 供应链服务平台。从 0 到 1 设计 React 配置端 + Vue 3 渲染端的双引擎低代码体系，将标准 CRUD 页面交付周期从 2 天缩短至 0.5 天。引入 Node.js BFF 层结合 DeepSeek API 实现字段智能匹配与纠错。',
          tech: ['React', 'Vue 3', 'Node.js', 'DeepSeek API', 'JSON Schema'],
          images: [
            'https://picsum.photos/seed/hoby1/1200/800',
            'https://picsum.photos/seed/hoby2/1200/800'
          ],
          demo: 'https://demo.example.com'
        },
        {
          title: '密码安全态势感知平台（数据可视化大屏）',
          description: '面向政企安全运营的监控中枢。设计拖拽编排 + JSON Schema 驱动的可视化页面配置引擎。通过 WebSocket + ECharts 增量渲染策略解决海量数据推送下的 DOM 节点暴涨与内存泄漏问题。',
          tech: ['WebSocket', 'ECharts', 'JSON Schema', '性能调优'],
          images: [
            'https://picsum.photos/seed/screen1/1200/800',
            'https://picsum.photos/seed/screen2/1200/800'
          ]
        },
        {
          title: '密码服务平台',
          description: '面向行内业务系统提供统一密码能力与安全接入的核心系统。主导系统从 JSP 平滑迁移向 Vue 2；前端底层集成国密（SM2/SM4）数据加密通道，完成全栈安全闭环。',
          tech: ['Vue 2', 'Webpack', '国密算法', 'GitLab CI/CD'],
          images: [
            'https://picsum.photos/seed/crypto1/1200/800',
            'https://picsum.photos/seed/crypto2/1200/800'
          ]
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
      placeholder: '问问关于低代码引擎的经验...',
      error: '抱歉，网络似乎开小差了。请稍后再试。',
      initialMsg: '你好！我是刘文龙的 AI 导览员。你可以问我关于他的全栈开发经验、低代码架构设计，或者他在 AI 集成方面的实战经验。'
    },
    skills: {
      title1: '技术',
      title2: '武器库',
      desc: '7年沉淀，打造高可扩展、高性能 Web 应用与 AI 产品的全栈工具箱。',
      categories: [
        { name: '前端与跨端', items: ['Vue 3', 'React', 'Pinia / Vuex', 'Zustand', 'uni-app', 'ECharts'] },
        { name: '后端与服务端', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Java', 'Spring Boot'] },
        { name: '低代码与可视化', items: ['JSON Schema', '拖拽编排', 'WebSocket', '增量渲染', 'Canvas / WebGL'] },
        { name: '运维、安全与 AI', items: ['Docker', 'Nginx', 'GitLab CI/CD', '国密算法 (SM2/SM4)', 'LLM 集成', 'Prompt 工程'] }
      ]
    },
    experience: {
      title1: '职业',
      title2: '旅程',
      list: [
        {
          role: '开发经理（全栈/前端负责人）',
          company: '湖南货比网络科技有限公司',
          period: '2025.03 - 2026.02',
          description: '主导前端 Monorepo 架构落地；自研 JSON Schema 双引擎低代码体系；独立承担 Java 后端核心接口开发，引入 Node.js BFF 打通 AI 能力（智能匹配 + OCR 纠错）；推行 DevOps 自动化发布。'
        },
        {
          role: '研发工程师',
          company: '北京江南天安科技有限公司（广州分公司）',
          period: '2021.07 - 2025.02',
          description: '主导核心系统向 Vue 2/3 平滑迁移；攻坚大屏海量数据渲染与内存泄漏问题；在前端底层落地国密算法（SM2/SM4）加密通道，完成全栈安全闭环。'
        },
        {
          role: '前端开发工程师',
          company: '广州点乐信息科技有限公司',
          period: '2019.09 - 2021.06',
          description: '负责管理后台、移动端 H5 及微信小程序前端研发，封装高复用业务组件；落地移动端性能优化方案与弱网重试兜底逻辑。'
        }
      ]
    },
    footer: '© 2026 刘文龙. Crafted with code & coffee.'
  },
  en: {
    nav: { skills: 'Skills', experience: 'Experience', projects: 'Projects', chat: 'AI Chat', resume: 'Resume' },
    hero: {
      badge: 'Hello, World! I am Wenlong Liu',
      title1: 'Explore My',
      title2: 'Full-Stack & AI',
      title3: 'Projects.',
      desc: '7 years of full-stack experience with deep expertise in Vue 3/React. Focused on engineering architecture, low-code engines, and integrating LLMs into business workflows.',
      btn1: 'View Core Projects',
      btn2: 'Chat with AI Guide',
      socials: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        email: 'mailto:wloops@foxmail.com'
      }
    },
    projects: {
      badge: 'Project Showcase',
      title1: 'Featured',
      title2: 'Projects',
      desc: 'Solving real-world problems. Here are the core projects I\'ve architected and developed, covering low-code engines, data visualization, and AI integration.',
      viewAll: 'View all on GitHub',
      viewAllLink: 'https://github.com',
      demo: 'Live Demo',
      source: 'Source',
      details: 'View Details',
      list: [
        {
          title: 'AI Knowledge Base & Q&A Platform (RAG + Agent)',
          description: 'An upcoming AI knowledge base platform. Combining RAG technology with an Agent workspace to provide intelligent knowledge retrieval and Q&A services.',
          tech: ['LLM', 'RAG', 'Agent', 'AI Integration'],
          images: [
            'https://picsum.photos/seed/rag1/1200/800',
            'https://picsum.photos/seed/rag2/1200/800',
            'https://picsum.photos/seed/rag3/1200/800'
          ],
          github: 'https://github.com',
          demo: 'https://demo.example.com'
        },
        {
          title: 'HOBY Supply Chain Data Service Platform',
          description: 'Large-scale B2B supply chain platform. Designed a dual-engine low-code system (React config + Vue 3 render) from scratch, reducing CRUD page delivery from 2 days to 0.5 days. Integrated Node.js BFF with DeepSeek API for intelligent field matching.',
          tech: ['React', 'Vue 3', 'Node.js', 'DeepSeek API', 'JSON Schema'],
          images: [
            'https://picsum.photos/seed/hoby1/1200/800',
            'https://picsum.photos/seed/hoby2/1200/800'
          ],
          demo: 'https://demo.example.com'
        },
        {
          title: 'Cryptographic Security Posture Awareness Platform',
          description: 'Monitoring hub for enterprise security operations. Designed a drag-and-drop + JSON Schema driven visual page configuration engine. Solved DOM node explosion and memory leaks under massive data push using WebSocket + ECharts incremental rendering.',
          tech: ['WebSocket', 'ECharts', 'JSON Schema', 'Performance Tuning'],
          images: [
            'https://picsum.photos/seed/screen1/1200/800',
            'https://picsum.photos/seed/screen2/1200/800'
          ]
        },
        {
          title: 'Cryptographic Service Platform',
          description: 'Core system providing unified cryptographic capabilities. Led the smooth migration from JSP to Vue 2. Implemented national cryptographic algorithms (SM2/SM4) in the frontend for a full-stack security loop.',
          tech: ['Vue 2', 'Webpack', 'Cryptography', 'GitLab CI/CD'],
          images: [
            'https://picsum.photos/seed/crypto1/1200/800',
            'https://picsum.photos/seed/crypto2/1200/800'
          ]
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
      placeholder: 'Ask about my low-code experience...',
      error: 'Sorry, network error. Please try again later.',
      initialMsg: 'Hello! I\'m Wenlong Liu\'s AI guide. You can ask me about his full-stack development experience, low-code architecture design, or his practical experience in AI integration.'
    },
    skills: {
      title1: 'Technical',
      title2: 'Arsenal',
      desc: 'A comprehensive toolkit forged over 7 years of building scalable, high-performance web applications and AI-driven products.',
      categories: [
        { name: 'Frontend & Cross-Platform', items: ['Vue 3', 'React', 'Pinia / Vuex', 'Zustand', 'uni-app', 'ECharts'] },
        { name: 'Backend & Server', items: ['Node.js', 'Express', 'Python', 'FastAPI', 'Java', 'Spring Boot'] },
        { name: 'Low-Code & Visualization', items: ['JSON Schema', 'Drag & Drop', 'WebSocket', 'Incremental Rendering', 'Canvas / WebGL'] },
        { name: 'DevOps, Security & AI', items: ['Docker', 'Nginx', 'GitLab CI/CD', 'Cryptography (SM2/SM4)', 'LLM Integration', 'Prompt Engineering'] }
      ]
    },
    experience: {
      title1: 'Career',
      title2: 'Journey',
      list: [
        {
          role: 'Development Manager (Full-Stack/Frontend Lead)',
          company: 'Hunan Huobi Network Technology Co., Ltd.',
          period: '2025.03 - 2026.02',
          description: 'Led frontend Monorepo architecture; developed JSON Schema dual-engine low-code system; handled core Java backend APIs and introduced Node.js BFF for AI capabilities (intelligent matching + OCR correction); implemented DevOps automated releases.'
        },
        {
          role: 'R&D Engineer',
          company: 'Beijing Jiangnan Tianan Technology Co., Ltd. (Guangzhou Branch)',
          period: '2021.07 - 2025.02',
          description: 'Led smooth migration of core systems to Vue 2/3; tackled massive data rendering and memory leaks on large screens; implemented national cryptographic algorithms (SM2/SM4) in frontend for full-stack security.'
        },
        {
          role: 'Frontend Developer',
          company: 'Guangzhou Dianle Information Technology Co., Ltd.',
          period: '2019.09 - 2021.06',
          description: 'Developed admin panels, mobile H5, and WeChat mini-programs. Encapsulated highly reusable business components; implemented mobile performance optimizations and weak network fallback logic.'
        }
      ]
    },
    footer: '© 2026 Wenlong Liu. Crafted with code & coffee.'
  }
};
