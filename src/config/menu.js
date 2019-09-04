// 菜单配置
// headerMenuConfig：头部导航配置

const headerMenuConfig = [
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'bangzhu',
  },
];

// asideMenuConfig：侧边导航配置

const asideMenuConfig = [
  // {
  //   name: 'Dashboard',
  //   path: '/',
  //   icon: 'home',
  //   children: [
  //     {
  //       name: '数据概况',
  //       path: '/dashboard',
  //     },
  //   ],
  // },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'home',
  },
];

export { headerMenuConfig, asideMenuConfig };
