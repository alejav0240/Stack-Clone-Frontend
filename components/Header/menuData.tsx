import {Menu} from "@/types/menu";

export const menuDataDeafult: Menu[] = [
  { id: 1, title: "Home", newTab: false, path: "/" },
  { id: 2, title: "Features", newTab: false, path: "/#features" },
  { id: 2.1, title: "Blog", newTab: false, path: "/blog" },
  { id: 2.3, title: "Docs", newTab: false, path: "/docs" },
  { id: 3, title: "Pages",  newTab: false,
    submenu: [
      { id: 31, title: "Blog Grid", newTab: false, path: "/blog" },
      { id: 34, title: "Sign In", newTab: false, path: "/auth/signin" },
      { id: 35, title: "Sign Up", newTab: false, path: "/auth/signup" },
      { id: 35, title: "Docs", newTab: false, path: "/docs" },
      { id: 35.1, title: "Support", newTab: false, path: "/support" },
      { id: 36, title: "404", newTab: false, path: "/error" },
    ],
  },
  { id: 4, title: "Support", newTab: false, path: "/support" },
];

export const menuData: Menu[] = [
  { id: 1, title: "Home", newTab: false, path: "/" },
  { id: 2, title: "Publicacioness", newTab: false, path: "/blog",
    submenu: [
      { id: 31, title: "Blog Grid", newTab: false, path: "/blog",
        submenu: [
          { id: 31, title: "Blog Grid", newTab: false, path: "/blog" },
          { id: 34, title: "Sign In", newTab: false, path: "/auth/signin" },
          { id: 35, title: "Sign Up", newTab: false, path: "/auth/signup" },
          { id: 35, title: "Docs", newTab: false, path: "/docs" },
          { id: 35.1, title: "Support", newTab: false, path: "/support" },
          { id: 36, title: "404", newTab: false, path: "/error" },
        ],
      },
      { id: 34, title: "Sign In", newTab: false, path: "/auth/signin" },
      { id: 35, title: "Sign Up", newTab: false, path: "/auth/signup" },
      { id: 35, title: "Docs", newTab: false, path: "/docs" },
      { id: 35.1, title: "Support", newTab: false, path: "/support" },
      { id: 36, title: "404", newTab: false, path: "/error" },
    ],
  },
  { id: 2.1, title: "Preguntas", newTab: false, path: "/blog",
    submenu: [
      { id: 31, title: "Blog Grid", newTab: false, path: "/blog" },
      { id: 34, title: "Sign In", newTab: false, path: "/auth/signin" },
      { id: 35, title: "Sign Up", newTab: false, path: "/auth/signup" },
      { id: 35, title: "Docs", newTab: false, path: "/docs" },
      { id: 35.1, title: "Support", newTab: false, path: "/support" },
      { id: 36, title: "404", newTab: false, path: "/error" },
    ],
  },
  { id: 2.3, title: "Rangos", newTab: false, path: "/docs",
    submenu: [
      { id: 31, title: "Blog Grid", newTab: false, path: "/blog" },
      { id: 34, title: "Sign In", newTab: false, path: "/auth/signin" },
      { id: 35, title: "Sign Up", newTab: false, path: "/auth/signup" },
      { id: 35, title: "Docs", newTab: false, path: "/docs" },
      { id: 35.1, title: "Support", newTab: false, path: "/support" },
      { id: 36, title: "404", newTab: false, path: "/error" },
    ],
  },
];