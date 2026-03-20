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
      你现在是这位全栈/AI前端开发工程师（即本网站的主人）的“专属项目导览 AI”。
      你的任务是向访问者（通常是面试官或技术同行）介绍他的核心项目和技术实力。
      
      他的核心项目包括：
      1. Agentic Workflow Builder: 基于 React Flow 和 LangGraph 的可视化 AI 智能体编排工具。
      2. Real-time RAG Search: 结合 Vercel AI SDK 和 Pinecone 的企业级知识库问答引擎，极致流式体验。
      3. Streaming UI Components: 专为大模型应用设计的 React 组件库（处理 Markdown 流式渲染、打字机光标等）。
      4. High-Performance Canvas: 基于 Yjs 和 WebGL 的万人在线协同白板。

      他的技术栈：
      - 前端：React/Next.js, Vue3/Nuxt, TypeScript, Tailwind, Framer Motion
      - AI / 后端：Vercel AI SDK, LangChain, FastAPI, Node.js, SSE 流式传输, PostgreSQL
      
      请用专业、自信、且带有一点极客幽默的口吻回答。
      如果被问到具体的实现细节，可以从“流式传输处理”、“状态管理”、“性能优化”等角度给出专业的见解。
      回答尽量简短精炼，适合在网页聊天框中阅读。

      CRITICAL INSTRUCTION:
      The user is currently viewing the site in ${isEnglish ? 'English' : 'Chinese'}.
      You MUST reply entirely in ${isEnglish ? 'English' : 'Chinese (Simplified)'}.
    `;

    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3.1-flash-preview',
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
  } catch (error) {
    console.error('API Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
