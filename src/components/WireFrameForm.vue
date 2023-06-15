<script setup lang="ts">
import { computed } from 'vue';
import BaseWireFrameInput from './BaseWireFrameInput.vue';
import ToggleButton from './ToggleButton.vue';
import CalcProfit from './CalcProfit.vue';
import { storeToRefs } from "pinia";
import { useInputStore } from "@/stores/inputValue";
const store = useInputStore();
const { checked, cost, price, discount } = storeToRefs(store);
const calcProfit = computed(() => {
  if (!price.value || !cost.value) {
    return "0"
  }

  const priceInt = parseInt(price.value);
  const priceDiscount = discount.value && checked ? parseInt(discount.value) : 0;
  const priceCost = parseInt(cost.value);

  return priceInt * (100 - priceDiscount) / 100 - priceCost + "";
})
</script>

<template>
  <div class="wireFrame-container">
    <div class="form">
      <BaseWireFrameInput type="text" label="Price" v-model="price" />
      <BaseWireFrameInput type="text" label="Cost" v-model="cost" />
      <BaseWireFrameInput :isDisabled=!checked type="text" label="Discount" v-model="discount" />
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
