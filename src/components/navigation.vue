<script setup lang="ts">
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="terminal-nav">
    <div class="terminal-logo">
      <div class="logo terminal-prompt">
        <slot name="logo">
          <a href="#" class="no-style">Logo</a>
        </slot>
      </div>
    </div>
    <nav class="terminal-menu">
      <ul>
        <li><a class="menu-item" href="#">Item #1</a></li>
        <li><a class="menu-item active" href="#">Active Item #2</a></li>
        <li><a class="menu-item" href="#">Item #3</a></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
