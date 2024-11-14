import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
// import Result from './views/Result.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - IAM Resources',
    },
  }
//   {
//     path: '/result',
//     name: 'Result',
//     component: Result,
//     meta: {
//       title: 'Result - IAM CSV Report',
//     },
//   },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

console.log(process.env.BASE_URL);

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'IAM Resources';
  next();
});

export default router;