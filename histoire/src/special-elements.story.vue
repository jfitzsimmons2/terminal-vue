<script lang="ts" setup>
function initState() {
  return {};
}
const initState2 = () => {
  return {
    test: "test",
  };
};
</script>

<template>
  <Story title="Special elements">
    <Variant title="playground" :init-state="initState2">
      <template #default="{ state }">
        {{ state.test }}
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

        <h4 id="Address">Address</h4>
        <address>
          Mozilla Foundation<br />
          1981 Landings Drive<br />
          Building K<br />
          Mountain View, CA 94043-0801<br />
          USA
        </address>
      </template>
      <template #controls="{ state }">
        <HstText title="test" v-model="state.test" />
      </template>
    </Variant>
    <Variant title="terminal prompt" :init-state="initState">
      <template #default="{ state }">
        <h5 class="terminal-prompt">Terminal Prompt</h5>
      </template>
    </Variant>

    <Variant title="playground" :init-state="initState">
      <template #default="{ state }"> </template>
    </Variant>
    <Variant title="playground" :init-state="initState">
      <template #default="{ state }"> </template>
    </Variant>
  </Story>
</template>
