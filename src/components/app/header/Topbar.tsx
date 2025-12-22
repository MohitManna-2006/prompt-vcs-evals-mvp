export default function Topbar() {
  return (
    <header className="border-b border-white/5 bg-slate-950/70 px-4 py-3 backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Overview</p>
          <p className="text-2xl font-semibold text-white">Command Center</p>
        </div>

        <div className="flex flex-1 flex-col gap-3 md:flex-row md:items-center md:justify-end">
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search runs, datasets, teams..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-cyan-400 focus:outline-none"
            />
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-xs text-white/40">⌘K</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-2xl border border-cyan-400/40 bg-cyan-500/20 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/30">
              New Run
            </button>
            <button className="hidden items-center gap-2 rounded-2xl border border-white/10 px-3 py-2 text-sm text-white/70 transition hover:border-white/30 sm:flex">
              Quick Filters
            </button>
            <div className="h-10 w-10 rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500 to-fuchsia-500" aria-hidden />
          </div>
        </div>
      </div>
    </header>
  );
}
