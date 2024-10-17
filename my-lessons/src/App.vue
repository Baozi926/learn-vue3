<template>
  <a-layout has-sider>
    <a-layout-sider
      :style="{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }"
    >
      <div class="logo" />
      <a-menu
        :items="items"
        @click="handleClick"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: '200px' }">
      <!-- <a-layout-header :style="{ background: '#fff', padding: 0 }" /> -->
      <a-layout-content :style="{ margin: '', overflow: 'initial' }">
        <div class="router-view-cnt">
          <router-view />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script lang="ts" setup>
import { reactive, ref, watch, VueElement, h } from "vue";
import { MailOutlined } from "@ant-design/icons-vue";
import type { MenuProps, ItemType } from "ant-design-vue";

const selectedKeys = ref<string[]>(["readme"]);
const openKeys = ref<string[]>(["reactive"]);

import { onMounted } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

function getItem(
  label: VueElement | string,
  key: string,
  icon?: any,
  children?: ItemType[],
  type?: "group"
): ItemType {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as ItemType;
}

const items: ItemType[] = reactive([
  getItem("简介", "/readme", () => h(MailOutlined)),
  { type: "divider" },

  getItem("响应式基础", "reactive", null, [
    getItem("Ref", "/reactive-ref", null),
    getItem("DOM更新时机", "/reactive-base", null),

    getItem("Reactive", "reactive-reactive", null),
  ]),

  getItem("Navigation Two", "sub2", null, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
]);

onMounted(() => {
  // if (selectedKeys.value.length) {
  //   router.push({
  //     path: selectedKeys.value[0] as string,
  //   });
  // }
});

const handleClick: MenuProps["onClick"] = (e) => {
  console.log("click", e);

  router.push({
    path: e.key as string,
  });
};
</script>

<style scoped>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  /* margin: 16px; */
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}

.router-view-cnt {
  height: 100vh;
  overflow: hidden;
}
</style>
