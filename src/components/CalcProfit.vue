<template>
    <div class="profit-container">
        <span class="profit-text" v-if="text">{{ text }}</span>
        <span class="profit-number" v-if="calcProfit">{{ calcProfit }}%</span>
    </div>
</template>

<script lang="ts" setup>
defineProps({
    text: String,
    calcProfit: String,
})
</script>
<style scoped>
.profit-container {
    width: 280px;
    height: 272px;
    background-color: white;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem
}

.profit-number {
    font-size: 2rem;
    font-weight: 500;
}
</style>