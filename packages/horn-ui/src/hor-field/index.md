
## 介绍

// xxxx


## 代码演示

### 基础用法

<div>
  <hor-field
    v-model="field"
    placeholder="请填写身份证"
    label="身份证"
    :required="true"
    direction="row"
    :maxlength="10"
  ></hor-field>
  <hor-field
    v-model="field"
    placeholder="请填写身份证"
    label="身份证"
    :required="true"
    direction="row"
    :maxlength="10"
    unit="位"
  ></hor-field>
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
  <tr v-for="(item, key) in horFieldProps" :key="key">
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
  import { HorField, horFieldProps } from './index'
  import { parseType } from '../utils'
</script>
