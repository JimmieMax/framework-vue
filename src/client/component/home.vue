<template>
    <div>
        <ol>
            <li v-for="(todo,index) in todos" :key="index">
                {{ todo.text }}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
    </div>
</template>

<script>
    export default {
        name: "home",
        data () {
            return {
                todos: [
                    { text: 'Learn JavaScript' },
                    { text: 'Learn Vue' },
                    { text: 'Build something awesome' }
                ]
            }
        },
        methods:{
            eClick(){
                console.log(9999);
            }
        }
    }
</script>

<style scoped>
    div{
        background-color: red;
    }
</style>