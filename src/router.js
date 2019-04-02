import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/pages/Landing'
import Orignal from '@/components/pages/Original'
import TvShow from '@/components/pages/TvShow'
import Views from '@/components/pages/Views/Views'
import Music from '@/components/pages/Music/Music'
import TvshowInfo from '@/components/pages/TvshowInfo'
import MusicInfo from '@/components/pages/Music/MusicInfo'
import MusicCategory from '@/components/pages/Music/Category'
import ViewsInfo from '@/components/pages/Views/ViewsInfo'
import ViewsCategory from '@/components/pages/Views/Category'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Landing
    },
    {
      path: '/music',
      name: 'music',
      component: Music,
    },
    {
      path: '/music/details/:uuid',
      component: MusicInfo
    },
    {
      path: '/music/category/:uuid',
      component: MusicCategory
    },
    
    {
      path: '/ourviews',
      name: 'views',
      component: Views
    },
    {
      path: '/ourviews/details/:uuid',
      component: ViewsInfo
    },
    {
      path: '/ourviews/category/:uuid',
      component: ViewsCategory
    },
    {
      path: '/tvshow',
      name: 'tvshow',
      component: TvShow
    },
    {
      path: '/tvshow/category/info/:uuid',
      name: 'tvshow_cat',
      component: TvshowInfo
    },
    {
      path: '/original',
      name: 'original',
      component: Orignal
    },
  ]
}); 