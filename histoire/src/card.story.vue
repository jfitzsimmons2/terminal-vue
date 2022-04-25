<script lang="ts" setup>
import Card from "../../components/card/card.vue";

function initState() {
  return {
    headerAlign: "center",
    collapsable: false
  };
}
</script>

<template>
  <Story
    title="Card"
  >
    <Variant
      :init-state="initState"
    >
      <template #default="{ state }">
        <Card :collapsable="state.collapsable" />
      </template>
      <template #controls="{state}">
        <HstCheckbox title="collapsable" v-model="state.collapsable" />
      </template>
    </Variant>
  </Story>
</template>
