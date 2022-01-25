<template>
  <div class="custom-comp" @click="onClick">Click Me</div>
</template>

<script setup>
const props = defineProps({
  onCustomEvent: Function,
});

// Style 1:  return result, whatever it is sync or async function.
function onClick() {
  return props.onCustomEvent();
}

// Style 2:  use async/await, good for complex biz
// async function onClick() {
//   await props.onCustomEvent();
// }
</script>

<style scoped>
.custom-comp {
  width: 100px;
  height: 50px;
  background-color: green;
}
</style>
