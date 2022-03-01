<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<template>
  <n-button @click="$router.push({ name: 'login' })">
    登录
  </n-button>
</template>