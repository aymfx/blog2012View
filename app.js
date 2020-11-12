const Koa = require("koa");
const app = (module.exports = new Koa());
const all = require("./middleware");
console.log();

app.use(all);

if (!module.parent) app.listen(3000);
