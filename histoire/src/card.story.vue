<script lang="ts" setup>
import { reactive } from "vue";
import Card from "../../components/card/card.vue";

const state = reactive({
  headerAlign: "center",
  collapsable: false
});
</script>

<template>
  <Story title="Card">
    <Variant>
      <Card :collapsable="state.collapsable" />
      <template #controls>
        <HstCheckbox title="collapsable" v-model="state.collapsable" />
      </template>
    </Variant>
  </Story>
</template>
