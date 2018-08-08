import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'


const login = resolve => {
  require.ensure(['@/components/common/login'], () => {
    resolve(require('@/components/common/login'), 'login');
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
