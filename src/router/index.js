import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SourcesList from '@/components/SourcesList';
import Sources from '@/components/Sources';
import Headlines from '@/components/Headlines';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/sources-list',
      name: 'sources-list',
      component: SourcesList,
    },
    {
      path: '/headlines',
      name: 'headlines',
      component: Headlines,
    },
    {
      path: '/headlines/:country',
      name: 'headlines-country',
      component: Headlines,
    },
    {

      path: '/sources/:id',
      name: 'sources-id',
      component: Sources,
    },
  ],
});
