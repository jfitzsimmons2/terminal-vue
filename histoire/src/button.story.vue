<script lang="ts" setup>
import { reactive } from "vue";
import Button from "../../components/button/button.vue";

const buttonClasses = [
  "btn-default",
  "btn-primary",
  "btn-error",
  "btn-default btn-ghost",
  "btn-primary btn-ghost",
  "btn-error btn-ghost",
];

const state = reactive({
  disabled: false,
  icon: 'material-symbols:wash'
});
</script>

<template>
  <Story :layout="{
    type: 'grid',
    width: 200,
  }" title="Button">
    <Variant v-for="btnClass in buttonClasses" :title="btnClass">
      <Button :icon="state.icon" :disabled="state.disabled" :class="btnClass">Click me</Button>

      <template #controls>
        <HstText title="icon" v-model="state.icon" />
      </template>
    </Variant>
  </Story>
</template>
