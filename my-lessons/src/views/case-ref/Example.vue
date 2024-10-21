<template>
  <div class="hint row">在get value时执行</div>

  <div class="row">
    <button @click="getA">getA.value</button>
  </div>

  <div class="hint row">在set value时执行</div>

  <div class="row">
    <button @click="setA">setA.value</button>
  </div>
</template>
<script setup lang="ts">
class A {
  _value = 0;

  _dirty = false;

  get value() {
    //可以在此收集依赖
    console.log("get a", this._value);
    return this._value;
  }

  set value(val) {
    //可以在此标记数据为脏数据，并且触发脏检查
    console.log("set a", " old:", this._value, "new:", val);
    this._value = val;
    this._dirty = true;
  }
}

const a = new A();

function getA() {
  console.log(a.value);
}

function setA() {
  a.value = a.value + 1;
}
</script>

<style scoped></style>
