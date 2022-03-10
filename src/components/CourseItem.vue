<template>
  <div class="course">
    <div
      class="course_img"
      :style="{ backgroundImage: 'url(' + course.imgUrl + ')' }"
    />
    <div class="course_item_info">
      <div class="course_item title">
        <span class="title_text">{{ course.title }}</span>
        <i class="iconfont icon-gengduo" />
      </div>
      <div class="course_item name">
        {{ course.teacherName }}
      </div>
    </div>
    <div
      class="course_level"
      :style="{ backgroundColor: 'var('+getColor(course.level)+')' }"
    />
  </div>
</template>
<script setup lang="ts">
import { Course } from '../config/interface'
defineProps<{
  course: Course;
}>()
const getColor = (level: 0 | 1 | 2): string => {
  switch (level) {
  case 0:
    return '--hight-level'
  case 1:
    return '--middle-level'
  case 2:
    return '--low-level'
  }
}
</script>
<style lang="scss">
.course {
  width: 260px;
  display: flex;
  position: relative;
  padding: 18px 10px 15px;
  flex-direction: column;
  align-items: center;
  background-color: var(--bg-grey);
  border-radius: 12px;
  border: 1px solid var(--line-grey-light);
  overflow: hidden;
  cursor: pointer;
  &:hover{
    background-color: var(--bg-grey-hover);
  }
  .course_img {
    width: 100%;
    height: 120px;
    background-size: cover;
  }
  .course_item_info {
    width: 100%;
    display: flex;
    flex-direction: column;
    .course_item {
      &.title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title_text {
          font-size: 20px;
          font-weight: bold;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        i {
          font-size: 24px;
        }
      }
      &.name {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
  .course_level {
    position: absolute;
    width: 100%;
    height: 10px;
    bottom: 0;
  }
}
</style>
