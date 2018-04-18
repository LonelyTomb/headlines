import Vue from 'vue';
import Router from 'vue-router';
//  HomePage
import Home from '@/components/Home';
//  List of all Sources Page
import SourcesList from '@/components/SourcesList';
//  Headlines from selected Sources Page
import Sources from '@/components/Sources';
// Headlines from selected country
import Headlines from '@/components/Headlines';
//  Favorites headlines
import Favorites from '@/components/Favorites';

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
    {
      path: '/favorites',
      name: 'favorites',
      component: Favorites,
    },
  ],
});
