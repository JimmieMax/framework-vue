import Vue from 'vue';
import Router from 'vue-router';
import homePage from './component/home.vue'
import aboutPage from './component/about.vue'

Vue.use(Router);

export default new Router({
    routes:[
        {
            path:'/',
            component:homePage
        },
        {
            path:'/about',
            component:aboutPage
        }
    ]
})