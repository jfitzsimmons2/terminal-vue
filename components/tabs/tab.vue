<template>
  <slot></slot>
</template>

<script setup lang="ts">
const props = defineProps<{
  heading: string;
  disabled?: Boolean;
}>();
</script>

<style scoped></style>
