<template>
    <slot>
        <div class="form-group">
            <label :for="id">{{ props.label }}</label>
            <input :id="id" v-bind="attrs" :type="props.type" :placeholder="props.placeholder" />
        </div>
    </slot>
</template>

<script lang="ts">
export type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
</script>

<script setup lang="ts">
import { useAttrs } from 'vue';
import uniqueComponentId from '../utils/unique-component-id';

const id = uniqueComponentId('tv_input_');
const attrs = useAttrs();

const props = withDefaults(defineProps<{ label: string, type: InputType, placeholder?: string }>(), {
    placeholder: undefined,
    label: "label",
    type: 'text'
})
</script>

<style scoped>

</style>