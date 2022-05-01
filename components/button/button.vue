<template>
  <button class="btn">
    <Icon style="margin-right: 0.5rem" v-if="props.icon" :icon="props.icon" />
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
};
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{ icon?: string }>();
</script>
