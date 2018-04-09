'use strict';

const Koa = require('koa')
    , path = require('path')
    , views = require('koa-views')
    , Static = require('koa-static')
    , config = require('../config');

const app = new Koa();

app
    .use(Static(path.resolve(__dirname, './src/dist')))
    .use(Static(path.resolve(__dirname, './src/asset')))
    .use(views(path.resolve(__dirname, './src')))
    .use(async ctx => {
        if (ctx.originalUrl == '/') {
            await ctx.render('/client')
        } else if (ctx.originalUrl == '/admin') {
            await ctx.render('/admin')
        } else {
            await ctx.next();
        }
    })
    .listen(config.Server.port, () => {
        console.info(`listening on port ${config.Server.port}`);
    });