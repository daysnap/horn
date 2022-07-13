<template>
  <div
    class="hor-cell"
    :class="{
      'is-row': direction === 'row',
      'is-column': direction === 'column',
      'is-required': required,
      'is-arrow': arrow,
      'is-align-item-center': alignItemCenter,
      'is-ellipsis': ellipsis,
      'is-line-clamp': !!+lineClamp,
    }"
    :style="{ '--hor-cell-line-clamp': lineClamp }"
  >
    <div class="hor-cell-label">
      <slot name="prefix">
        <hor-icon class="hor-cell-icon" v-if="icon" :name="icon" />
      </slot>
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </div>
    <div class="hor-cell-value">
      <slot>
        <span v-html="value"></span>
      </slot>
      <slot name="suffix">
        <hor-icon class="hor-cell-arrow" v-if="arrow" name="arrow" />
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { horCellProps } from './types'
  import { HorIcon } from '../hor-icon'

  defineOptions({ name: 'HorCell' })
  defineProps(horCellProps)
</script>

<style lang="scss" scoped>
  @import '../styles/define.scss';

  @include b(cell) {
    @extend %df;
    @extend %bw05;
    @extend %bwb;
    @extend %bsb;
    @extend %w100;
    @extend %c3;
    background-color: #fff;
    font-size: j(14);
    padding: j(10) j(16);
    line-height: 1.6;

    @include when(row) {
      @extend %aie;
      align-items: flex-start;

      .#{$namespace}-cell-value {
        @extend %jce;
        span {
          @extend %tar;
        }
      }
    }

    @include when(align-item-center) {
      align-items: center;
    }

    @include when(column) {
      @extend %fdc;
    }

    @include when(required) {
      .#{$namespace}-cell-label {
        @extend %pr;
        &:before {
          @extend %pa;
          left: j(-8);
          content: '*';
          color: $color-danger;
        }
      }
    }

    @include when(ellipsis) {
      .#{$namespace}-cell-value {
        @extend %oh;
        span {
          @extend %twno;
          min-width: 0;
        }
      }
    }

    @include when(ellipsis-left) {
      .#{$namespace}-cell-value {
        @extend %oh;
        @extend %twno;
        white-space: nowrap;
      }
    }

    @include when(line-clamp) {
      .#{$namespace}-cell-value {
        padding-bottom: j(4);
        word-break: break-all;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: var(--hor-cell-line-clamp);
        -webkit-box-orient: vertical;
      }
    }

    @include when(clickable) {
      @extend %cp;
      @extend %ao8;
    }

    @include e(label) {
      @extend %df;
      @extend %aic;
      margin-right: j(16);
      i {
        margin-right: j(12);
        font-size: j(20);
      }
      span {
        padding: j(4) 0;
      }
    }

    @include e(value) {
      @extend %df1;
      @extend %df;
      @extend %aic;
      @extend %c9;
      word-break: break-all;
      min-height: j(30);
      span {
        @extend %df1;
        padding: j(4) 0;
      }
      i {
        margin-left: j(8);
        line-height: j(30);
      }
    }

    @include e(arrow) {
      @extend %bsb;
    }
  }
</style>
