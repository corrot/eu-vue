import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'
import AboutUs from '@/pages/AboutUs/AboutUs'
import Contact from '@/pages/Contact/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
