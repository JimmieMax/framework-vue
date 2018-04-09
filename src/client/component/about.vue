<template>
    <div>about:{{ message }}</div>
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                message: 'Welcome to Your Vue.js App'
            }
        },
        created() {
            this.message = 'bye!'
        }
    }
</script>

<style scoped>
    div {
        background-color: yellow;
    }
</style>