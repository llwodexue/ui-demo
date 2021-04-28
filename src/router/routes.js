import Home from '@c/layout/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/button',
    component: Home,
    meta: { title: '首页', type: 0 },
    children: [
      {
        path: 'button',
        name: 'button',
        component: () => import('@v/ButtonView.vue'),
        meta: { title: 'Button 按钮', type: 1 }
      }
    ]
  }
]

export default routes
