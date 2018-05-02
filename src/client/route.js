import Vue from 'vue';
import Router from 'vue-router';
import homePage from './component/home.vue'
import aboutPage from './component/about.vue'

Vue.use(Router);

export default new Router({
    // mode: 'history', 单页面和多页面mode
    // linkActiveClass: 'active',
    routes: [
        {
            path: '/',
            name: 'portal',
            redirect: {name: 'home'},
        },
        {
            path: '/home',
            name: 'home',
            component: homePage,
        },
        {
            path: '/about',
            name: 'about',
            component: aboutPage
        }
    ]
})