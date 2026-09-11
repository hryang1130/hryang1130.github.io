/* ============================================================
 * 主页文案配置 —— 想改主页文字，只需要改这个文件
 *
 * 规则：每一项都是 { zh: "中文", en: "English" } 成对出现。
 * 改完保存、刷新浏览器即可看到效果，无需任何构建步骤。
 *
 * 注意：key（冒号前面的名字，如 "hero.intro"）不要改，
 *       HTML 里靠它来找到对应位置；只改引号里的文字就行。
 *       文字里如果要写双引号，用 \" 转义，或改用单引号。
 * ============================================================ */

window.SITE_CONTENT = {

  /* ---------- 浏览器标签页标题 ---------- */
  "page.title": {
    zh: "杨浩然 | Haoran Yang",
    en: "Haoran Yang"
  },

  /* ---------- 顶部导航条 ---------- */
  "brand":        { zh: "杨浩然", en: "Haoran Yang" },
  "nav.about":    { zh: "关于",   en: "About" },
  "nav.timeline": { zh: "经历",   en: "Journey" },
  "nav.projects": { zh: "项目",   en: "Projects" },
  "nav.resume":   { zh: "简历",   en: "Résumé" },

  /* ---------- 首屏自我介绍 ---------- */
  "hero.h1": {
    zh: "你好，我是浩然。",
    en: "Hi, I'm Haoran."
  },
  "hero.intro": {
    zh: "香港大学人工智能硕士在读，系统工程出身，最近正在做一些 AI Infra 和 Agent 应用开发相关的工作。在这之前，我在自动驾驶行业写了三年多的 C++/Python，做后端和系统 Infra 开发。平时想事情的方式更像工程师：把问题拆小，把模块做稳，把性能量出来。",
    en: "MSc in Artificial Intelligence student at the University of Hong Kong, trained as a systems engineer, recently working on AI Infra and Agent application development. Before that, I spent three-plus years writing C++/Python in the autonomous-driving industry, building backend and systems Infra. I tend to think like an engineer: break problems down, build modules that hold, and measure performance instead of guessing."
  },
  "hero.location": {
    zh: "香港 · 上海",
    en: "Hong Kong · Shanghai"
  },

  /* ---------- 关于我 ---------- */
  "about.title": { zh: "关于我", en: "About Me" },
  "about.p1": {
    zh: "三年C++古法程序员，最近在给 LLM 打下手。",
    en: "Three years of old-school C++ — now taking orders from LLMs."
  },
  "about.p2": {
    zh: "过去几年我一直做「架构设计，让系统跑得稳、跑得快」这件事：在自动驾驶行业做自动驾驶车载 Infra，写类 ROS 框架上的后端模块、监控体系和中间件开发等；更早之前在上海做过一些高精度计算模块的算法工程化方面的工作。2026年及最近接触了模型后训练和数据挖掘方面的工作，算是从系统方向往 AI 方向迈的第一步。",
    en: "For the past few years I've been working on architecture design — making systems run reliably and fast: in the autonomous-driving industry I built onboard Infra, including backend modules on a ROS-like framework, monitoring systems, and middleware. Earlier in Shanghai I worked on engineering high-precision computing modules. In 2026 and recently I've been getting into model post-training and data mining — my first step from systems toward AI."
  },
  "about.p3": {
    zh: "最近的模型训练数据挖掘相关的工作让我意识到，大模型不只是「更大的模型」：后训练、量化推理、数据质量、评测方法，每一个环节都是工程问题，也都是我感兴趣的问题。于是决定把 AI 这一层补到自己的系统栈上——大模型落地最缺的，恰恰是 Infra 的手艺。主力语言是 C++ 和 Python，我喜欢把复杂的问题拆成简单可靠的模块，也相信性能是可以被度量和持续改进的。",
    en: "Recent work on model training and data mining made me realize that LLMs are not just 'bigger models': post-training, quantized inference, data quality, and evaluation are all engineering problems — and all problems I find interesting. So I decided to build the AI layer on top of my systems stack — what's missing most in bringing LLMs to production is precisely Infra craft. My main languages are C++ and Python. I like breaking complex problems into simple, reliable modules, and I believe performance is something you can measure and keep improving."
  },

  /* ---------- 经历（时间线） ---------- */
  "timeline.title": { zh: "这些年", en: "Journey" },

  "t1.when":    { zh: "2026/09 – 至今", en: "2026/09 – now" },
  "t1.school":  { zh: "香港大学", en: "The University of Hong Kong" },
  "t1.degree":  { zh: "人工智能硕士在读", en: "MSc in Artificial Intelligence" },
  "t1.note":    {
    zh: "计算机学院，在上 Deep Learning、LLM、NLP相关课程",
    en: "School of Computing; taking Deep Learning, LLM and NLP courses"
  },

  "t2.company": { zh: "卓驭科技", en: "Zhuoyu Technology" },
  "t2.role":    { zh: "系统软件工程师", en: "System Software Engineer" },
  "t2.note":    {
    zh: "模型后训练与数据挖掘：训练数据构建、微调与评估",
    en: "Model post-training & data mining: data construction, fine-tuning, evaluation"
  },

  "t3.company": { zh: "文远知行", en: "WeRide" },
  "t3.role":    { zh: "Infra 系统工程师", en: "Infra System Engineer" },
  "t3.note":    {
    zh: "自动驾驶车载 Infra：类 ROS 框架上的后端模块、监控体系、线控中间件",
    en: "Onboard Infra: backend modules on a ROS-like framework, monitoring, chassis-by-wire middleware"
  },

  "t4.company": { zh: "上海某公司", en: "A company in Shanghai" },
  "t4.role":    { zh: "软件工程师", en: "Software Engineer" },
  "t4.note":    {
    zh: "高精度计算模块的算法工程化与性能优化",
    en: "Algorithm engineering and performance work on high-precision computing modules"
  },

  "t5.school":  { zh: "四川大学", en: "Sichuan University" },
  "t5.degree":  { zh: "电子信息工程本科", en: "B.Eng. in Electronic Information Engineering" },
  "t5.note":    {
    zh: "从这里开始写 C++，也决定了后来要吃这碗饭",
    en: "Where I started writing C++ — and decided what I'd do for a living"
  },

  /* ---------- 现在在做 ---------- */
  "now.title": { zh: "现在在做", en: "Now" },
  "now.1": {
    zh: "在港大上 Deep Learning、LLM、NLP 几门课",
    en: "Taking Deep Learning, LLM and NLP courses at HKU"
  },
  "now.2": {
    zh: "往大模型方向补课：模型微调、数据挖掘、VLA, 多模态相关",
    en: "Catching up on LLMs: fine-tuning, data mining, VLA, and multimodal work"
  },
  "now.3": {
    zh: "继续维护和重构 C++ 项目的老手艺——顺手也做一些Agent开发，模型量化推理方面的工作",
    en: "Keeping my C++ craft sharp — also doing Agent development and model quantization & inference work on the side"
  },

  /* ---------- 项目 ---------- */
  "projects.title": { zh: "项目", en: "Projects" },
  "p1.title": {
    zh: "WeTalk — 分布式即时通讯系统",
    en: "WeTalk — Distributed IM System"
  },
  "p1.desc": {
    zh: "一个用 C++ 从零搭起来的全栈 IM：Qt 客户端负责界面，DispatchServer 网关提供 HTTP 接口做登录注册，服务之间用 gRPC 分发和认证，长连接部分基于 Asio 实现异步 TCP 通信，通过池化 io_context 提升并发能力。服务端按模块拆分、支持分布式部署，状态管理和认证服务是解耦的。",
    en: "A full-stack IM system built from scratch in C++: a Qt client, a DispatchServer gateway exposing HTTP APIs for login and registration, gRPC for service dispatch and authentication, and asynchronous TCP long connections on Asio with pooled io_context for higher concurrency. The server is modular and deployable in a distributed setup, with state management decoupled from authentication."
  },
  "p1.why": {
    zh: "做它的初衷是整合这几年的Linux系统开发,架构设计的能力。真正落到一个能跑、能部署的系统上——这个过程让我对 IO 多路复用、连接管理和高并发下的资源分配有了远比平常工作只负责某个模块有了更深的理解。",
    en: "I built it to bring together my years of Linux systems development and architecture design experience into a system that actually runs and deploys — the process gave me a far deeper understanding of IO multiplexing, connection management, and resource allocation under high concurrency than my day-to-day work on individual modules ever did."
  },
  "projects.more": {
    zh: "更多实验性的小项目会放在我的 GitHub 上。",
    en: "More experimental small projects live on my GitHub."
  },

  /* ---------- 工具箱 ---------- */
  "toolbox.title":        { zh: "工具箱", en: "Toolbox" },
  "toolbox.daily.label":  { zh: "最顺手", en: "Daily drivers" },
  "toolbox.daily.value":  {
    zh: "C++（C++11/17，多线程与内存管理）、Python（PyTorch / FastAPI）",
    en: "C++ (C++11/17, multithreading & memory management), Python (PyTorch / FastAPI)"
  },
  "toolbox.ai.label":     { zh: "AI 相关", en: "AI" },
  "toolbox.ai.value":     {
    zh: "Agent 开发、模型后训练、量化推理、数据挖掘与数据集构建；PyTorch、ONNX、LangChain、LlamaCpp",
    en: "Agent development, model post-training, quantized inference, data mining and dataset construction; PyTorch, ONNX, LangChain, LlamaCpp"
  },
  "toolbox.sys.label":    { zh: "系统与通信", en: "Systems" },
  "toolbox.sys.value":    {
    zh: "gRPC / Protobuf、ROS / ROS2、Boost.Asio、IO 多路复用、HTTP / WebSocket / MQTT",
    en: "gRPC / Protobuf, ROS / ROS2, Boost.Asio, IO multiplexing, HTTP / WebSocket / MQTT"
  },
  "toolbox.tooling.label": { zh: "工程环境", en: "Tooling" },
  "toolbox.tooling.value": {
    zh: "Linux、Git、CMake / Bazel、GDB / Valgrind / Perf；也在学 Go",
    en: "Linux, Git, CMake / Bazel, GDB / Valgrind / Perf; learning Go"
  },

  /* ---------- 页脚 ---------- */
  "footer.name":   { zh: "杨浩然", en: "Haoran Yang" },
  "footer.resume": { zh: "查看简历 →", en: "View résumé →" }
};
