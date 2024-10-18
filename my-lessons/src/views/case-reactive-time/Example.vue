<template>
  <div class="wrapper">
    <div class="hint">
      修改ref值只会标记该ref为脏数据，会在下一次nextTick中统一渲染
    </div>
    <div class="example">
      <div class="row">
        <button @click="testChangeTime(1)">触发更新（在console中查看）</button>
      </div>
      <div ref="testDomRef" class="row">原始值：{{ count }}</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import { nextTick } from "vue";

const testDomRef = ref();
const count = ref<number>(0);

async function testChangeTime(val = 1) {
  count.value = count.value + val;

  console.log("ref值变化，但是dom未更新：", testDomRef.value.innerHTML);
  await nextTick();
  console.log("更新完毕：", testDomRef.value.innerHTML);
}

//正确的监听
watch(
  () => {
    return count.value;
  },
  (val, oldVal) => {
    console.log("watch ref changed", val, oldVal);
  }
);
</script>

<style scoped>
.wrapper {
  /* margin-top: 200px; */
}
</style>
