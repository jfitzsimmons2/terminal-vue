<template>
  <div class="progress-bar">
    <div class="progress-bar-filled" :style="`width: ${props.modelValue}%`"></div>
    </div>
</template>

<script setup lang="ts">
import { watchEffect } from 'vue';

  const props = defineProps<{
    modelValue: number;
  }>();

  const emits = defineEmits(['update:modelValue'])

  watchEffect(() => {
    if (props.modelValue > 100) {
      emits("update:modelValue", 100)
    }
    if (props.modelValue < 0) {
      emits('update:modelValue', 0)
    }
  })
</script>

<style scoped>

</style>
