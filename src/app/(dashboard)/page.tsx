const stats = [
  { label: "Active Prompts", value: "42", trend: "+5%" },
  { label: "Datasets", value: "16", trend: "Stable" },
  { label: "Runs (24h)", value: "128", trend: "+12%" },
  { label: "Comparisons", value: "6", trend: "+2 new" },
];

const moduleQuickLinks = [
  {
    title: "Prompts",
    description: "Craft new variants, manage baselines, and orchestrate guardrails.",
    status: "3 drafts awaiting review",
    badge: "Create prompt",
  },
  {
    title: "Datasets",
    description: "Centralize eval sets, annotate samples, and monitor coverage.",
    status: "Updated Yesterday",
    badge: "Upload CSV",
  },
  {
    title: "Runs",
    description: "Benchmark models, view traces, and gate deployments.",
    status: "4 queued · 12 completed today",
    badge: "Schedule run",
  },
  {
    title: "Compare",
    description: "Side-by-side diffs and metrics to decide the best prompt version.",
    status: "2 matchups ready",
    badge: "Launch compare",
  },
  {
    title: "Home",
    description: "Roll-up of program health, incidents, and operator notes.",
    status: "All systems operational",
    badge: "View summary",
  },
  {
    title: "Settings",
    description: "Manage workspaces, providers, audit logs, and access.",
    status: "Last change 12m ago",
    badge: "Manage org",
  },
];

const mockRuns = [
  {
    name: "Claude vs GPT4",
    status: "Completed",
    score: "92",
    time: "3 mins ago",
  },
  {
    name: "Summarization eval",
    status: "Running",
    score: "--",
    time: "8 mins ago",
  },
  {
    name: "Toxicity sweep",
    status: "Scheduled",
    score: "--",
    time: "1 hr ago",
  },
];

const mockDatasets = [
  { name: "marketing_intent_v2", size: "1.8K rows", updated: "Yesterday" },
  { name: "compare_redteam", size: "540 rows", updated: "2 days ago" },
  { name: "support_tickets_eval", size: "3.2K rows", updated: "3 days ago" },
];

const mockPrompts = [
  {
    name: "inbox_triage_v5",
    variant: "system-guarded",
    impact: "+3.5 NPS",
    owner: "CX Ops",
  },
  {
    name: "marketing_brainstorm",
    variant: "creative-tuned",
    impact: "+12% CTR",
    owner: "Growth",
  },
  {
    name: "summarize_ticket",
    variant: "fast-path",
    impact: "-18% handle time",
    owner: "Support",
  },
];

const compareInsights = [
  {
    title: "Claude 3 vs GPT4o",
    metric: "Accuracy",
    primary: "92",
    secondary: "88",
    delta: "+4",
  },
  {
    title: "Prompt v4 vs v5",
    metric: "Toxicity",
    primary: "0.12",
    secondary: "0.18",
    delta: "-0.06",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/5 bg-gradient-to-b from-white/5 to-transparent p-5 shadow-2xl shadow-black/30"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/50">{item.label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{item.value}</p>
            <p className="text-xs text-emerald-300">{item.trend}</p>
          </div>
        ))}
      </section>

      <section className="rounded-3xl border border-white/5 bg-slate-950/40 p-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.5em] text-white/40">
              Quick Modules
            </p>
            <p className="text-2xl font-semibold text-white">
              Jump into your workspaces
            </p>
          </div>
          <p className="text-sm text-white/50">
            Mocked data · surfaces each top-level destination we just created.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {moduleQuickLinks.map((module) => (
            <button
              key={module.title}
              className="h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-5 text-left text-white transition hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              <div className="flex items-center justify-between text-sm text-white/60">
                <span>{module.status}</span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                  {module.badge}
                </span>
              </div>
              <p className="mt-3 text-xl font-semibold">{module.title}</p>
              <p className="mt-2 text-sm text-white/70">{module.description}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Recent Runs</h3>
            <button className="text-sm text-cyan-300">View all</button>
          </div>
          <div className="mt-4 space-y-4">
            {mockRuns.map((run) => (
              <div
                key={run.name}
                className="flex items-center justify-between rounded-2xl border border-white/5 bg-slate-950/40 px-4 py-3"
              >
                <div>
                  <p className="font-medium text-white">{run.name}</p>
                  <p className="text-xs text-white/50">{run.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">{run.status}</p>
                  <p className="text-lg font-semibold text-white">{run.score}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Prompts</h3>
            <button className="text-sm text-cyan-300">Open builder</button>
          </div>
          <div className="mt-4 space-y-4">
            {mockPrompts.map((prompt) => (
              <div
                key={prompt.name}
                className="rounded-2xl border border-white/5 bg-slate-950/40 px-4 py-3"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-white">{prompt.name}</p>
                    <p className="text-xs text-white/50">{prompt.owner}</p>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                    {prompt.variant}
                  </span>
                </div>
                <p className="mt-2 text-sm text-emerald-300">{prompt.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Datasets</h3>
            <button className="text-sm text-cyan-300">Manage</button>
          </div>
          <div className="mt-4 space-y-4">
            {mockDatasets.map((dataset) => (
              <div
                key={dataset.name}
                className="rounded-2xl border border-white/5 bg-slate-950/40 px-4 py-3"
              >
                <p className="font-medium text-white">{dataset.name}</p>
                <div className="mt-1 flex items-center justify-between text-xs text-white/50">
                  <span>{dataset.size}</span>
                  <span>Updated {dataset.updated}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">Compare</h3>
            <button className="text-sm text-cyan-300">Start matchup</button>
          </div>
          <div className="mt-4 space-y-4">
            {compareInsights.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 rounded-2xl border border-white/5 bg-slate-950/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-medium text-white">{item.title}</p>
                  <p className="text-xs text-white/50">Metric: {item.metric}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-white/70">
                    {item.primary} vs {item.secondary}
                  </p>
                  <p className="text-lg font-semibold text-emerald-300">
                    {item.delta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-dashed border-white/10 bg-slate-950/40 p-8 text-center">
        <p className="text-sm uppercase tracking-[0.5em] text-white/40">Action Center</p>
        <p className="mt-2 text-2xl font-semibold text-white">Command Center placeholder</p>
        <p className="mt-2 text-sm text-white/60">
          Wire up backend integrations to view prompt runs, compare outputs, and unlock collaborative workflows here.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80">
            Connect provider
          </button>
          <button className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80">
            Upload dataset
          </button>
          <button className="rounded-2xl border border-white/10 px-4 py-2 text-sm text-white/80">
            Schedule eval
          </button>
        </div>
      </section>
    </div>
  );
}
