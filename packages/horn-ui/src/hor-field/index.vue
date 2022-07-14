<template>
  <hor-cell
    class="hor-field"
    :label="label"
    :required="required"
    :direction="direction"
    alignItemCenter
  >
    <input
      @input="handleInput"
      class="hor-field-input"
      :disabled="disabled"
      :value="modelValue"
      :type="computedInputTypeAndMode.type"
      :inputmode="computedInputTypeAndMode.inputmode"
      :maxlength="maxlength"
      :placeholder="placeholder"
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

  const emits = defineEmits(['update:modelValue'])
  const handleClear = () => {
    emits('update:modelValue', '')
  }

  let computedShowClear = computed(() => {
    return !['', null, undefined].includes(props.modelValue) && props.clearable
  })

  interface resultInterface {
    type: InputHTMLAttributes['type']
    inputmode: InputHTMLAttributes['inputmode']
  }
  let computedInputTypeAndMode = computed(() => {
    let result: resultInterface = { type: props.type, inputmode: 'text' }
    if (props.type === 'digit') result = { type: 'text', inputmode: 'decimal' }
    else if (props.type === 'number') result = { type: 'tel', inputmode: 'numeric' }
    return result
  })

  const handleInput = (e: Event) => {
    const target = e.target as InputHTMLAttributes
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
      if (value.startsWith('00')) value = +value
    }
    const typeOfPattern = pattern.constructor.toString()
    console.dir(pattern.constructor)
    if (pattern) {
      // const typeOfPattern = pattern.constructor
      if (typeOfPattern === 'function') value = pattern(value, this.value)
      else if (typeOfPattern === 'object') value = value.replace(typeOfPattern, '')
      else if (typeOfPattern === 'string' && filters[pattern]) value = filters[pattern](value)
    }
    target.value = value
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
      background-color: transparent;
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
