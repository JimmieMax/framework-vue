/* 引入vue和主页 */
import Vue from 'vue'
import {
    Container,
    Header,
    Main,
    Footer,
    Button,
    Select,
} from 'element-ui';
import App from './app.vue'
import router from './route.js'

Vue.prototype.$ELEMENT = { size: 'small' };
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Button);
Vue.use(Select);

Vue.config.debug = true;//开启错误提示
/* 实例化一个vue */
new Vue({
    router,
    el: '#app',
    render: h => h(App)
});