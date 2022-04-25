<template>
  <div class="terminal-card">
    <header :class="{ collapsable: props.collapsable }" @click="handleClick" :style="headerAlign">Card Title <div v-if="props.collapsable" class="terminal-card__collapse">[ {{collapseSymbol}} ]</div></header>
    <div v-if="!collapsed">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, quas
      ex vero enim in doloribus officiis ullam vel nam esse sapiente velit
      incidunt. Eaque quod et, aut maiores excepturi sint.
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{headerAlign: string, collapsable: false}>();

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

const headerAlign = computed(() => {
  if (props.headerAlign == 'left') {
    return 'text-align: left';
  }
  if (props.headerAlign == 'center') {
    return 'text-align: center';
  }
  if (props.headerAlign == 'right') {
    return 'text-align: right';
  } 
})
</script>
