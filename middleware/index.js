const compose = require("koa-compose");
const koaBody = require("koa-body");
const views = require("koa-views");
const logger = require("koa-logger");
const koaStatic = require("koa-static");
const path = require("path");


const all = [
  logger(),
  koaStatic(path.resolve(__dirname, "../public")),
  views(path.join(__dirname, "../views"), {
    extension: "ejs",
  }),
  koaBody({
    jsonLimit: "1kb",
  }),
];

module.exports = compose(all);
