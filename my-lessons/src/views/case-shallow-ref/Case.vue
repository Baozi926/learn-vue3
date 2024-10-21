<script setup lang="ts">
import { ref, watch } from "vue";
import { MyCase } from "common-lib";

import vueFileContent from "./Example.vue?raw";
import Example from "./Example.vue";
import Readme from "./Readme.md";

const codeString = ref(vueFileContent);
</script>

<template>
  <MyCase :code-string="codeString">
    <template #md> <Readme /> </template>
    <Example />
  </MyCase>
</template>

<style scoped></style>
