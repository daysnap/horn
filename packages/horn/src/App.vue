
<template>

  <hor-cell
    label="单元格"
    value="内容内容">
    <template #prefix>
      <span>prefix</span>
    </template>
    <template #suffix>
      <!--      <span>suffix</span>-->
    </template>
  </hor-cell>

  <hor-cell
    label="单元格"
    value="内容内容内容内容内容内容内容内容内容容内容">
    <template #prefix>
      <span>prefix</span>
    </template>
    <template #suffix>
<!--      <span>suffix</span>-->
    </template>
  </hor-cell>

  <hor-cell
    direction="column"
    label="单元格"
    value="内容">
    <template #prefix>
      <span>prefix</span>
    </template>
    <template #suffix>
      <span>suffix</span>
    </template>
  </hor-cell>

  <br/>

  <van-button @click="handleClick">选择省份</van-button>

  <p>city => {{ city }}</p>

  <hor-picker
    s="123123123"
    ref="refCpaPicker"
  />

  <child
    ref="refChild"
  ></child>

  <child-set-up
    ref="refChildSetup"
  ></child-set-up>


  <hor-date-picker/>
</template>

<script setup lang="ts">
  import Child from './components/child.vue'
  import ChildSetUp from './components/child-setup.vue'
  import { HorPicker, HorPickerInstance, HorCell } from '@daysnap/horn-ui'

  const city = ref('111')
  const refCpaPicker = ref<HorPickerInstance>()

  const refChildSetup = ref<InstanceType<typeof ChildSetUp>>()
  const refChild = ref<InstanceType<typeof Child>>()

  const handleClick = () => {

    refCpaPicker.value?.show({
      value: city.value,
      columns: [
         {
        text: '浙江',
        value: 'Zhejiang',
        children: [
          {
            text: '杭州',
            value: 'Hangzhou',
            children: [
              { text: '西湖区', value: 'Xihu' },
              { text: '余杭区', value: 'Yuhang' },
            ],
          },
          {
            text: '温州',
            value: 'Wenzhou',
            children: [
              { text: '鹿城区', value: 'Lucheng' },
              { text: '瓯海区', value: 'Ouhai' },
            ],
          },
        ],
      },
      {
        text: '福建',
        value: 'Fujian',
        children: [
          {
            text: '福州',
            value: 'Fuzhou',
            children: [
              { text: '鼓楼区', value: 'Gulou' },
              { text: '台江区', value: 'Taijiang' },
            ],
          },
          {
            text: '厦门',
            value: 'Xiamen',
            children: [
              { text: '思明区', value: 'Siming' },
              { text: '海沧区', value: 'Haicang' },
            ],
          },
        ],
      },
      ],
      filterable: true,
    }).then((res) => {

      const { selectedOptions, selectedValues, value } = res
      city.value = value
      console.log('value => ', value)
      console.log('selectedOptions => ', selectedOptions)
      console.log('selectedValues => ', selectedValues)
    }).catch(err => {

    })
  }
</script>

<style lang="scss" scoped>

</style>
