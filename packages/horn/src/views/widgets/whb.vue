
<template>
  <div class="view-wrap list-wrap">
    <hor-header title='海波御用组件页'/>
    志刚别删
    <van-button @click="handlerDatePicker">Click me</van-button>
    <hor-date-picker ref="refDatePicker"></hor-date-picker>
    <hor-picker ref="refPicker"></hor-picker>
    <div>
    </div>
  </div>
</template>

<route>{ meta: { title: 'hor-cell', depth: 2 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'
  import { HorDatePickerInstance } from '@daysnap/horn-ui'
  defineOptions({ name: 'whb' })
  
  const refPicker = ref();

  const refDatePicker = ref<HorDatePickerInstance>()
  const handlerDatePicker = () => {
    refDatePicker.value?.show({
      minDate:new Date('2022/01/01'),
      maxDate:new Date('2022/12/30'),
      filter:(type , options)=>{
        if(type == 'day') return options.filter( i =>  Number(i.value) % 5 === 0 )
        return options
      }
    })
  }

  useKeepAliveIncludes()

  onActivated(() => {
    console.log('激活')
  })

  onDeactivated(() => {
    console.log('卸载')
  })

  onUnmounted(() => {
    console.log('销毁')
  })
</script>

<style lang="scss" scoped>
  
</style>