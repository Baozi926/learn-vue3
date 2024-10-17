<template>
  <div v-html="compiledMarkdown" ref="content"></div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import { marked } from 'marked';
// import hljs from 'highlight.js';

import 'highlight.js/styles/github.css';

export default {
  props: {
    mdString: {
      type: String,
      required: true,
    },
  },
  setup(props) {

    const compiledMarkdown = ref('');

    onMounted(() => {
      compiledMarkdown.value = marked(props.mdString);
      // 高亮代码
      // hljs.highlightAll();
    });

    return { compiledMarkdown };
  },
};
</script>

<style>
/* 添加必要的样式 */
</style>
