<script setup lang="ts">
import { ref, watch } from "vue";
import { MyCase } from "common-lib";

import vueFileContent from "./CaseRefExample.vue?raw";
import CaseRefExample from "./CaseRefExample.vue";
import CaseRefMd from './CaseRef.md'

const codeString = ref(vueFileContent);
</script>

<template>
  <MyCase title="基础" :code-string="codeString"  :md-string="CaseRefMd">
    <!-- <template #md> asdad </template> -->
    <CaseRefExample />
  </MyCase>
</template>

<style scoped></style>
