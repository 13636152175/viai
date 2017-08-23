import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/index'
import video from '@/components/video'
import vhander from '@/components/vhander'
import my from '@/components/my'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/vhander',
      name: 'vhander',
      component: vhander
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
