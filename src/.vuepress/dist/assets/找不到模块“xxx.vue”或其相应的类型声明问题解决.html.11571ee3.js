const e=JSON.parse('{"key":"v-27e58452","path":"/codenotes/Vue3/%E6%89%BE%E4%B8%8D%E5%88%B0%E6%A8%A1%E5%9D%97%E2%80%9Cxxx.vue%E2%80%9D%E6%88%96%E5%85%B6%E7%9B%B8%E5%BA%94%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.html","title":"找不到模块“xxx.vue”或其相应的类型声明问题解决","lang":"zh-CN","frontmatter":{"title":"找不到模块“xxx.vue”或其相应的类型声明问题解决","icon":"write","category":["Vue3"],"tag":["Vue3"],"sticky":false,"star":true,"article":true,"timeline":true,"description":"问题： image-20221221160600813 解决方法： 在项目根目录或 src 文件夹下创建一个后缀为 .d.ts 的文件，并写入以下内容： ```typescript /// declare module \\"*.vue\\" { import { App, defineComponent } from \\"vue\\"; const compone...","head":[["meta",{"property":"og:url","content":"https://gitee.com/oucystong/my-notes/codenotes/Vue3/%E6%89%BE%E4%B8%8D%E5%88%B0%E6%A8%A1%E5%9D%97%E2%80%9Cxxx.vue%E2%80%9D%E6%88%96%E5%85%B6%E7%9B%B8%E5%BA%94%E7%9A%84%E7%B1%BB%E5%9E%8B%E5%A3%B0%E6%98%8E%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3.html"}],["meta",{"property":"og:site_name","content":"白Tの学习笔记"}],["meta",{"property":"og:title","content":"找不到模块“xxx.vue”或其相应的类型声明问题解决"}],["meta",{"property":"og:description","content":"问题： image-20221221160600813 解决方法： 在项目根目录或 src 文件夹下创建一个后缀为 .d.ts 的文件，并写入以下内容： ```typescript /// declare module \\"*.vue\\" { import { App, defineComponent } from \\"vue\\"; const compone..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://gitee.com/oucystong/my-notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"找不到模块“xxx.vue”或其相应的类型声明问题解决"}],["meta",{"property":"article:tag","content":"Vue3"}]]},"excerpt":"","headers":[{"level":3,"title":"问题：","slug":"问题","link":"#问题","children":[]},{"level":3,"title":"解决方法：","slug":"解决方法","link":"#解决方法","children":[]}],"readingTime":{"minutes":0.69,"words":208},"autoDesc":true,"filePathRelative":"codenotes/Vue3/找不到模块“xxx.vue”或其相应的类型声明问题解决.md"}');export{e as data};
