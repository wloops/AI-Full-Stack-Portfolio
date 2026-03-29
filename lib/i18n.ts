export type Language = 'zh' | 'en';

export const dict = {
  zh: {
    nav: { skills: '技能', experience: '经历', projects: '项目', workflow: 'AI 工作流', chat: 'AI 导览', resume: '简历' },
    hero: {
      badge: 'Hello, World! 我是刘文龙',
      title1: '融合',
      title2: 'AI 与灵感',
      title3: '重塑下一代产品体验',
      desc: '7 年全栈研发经验，具备从前端界面、后端服务到 AI 应用落地的完整交付能力。长期专注工程化架构、低代码平台与复杂中后台系统，也持续将 LLM / RAG 能力整合进真实业务场景。',
      tags: ['AI / RAG', 'Low-Code Platforms', 'Vue & React', 'Node.js & Python', 'Product Engineering'],
      btn1: '查看项目作品',
      btn2: '探索 AI 工作流',
      socials: {
        github: 'https://github.com/wloops',
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
      viewAllLink: 'https://github.com/wloops',
      demo: '在线演示',
      source: '源码',
      details: '查看详情',
      architecture: '架构设计',
      contributions: '核心贡献',
      list: [
        {
          title: 'AI 知识库问答平台（RAG + Agent 工作台）',
          description: '面向企业知识管理场景，搭建 AI 知识库问答平台，支持文档上传解析、文本清洗、切片、向量索引构建、语义检索、引用溯源、会话持久化与前后端一体化展示。',
          contributions: [
            '架构设计：基于 Python FastAPI + SQLAlchemy + PostgreSQL 设计核心模块，完成知识库与会话上下文绑定。',
            'RAG 链路：实现文档上传 → 解析 → 清洗 → 切片 → Embedding → pgvector 检索 → LLM 回答的完整链路。',
            '幻觉控制与溯源：设计 citations 返回结构附带摘要片段；引入 top1 相似度阈值兜底策略，检索不足时拒答。',
            '全栈开发：基于 Next.js + TypeScript 设计产品级前端原型，覆盖工作台、知识库、文档管理与 Debug 面板。'
          ],
          tech: ['LLM', 'RAG', 'Agent', 'AI 集成'],
          images: [
            'https://picsum.photos/seed/rag1/1200/800',
            'https://picsum.photos/seed/rag2/1200/800',
            'https://picsum.photos/seed/rag3/1200/800'
          ],
          architectureImages: [
            {
              src: 'https://picsum.photos/seed/arch1/1200/800',
              title: '系统整体架构',
              description: '展示了前后端分离架构，以及 Node.js BFF 层与底层微服务的交互链路。'
            },
            {
              src: 'https://picsum.photos/seed/arch2/1200/800',
              title: 'RAG 检索增强生成链路',
              description: '详细描述了从文档解析、向量化存储到 LLM 问答的完整数据流。'
            }
          ],
          github: 'https://github.com/wloops',
          demo: 'https://rag.restflux.online'
        },
        {
          title: 'HOBY全流程供应链数据服务平台',
          description: '面向政企的大型 B2B 供应链服务平台，涵盖多级仓储、BOM 管理、商品矩阵及全链路订单资金流转。',
          contributions: [
            '低代码双引擎：从 0 到 1 设计 React 配置端 + Vue 3 渲染端体系，标准 CRUD 页面交付周期从 2 天缩短至 0.5 天。',
            '核心引擎开发：实现表单/表格/动作引擎，100% Schema 驱动，中后台硬编码量降低约 80%。',
            'AI 能力集成：设计前端 Web Worker 预解析与 Node.js BFF 流式处理的大文件导入方案，结合 DeepSeek API 实现字段智能匹配与纠错。',
            '全栈闭环：独立承担 Java 后端动态 Schema 组装接口开发，完成 Docker + Nginx 容器化线上部署。'
          ],
          tech: ['React', 'Vue 3', 'Node.js', 'DeepSeek API', 'JSON Schema'],
          images: [
            'https://picsum.photos/seed/hoby1/1200/800',
            'https://picsum.photos/seed/hoby2/1200/800'
          ]
        },
        {
          title: '密码安全态势感知平台（数据可视化大屏）',
          description: '面向政企安全运营的监控中枢，具备海量高频威胁数据实时展示等高可用要求，提升企业对密码安全的整体认知和防护能力。',
          contributions: [
            '低代码大屏引擎：设计拖拽编排 + JSON Schema 驱动的可视化配置引擎，单张大屏交付周期从 2 周缩短至 3 天。',
            '性能与内存治理：基于 WebSocket 长连接与 ECharts 增量渲染，解决 DOM 节点膨胀与卡顿；首屏加载优化至 1.5s 内，交互延迟控制在 100ms 内。',
            '自适应架构：引入动态缩放算法，代码零侵入实现 4K/8K 及异形拼接大屏的像素级精准还原。'
          ],
          tech: ['WebSocket', 'ECharts', 'JSON Schema', '性能调优'],
          images: [
            'https://picsum.photos/seed/screen1/1200/800',
            'https://picsum.photos/seed/screen2/1200/800'
          ]
        },
        {
          title: '密码服务平台',
          description: '面向行内业务系统提供统一密码能力与安全接入的核心系统。',
          contributions: [
            '架构演进：主导核心系统从 JSP / FreeMarker 向 Vue 2 / Vue 3 的平滑迁移，完成前端工程化体系建设与历史技术债治理。',
            '全栈安全：参与全栈安全能力建设，落地国密算法（SM2/SM4）前端接入。',
            '效能提升：基于 Python 开发自动化验证工具，大幅提升前后端联调效率。'
          ],
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
      title1: 'Fusing',
      title2: 'AI & Inspiration',
      title3: 'to Reshape Next-Gen Product Experiences.',
      desc: '7 years of full-stack R&D experience, with complete delivery capabilities from frontend interfaces and backend services to AI application implementation. Long-term focus on engineering architecture, low-code platforms, and complex middle/back-office systems, while continuously integrating LLM/RAG capabilities into real business scenarios.',
      tags: ['AI / RAG', 'Low-Code Platforms', 'Vue & React', 'Node.js & Python', 'Product Engineering'],
      btn1: 'View Project Works',
      btn2: 'Explore AI Workflow',
      socials: {
        github: 'https://github.com/wloops',
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
      viewAllLink: 'https://github.com/wloops',
      demo: 'Live Demo',
      source: 'Source',
      details: 'View Details',
      architecture: 'Architecture & Design',
      contributions: 'Core Contributions',
      list: [
        {
          title: 'AI Knowledge Base & Q&A Platform (RAG + Agent)',
          description: 'An AI knowledge base Q&A platform for enterprise knowledge management, supporting document parsing, vector indexing, semantic search, citation tracking, and full-stack integration.',
          contributions: [
            'Architecture: Designed core modules using Python FastAPI + SQLAlchemy + PostgreSQL, binding knowledge bases with session contexts.',
            'RAG Pipeline: Implemented the complete flow from document upload, chunking, Embedding, pgvector retrieval to LLM generation.',
            'Hallucination Control: Designed citation structures for traceability and introduced a top-1 similarity threshold fallback to reduce hallucinations.',
            'Full-Stack Dev: Built a production-grade frontend prototype using Next.js + TypeScript, covering workspaces, document management, and debug panels.'
          ],
          tech: ['LLM', 'RAG', 'Agent', 'AI Integration'],
          images: [
            'https://picsum.photos/seed/rag1/1200/800',
            'https://picsum.photos/seed/rag2/1200/800',
            'https://picsum.photos/seed/rag3/1200/800'
          ],
          architectureImages: [
            {
              src: 'https://picsum.photos/seed/arch1/1200/800',
              title: 'Overall System Architecture',
              description: 'Shows the frontend-backend separation architecture and the interaction between the Node.js BFF layer and underlying microservices.'
            },
            {
              src: 'https://picsum.photos/seed/arch2/1200/800',
              title: 'RAG Pipeline',
              description: 'Details the complete data flow from document parsing and vector storage to LLM Q&A.'
            }
          ],
          github: 'https://github.com/wloops',
          demo: 'https://rag.restflux.online'
        },
        {
          title: 'HOBY Supply Chain Data Service Platform',
          description: 'A large-scale B2B supply chain platform for government and enterprise, covering multi-level warehousing, BOM management, and order-to-cash workflows.',
          contributions: [
            'Dual-Engine Low-Code: Architected a React config + Vue 3 render system from scratch, reducing CRUD page delivery from 2 days to 0.5 days.',
            'Core Engines: Developed 100% Schema-driven form, table, and action engines, reducing hardcoded logic by ~80%.',
            'AI Integration: Designed a large Excel import solution using Web Worker and Node.js BFF, integrating DeepSeek API for intelligent field matching and error correction.',
            'Full-Stack Deployment: Handled Java backend dynamic Schema assembly APIs and completed Docker + Nginx containerized deployment.'
          ],
          tech: ['React', 'Vue 3', 'Node.js', 'DeepSeek API', 'JSON Schema'],
          images: [
            'https://picsum.photos/seed/hoby1/1200/800',
            'https://picsum.photos/seed/hoby2/1200/800'
          ]
        },
        {
          title: 'Cryptographic Security Posture Awareness Platform',
          description: 'A monitoring hub for enterprise security operations, featuring real-time visualization of massive, high-frequency threat data.',
          contributions: [
            'Low-Code Dashboard Engine: Designed a drag-and-drop + JSON Schema-driven configuration engine, reducing dashboard delivery from 2 weeks to 3 days.',
            'Performance & Memory Tuning: Resolved DOM bloat and memory leaks using WebSocket and ECharts incremental rendering; optimized LCP to <1.5s and FID to <100ms.',
            'Adaptive Architecture: Introduced dynamic scaling algorithms for zero-intrusion, pixel-perfect rendering on 4K/8K and irregularly spliced screens.'
          ],
          tech: ['WebSocket', 'ECharts', 'JSON Schema', 'Performance Tuning'],
          images: [
            'https://picsum.photos/seed/screen1/1200/800',
            'https://picsum.photos/seed/screen2/1200/800'
          ]
        },
        {
          title: 'Cryptographic Service Platform',
          description: 'A core system providing unified cryptographic capabilities and secure access for internal business systems.',
          contributions: [
            'Architecture Evolution: Led the smooth migration of core systems from JSP/FreeMarker to Vue 2/Vue 3, establishing frontend engineering standards.',
            'Full-Stack Security: Implemented national cryptographic algorithms (SM2/SM4) on the frontend for end-to-end security.',
            'Efficiency Tools: Developed automated validation tools using Python, significantly improving frontend-backend integration efficiency.'
          ],
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
