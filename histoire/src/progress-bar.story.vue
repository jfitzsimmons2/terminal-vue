<script lang="ts" setup>
import ProgressBar from "../../components/progress-bar/progress-bar.vue";

function initState() {
  return {
    percent: 0,
  };
}
</script>

<template>
  <Story title="Progress bar" :init-state="initState">
    <Variant title="default">
      <template #default="{ state }">
        <ProgressBar v-model="state.percent"></ProgressBar>
      </template>
      <template #controls="{ state }">
        <HstNumber
          title="percent"
          v-model.number="state.percent"
          type="number"
        />
      </template>
    </Variant>
    <Variant title="loading demo">
      <template #default="{ state }">
        <div class="terminal-prompt">Loading</div>
        <ProgressBar v-model="state.percent"></ProgressBar>
      </template>
      <template #controls="{ state }">
        <HstNumber
          title="percent"
          v-model.number="state.percent"
          type="number"
        />
      </template>
    </Variant>
  </Story>
</template>
