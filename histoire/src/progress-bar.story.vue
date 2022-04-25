<script lang="ts" setup>
import ProgressBar from "../../components/progress-bar/progress-bar.vue";


function initState() {
  return {
    percent: 0,
  };
}
</script>

<template>
  <Story title="Progress bar">
    <Variant>
      <template #default="{ state }">
        <ProgressBar v-model="state.percent">Click me</ProgressBar>
      </template>
      <template #controls="{ state }">
      <HstNumber title="percent" v-model.number="state.percent" type="number" />
      </template>
    </Variant>
  </Story>
</template>
