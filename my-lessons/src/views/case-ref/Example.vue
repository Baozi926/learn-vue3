<template>
  <div class="hint">例1：使用watch时应该watch对应的.value而不是ref本身</div>

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

  <div class="hint">例2：shallowRef,相当于只监听“=”</div>

  <div class="row">

    <button @click="changeShallowRef">直接更改</button>

    <button @click="changeShallowRefInside"> 在对象里更改</button>
  </div>
  <div class="row">
    {{ shallowTest.count }}
  </div>
</template>
<script setup lang="ts">
import { ref, shallowRef, watch } from "vue";

const count = ref<number>(0);

const count2 = ref<number>(0);

const count3 = ref<number>(0);

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
