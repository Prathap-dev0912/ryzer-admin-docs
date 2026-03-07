import Sidebar from "./Sidebar";
import Header from "./Header";
import { ReactNode } from "react";


interface DashboardLayoutProps {
  children: ReactNode
  sidebar?: ReactNode
}

export default function DashboardLayout({
  children,
  sidebar,
}: DashboardLayoutProps) {
  return (
    <div className="flex h-screen">
      {sidebar}
      <div className="flex flex-col flex-1">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}