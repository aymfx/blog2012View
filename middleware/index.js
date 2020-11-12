const compose = require("koa-compose");
const koaBody = require("koa-body");
const views = require("koa-views");
const path = require("path");

async function responseTime(ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set("X-Response-Time", ms + "ms");
  await ctx.render('index')
}

const all = [
  views(path.join(__dirname, "../views"), {
    extension: "ejs",
  }),
  koaBody({
    jsonLimit: "1kb",
  }),
  responseTime,
];

module.exports = compose(all);
