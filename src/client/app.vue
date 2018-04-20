<template>
    <el-container>
        <el-header>
            <header-tab></header-tab>
        </el-header>
        <el-main>
            <h2>{{msg}} <el-button type="primary">主要按钮</el-button></h2>
            <div class="nav-box">
                <p class="nav-list">
                    <router-link class="nav-item" to="/">首页</router-link>
                    <router-link class="nav-item" to="/about">关于</router-link>
                </p>
            </div>
            <div>
                <router-view></router-view>
            </div>
        </el-main>
        <el-footer>
            @Jimmie Max
        </el-footer>
    </el-container>
</template>

<script>
import HeaderTab from "./component/header.vue";
export default {
  data() {
    return {
      msg: "Hello World!"
    };
  },
  components: {
    HeaderTab
  }
};
</script>

<style scoped>
.nav-box {
  background-color: seagreen;
}
#example {
  background: yellow;
  height: 100vh;
}
</style>