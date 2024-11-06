# 响应式基础-Ref

在组合式 API 中，推荐使用 ref() 函数来声明响应式状态，在 script 中，需要通过.value 改值，但是在 template 中可以直接使用变量

```typescript
import { ref, watch } from "vue";

const count = ref<number>(0);
```

## 为什么要用.value

.value 属性给予了 Vue 一个机会来检测 ref 何时被访问或修改。在其内部，Vue 在它的 getter 中执行追踪，在它的 setter 中执行触发。从概念上讲，你可以将 ref 看作是一个像这样的对象

```javascript
// 伪代码，不是真正的实现
const myRef = {
  _value: 0,
  get value() {
    track();
    return this._value;
  },
  set value(newValue) {
    this._value = newValue;
    trigger();
  },
};
```

# Vue2 和 Vue3 的监听区别

vue2 中使用 Object.defineProperty()来定义 getter 和 setter

vue3 中使用 Proxy

# 只有用了 ref、reactive 后，在 vue 模版和 watch 中才能响应变化

下面代码中 addNumber 无法触发 dom 元素更新，因为number变量没有使用响应式

```javascript
<template>
  <div class="row">
    <button @click="addNumber">+</button>
  </div>

  <div class="row">{{ number }}</div>
</template>

<script setup>
  //bad
  //应该是  const number = ref(6)
  let number = 6;

  function addNumber() {
    number = number + 1;
  }
</script>
```
