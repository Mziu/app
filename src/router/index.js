import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import home from '../pages/home/index.vue'
// import news from '../pages/news/index.vue'
import finance from '../pages/finance/index.vue'
import sports from '../pages/sports/index.vue'
import entertainment from '../pages/entertainment/index.vue'
import education from '../pages/education/index.vue'
import lady from '../pages/lady/index.vue'
import car from '../pages/car/index.vue'
import tourism from '../pages/tourism/index.vue'

const lazyLoading = (name) => (resolve) => require([`../pages/${name}`], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      title: '首页',
      component: home
    },
    {
      path: '/hello',
      name: 'hello',
      title: '测试',
      component: Hello
    },
    {
      path: '/news',
      name: 'news',
      title: '新闻',
      component: lazyLoading('news/index')
    },
    {
      path: '/finance',
      name: 'finance',
      title: '财经',
      component: finance
    },
    {
      path: '/sports',
      name: 'sports',
      title: '体育',
      component: sports
    },
    {
      path: '/entertainment',
      name: 'entertainment',
      title: '娱乐',
      component: entertainment
    },
    {
      path: '/education',
      name: 'education',
      title: '教育',
      component: education
    },
    {
      path: '/lady',
      name: 'lady',
      title: '女人',
      component: lady
    },
    {
      path: '/car',
      name: 'car',
      title: '汽车',
      component: car
    },
    {
      path: '/tourism',
      name: 'tourism',
      title: '旅游',
      component: tourism
    }
  ]
})
