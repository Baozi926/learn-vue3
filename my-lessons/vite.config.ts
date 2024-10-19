import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import raw from 'vite-plugin-raw'; // 引入插件

import md from 'vite-plugin-md';
// const hljs = require('highlight.js');
import hljs from 'highlight.js'

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    md({
      // 这里可以配置你的 markdown 渲染选项
      // 比如将 highlight.js 应用到代码块
      wrapperComponent: 'div', // 如果需要自定义外层组件
      markdownItSetup(md) {
      
        md.set({
          highlight: (str, lang) => {
            if (lang && hljs.getLanguage(lang)) {
              try {
                return `<pre class="hljs code-wrapper"><code>${hljs.highlight(str, { language: lang }).value}</code></pre>`;
              } catch (err) { }
            }
            return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
          }
        });
      },
    }),
    raw({
      match: /\.txt$/,
    }),

    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false, // css in js
        }),
      ],
    }),
  ],
})
