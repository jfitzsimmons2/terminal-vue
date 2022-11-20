<script setup lang="ts">
import { ref } from "vue";
import InputText from "../../components/input-text/input-text.vue";

const state = ref({
  inputText: "Input Text",
});
</script>

<template>
  <Story title="Input Text">
    <InputText
      label="Text input:"
      type="text"
      v-model="state.inputText"
    ></InputText>
    <template #controls>
      <HstText v-model="state.inputText" title="modelValue"></HstText>
    </template>
  </Story>
</template>
