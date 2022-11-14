<template>
  <div class="tabs" role="tablist" ref="tablist">
    <div class="tab-buttons">
      <Button v-for="(tab, i) in tabs" @click="$emit('update:modelValue', i)" :id="`tab${id}${i}`" class="btn-default"
        :class="{ active: modelValue == i }" role="tab" aria-selected="true" :aria-controls="`tab-panel_${id}_${i}`">{{
            tab.props?.heading
        }}</Button>
    </div>
    <div class="tab-panels">
      <template v-for="(tab, i) of tabs" :key="`tab-panel_${id}_${i}`">
        <div class="terminal-card" role="tabpanel" :aria-labelledby="`tab${id}${i}`" :id="`tab-panel_${id}_${i}`"
          v-show="modelValue === i">
          <div>
            <component :is="tab"></component>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, useSlots } from "vue";
import Button from "../button/button.vue";
import useTabs from "./useTabs";
import componentID from "../utils/unique-component-id";

const props = withDefaults(
  defineProps<{
    modelValue: number;
  }>(),
  {
    modelValue: 0,
  }
);

defineEmits(["update:modelValue"]);

const tablist = ref();
const id = "tablist_" + componentID();

console.log(id);

onMounted(() => {
  useTabs(tablist.value);
});

const slots = useSlots();

const tabs = computed(() => {
  return slots.default?.();
});

console.log(tabs);
</script>

<style lang="scss">
.tab-buttons button.btn {
  padding-left: var(--global-space);
  padding-right: var(--global-space);
  border: 0;
  margin-right: 0.25rem;

  &:focus {
    @include focused();
  }
}

.tab-buttons button {
  background-color: var(--invert-font-color);
  color: var(--font-color);
}

.tabs .terminal-card {
  border: none;
}

.tab-buttons button.active {
  background-color: var(--font-color);
  color: var(--invert-font-color);
}

.tab-buttons button:active,
.tab-buttons button:focus {
  outline: 1px dashed lime;
  outline-offset: 1px;
}
</style>
