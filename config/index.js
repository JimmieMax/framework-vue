module.exports ={
    Server:{
        host: "127.0.0.1",
        port: 5001,
        wholePath(){
            return this.host+':'+this.port;
        }
    },
    Client:{
        title:'Webpack Koa Vue Element-ui',
    },
    Admin:{
        title:'Admin'
    }
};