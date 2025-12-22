import type { ReactNode } from "react";

type PageShellProps = {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
};

export default function PageShell({ sidebar, header, children }: PageShellProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <div className="lg:flex-shrink-0">{sidebar}</div>
        <div className="flex flex-1 flex-col">
          {header}
          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
