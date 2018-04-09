/* 引入vue和主页 */
import Vue from 'vue'
import App from './app.vue'
// import router from './route.js'

Vue.config.debug = true;//开启错误提示
/* 实例化一个vue */
new Vue({
    // router,
    el: '#app',
    render: h => h(App)
});