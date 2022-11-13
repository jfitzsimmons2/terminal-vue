<script lang="ts" setup>
import Tabs from "../../components/tabs/tabs.vue";
import Tab from "../../components/tabs/tab.vue";
import { ref } from "vue";

const activeIndex = ref();
</script>

<template>
  <Story title="Tabs">
    <Tabs v-model="activeIndex">
      <Tab heading="Overview">
        These tabs are build with recommended accessibility features, as
        outlined by the
        <a
          href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html"
          target="_blank"
          >ARIA Authoring Practices Guide (APG)</a
        >
      </Tab>
      <Tab heading="How to use">How to use</Tab>
      <Tab heading="test3">tab3</Tab>
    </Tabs>
  </Story>
</template>
