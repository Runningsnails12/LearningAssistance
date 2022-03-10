<template>
  <button class="LButton">
    <slot />
  </button>
</template>
<script>
export default {
  name: 'LButton',
}
</script>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.LButton {
  padding: 5px 10px;
  color: var(--text-grey);
  font-size: 14px;
  background-color: var(--LButton-bg);
  border-radius: 5px;
  border: 1px solid var(--line-grey);
  cursor: pointer;
  &:hover {
    color: var(--text-blue);
    border-color: var(--text-blue);
  }
}
</style>
