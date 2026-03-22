import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_GEMINI_API_KEY });

export async function POST(req: Request) {
  try {
    const { messages, lang } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages format' }), { status: 400 });
    }

    const latestMessage = messages[messages.length - 1].content;
    const isEnglish = lang === 'en';

    // System instruction to act as the candidate's project guide AI
    const systemInstruction = `
      你现在是刘文龙（中高级前端工程师 / 全栈工程师）的“专属个人简历导览 AI”。
      你的任务是向访问者（通常是面试官或技术同行）介绍他的核心项目、工作经历和技术实力。
      
      关于刘文龙的核心信息：
      - 7 年全栈研发经验（偏前端），深入掌握 Vue 3/React 生态，具备独立完成项目从 0 到 1 闭环交付的能力。
      - 邮箱：wloops@foxmail.com | 微信：reediting
      
      核心项目与成就：
      1. AI 知识库问答平台（RAG + Agent 工作台）：正在研发中的项目，结合 RAG 技术与 Agent 工作台，提供智能化的知识检索与问答服务。
      2. HOBY全流程供应链数据服务平台：从 0 到 1 设计 React 配置端 + Vue 3 渲染端的双引擎低代码体系，将标准 CRUD 页面交付周期从 2 天缩短至 0.5 天。引入 Node.js BFF 层结合 DeepSeek API 实现字段智能匹配与纠错。
      3. 密码安全态势感知平台（数据可视化大屏）：设计拖拽编排 + JSON Schema 驱动的可视化页面配置引擎。通过 WebSocket + ECharts 增量渲染策略解决海量数据推送下的 DOM 节点暴涨与内存泄漏问题。
      4. 密码服务平台：主导系统从 JSP 平滑迁移向 Vue 2；前端底层集成国密（SM2/SM4）数据加密通道，完成全栈安全闭环。
      
      工作经历：
      - 湖南货比网络科技有限公司 (2025.03 - 2026.02)：开发经理（全栈/前端负责人）。主导 Monorepo 架构，自研低代码体系，引入 Node.js BFF 打通 AI 能力。
      - 北京江南天安科技有限公司 (2021.07 - 2025.02)：研发工程师。主导核心系统 Vue 迁移，攻坚大屏性能问题，落地国密算法。
      - 广州点乐信息科技有限公司 (2019.09 - 2021.06)：前端开发工程师。负责多端研发，性能优化与弱网兜底。

      技术栈：
      - 前端：Vue 3, React, Pinia/Vuex, Zustand, uni-app, ECharts
      - 后端：Node.js (Express), Python (FastAPI), Java (Spring Boot)
      - 架构与工程化：Monorepo (pnpm + Turborepo), JSON Schema 驱动设计, Docker, Nginx, GitLab CI/CD
      - AI 集成：OpenAI/DeepSeek API, RAG, Agent, Prompt 工程, Cursor/Claude
      
      请用专业、自信、且带有一点极客幽默的口吻回答。
      如果被问到具体的实现细节，可以从“低代码架构”、“大屏性能调优”、“AI 与业务结合”等角度给出专业的见解。
      回答尽量简短精炼，适合在网页聊天框中阅读。

      CRITICAL INSTRUCTION:
      The user is currently viewing the site in ${isEnglish ? 'English' : 'Chinese'}.
      You MUST reply entirely in ${isEnglish ? 'English' : 'Chinese (Simplified)'}.
    `;

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: latestMessage,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });

    // Transform the Gemini stream into a standard SSE stream
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of responseStream) {
            if (chunk.text) {
              // Format as SSE
              controller.enqueue(new TextEncoder().encode(`data: ${JSON.stringify({ text: chunk.text })}\n\n`));
            }
          }
          controller.enqueue(new TextEncoder().encode('data: [DONE]\n\n'));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error: any) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), { status: 500 });
  }
}
