import { defineStore } from "pinia"

export const useHomeStore = defineStore('home', () => {
  const count = ref<number>(0);
  const addCount = () => {
    count.value++
    console.log(count.value);
  };
  return {
    count,
    addCount
  }
})