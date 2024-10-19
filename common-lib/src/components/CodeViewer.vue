<template>
  <VCodeBlock
 
    :code="code"
    highlightjs
    lang="html"
    theme="github"
  />
</template>

<script setup lang="ts">
import VCodeBlock from "@wdns/vue-code-block";
import { ref } from "vue";

import hljs from "highlight.js/lib/core";
import langTypescript from "highlight.js/lib/languages/typescript";

hljs.registerLanguage("typescript", langTypescript);

const props = defineProps<{ codeString: string }>();

const code = ref(props.codeString);
</script>
