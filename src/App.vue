<script setup lang="ts">
import 'normalize.css'
import { NConfigProvider } from 'naive-ui'
import { useColorOverrides } from './config/colorOverrides'

const { themeOverrides } = useColorOverrides()
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
    abstract
  >
    <router-view />
  </n-config-provider>
</template>

<style lang="scss">
@import './assets/root.scss';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-blue);
}
</style>
