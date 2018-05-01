'use strict';

const Koa = require('koa')
    , path = require('path')
    , views = require('koa-views')
    , Static = require('koa-static')
    , config = require('./config');

const app = new Koa();

app
    .use(Static(path.resolve(__dirname, './src/dist')))
    .use(Static(path.resolve(__dirname, './src/asset')))
    .use(views(path.resolve(__dirname, './src')))
    .use(async (ctx,next) => {
        if (ctx.originalUrl == '/') {
            await ctx.render('/dist/index.html')
        } else if (ctx.originalUrl == '/admin') {
            await ctx.render('/dist/admin.html')
        } else {
            await next();
        }
    })
    .listen(config.Server.port, () => {
        console.info(`listening on port ${config.Server.port}`);
    });