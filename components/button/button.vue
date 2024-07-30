<template>
  <button class="btn">
    <Icon style="margin-right: 0.5rem" v-if="props.icon" :icon="props.icon" />
    <slot>{{ props.label }}</slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "Button",
};
</script>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

const props = defineProps<{ icon?: string, label?: string }>();
</script>

<style lang="scss">
.btn {
  border: 1px solid;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  padding: 0.65em 2em;
  font-size: 1em;
  font-family: inherit;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: relative;
  z-index: 1;
  border-radius: 3px;
}

.btn:active {
  box-shadow: none;
}

.btn.btn-ghost {
  border-color: var(--font-color);
  color: var(--font-color);
  background-color: transparent;
}

.btn.btn-ghost:hover {
  background-color: transparent;
}

.btn-block {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
}

.btn-default {
  background-color: var(--font-color);
  border-color: var(--invert-font-color);
  color: var(--invert-font-color);
}

.btn-default:hover {
  background-color: var(--secondary-color);
  color: var(--invert-font-color);
}

.btn-default.btn-ghost:hover {
  border-color: var(--secondary-color);
  color: var(--secondary-color);
  z-index: 2;
}

.btn-error {
  color: var(--invert-font-color);
  background-color: var(--error-color);
  border: 1px solid var(--error-color);
}

.btn-error:hover {
  background-color: var(--error-color);
  border-color: var(--error-color);
}

.btn-error.btn-ghost {
  border-color: var(--error-color);
  color: var(--error-color);
}

.btn-error.btn-ghost:hover {
  border-color: var(--error-color);
  color: var(--error-color);
  z-index: 2;
}

.btn-primary {
  color: var(--invert-font-color);
  background-color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-primary:hover {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary.btn-ghost {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.btn-primary.btn-ghost:hover {
  border-color: var(--primary-color);
  color: var(--primary-color);
  z-index: 2;
}

.btn-small {
  padding: 0.5em 1.3em !important;
  font-size: 0.9em !important;
}

.btn-group {
  overflow: auto;
}

.btn-group .btn {
  float: left;
}

.btn-group .btn-ghost:not(:first-child) {
  margin-left: -1px;
}
</style>