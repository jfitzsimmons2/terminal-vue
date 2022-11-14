<template>
    <slot>
        <div class="form-group">
            <input :type="props.type" />
        </div>
    </slot>
</template>

<script lang="ts">
export type InputType = "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
</script>

<script setup lang="ts">
const props = withDefaults(defineProps<{ type: InputType }>(), {
    type: 'text'
})
</script>

<style scoped>

</style>