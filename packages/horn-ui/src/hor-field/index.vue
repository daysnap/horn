<template>
  <hor-cell
    class="hor-field"
    :label="label"
    :required="required"
    :direction="direction"
    alignItemCenter
  >
    <input
      :value="modelValue"
      :maxlength="maxlength"
      :placeholder="placeholder"
      class="hor-field-input"
      @input="handleInput"
    />
    <template #suffix>
      <hor-icon
        v-show="computedShowClear"
        @touchstart="handleClear"
        class="hor-field-clear"
        name="clear"
      ></hor-icon>
      <span v-if="unit" class="hor-field-unit">{{ unit }}</span>
    </template>
  </hor-cell>
</template>

<script setup lang="ts">
  import { horFieldProps } from './types'
  import { HorCell } from '../hor-cell'
  import { HorIcon } from '../hor-icon'
  import { computed, InputHTMLAttributes } from 'vue'
  defineOptions({ name: 'HorField' })
  // 如果定义属性 这里传 horFieldProps， 在 types 里完善类型
  const props = defineProps(horFieldProps)
  const handleClear = () => {
    emits('update:modelValue', '')
  }
  const computedShowClear = computed(() => {
    return !['', null, undefined].includes(props.modelValue)
  })
  const emits = defineEmits(['update:modelValue'])
  const handleInput = ({ target }: Event) => {
    let value = (target as InputHTMLAttributes)?.value
    emits('update:modelValue', value)
  }
</script>

<style lang="scss">
  @import '../styles/define.scss';
  @include b(field) {
    &-input {
      @extend %df1;
      @extend %tar;
      @extend %c3;
      font-size: j(14);
      border: none;
      word-break: normal;
    }
    &-clear {
      @extend %df;
      @extend %aic;
      @extend %cp;
      @extend %jcc;
      margin-right: j(-8);
      color: #ccc;
      height: j(30);
      padding: 0 j(8);
      font-size: j(16);
    }
    &-unit {
      @extend %c3;
      flex: none;
      margin-left: j(4);
    }
  }
</style>
