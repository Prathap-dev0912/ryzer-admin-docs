export const sidebarItems = [
  {
    title: "Authentication",
    href: "/auth",
  },
  {
    title: "SPV",
    href:"/spv",
    children: [
      {
        title: "SPV List",
        href: "/spv",
      },
      {
        title: "Create SPV",
        href: "/spv/create",
      },
      {
        title: "SPV Dashboard",
        href: "/spv/dashboard",
      },
     
    ],
  },

  {
    title: "Assets",
    href: "/assets",
    children: [
      {
        title: "Asset List",
        href: "/assets",
      },
      {
        title: "Create Asset",
        href: "/assets/create",
      },
      {
        title: "Asset Dashboard",
        href: "/assets/dashboard",
      },
     
    ],
  },

  {
    title: "Orders",
    href: "/orders",
  },
  {
    title: "Investors",
    href: "/investors",
  },
];
