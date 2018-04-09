<template>
    <div>
        <!--<header-tab></header-tab>-->
        <h2>{{msg}}</h2>
        <div class="nav-box">
            <p class="nav-list">
                <router-link class="nav-item" to="/">首页</router-link>
                <router-link class="nav-item" to="/about">关于</router-link>
            </p>
        </div>
        <div>
            <!--<router-view></router-view>-->
        </div>
    </div>
</template>

<script>
    // import HeaderTab from './component/header.vue';
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        },
        components:{
            // HeaderTab
        }
    }
</script>

<style scoped>
    .nav-box{
        background-color: seagreen;
    }
    #example {
        background: yellow;
        height: 100vh;
    }
</style>