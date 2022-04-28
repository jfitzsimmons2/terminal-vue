<template>
  <div class="tabs" role="tablist">
    <div class="tab-buttons">
      <Button
        @click="$emit('update:activeIndex', i)"
        v-for="(tab, i) in tabs"
        class="btn-default btn-ghost"
        :class="{ active: props.activeIndex == i }"
        >{{ tab.props.heading }}</Button
      >
    </div>
    <div class="tab-panels">
      <template v-for="(tab, i) of tabs" :key="getKey(tab, i)">
        <div
          class="terminal-card"
          role="tabpanel"
          v-show="props.activeIndex === i"
        >
          <div>
            <component :is="tab"></component>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, useSlots } from "vue";
import Button from "../button/button.vue";

const slots = useSlots();
const props = withDefaults(
  defineProps<{
    activeIndex: number;
  }>(),
  {
    activeIndex: 0,
  }
);

const tabs = computed(() => {
  return slots.default();
});

const getKey = (tab, i) => {
  return tab.props && tab.props.header ? tab.props.header : i;
};

onMounted(() => {
  console.log(slots.default());
});
</script>

<style scoped></style>
