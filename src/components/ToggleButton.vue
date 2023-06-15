<template>
    <div class="main-container">
        <span class="label">{{ label }}</span>
        <label class="container">

            <input v-bind="$attrs" class="input" type="checkbox" :checked="checked"
                @change="$emit('update:checked', ($event.target as HTMLInputElement).checked)" />

            <span class="switch"></span>
        </label>
    </div>
</template>
  
<script lang="ts" setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    checked: {
        type: Boolean,
        required: true,
    },
})

</script>
<style scoped>
.main-container {
    display: flex;
    flex-direction: column;
}

.container {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.label {
    color: #1a202c;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.input {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}

.switch {
    --switch-container-width: 50px;
    --switch-size: calc(var(--switch-container-width) / 2);
    --light-gray: #e2e8f0;
    --dark-gray: #a0aec0;
    --black: #000;
    display: flex;
    align-items: center;
    position: relative;
    height: var(--switch-size);
    flex-basis: var(--switch-container-width);
    border-radius: var(--switch-size);
    background-color: var(--light-gray);
    flex-shrink: 0;
    transition: background-color 0.25s ease-in-out;
}

.switch::before {
    content: "";
    position: absolute;
    left: 1px;
    height: calc(var(--switch-size) - 4px);
    width: calc(var(--switch-size) - 4px);
    border-radius: 9999px;
    background-color: white;
    border: 2px solid var(--light-gray);
    transition: transform 0.375s ease-in-out;
}

.input:checked+.switch {
    background-color: var(--black);
}

.input:checked+.switch::before {
    border-color: var(--black);
    transform: translateX(calc(var(--switch-container-width) - var(--switch-size)));
}
</style>