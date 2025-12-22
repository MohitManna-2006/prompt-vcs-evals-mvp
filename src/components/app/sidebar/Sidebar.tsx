import NavItem from "@/components/app/sidebar/NavItem";

const navItems = ["Home", "Prompts", "Datasets", "Runs", "Compare", "Settings"].map(
  (label, index) => ({
    label,
    href: "#",
    active: index === 0,
  })
);

export default function Sidebar() {
  return (
    <aside className="border-white/5 bg-slate-950/70 px-4 py-4 backdrop-blur lg:h-screen lg:w-64 lg:border-r">
      <div className="flex items-center justify-between rounded-2xl border border-white/5 bg-gradient-to-r from-indigo-500/40 to-cyan-500/30 px-4 py-3 text-white">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-white/70">Prompt VCS</p>
          <p className="text-lg font-semibold">Command Center</p>
        </div>
        <div className="h-10 w-10 rounded-2xl bg-white/20" aria-hidden />
      </div>

      <nav className="mt-6 flex flex-row gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-3 lg:overflow-visible lg:pb-0">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      <div className="mt-6 rounded-2xl border border-white/5 bg-white/5 px-4 py-4 text-sm text-white/80">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">Status</p>
        <p className="mt-1 text-base font-semibold text-white">All systems operational</p>
        <p className="mt-2 text-xs text-white/60">Mocked data · last sync moments ago</p>
      </div>
    </aside>
  );
}
