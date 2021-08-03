/*
 * @Author: jun.fu<fujunchn@qq.com>
 * @LastEditors: jun.fu<fujunchn@qq.com>
 * @Description: file content
 * @Date: 2021-07-26 17:01:20
 * @LastEditTime: 2021-08-02 17:08:48
 * @FilePath: /winning-his-concepts/.vuepress/vuepress.config.ts
 */
module.exports = {
  base: '/winning-his-concepts/',
  plugins: [
    [
      '@vuepress/docsearch',
      {
        apiKey: '4db1cd64b190954d810097255524cac8',
        indexName: 'winning-his-concepts',
        appId:'YFDW0PQMHP',
        locales: {
          '/': {
            placeholder: 'Search Documentation',
          },
          '/zh/': {
            placeholder: '搜索文档',
          },
        },
      },
    ],
  ],
  dest: 'dist',
  themeConfig: {},
};
