<template>
    <div class="input-wrap">
        <label v-if="label">{{ label }}</label>
        <input :type="type" :value="modelValue" :disabled="isDisabled"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" v-bind="$attrs" />
    </div>
</template>

<script lang="ts" setup>
defineProps({
    label: {
        type: String,
        default: false,
    },
    isDisabled: Boolean,
    type: String,
    modelValue: {
        type: String,
        default: "",
    }
})
defineEmits(['update:modelValue'])
</script>

<style scoped>
.input-wrap {
    display: flex;
    flex-direction: column;
}

.input-wrap input {
    height: 2rem;
}
</style>
