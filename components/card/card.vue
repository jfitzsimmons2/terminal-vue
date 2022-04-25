<template>
  <div class="terminal-card">
    <header :class="{ collapsable: props.collapsable }" @click="handleClick">Card Title <div v-if="props.collapsable" class="terminal-card__collapse">[ {{collapseSymbol}} ]</div></header>
    <div v-if="!collapsed">
      <slot>
        <p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit. Expedita, quas
        ex vero enim in doloribus officiis ullam vel nam esse sapiente velit
        incidunt. Eaque quod et, aut maiores excepturi sint.</p>
        <p>Lorem ipsum dolor sit amet, <a href="#">consectetur</a> adipisicing elit. Expedita, quas
        ex vero enim in doloribus officiis ullam vel nam esse sapiente velit
        incidunt. Eaque quod et, aut maiores excepturi sint.</p>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{ collapsable: false }>();

const collapsed = ref();
const collapseSymbol = computed(() => {
if (collapsed.value) {
  return "+"
} else {
  return "-"
}
});

const handleClick = () => {
  if (props.collapsable) {
    collapsed.value = !collapsed.value;
  }
}
</script>
