<script lang="ts" setup>
import Button from "../../components/button/button.vue";

const buttonClasses = [
  "btn-default",
  "btn-primary",
  "btn-error",
  "btn-default btn-ghost",
  "btn-primary btn-ghost",
  "btn-error btn-ghost",
];

function initState() {
  return {
    disabled: false,
  };
}
</script>

<template>
  <Story
    :layout="{
      type: 'grid',
      width: 200,
    }"
    title="Button"
  >
    <Variant
      v-for="btnClass in buttonClasses"
      :title="btnClass"
      :init-state="initState"
    >
      <template #default="{ state }">
        <Button :class="btnClass">Click me</Button>
      </template>
    </Variant>
  </Story>
</template>
