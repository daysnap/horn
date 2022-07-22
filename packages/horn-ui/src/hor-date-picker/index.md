
## 介绍

// xxxx



## 代码演示

### 基础用法

<div>
  <van-button @click="showDatePicker">唤起时间选择器</van-button>
  {{date}}
  <hor-date-picker ref="datePicker"></hor-date-picker>
</div>


### 复杂案例

<div>
  <hor-cell label="查看复杂案例" clickable arrow @click="$router.push('/widgets/hor-cell-group/index.vue')"/>
</div>




## 属性 Props

<table>
  <tr>
    <td>名称</td>
    <td>类型</td>
    <td>默认值</td>
  </tr>
  <tr v-for="(item, key) in horDatePickerProps" :key="key">
    <td>{{ key }}</td>
    <td>{{ parseType(item.type || item) }}</td>
    <td>{{ reserve(item.default, '-') }}</td>
  </tr>
</table>



## 事件 Events

<table>
  <tr>
    <td>名称</td>
    <td>说明</td>
  </tr>
  <tr>
    <td>xx</td>
    <td>xxx</td>
  </tr>
</table>



## 插槽 Slots

<table>
  <tr>
    <td>名称</td>
    <td>说明</td>
  </tr>
  <tr>
    <td>xx</td>
    <td>xxx</td>
  </tr>
</table>


<script setup lang="ts">
  import { reserve } from '@daysnap/horn-shared'
  import { HorCell } from '../hor-cell'
  import { HorDatePicker, horDatePickerProps } from './index'
  import { parseType } from '../utils'
  import { Button as VanButton } from 'vant';
  import { ref } from 'vue'
  const datePicker = ref()
  const date = ref(['2021','12','12'])
  const showDatePicker = () => {
    datePicker.value.show({
      value:date
    }).then(res=>{
      date.value = res.selectedValues;
    })
  }
</script>
