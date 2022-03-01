<script setup lang="ts">
import { CSSProperties } from 'vue'
import {
  NForm,
  NFormItem,
  NInput,
  NButton,
  NSpace
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
    <n-space
      vertical
      justify="space-between"
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
        label="邮箱"
        path="email"
        :label-style="labelStyle"
      >
        <n-input
          placeholder="请输入邮箱"
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
      <n-form-item
        label="验证码"
        path="password"
        :label-style="labelStyle"
      >
        <n-space :wrap="false">
          <n-input
            placeholder="请输入验证码"
          />
          <n-button
            size="medium"
            text-color="#101010"
            color="white"
          >
            获取验证码
          </n-button>
        </n-space>
      </n-form-item>
      <n-form-item>
        <n-button
          type="primary"
          size="large"
          block
          round
        >
          注册
        </n-button>
      </n-form-item>
    </n-space>
  </n-form>
</template>

<style scoped>
.form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
</style>