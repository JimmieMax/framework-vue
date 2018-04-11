<template>
    <div>about:{{ message }}
        <canvas id="canvas" ref="canvas" width="400" height="400" style="background:#000;">
            your browser not support canvas
        </canvas>
    </div>
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
            this.message = 'bye!';
            // this.animation();
        },
        mounted () {
            this.animation();
        },
        methods: {
            animation() {
                //1.获取上下文
                let canvas = this.$refs.canvas
                    , ctx = canvas.getContext('2d')
                    , picSize = 200
                    , duration = 50
                    , index = 0
                    , dir = 0;        //默认为向左运动
                //2.获取图片对象
                let image = new Image();
                image.src = "https://avatars0.githubusercontent.com/u/19659812?s=400&u=2ba2c172e689eb90a75e072dd45e25130ecd7ce6&v=4";
                image.addEventListener('load', function () {
                    setInterval(function () {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        ctx.drawImage(image, index, dir * picSize, picSize, picSize);
                        index++;
                        index %= picSize;
                    }, duration);
                });
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: yellow;
    }
</style>