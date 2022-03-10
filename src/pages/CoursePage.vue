<template>
  <div class="coursePage">
    <n-tabs type="line">
      <n-tab-pane
        name="oasis"
        tab="我学的课"
      >
        Wonderwall
      </n-tab-pane>
      <n-tab-pane
        name="the beatles"
        tab="我教的课"
      >
        Hey Jude
      </n-tab-pane>
    </n-tabs>
    <div class="course_tools">
      <LButton>加入课程</LButton>
    </div>
    <div class="course_list">
      <CourseItem
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { Course } from '../config/interface'
import CourseItem from '../components/CourseItem.vue'
import { NTabs, NTabPane } from 'naive-ui'

const courses = reactive<Course[]>([
  {
    id: 0,
    title: 'vue',
    teacherName: 'lijun',
    imgUrl: '/img/sun.jpeg',
    level: 0,
  }, {
    id: 1,
    title: 'react',
    teacherName: 'lijun',
    imgUrl: '/img/sun.jpeg',
    level: 1,
  }, {
    id: 2,
    title: 'angular',
    teacherName: 'lijun',
    imgUrl: '/img/sun.jpeg',
    level: 2,
  }, {
    id: 3,
    title: 'angular',
    teacherName: 'lijun',
    imgUrl: '/img/sun.jpeg',
    level: 2,
  }, {
    id: 4,
    title: 'angular',
    teacherName: 'lijun',
    imgUrl: '/img/sun.jpeg',
    level: 2,
  },
])
</script>
<style lang="scss" scoped>
.coursePage {
  width: 100%;
  padding: 0 10px;
  .course_tools {
    padding: 15px 0;
  }
  .course_list {
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    justify-items: center;
  }
}
</style>
