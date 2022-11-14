<template>
  <div class="terminal-card">
    <header tabindex="0" role="button" :aria-expanded="collapsed ? false : true" :aria-controls="id"
      :class="{ collapsable: props.collapsable }" @click="handleClick" @keydown.enter="handleClick"
      @keydown.space="handleClick">Card Title <div v-if="props.collapsable" class="terminal-card__collapse">[ {{
          collapseSymbol
      }} ]</div>
    </header>
    <div v-if="!collapsed" :id="id">
      <slot>
        <ul>
          <li>The element that shows and hides the content has role button.</li>
          <li>When the content is visible, the element with role button has aria-expanded set to true. When the content
            area is hidden, it is set to false.</li>
          <li>Optionally, the element with role button has a value specified for aria-controls that refers to the
            element that contains all the content that is shown or hidden.</li>
        </ul>

      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import componentId from '../utils/unique-component-id'

const id = componentId('tv_card_');

const props = defineProps<{ collapsable: boolean }>();

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
