<template>
  <div class="hor-cell" :class="[`is-${direction}`]">
    <div class="hor-cell-label">
      <slot name="prefix"></slot>
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </div>
    <div class="hor-cell-value">
      <slot>
        <span v-html="value"></span>
      </slot>
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'HorCell',
  })

  defineProps({
    label: String,
    value: String,
    direction: {
      type: String,
      default: 'row',
    },
  })
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

    flex-direction: row;

    @include when(align-item-center) {
      align-items: center;
    }

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

    @include when(column) {
      @extend %fdc;
    }

    @include e(label) {
      @extend %df;
      @extend %aic;
      //background-color: #ff0088;
      span {
        padding: j(4) 0;
      }
    }

    @include e(value) {
      @extend %df1;
      @extend %df;
      @extend %aic;
      @extend %c9;
      //background-color: #0073ff;
      span {
        padding: j(4) 0;
      }
    }
  }
</style>
