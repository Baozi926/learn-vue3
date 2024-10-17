import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import raw from 'vite-plugin-raw'; // 引入插件

import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    raw({
      match: /\.md$/,
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
