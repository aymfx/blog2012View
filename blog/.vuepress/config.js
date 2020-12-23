/*
 * vuepress 配置文件
 *
 * */
module.exports = {
  title: "ly’s blog",
  port: "4000",
  description:
    "前端码农一枚，喜欢看书以及跑步，还在努力前行着,2020我们一起加油", //
  markdown: {
    lineNumbers: false,
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  themeConfig: {
    codeTheme: "solarizedlight",
    nav: [{ text: "时间轴", link: "/timeline/", icon: "reco-date" }],
    // 博客配置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认文案 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认文案 “标签”
      },
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/recoluan" },
        { icon: "reco-npm", link: "https://www.npmjs.com/~reco_luan" },
      ],
    },
  },
};
