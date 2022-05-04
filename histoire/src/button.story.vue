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
        <Button :icon="state.icon" :class="btnClass">Click me</Button>
      </template>
      <template #controls="{ state }">
        <HstText title="icon" v-model="state.icon" />
      </template>
    </Variant>
  </Story>
</template>
