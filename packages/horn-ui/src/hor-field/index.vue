<template>
  <hor-cell
    class="hor-field"
    :label="label"
    :required="required"
    :direction="direction"
    :icon="icon"
  >
    <template #prefix>
      <slot name="prefix"> </slot>
    </template>
    <input
      @input="handleInput"
      @compositionstart="handleCompositionstart"
      @compositionend="handleCompositionend"
      class="hor-field-input"
      :disabled="disabled"
      :value="modelValue"
      :type="computedInputTypeAndMode.type"
      :inputmode="computedInputTypeAndMode.inputmode"
      :maxlength="maxlength"
      :placeholder="placeholder"
    />
    <hor-icon
      v-show="computedShowClear"
      @touchstart="handleClear"
      class="hor-field-clear"
      name="clear"
    ></hor-icon>
    <span v-if="unit" class="hor-field-unit">{{ unit }}</span>
    <template #suffix>
      <slot name="suffix"></slot>
    </template>
  </hor-cell>
</template>

<script setup lang="ts">
  import { computed, InputHTMLAttributes } from 'vue'
  import { isFunction, isRegExp } from '@daysnap/horn-shared'
  import { useComposition } from '@daysnap/horn-use'
  import { horFieldProps } from './types'
  import { HorCell } from '../hor-cell'
  import { HorIcon } from '../hor-icon'

  defineOptions({ name: 'HorField' })

  // 如果定义属性 这里传 horFieldProps， 在 types 里完善类型
  const props = defineProps(horFieldProps)

  const emits = defineEmits(['update:modelValue', 'change'])

  const handleClear = () => {
    emits('update:modelValue', '')
    emits('change', '')
  }

  const computedShowClear = computed(() => {
    return !['', null, undefined].includes(props.modelValue) && props.clearable
  })

  interface resultInterface {
    type: InputHTMLAttributes['type']
    inputmode: InputHTMLAttributes['inputmode']
  }
  const computedInputTypeAndMode = computed(() => {
    let result: resultInterface = { type: props.type, inputmode: 'text' }
    if (props.type === 'digit') result = { type: 'text', inputmode: 'decimal' }
    else if (props.type === 'number') result = { type: 'tel', inputmode: 'numeric' }
    return result
  })

  const { handleCompositionend, handleCompositionstart } = useComposition()

  const handleInput = (e: Event) => {
    if ((e.target as any).composing) {
      return
    }
    const target = e.target as HTMLInputElement
    let value = target.value
    const { type, fractionDigits, pattern } = props
    if (type === 'number') {
      // 数字
      value = value.replace(/[^\d]/g, '')
    } else if (type === 'digit') {
      // 小数
      const reg = new RegExp(`^([1-9]\\d*|0)(\\.?\\d{0,${fractionDigits}})`, 'g')
      const v = value.match(reg)
      value = v ? v[0] : ''
      if (value.startsWith('00')) value = +value + ''
    }
    if (pattern) {
      if (isFunction(pattern)) value = pattern(value)
      else if (isRegExp(pattern)) value = value.replace(pattern, '')
    }
    target.value = value
    emits('update:modelValue', value)
    emits('change', value)
  }
</script>

<style lang="scss">
  @import '../styles/define.scss';
  @include b(field) {
    @include e(input) {
      @extend %df1;
      @extend %tar;
      @extend %c3;
      width: 0;
      font-size: j(14);
      border: none;
      word-break: normal;
      background-color: transparent;
    }
    @include e(clear) {
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
    @include e(unit) {
      @extend %c3;
      flex: none;
      margin-left: j(4);
    }
  }
</style>
