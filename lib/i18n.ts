export type Language = 'zh' | 'en';

export const dict = {
  zh: {
    nav: { skills: '技能', experience: '经历', projects: '项目', workflow: 'AI 工作流', chat: 'AI 导览', resume: '简历' },
    hero: {
      badge: 'Hello, World! 我是刘文龙',
      title1: '构建',
      title2: 'AI 与低代码驱动',
      title3: '的 Web 产品',
      desc: '7 年全栈研发经验，具备从前端界面、后端服务到 AI 应用落地的完整交付能力。长期专注工程化架构、低代码平台与复杂中后台系统，也持续将 LLM / RAG 能力整合进真实业务场景。',
      tags: ['AI / RAG', 'Low-Code Platforms', 'Vue & React', 'Node.js & Python', 'Product Engineering'],
      btn1: '查看项目作品',
      btn2: '与 AI 导览对话',
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
    workflow: {
      badge: 'AI 研发体系',
      title1: 'AI 工程化',
      title2: '工作流',
      desc: '在 AI 时代，核心竞争力不再是单纯的编码速度，而是如何利用 AI 构建可靠、可维护的工程体系。以下是我在团队中推行的 AI 协作模式。',
      items: [
        {
          title: '代码质量控制 (Quality)',
          desc: 'Type-First 驱动开发。在让 AI 生成逻辑前，先由人类定义严格的 TypeScript 接口与领域模型。结合自动化 Lint 和 AI 单元测试生成，确保核心业务逻辑 100% 覆盖，避免 AI 产生幻觉代码。',
          icon: 'ShieldCheck'
        },
        {
          title: '防止架构腐烂 (Architecture)',
          desc: '采用上下文隔离（Context Isolation）。不让 AI 看到全局代码，而是按领域驱动设计（DDD）拆分模块，强制 AI 遵循单一职责原则。利用 AI 进行定期的代码坏味道扫描与重构建议。',
          icon: 'Cpu'
        },
        {
          title: '智能 Code Review (Review)',
          desc: '建立双重审查机制：AI 负责第一道防线（发现潜在 Bug、规范检查、复杂度与安全扫描），人类负责第二道防线（架构合理性、业务逻辑闭环）。大幅提升 PR 审查效率。',
          icon: 'GitMerge'
        },
        {
          title: '团队协作与 SOP (Collaboration)',
          desc: '沉淀团队级 Prompt 资产库。规范化 AI 提交信息（Commit Message），统一代码风格。在 CI/CD 阶段引入 AI 自动总结变更日志，降低跨部门沟通成本。',
          icon: 'Users'
        }
      ],
      diagram: {
        tabs: {
          arch: '全栈架构工作流',
          cicd: 'CI/CD 自动化审查'
        },
        title: '全栈 AI 架构工作流',
        nodes: {
          prd: '产品需求 / 原始 PRD',
          rag: '全栈 RAG 防腐层 (企业级知识库)',
          rag1: '前端规范 Vue3/状态管理',
          rag2: '后端微服务 API 契约 FastAPI/Java',
          rag3: '数据库设计规范与现有 Schema',
          architect: 'Architect Agent 全栈架构分析',
          specs: 'AI 生成全栈技术规格',
          specData: '数据层: 数据库表结构设计 DDL/ORM',
          specService: '服务层: 后端接口契约 OpenAPI/Swagger',
          specView: '视图层: 前端页面树与组件划分',
          review: '人工架构评审 (Human Review)',
          reject: '驳回: 接口违背规范 / 数据库出现冗余表',
          approve: '通过: 锁定 API 契约与全栈上下文',
          langgraph: 'LangGraph 并行任务调度',
          agentDb: 'DB Agent 生成数据库迁移脚本',
          agentBackend: 'Backend Agent 生成业务逻辑与单元测试',
          agentFrontend: 'Frontend Agent 生成 UI 并绑定 Mock 数据',
          reviewer: 'Reviewer Agent 自动化全栈联调与质检'
        },
        cicd: {
          title: 'CI/CD 自动化审查与部署流水线',
          dev: '开发者 (Dev)',
          ide: 'AI 编程工具 (Cursor/Claude)',
          git: 'Git 仓库 (Merge Request)',
          trigger: '触发自动化流水线',
          gate: '双重防腐质检层 (拦截架构腐烂核心)',
          sonar: '传统静态扫描 (AST/基础漏洞)',
          agent: 'Review Agent (深度逻辑与架构审查)',
          agentDesc: '自动拉取 MR Diff，结合 RAG 团队规范比对',
          fail: '任何一环质检未通过',
          block: '拦截 MR / Agent 逐行 Comment 指导修复',
          pass: '双重质检均通过',
          deploy: 'Approve MR / 自动化构建与部署'
        }
      }
    },
    footer: '© 2026 刘文龙. Crafted with code & coffee.'
  },
  en: {
    nav: { skills: 'Skills', experience: 'Experience', projects: 'Projects', workflow: 'AI Workflow', chat: 'AI Chat', resume: 'Resume' },
    hero: {
      badge: 'Hello, World! I am Wenlong Liu',
      title1: 'Building',
      title2: 'AI & Low-Code Driven',
      title3: 'Web Products.',
      desc: '7 years of full-stack R&D experience, with complete delivery capabilities from frontend interfaces and backend services to AI application implementation. Long-term focus on engineering architecture, low-code platforms, and complex middle/back-office systems, while continuously integrating LLM/RAG capabilities into real business scenarios.',
      tags: ['AI / RAG', 'Low-Code Platforms', 'Vue & React', 'Node.js & Python', 'Product Engineering'],
      btn1: 'View Project Works',
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
    workflow: {
      badge: 'AI Engineering',
      title1: 'AI',
      title2: 'Workflow',
      desc: 'In the AI era, the core competency is no longer just coding speed, but how to build a reliable and maintainable engineering system using AI. Here is the AI collaboration model I advocate.',
      items: [
        {
          title: 'Quality Control',
          desc: 'Type-First driven development. Define strict TypeScript interfaces and domain models before letting AI generate logic. Combined with automated linting and AI unit test generation to ensure 100% coverage of core logic, avoiding AI hallucinations.',
          icon: 'ShieldCheck'
        },
        {
          title: 'Preventing Architecture Decay',
          desc: 'Adopt Context Isolation. Prevent AI from seeing global code; instead, split modules based on Domain-Driven Design (DDD) to force AI to follow the Single Responsibility Principle. Use AI for regular code smell scanning and refactoring suggestions.',
          icon: 'Cpu'
        },
        {
          title: 'Smart Code Review',
          desc: 'Establish a dual review mechanism: AI handles the first line of defense (finding potential bugs, convention checks, complexity and security scanning), while humans handle the second (architectural soundness, business logic loops). Drastically improves PR review efficiency.',
          icon: 'GitMerge'
        },
        {
          title: 'Team Collaboration & SOP',
          desc: 'Build a team-level Prompt asset library. Standardize AI commit messages and unify code styles. Introduce AI to automatically summarize changelogs during CI/CD to reduce cross-departmental communication costs.',
          icon: 'Users'
        }
      ],
      diagram: {
        tabs: {
          arch: 'Full-Stack Architecture',
          cicd: 'CI/CD Automated Review'
        },
        title: 'Full-Stack AI Architecture Workflow',
        nodes: {
          prd: 'Product Requirements / PRD',
          rag: 'Full-Stack RAG Anti-Corruption Layer',
          rag1: 'Frontend Specs (Vue3/State)',
          rag2: 'Backend API Contracts (FastAPI/Java)',
          rag3: 'DB Design Specs & Existing Schema',
          architect: 'Architect Agent: Full-Stack Analysis',
          specs: 'AI Generates Full-Stack Specs',
          specData: 'Data Layer: DDL/ORM Design',
          specService: 'Service Layer: OpenAPI/Swagger',
          specView: 'View Layer: Page Tree & Components',
          review: 'Human Architecture Review',
          reject: 'Reject: Spec Violation / Redundant Tables',
          approve: 'Approve: Lock API Contracts & Context',
          langgraph: 'LangGraph Parallel Task Scheduling',
          agentDb: 'DB Agent: Migration Scripts',
          agentBackend: 'Backend Agent: Logic & Unit Tests',
          agentFrontend: 'Frontend Agent: UI & Mock Data',
          reviewer: 'Reviewer Agent: Automated Integration & QA'
        },
        cicd: {
          title: 'CI/CD Automated Review & Deployment Pipeline',
          dev: 'Developer',
          ide: 'AI IDE (Cursor/Claude)',
          git: 'Git Repository (Merge Request)',
          trigger: 'Trigger CI Pipeline',
          gate: 'Double Anti-Corruption Quality Gate',
          sonar: 'Static Scan (AST/Vulnerabilities)',
          agent: 'Review Agent (Deep Logic & Architecture)',
          agentDesc: 'Pulls MR Diff, compares with RAG team conventions',
          fail: 'Any Quality Check Fails',
          block: 'Block MR / Agent Comments Line-by-Line',
          pass: 'Both Checks Pass',
          deploy: 'Approve MR / Automated Build & Deploy'
        }
      }
    },
    footer: '© 2026 Wenlong Liu. Crafted with code & coffee.'
  }
};
