<template>
  <div class="hint row">{{test(a)}}</div>

  <button @click="changeA">test</button>
</template>
<script setup lang="ts">
import { computed,ref } from "vue";

let a = ref('a');

const changeA = () => {
  a.value = a.value + "1";
};

const test = computed(() => (v:any) => {
  return v;
});
</script>

<style scoped></style>
