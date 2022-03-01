<script setup lang="ts">
import type { CSSProperties } from 'vue'
import {
  NCard,
  NTabs,
  NTabPane,

  NConfigProvider,
  GlobalThemeOverrides
} from 'naive-ui'
import LoginTab from './LoginTab.vue'
import RegisterTab from './RegisterTab.vue'

const tabStyle: CSSProperties = {
  fontSize: '20px',
  padding: '0'
}

const paneStyle: CSSProperties = {
  padding: '0',
  marginTop: '40px'
}

const themeOverrides: GlobalThemeOverrides = {
  Card: {
    color: 'rgba(255, 255, 255, 0.9)',
    paddingMedium: '40px 45px',
    borderRadius: '12px'
  },
  Input: {
    textColor: '#cecece',
    borderRadius: '9px',
    fontSizeMedium: '18px'
  },
  Button: {
    borderRadiusLarge: '32px',
    fontSizeLarge: '20px',

    borderRadiusMedium: '9px',
    fontSizeMedium: '14px'
  }
}
</script>

<template>
  <n-config-provider
    :theme-overrides="themeOverrides"
  >
    <n-card
      class="login-and-register-panel"
      size="medium"
    >
      <n-tabs
        default-value="login"
        size="large"
        justify-content="space-evenly"
        :tab-style="tabStyle"
        :pane-style="paneStyle"
      >
        <n-tab-pane
          name="login"
          tab="登录"
        >
          <login-tab />
        </n-tab-pane>
        <n-tab-pane
          name="register"
          tab="注册"
        >
          <register-tab />
        </n-tab-pane>
      </n-tabs>
    </n-card>
  </n-config-provider>
</template>

<style scoped>
.login-and-register-panel {
  text-align: left;

  max-width: 460px;
  max-height: 540px;
}
</style>