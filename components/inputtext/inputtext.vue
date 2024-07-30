<template>
  <slot>
    <div class="form-group">
      <label :for="id">{{ props.label }}</label>
      <input
        :id="id"
        v-bind="attrs"
        :type="props.type"
        :value="modelValue"
        @input="handleInput"
        :placeholder="props.placeholder"
      />
    </div>
  </slot>
</template>

<script lang="ts">
export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
</script>

<script setup lang="ts">
import { computed, useAttrs, watch } from "vue";
import uniqueComponentId from "../utils/unique-component-id";

const id = uniqueComponentId("tv_input_");
const attrs = useAttrs();

const emit = defineEmits(["update:modelValue"]);

const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  changeModelValue(target.value);
};

const changeModelValue = (modelValue: string) => {
  emit("update:modelValue", modelValue);
};

const props = withDefaults(
  defineProps<{
    label: string;
    type: InputType;
    placeholder?: string;
    modelValue: string;
  }>(),
  {
    placeholder: undefined,
    label: "label",
    type: "text",
    modelValue: "",
  }
);
</script>

<style scoped></style>
