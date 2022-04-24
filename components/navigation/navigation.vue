<script lang="ts">
export default {
  name: "Navigation",
};
</script>

<script setup lang="ts">
import "terminal.css";

const props = defineProps<{
  logoText: string;
  menuItems: Array<object>;
}>();
</script>

<template>
  <div class="terminal-nav">
    <div class="terminal-logo">
      <div class="logo terminal-prompt">
        <slot name="logo">
          <a href="#" class="no-style">{{ props.logoText }}</a>
        </slot>
      </div>
    </div>
    <nav class="terminal-menu">
      <slot name="menu">
        <ul>
          <li v-for="menuItem in menuItems">
            <a class="menu-item" href="#">Item #1</a>
          </li>
        </ul>
      </slot>
    </nav>
  </div>
</template>
