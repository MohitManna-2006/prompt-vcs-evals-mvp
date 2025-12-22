import type { ReactNode } from "react";
import PageShell from "@/components/app/common/PageShell";
import Topbar from "@/components/app/header/Topbar";
import Sidebar from "@/components/app/sidebar/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <PageShell sidebar={<Sidebar />} header={<Topbar />}>{children}</PageShell>;
}
