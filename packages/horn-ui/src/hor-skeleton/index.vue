<template>
  <div class="hor-skeleton">
    
    <div class="hor-skeleton-error" v-if="error">
      <span>{{ error }}</span>
      <van-button 
        v-if="errorBtnVisible"
        @click="$emit('refresh')"
        round 
        type="primary"
        class="hor-skeleton-error-btn"
        >{{ errorBtnText }}</van-button>
    </div>

    <van-loading
      v-else-if="loading" 
      vertical
    >加载中</van-loading>

    <div class="hor-skeleton-empty"
      v-else>
      <img :src="empty" alt="无数据">
      <span>{{ emptyPrompt }}</span>
    </div>

  </div>
</template>

<script setup lang="ts">
  import { horSkeletonProps } from './types'
  import { url } from '../utils'

  defineOptions({ name: 'HorSkeleton' })
  // 如果定义属性 这里传 horSkeletonProps， 在 types 里完善类型
  defineProps(horSkeletonProps)
  defineEmits(['refresh'])

  const empty = url('./empty-image-default.png', import.meta.url)
</script>

<style lang="scss" scoped>
  @import "../styles/define.scss";
  
  @include b(skeleton) {

    @extend %pa;
    @extend %t0;
    @extend %l0;
    @extend %r0;
    @extend %h100;
    @extend %df;
    @extend %aic;
    @extend %fdc;
    @extend %jcc;
    @extend %bsb;
    @extend %pen;
    font-size: j(14);
    padding-bottom: j(80);

    @include e(error) {

      @extend %df;
        @extend %fdc;
        @extend %aic;
        @extend %jcc;

        span {
          @extend %tac;
          @extend %c9;
          @include twno(5);
          width: j(250);
          margin-bottom: j(10);
        }

        @include m(btn) {
          pointer-events: auto;
          margin-top: j(30);
          width: j(160);
        }
    }

    @include e(loading) {
      @extend %df;
      @extend %aic;
      @extend %jcc;
      width: j(60);
      height: j(60);
      border-radius: j(10);
      background-color: rgba(0, 0, 0, .05);
    }

    @include e(empty) {
      @extend %df;
      @extend %fdc;
      @extend %aic;
      @extend %jcc;
      @extend %c9;
      pointer-events: auto;

      img {
        @extend %db;
        width: j(120);
        height: j(120);
        margin-bottom: j(30);
      }
    }

  }
</style>
