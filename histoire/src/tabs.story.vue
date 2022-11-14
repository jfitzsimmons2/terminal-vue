<script lang="ts" setup>
import Tabs from "../../components/tabs/tabs.vue";
import Tab from "../../components/tabs/tab.vue";
import { ref } from "vue";

const activeIndex = ref(0);
const activeIndex2 = ref(1);

</script>

<template>
  <Story title="Tabs">
    <Variant title="One set of tabs">
      <Tabs v-model="activeIndex">
        <Tab heading="Overview">
          <p>These tabs are built with recommended accessibility features, as
            outlined by the
            <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html" target="_blank">ARIA Authoring
              Practices Guide (APG)</a>
          </p>
        </Tab>
        <Tab heading="How to use">
          <p>Once you are focused on a set of tabs, use the arrow keys (left, right) to toggle
            focus between the tabs. Press enter or spacebar on the tab to review the content for that tab.</p>
        </Tab>
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
        <Tab heading="How to use">
          <p>Once you are focused on a set of tabs, use the arrow keys (left, right) to toggle
            focus between the tabs. Press enter or spacebar on the tab to review the content for that tab.</p>
        </Tab>
      </Tabs>
      <hr />
      <Tabs v-model="activeIndex2">
        <Tab heading="Overview">
          These tabs are build with recommended accessibility features, as
          outlined by the
          <a href="https://www.w3.org/WAI/ARIA/apg/example-index/tabs/tabs-manual.html" target="_blank">ARIA Authoring
            Practices Guide (APG)</a>
        </Tab>
        <Tab heading="How to use">
          <p>Once you are focused on a set of tabs, use the arrow keys (left, right) to toggle
            focus between the tabs. Press enter or spacebar on the tab to review the content for that tab.</p>
        </Tab>
      </Tabs>
    </Variant>
  </Story>
</template>
