<template>
  <NavBar class="nav_bar" />
  <div class="main_content">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
</script>
<style lang="scss" scoped>
.nav_bar {
  position: fixed;
}
.main_content {
  margin-left: 80px;
}
</style>
