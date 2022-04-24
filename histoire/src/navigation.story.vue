<script lang="ts" setup>
import { RouteLocationRaw } from "vue-router";
import Navigation from "../../components/navigation/navigation.vue";

const menuItems: Array<object> = [
  {
    name: "Item #1",
    path: "/",
  },
  {
    name: "Item #2",
    path: "/two",
  },
  {
    name: "Item #3",
    path: "/three",
  },
];

function initState() {
  return {
    logoText: "LogoText",
  };
}
</script>

<template>
  <Story title="Navigation">
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }">
        <Navigation :menu-items="menuItems" :logo-text="state.logoText" />
      </template>
      <template #controls="{ state }">
        <HstText title="logoText" v-model="state.logoText" />
      </template>
    </Variant>
  </Story>
</template>
