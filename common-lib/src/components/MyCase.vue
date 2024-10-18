<template>
  <div class="case-wrapper">
    <!-- <div class="title">
      {{ title }}
    </div> -->

    <div class="my-case">
      <div class="md">
        <!-- <MdViewer :mdString="mdString" /> -->
         <slot name="md"></slot>
      </div>

      <div class="example">
        <slot></slot>
      </div>

      <div class="code-wrapper">
        <CodeViewer  class="v-code-block" :codeString="codeString"></CodeViewer>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  codeString: string
}>();

import CodeViewer from "./CodeViewer.vue";
// import MdViewer from "./MdViewer.vue";
</script>

<style scoped lang="scss">
.case-wrapper {
  height: 100%;
  overflow-y: auto;
  // border: 1px solid black;
  .title {
    background-color: rgba(154, 153, 153, 0.3);
    flex-basis: 80px;
    padding: 4px;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.my-case {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
  overflow: hidden;

  .md {
    // flex-basis: 600px;
    flex: 1;
    padding: 20px;
    border-right: 1px solid black;
    width: 33%;
    height: 100%;
    overflow: auto;
  }

  .code-wrapper {
    border-right: 1px solid black;
    flex: 1;
    // min-width: 600px;
    // overflow: auto;
    width: 33%;
    height: 100%;
    overflow: auto;
    .v-code-block{
      // height: 100%;
      // width: 100%;
      // overflow: hidden ;
    }
  }

  .example {
    border-right: 1px solid black;
    // flex: 1;
    // min-height: 100px;
    // padding: 4px;
    flex: 1;
    padding: 20px;
    // width: 33%;
    height: 100%;
    overflow: auto;
  }
}
</style>
