import { defineStore } from 'pinia'

export const useInputStore = defineStore('counter', {
  state: () =>({
     price: "",
     discount: "",
     cost: "",
     checked: false,
  })
})