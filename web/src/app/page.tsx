export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(120,119,198,0.55)_0%,_rgba(76,29,149,0)_70%)] blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.4)_0%,_rgba(14,165,233,0)_70%)] blur-3xl" />
        <div className="absolute -right-20 top-[30%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,_rgba(249,115,22,0.35)_0%,_rgba(251,191,36,0)_70%)] blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.95)_0%,rgba(15,23,42,0.65)_45%,rgba(8,47,73,0.55)_100%)]" />
      </div>

      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 pb-24 pt-10 sm:px-10 lg:px-16">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 text-lg font-semibold text-slate-950 shadow-lg shadow-sky-500/40">
              QX
            </span>
            <div>
              <p className="text-lg font-semibold tracking-wide text-sky-100">
                QuantumX
              </p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                AI Crypto CoPilot
              </p>
            </div>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-200 md:flex">
            <a className="transition hover:text-white" href="#markets">
              Markets
            </a>
            <a className="transition hover:text-white" href="#insights">
              AI Engine
            </a>
            <a className="transition hover:text-white" href="#features">
              Features
            </a>
            <a className="transition hover:text-white" href="#pricing">
              Pricing
            </a>
          </div>
          <div className="hidden items-center gap-4 md:flex">
            <a
              href="#"
              className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-white/60 hover:text-white"
            >
              Sign in
            </a>
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/40 transition hover:brightness-110"
            >
              Launch App
            </a>
          </div>
          <button
            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 text-white md:hidden"
            type="button"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        <section className="relative mt-20 grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-4 py-2 text-xs font-medium tracking-wider text-slate-200 shadow-lg shadow-blue-500/10 backdrop-blur-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              LIVE: BTC +3.87% | ETH +2.41% | SOL +5.79%
            </div>
            <h1 className="text-balance text-4xl font-semibold leading-tight text-white md:text-6xl">
              Navigate volatility with an{" "}
              <span className="bg-gradient-to-r from-sky-300 via-sky-500 to-indigo-400 bg-clip-text text-transparent">
                autonomous crypto analyst
              </span>{" "}
              built for decisive traders.
            </h1>
            <p className="max-w-xl text-lg text-slate-300 md:text-xl">
              QuantumX blends institutional-grade market intelligence with a conversational AI copilot
              that reads every chart, signal, and on-chain whisper for you. Ask anything, back-test
              strategies, and deploy trades with total clarity.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-blue-500/40 transition hover:scale-[1.02] hover:brightness-110"
              >
                Start Free Trial
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 6.75h-10.5a.75.75 0 0 0 0 1.5h7.689l-9.72 9.72a.75.75 0 1 0 1.061 1.061l9.72-9.72v7.689a.75.75 0 0 0 1.5 0v-10.5a.75.75 0 0 0-.75-.75Z"
                  />
                </svg>
              </a>
              <a
                href="#insights"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-white/60 hover:text-white"
              >
                See AI in action
              </a>
            </div>
            <div className="grid gap-6 text-sm text-slate-300 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">$4.7B</p>
                <p className="mt-2 text-slate-400">Capital tracked across 260+ exchanges in real time.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">21ms</p>
                <p className="mt-2 text-slate-400">Average latency from on-chain signal to actionable alert.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-blue-500/5 backdrop-blur-md">
                <p className="text-3xl font-semibold text-white">97%</p>
                <p className="mt-2 text-slate-400">Precision on back-tested strategies during peak volatility.</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/50 to-slate-900/20 p-8 shadow-2xl shadow-sky-900/40 backdrop-blur-xl">
            <div className="absolute -inset-x-6 -top-8 flex justify-between">
              <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-xs font-medium text-cyan-100">
                AI Trade Synopsis
              </span>
              <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-medium text-emerald-100">
                Risk Balanced
              </span>
            </div>
            <div className="space-y-6 pt-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                  QuantumX Copilot
                </p>
                <div className="rounded-2xl border border-white/5 bg-slate-950/60 p-4">
                  <p className="text-sm text-slate-200">
                    &quot;BTC liquidity profile strengthened on Asian open. Funding rates cooling, whale wallet
                    accumulation accelerating. Suggested entry: $62,480 | TP: $64,900 | SL: $60,750&quot;
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-sky-500/30 bg-sky-500/10 p-4 shadow-lg shadow-sky-500/20">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-300">
                  <span>On-chain Flow Map</span>
                  <span>Live Feed</span>
                </div>
                <div className="mt-4 h-40 rounded-xl bg-gradient-to-br from-slate-900 via-sky-900/60 to-slate-900 p-4">
                  <svg viewBox="0 0 400 160" className="h-full w-full">
                    <defs>
                      <linearGradient id="flowStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                        <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.65" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
                      </linearGradient>
                      <linearGradient id="areaFill" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M10 120L40 110C70 100 100 90 135 95C170 100 200 120 235 115C270 110 300 80 330 72C360 64 380 84 390 92"
                      fill="url(#areaFill)"
                      stroke="url(#flowStroke)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <g fill="#38bdf8">
                      <circle cx="60" cy="106" r="3.5" />
                      <circle cx="120" cy="97" r="3.5" />
                      <circle cx="195" cy="118" r="3.5" />
                      <circle cx="265" cy="105" r="3.5" />
                      <circle cx="340" cy="78" r="3.5" />
                    </g>
                  </svg>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-4 text-xs text-slate-200">
                  <div>
                    <p className="text-slate-400">Inflow</p>
                    <p className="mt-1 text-base font-semibold text-sky-100">$1.47B</p>
                  </div>
                  <div>
                    <p className="text-slate-400">DEX Spread</p>
                    <p className="mt-1 text-base font-semibold text-amber-100">0.42%</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Momentum</p>
                    <p className="mt-1 text-base font-semibold text-emerald-100">Bullish +12.5</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 text-xs text-slate-300">
                <div>
                  <p className="text-slate-400">Strategy Grade</p>
                  <p className="text-lg font-semibold text-white">A+</p>
                </div>
                <div>
                  <p className="text-slate-400">Confidence</p>
                  <p className="text-lg font-semibold text-emerald-300">82%</p>
                </div>
                <div>
                  <p className="text-slate-400">Time Horizon</p>
                  <p className="text-lg font-semibold text-sky-200">4h</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="markets"
          className="relative mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-sky-900/30 backdrop-blur-lg"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(55,65,81,0.35)_0%,_transparent_65%)]" />
          <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center">
            <div className="max-w-xl space-y-6">
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Market intelligence aggregated from every corner of the cryptosphere.
              </h2>
              <p className="text-lg text-slate-300">
                Ingest CEX, DEX, derivatives, and on-chain data streams with latency that keeps your edge
                sharp. QuantumX fuses price action with mempool signals, news sentiment, and liquidity
                analytics into one unified surface.
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    title: "Liquidity Heatmaps",
                    body: "Detect hidden whale walls and liquidity vacuums before the market moves.",
                  },
                  {
                    title: "Smart Order Routing",
                    body: "AI-guided execution that balances slippage, fees, and success probability.",
                  },
                  {
                    title: "Cross-Chain Alerts",
                    body: "Synchronized insights from 23 L2s and 190+ cross-chain bridges.",
                  },
                  {
                    title: "Narrative Tracking",
                    body: "Surface sector rotations and social momentum with contextual summarization.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/5 bg-slate-950/50 p-5 shadow-lg shadow-blue-500/5"
                  >
                    <p className="text-sm font-semibold text-sky-100">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-lg shadow-sky-500/10">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
                <span>Top Movers | 24h</span>
                <span>AI Confidence</span>
              </div>
              <div className="mt-6 space-y-4">
                {[
                  { token: "SOL", name: "Solana", change: "+12.4%", score: "87%", color: "text-emerald-300" },
                  { token: "INJ", name: "Injective", change: "+9.8%", score: "79%", color: "text-emerald-300" },
                  { token: "TIA", name: "Celestia", change: "+6.5%", score: "73%", color: "text-emerald-300" },
                  { token: "RUNE", name: "THORChain", change: "+5.1%", score: "68%", color: "text-amber-300" },
                  { token: "OP", name: "Optimism", change: "+3.6%", score: "65%", color: "text-amber-300" },
                ].map((asset) => (
                  <div key={asset.token} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-200">
                    <div>
                      <p className="font-semibold tracking-wide text-white">{asset.token}</p>
                      <p className="text-xs text-slate-400">{asset.name}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-semibold ${asset.color}`}>{asset.change}</p>
                      <p className="text-xs text-slate-400">{asset.score} signal strength</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insights" className="mt-24 grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-sky-100">
              AI Copilot
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ask QuantumX anything. Receive context-rich answers in milliseconds.
            </h2>
            <p className="text-lg text-slate-300">
              Thread long-form prompts, back-test strategies, and connect to your preferred exchanges. Our
              conversational agent understands your portfolio, risk tolerance, and current market posture to
              offer pathways with confidence scoring and auto-execution.
            </p>
            <div className="space-y-4">
              {[
                "Context-aware reasoning across on-chain, derivatives, and macro data streams.",
                "Voice and natural language commands piped directly into trading automation.",
                "Explainable AI: every recommendation includes signal provenance and weightings.",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative rounded-[28px] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-blue-500/20">
            <div className="absolute -top-5 left-8 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-slate-200">
              Conversation
            </div>
            <div className="space-y-6 pt-4 text-sm text-slate-200">
              <div className="flex gap-3">
                <div className="mt-1 h-8 w-8 flex-none rounded-xl bg-gradient-to-br from-sky-400 to-blue-600" />
                <div className="flex-1 rounded-2xl bg-white/5 p-4">
                  <p>
                    Outline a delta-neutral strategy for ETH during CPI release week. Limit max drawdown to 4%,
                    target 12% APR. Include hedge positions if implied volatility spikes.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-8 w-8 flex-none rounded-full border border-sky-500/30 bg-sky-500/10" />
                <div className="flex-1 rounded-2xl border border-sky-500/30 bg-slate-950/60 p-4">
                  <p className="font-semibold text-sky-100">QuantumX</p>
                  <p className="mt-2 text-slate-300">
                    Strategy deployed across dYdX perpetuals + Pendle yield tranches. Hedge: 27% allocation BTC
                    short via options collar. Projected APR 13.4% with 3.1% max drawdown. Real-time monitoring
                    engaged.
                  </p>
                  <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Signals</p>
                      <p className="mt-2 font-semibold text-white">12 sources</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Risk</p>
                      <p className="mt-2 font-semibold text-emerald-300">Low</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Latency</p>
                      <p className="mt-2 font-semibold text-sky-100">18 ms</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-8 w-8 flex-none rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500" />
                <div className="flex-1 rounded-2xl bg-white/5 p-4">
                  <p>Execute and monitor. Notify if volatility breaches 22% or funding turns positive.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="mt-1 h-8 w-8 flex-none rounded-full border border-sky-500/30 bg-sky-500/10" />
                <div className="flex-1 rounded-2xl border border-sky-500/30 bg-slate-950/60 p-4">
                  <p className="font-semibold text-sky-100">QuantumX</p>
                  <p className="mt-2 text-slate-300">
                    Orders routed. Automated guardrails active. You&apos;ll receive proactive updates if market
                    profile shifts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="features"
          className="mt-24 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/60 via-slate-900/40 to-slate-900/20 p-10 shadow-2xl shadow-indigo-900/30"
        >
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr]">
            <div className="space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.32em] text-slate-200">
                Why QuantumX
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Crystal-clear decisions powered by AI that actually understands crypto.
              </h2>
              <p className="text-lg text-slate-300">
                Every module in QuantumX is engineered for traders operating in the seconds between signal and
                execution. Modular architecture lets you stream our insights into your own desk, or lean on the
                full-stack experience.
              </p>
              <div className="grid gap-4 text-sm text-slate-300 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Institutional-grade stack</p>
                  <p className="mt-2 text-slate-400">
                    Built atop low-latency infra with redundant nodes across five regions.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Explainable AI</p>
                  <p className="mt-2 text-slate-400">
                    Every output includes weighting, provenance, and confidence gradients.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Team collaboration</p>
                  <p className="mt-2 text-slate-400">
                    Shared workspaces, alert routing, and approval workflows included.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-semibold text-white">Security-first</p>
                  <p className="mt-2 text-slate-400">
                    SOC2 compliant, MPC custody integrations, granular permissioning.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-sky-500/30 bg-slate-950/60 p-6 shadow-lg shadow-sky-500/20">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Alpha Stream</p>
                <div className="mt-4 h-[180px] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900/20 to-slate-900 p-4">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between text-xs text-slate-300">
                      <span>Signal Strength</span>
                      <span className="font-semibold text-emerald-300">92%</span>
                    </div>
                    <div className="grid grid-cols-12 gap-1">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <span
                          key={index}
                          className="rounded-full bg-gradient-to-t from-sky-600/20 to-sky-400/90"
                          style={{ height: `${80 + Math.sin(index) * 25}px` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Asia</span>
                      <span>Europe</span>
                      <span>Americas</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-indigo-500/10">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Automation Rules</p>
                <div className="mt-4 space-y-4 text-sm text-slate-200">
                  {[
                    "Auto-hedge: deploy opposing delta when 30m volatility exceeds 18%",
                    "Liquidity sweep: rota cross-chain liquidity if slippage > 0.5%",
                    "Narrative pulse: alert desk when L2 TVL accelerates > 4% daily",
                  ].map((rule) => (
                    <div key={rule} className="flex items-start gap-3 rounded-2xl bg-slate-950/60 p-4">
                      <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400" />
                      <p>{rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="mt-24">
          <div className="flex flex-col items-center text-center">
            <p className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Pricing
            </p>
            <h2 className="mt-6 max-w-2xl text-3xl font-semibold text-white md:text-4xl">
              Start with the edge you need. Scale to a complete institutional command center.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[
              {
                name: "Navigator",
                price: "$49",
                cadence: "/month",
                description: "Perfect for independent traders exploring advanced AI workflow.",
                features: [
                  "Multi-exchange dashboards",
                  "On-chain trend detection",
                  "Unlimited AI chat prompts",
                  "10 automated playbooks",
                ],
                highlight: false,
              },
              {
                name: "Architect",
                price: "$189",
                cadence: "/month",
                description: "Expanded automation and deeper data coverage for desks managing capital.",
                features: [
                  "Advanced derivatives analytics",
                  "Real-time execution guardrails",
                  "Priority alerting & SMS",
                  "50 automated playbooks",
                ],
                highlight: true,
              },
              {
                name: "Constellation",
                price: "Let's talk",
                cadence: "",
                description: "Custom integrations, governance controls, and white-glove onboarding.",
                features: [
                  "Dedicated quant engineer",
                  "Private data lakes & APIs",
                  "MPC custody integration",
                  "SOC2 Type II reports",
                ],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[28px] border p-8 shadow-2xl ${
                  plan.highlight
                    ? "border-sky-400/40 bg-gradient-to-br from-sky-500/10 via-slate-950/70 to-indigo-500/10 shadow-sky-500/20"
                    : "border-white/10 bg-white/5 shadow-indigo-900/10"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-sky-500/40 bg-sky-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-sky-100">
                    Most Popular
                  </span>
                )}
                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-semibold text-white">{plan.name}</p>
                    <p className="mt-2 text-sm text-slate-300">{plan.description}</p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-white">{plan.price}</span>
                    <span className="text-sm text-slate-400">{plan.cadence}</span>
                  </div>
                  <ul className="space-y-3 text-sm text-slate-300">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className={`block rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                      plan.highlight
                        ? "bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 text-slate-950 hover:brightness-110"
                        : "border border-white/20 text-slate-100 hover:border-white/60 hover:text-white"
                    }`}
                  >
                    {plan.highlight ? "Start Architect" : "Request access"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <p className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200">
              Trusted by desks moving the market
            </p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Built for speed, tuned for conviction.
            </h2>
            <p className="text-lg text-slate-300">
              &quot;QuantumX distilled more alpha out of our data stack in six weeks than we had achieved in an
              entire quarter. The AI explains its reasoning with total transparency, which means faster, safer
              execution across the desk.&quot;
            </p>
            <div>
              <p className="text-base font-semibold text-white">Amara Chen</p>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                Head of Digital Assets | Northwind Capital
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                metric: "+38%",
                annotation: "Portfolio alpha uplift after 60 days with QuantumX automation.",
              },
              {
                metric: "5.2x",
                annotation: "Faster signal-to-trade execution compared to legacy desks.",
              },
              {
                metric: "24/7",
                annotation: "AI sentry monitors every market - even while you sleep.",
              },
              {
                metric: "15ms",
                annotation: "Ultra-low latency cross-exchange routing infrastructure.",
              },
            ].map((item) => (
              <div key={item.metric} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-blue-500/10">
                <p className="text-4xl font-semibold text-white">{item.metric}</p>
                <p className="mt-4 text-sm text-slate-300">{item.annotation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-24 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/40 to-slate-900/10 p-12 text-center shadow-2xl shadow-blue-900/30">
          <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Ready to trade smarter?</p>
          <h2 className="mt-6 text-3xl font-semibold text-white md:text-4xl">
            Join the desks rewriting the future of crypto markets.
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Launch the QuantumX Copilot and transform how your team reads, debates, and executes every
            opportunity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-gradient-to-r from-cyan-400 via-sky-500 to-blue-600 px-8 py-3 text-base font-semibold text-slate-950 shadow-lg shadow-blue-500/40 transition hover:scale-[1.02] hover:brightness-110"
            >
              Enter the command center
            </a>
            <a
              href="#"
              className="rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-slate-100 transition hover:border-white/60 hover:text-white"
            >
              Book a demo
            </a>
          </div>
        </section>

        <footer className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-xs text-slate-500 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="font-semibold text-sky-100">QuantumX</span>
            <span>&copy; {new Date().getFullYear()} | All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a className="transition hover:text-slate-200" href="#">
              Privacy
            </a>
            <a className="transition hover:text-slate-200" href="#">
              Security
            </a>
            <a className="transition hover:text-slate-200" href="#">
              Careers
            </a>
            <a className="transition hover:text-slate-200" href="#">
              Support
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
