<script lang="ts" setup>
import Tabs from "../../components/tabs/tabs.vue";
import Tab from "../../components/tabs/tab.vue";
import { ref } from "vue";

const activeIndex = ref(0);
const activeIndex2 = ref(0);

</script>

<template>
  <Story title="Tabs">
    <Variant title="One set of tabs">
      <Tabs v-model="activeIndex">
        <Tab heading="Overview">
          These tabs are build with recommended accessibility features, as
          outlined by the
          <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html" target="_blank">ARIA Authoring
            Practices Guide (APG)</a>
        </Tab>
        <Tab heading="How to use">How to use</Tab>
        <Tab heading="test3">tab3</Tab>
      </Tabs>

    </Variant>
    <Variant title="Two sets of tabs">
      <Tabs v-model="activeIndex">
        <Tab heading="Overview">
          These tabs are build with recommended accessibility features, as
          outlined by the
          <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html" target="_blank">ARIA Authoring
            Practices Guide (APG)</a>
        </Tab>
        <Tab heading="How to use">How to use</Tab>
        <Tab heading="test3">tab3</Tab>
      </Tabs>

      <Tabs v-model="activeIndex2">
        <Tab heading="Overview">
          These tabs are build with recommended accessibility features, as
          outlined by the
          <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html" target="_blank">ARIA Authoring
            Practices Guide (APG)</a>
        </Tab>
        <Tab heading="How to use">How to use</Tab>
        <Tab heading="test3">tab3</Tab>
      </Tabs>
    </Variant>
  </Story>
</template>
