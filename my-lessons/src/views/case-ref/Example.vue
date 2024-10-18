<template>
  <div class="row">原始值：{{ count }}</div>
  <div class="row">
    <button @click="add(1)">+</button>
    <button @click="add(-1)">-</button>
  </div>

  <div class="row">
    <div>错误的监听：</div>
    <div>{{ count2 }}</div>
  </div>

  <div class="row">
    <div>正确的监听：</div>
    <div>{{ count3 }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";

const count = ref<number>(0);

const count2 = ref<number>(0);

const count3 = ref<number>(0);

async function add(val = 1) {
  count.value = count.value + val;
}

//错误的监听
watch(
  () => {
    return count;
  },
  (val) => {
    count2.value = val.value;
  }
);

//正确的监听
watch(
  () => {
    return count.value;
  },
  (val) => {
    count3.value = val;
  }
);
</script>

<style scoped></style>
