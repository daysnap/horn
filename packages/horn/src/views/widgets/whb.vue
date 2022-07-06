<template>
  <hor-view title="海波御用">
    <hor-keyboard></hor-keyboard>
    <!-- <hor-scroll :finished="list >= 100" @load="load" @refresh="refresh">
      <div :key="i" style="height: 30px" v-for="i in list">{{ i }}</div>
    </hor-scroll> -->
  </hor-view>
</template>

<route>{ meta: { title: 'hor-cell', depth: 2 } }</route>

<script setup lang="ts">
  import { useKeepAliveIncludes } from '@daysnap/horn-use'
  // import { HorDatePickerInstance } from '@daysnap/horn-ui'
  defineOptions({ name: 'whb' })

  // const refHorList = ref()

  // const refDatePicker = ref<HorDatePickerInstance>()
  // const handlerDatePicker = () => {
  //   refDatePicker.value?.show({
  //     minDate: new Date('2022/01/01'),
  //     maxDate: new Date('2022/12/30'),
  //     filter: (type, options) => {
  //       if (type == 'day') return options.filter((i) => Number(i.value) % 5 === 0)
  //       return options
  //     },
  //   })
  // }
  // const list = ref(20)
  // const load = (cb) => {
  //   list.value += 20
  //   cb('内部错误')
  //   console.log('load了')
  // }
  // const refresh = (cb) => {
  //   list.value = 20
  //   console.log('refresh了')
  //   cb('内部错误')
  // }

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
  .view-wrap {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
