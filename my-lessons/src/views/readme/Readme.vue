<template>
  <div class="container">
    <MdViewer :md-string="Readme" />
  </div>
</template>
<script setup lang="ts">
import Readme from "./Readme.md";
import { MdViewer } from "common-lib";
</script>

<style lang="scss" scoped>
.container {
  overflow: auto;
  height: 100%;
}
</style>
