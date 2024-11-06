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
      :width="menuWidth"
    >
      <div class="logo" />
      <a-menu
        :items="menus"
        @click="handleClick"
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        theme="dark"
        mode="inline"
      >
      </a-menu>
    </a-layout-sider>
    <a-layout :style="{ marginLeft: menuWidth }">
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
import type { MenuProps } from "ant-design-vue";
import { ref } from "vue";

import { useMenuConfig } from "./hooks/useMenuConfig";

import { onMounted } from "vue";

import { useRouter } from "vue-router";

const router = useRouter();

const menuWidth = ref("270px");

const { menus, openKeys, selectedKeys } = useMenuConfig();

onMounted(async () => {
  await router.isReady();
  if (router.currentRoute.value.matched.length === 0) {
    router
      .push({
        path: "/readme",
      })
      .then(() => {
        selectedKeys.value = [router.currentRoute.value.path];
      });
  }

  selectedKeys.value = [router.currentRoute.value.path];
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
