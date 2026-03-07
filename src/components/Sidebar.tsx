"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/lib/Sidebar";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-65 bg-[#0B1B3A] text-white h-screen fixed p-6">
      <div className="my-12">
        <h1 className="text-xl font-bold">Ryzer Admin</h1>
        <p className="text-orange-400 text-sm">API Docs</p>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`block px-4 py-2 rounded-md transition ${
                active
                  ? "bg-orange-500 text-black"
                  : "text-gray-300 hover:bg-white/10"
              }`}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}