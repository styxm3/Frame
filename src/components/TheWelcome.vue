<script setup lang="ts">
import { ref, computed } from 'vue';
import WireFrameInput from './WireFrameInput.vue';
import ToggleButton from './ToggleButton.vue';
import CalcProfit from './CalcProfit.vue';
const price = ref("");
const discount = ref("");
const cost = ref("");
const checked = ref(false);
const calcProfit = computed(() => {
  if (!price.value && !cost.value) {
    return "0"
  } return parseInt(price.value) * (100 - parseInt(discount.value)) / 100 - parseInt(cost.value) + "";

})
</script>

<template>
  <div class="wireFrame-container">
    <div class="form">
      <WireFrameInput type="text" label="Price" v-model="price" />
      <WireFrameInput type="text" label="Cost" v-model="cost" />
      <WireFrameInput :isDisabled=!checked type="text" label="Discount" v-model="discount" />
      <ToggleButton v-model:checked="checked" label="Enable discount" />
    </div>
    <CalcProfit text="Profit" :calcProfit=calcProfit />
  </div>
</template>

<style scoped>
.wireFrame-container {
  display: flex;
  gap: 2rem;
}

.form {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem 8rem 6rem 2rem;
}
</style>
