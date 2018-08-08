import Vue from 'vue'
import Router from 'vue-router'

const home = resolve => {
  require.ensure(['@/components/home/home'], () => {
    resolve(require('@/components/home/home'), 'home');
  });
};

const login = resolve => {
  require.ensure(['@/components/common/login'], () => {
    resolve(require('@/components/common/login'), 'login');
  });
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path:'/',
      name:'login',
      component:login
    }
  ]
});


