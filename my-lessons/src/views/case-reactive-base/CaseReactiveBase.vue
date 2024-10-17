<script setup lang="ts">
import { ref, watch } from "vue";
import { MyCase } from "common-lib";

import vueFileContent from "./CaseReactiveBaseExample.vue?raw";
import CaseReactiveBaseExample from "./CaseReactiveBaseExample.vue";
import mdString from './CaseReactiveBase.md'

const codeString = ref(vueFileContent);
</script>

<template>
  <MyCase title="基础" :code-string="codeString"  :md-string="mdString">
    <CaseReactiveBaseExample />
  </MyCase>
</template>

<style scoped></style>
