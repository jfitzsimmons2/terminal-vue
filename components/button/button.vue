<template>
  <button class="btn" v-bind="{ ...attrs }"><slot></slot></button>
</template>

<script lang="ts">
export default {
  name: "Button",
};
</script>
