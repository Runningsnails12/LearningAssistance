<script setup lang="ts">
import { CSSProperties } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NButton
} from 'naive-ui'

const labelStyle: CSSProperties = {
  color: '#101010',
  marginRight: '24px',

  textAlign: 'justify',
  textAlignLast: 'justify',
  fontSize: '20px'
}
</script>

<template>
  <n-form
    label-placement="left"
    label-width="auto"
    size="medium"
    class="form"
  >
    <n-form-item
      label="用户名"
      path="username"
      :label-style="labelStyle"
      class="form-item"
    >
      <n-input
        placeholder="请输入用户名"
      />
    </n-form-item>
    <n-form-item
      label="密码"
      path="password"
      :label-style="labelStyle"
    >
      <n-input
        placeholder="请输入密码"
      />
    </n-form-item>
    <n-form-item>
      <n-button
        type="primary"
        size="large"
        block
        round
      >
        登录
      </n-button>
    </n-form-item>
  </n-form>
</template>

<style scoped>
.form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>