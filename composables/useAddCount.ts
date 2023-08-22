export const useAddCount = () => {
  const count = ref<number>(0);

  const addCount = () => {
    count.value++;
  };

  return {
    count,
    addCount
  };
}
