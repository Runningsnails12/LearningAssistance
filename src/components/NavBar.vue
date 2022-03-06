<template>
  <div class="container">
    <div class="logo">
      study
    </div>
    <section class="nav">
      <div class="nav_details">
        <router-link
          v-for="item in navData"
          :key="item.id"
          class="nav_item_a"
          :class="[item.id === $route.meta.id ? 'active' : '']"
          :to="item.path"
        >
          <div class="nav_item">
            <i
              :class="item.icon"
              class="nav_icon"
            />
            <span class="nav_title">{{ item.title }}</span>
          </div>
        </router-link>
      </div>
    </section>
    <section class="tools">
      <div class="tool">
        <i class="iconfont icon-sousuo" />
      </div>
      <div class="tool">
        <n-badge
          :value="11"
          :max="99"
        >
          <i class="iconfont icon-xiaoxizhongxin" />
        </n-badge>
      </div>
    </section>
    <section class="avatar">
      <img
        src="/img/avatar.jpg"
        alt="头像"
        class="avatar_img"
      >
    </section>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { NBadge } from 'naive-ui'

interface NavItem {
  id: number;
  title: string;
  icon: string;
  path: string;
}
const navData = reactive<Array<NavItem>>([
  {
    id: 0,
    title: '首页',
    icon: 'iconfont icon-shouye',
    path: '/home',
  },
  {
    id: 1,
    title: '课程',
    icon: 'iconfont icon-kecheng',
    path: '/course',
  },
  {
    id: 2,
    title: '工具',
    icon: 'iconfont icon-gongju-',
    path: '/tool',
  },
])
</script>
<style lang="scss" scoped>
.hover_bg {
  background-color: var(--bg-grey);
}
.container {
  width: 80px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--bg-white);
  box-shadow: 0 1px 5px 0 rgb(57 66 60 / 20%);
  .logo {
    flex: 0 0 auto;
    padding: 30px 0;
    text-align: center;
    font-size: 28px;
  }
  .nav {
    display: flex;
    height: 100%;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .icon {
      width: 24px;
      height: 24px;
      color: var(--text-blue);
    }
    .nav_details {
      height: 100%;
      overflow: hidden;
      .nav_item_a {
        margin: 5px 0;
        display: flex;
        color: var(--nav-text-black);
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        border-radius: 8px;
        &.active {
          color: var(--text-blue);
          background-color: var(--bg-grey);
        }
        &:hover {
          @extend .hover_bg;
        }
        .nav_item {
          display: flex;
          margin: 12px 18px 9px;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .nav_icon {
            font-size: 20px;
            line-height: 20px;
          }
          .nav_title {
            font-size: 12px;
            user-select: none;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
  .tools {
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    align-items: center;
    .tool {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 60px;
      height: 44px;
      border-radius: 8px;
      overflow: hidden;
      cursor: pointer;
      &:hover {
        @extend .hover_bg;
      }
      .iconfont {
        font-size: 20px;
        color: var(--nav-text-black);
      }
    }
  }
  .avatar {
    margin: 20px 0;
    text-align: center;
    .avatar_img {
      width: 34px;
      height: 34px;
      border-radius: 100%;
      cursor: pointer;
    }
  }
}
</style>
