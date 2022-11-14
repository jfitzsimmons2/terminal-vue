<template>
  <div class="terminal-card">
    <header :tabindex="props.collapsable ? 0 : -1" role="button" :aria-expanded="collapsed ? false : true"
      :aria-controls="id" :class="{ collapsable: props.collapsable }" @click="handleClick" @keydown.enter="handleClick"
      @keydown.space="handleClick">{{ props.heading }} <div v-if="props.collapsable" class="terminal-card__collapse">[ {{
          collapseSymbol
      }} ]</div>
    </header>
    <div v-if="!collapsed" :id="id">
      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import componentId from '../utils/unique-component-id'

const id = componentId('tv_card_');

const props = defineProps<{ collapsable: boolean, heading: string }>();

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
