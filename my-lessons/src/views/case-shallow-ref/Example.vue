<template>
  <div class="hint">shallowRef,相当于只监听“=”</div>

  <div class="row">
    <button @click="changeShallowRef">直接更改</button>

    <button @click="changeShallowRefInside">在对象里更改</button>
  </div>
  <div class="row">
    {{ shallowTest.count }}
  </div>
</template>
<script setup lang="ts">
import { shallowRef, watch } from "vue";

const shallowTest = shallowRef({
  count: 0,
});

function changeShallowRef() {
  shallowTest.value = {
    count: shallowTest.value.count + 1,
  };
}

function changeShallowRefInside() {
  shallowTest.value.count = shallowTest.value.count + 1;
}
</script>

<style scoped></style>
