import type { ReactNode } from "react";

export type NavItemProps = {
  label: string;
  href?: string;
  icon?: ReactNode;
  active?: boolean;
};

export default function NavItem({
  label,
  href = "#",
  icon,
  active = false,
}: NavItemProps) {
  return (
    <a
      href={href}
      className={`group flex items-center gap-3 rounded-2xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
        active
          ? "bg-white/10 text-white shadow-inner shadow-black/30"
          : "text-slate-400 hover:text-white hover:bg-white/5"
      }`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/5 text-xs font-semibold text-white/80">
        {icon ?? label.charAt(0)}
      </span>
      <span>{label}</span>
    </a>
  );
}
