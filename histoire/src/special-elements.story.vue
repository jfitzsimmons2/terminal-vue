<script setup lang="ts">
import { reactive, ref } from "vue";

const state = ref("terminal text");
</script>

<template>
  <Story title="Special elements">
    <Variant title="blockquote">
      <blockquote>
        <p>
          <em>This is a properly formatted blockquote, btw.</em> Measuring
          programming progress by lines of code is like measuring aircraft
          building progress by weight.
        </p>
        <footer>
          <cite><a href="http://www.thegatesnotes.com">Bill Gates</a></cite>
        </footer>
      </blockquote>
    </Variant>
    <Variant title="terminal prompt">
      <p class="terminal-prompt">{{ state }}</p>
      <template #controls>
        <HstText v-model="state" title="text" />
      </template>
    </Variant>
    <Variant title="address">
      <address>
        Mozilla Foundation<br />
        1981 Landings Drive<br />
        Building K<br />
        Mountain View, CA 94043-0801<br />
        USA
      </address>
    </Variant>
  </Story>
</template>
