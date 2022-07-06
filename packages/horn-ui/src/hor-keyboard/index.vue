<template>
  <van-popup class="hor-keyboard" position="bottom" :show="true">
    <div class="hor-keyboard-header">
      <span class="hor-keyboard-value"></span>
      <button class="hor-keyboard-cancel whb">取消</button>
    </div>
    <ul class="as-keyboard-content">
      <li>123321</li>
    </ul>
  </van-popup>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  @import '../styles/define.scss';
  @include b(keyboard) {
    &:deep {
      background-color: rgb(155, 41, 41);
    }
    &-header {
      @extend %df;
      @extend %aic;
      @extend %jcs;
      @extend %bw05;
      @extend %bwb;
      padding: j(10) 0 j(10) j(10);
    }
    &-value {
      @extend %df1;
      @extend %df;
      @extend %aic;
      @extend %c3;
      @extend %bsb;
      padding: 0 j(16);
      font-size: j(14);
      background-color: #fff;
      border-radius: j(8);
      height: j(40);
      &.place-value {
        color: #cbcbcb;
      }
    }
    &-cancel {
      @extend %df;
      @extend %aic;
      @extend %jcc;
      @extend %cp;
      @extend %ao8;
      border: none;
      color: #0095d9;
      height: j(40);
      padding: 0 j(20);
      font-size: j(16);
      background-color: transparent;
    }
  }
</style>
