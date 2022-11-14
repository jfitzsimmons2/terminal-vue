<script lang="ts" setup>
import { reactive } from "vue";
import Card from "../../components/card/card.vue";

const state = reactive({
  collapsable: true
});
</script>

<template>
  <Story title="Card">
    <Variant>
      <Card :collapsable="state.collapsable" heading="Card title">
        <ul>
          <li>The element that shows and hides the content has role button.</li>
          <li>When the content is visible, the element with role button has aria-expanded set to true. When the content
            area is hidden, it is set to false.</li>
          <li>Optionally, the element with role button has a value specified for aria-controls that refers to the
            element that contains all the content that is shown or hidden.</li>
          <li><a href="https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/" target="_blank">Source document link</a>
          </li>
        </ul>
      </Card>
    </Variant>
  </Story>
</template>
