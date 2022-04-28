<script lang="ts" setup>
import Tabs from "../../components/tabs/tabs.vue";
import Tab from "../../components/tabs/tab.vue";

function initState() {
  return {
    activeIndex: 0,
  };
}
</script>

<template>
  <Story title="Tabs">
    <Variant title="tabs" :init-state="initState">
      <template #default="{ state }">
        <Tabs v-model:activeIndex="state.activeIndex">
          <Tab heading="test1">tab1</Tab>
          <Tab heading="test2">tab2</Tab>
          <Tab heading="test3">tab3</Tab>
        </Tabs>
      </template>
    </Variant>
  </Story>
</template>
