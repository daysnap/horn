
## 介绍

唤醒键盘进行特殊字段的填写

## 代码演示

### 基础用法

<div>
  <hor-cell
    label="唤起键盘"
    @click="handleClickFull"
    :value="fullValue"
    arrow
  ></hor-cell>
  <hor-cell
    label="唤起数字键盘"
    @click="handleClickNum"
    :value="numValue"
    arrow
  ></hor-cell>
  <hor-cell
    label="唤起手机键盘"
    @click="handleClickPhone"
    :value="phoneValue"
    arrow
  ></hor-cell>
  <hor-cell
    label="唤起身份证号键盘"
    @click="handleClickId"
    :value="idNumValue"
    arrow
  ></hor-cell>
  <hor-cell
    label="唤起vin码键盘"
    @click="handleClickVin"
    :value="vinValue"
    arrow
  ></hor-cell>
  <hor-cell
    label="唤起车牌键盘"
    @click="handleClickLic"
    :value="licValue"
    arrow
  ></hor-cell>
</div>


### 复杂案例

<div>
  <hor-cell label="查看复杂案例" clickable arrow @click="$router.push('/widgets/hor-field/index.vue')"/>
</div>




## 属性 Props

<table>
  <tr>
    <td>名称</td>
    <td>类型</td>
    <td>默认值</td>
  </tr>
  <tr v-for="(item, key) in horKeyboardProps" :key="key">
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
    <td>change</td>
    <td>value改变触发</td>
  </tr>
</table>



## 插槽 Slots

<table>
  <tr>
    <td>名称</td>
    <td>说明</td>
  </tr>
  <tr v-for="i in slots" :key=" i.name ">
    <td>{{ i.name }}</td>
    <td>{{ i.explain }}</td>
  </tr>
</table>


<script setup lang="ts">
  import { reserve } from '@daysnap/horn-shared'
  import { horKeyboardProps } from './index'
  import { HorCell } from '../hor-cell'
  import { parseType } from '../utils'
  import { ref } from 'vue'
  import { KeyBoard } from './function-call.ts'
  const field = ref('');
  const pattern = (v: string) => {
    console.log('haha =>' );
    return v + "1"
  }
  const slots = [
    {
      name: '****',
      explain: '**',
    }
  ]
  const fullValue=ref('');
  const handleClickFull = () => {
    KeyBoard({
      value:fullValue.value
    }).then(res=>{
      fullValue.value = res.value
    })
  }
  const numValue=ref('');
  const handleClickNum = () => {
    KeyBoard({
      type:'num',
      value:numValue.value
    }).then(res=>{
      numValue.value = res.value
    })
  }
  const phoneValue=ref('');
  const handleClickPhone = () => {
    KeyBoard({
      type:'phone',
      value:phoneValue.value
    }).then(res=>{
      phoneValue.value = res.value
    })
  }
  const idNumValue=ref('');
  const handleClickId = () => {
    KeyBoard({
      type:'idNum',
      value:idNumValue.value
    }).then(res=>{
      idNumValue.value = res.value
    })
  }
  const vinValue=ref('');
  const handleClickVin = () => {
    KeyBoard({
      type:'vin',
      value:vinValue.value
    }).then(res=>{
      vinValue.value = res.value
    })
  }
  const licValue=ref('');
  const handleClickLic = () => {
    KeyBoard({
      type:'lic',
      value:licValue.value
    }).then(res=>{
      licValue.value = res.value
    })
  }
</script>
