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
@import "./assets/root.scss";
*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
