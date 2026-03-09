"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/lib/Sidebar";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

 
 useEffect(() => {
  const activeParent = sidebarItems.find((item) =>
    item.children?.some((sub) => pathname.startsWith(sub.href))
  );

  if (activeParent) {
    setOpenMenu(activeParent.title);
  } else {
    setOpenMenu(null);
  }
}, [pathname]);

  return (
    <aside className="w-65 bg-[#0B1B3A] text-white h-screen fixed p-6">
      <div className="my-12">
        <h1 className="text-xl font-bold">Ryzer Admin</h1>
        <p className="text-orange-400 text-sm">API Docs</p>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          // If item has children (SPV)
          if (item.children) {
            const isOpen = openMenu === item.title;

            return (
              <div key={item.title}>
                <button
                  onClick={() =>
                    setOpenMenu(isOpen ? null : item.title)
                  }
                  className="w-full text-left px-4 py-2 rounded-md text-gray-300 hover:bg-white/10"
                >
                  {item.title}
                </button>

                {isOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((sub) => {
                      const active = pathname === sub.href;

                      return (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          className={`block px-4 py-2 text-sm rounded-md transition ${
                            active
                              ? "bg-orange-500 text-black"
                              : "text-gray-300 hover:bg-white/10"
                          }`}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

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