<script setup lang="ts">
import LoginAndRegsiterPanel from '../components/LoginAndRegisterPanel/LoginAndRegisterPanel.vue'
</script>

<template>
  <div class="wrapper">
    <div class="logo-wrapper">
      LOGO
    </div>
    <div class="saying-wrapper">
      <p class="saying">
        <span class="bold">书籍</span><br>是人类进步的阶梯
      </p>
    </div>
    <login-and-regsiter-panel class="panel" />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  color: initial;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;

  background: center / cover no-repeat url('/img/login.jpg');
}

.logo-wrapper {
  position: absolute;
  top: 70px;
  left: 100px;

  width: 200px;
  height: 100px;

  background-color: white;
}

.saying-wrapper {
  position: absolute;
  top: 470px;
  left: 200px;

  color: white;
  font-size: 54px;
  line-height: 1.25;
  text-align: left;

  font-family: serif;

  .saying {
    margin: 0;
  }

  .bold {
    font-weight: bold;

    font-family: sans-serif;
  }
}

.panel {
  position: absolute;
  top: 220px;
  right: 120px;
}
</style>
