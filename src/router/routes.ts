export const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/index.vue"),
  },
  {
    name: "layout",
    path: "/layout",
    component: () => import("@/views/layout/index.vue"),
    children: [
      {
        name: "home",
        path: "/home",
        component: () => import("@/views/home/index.vue"),
      },
    ],
  },
];
