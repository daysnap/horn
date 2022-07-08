
## 介绍

基于字体的图标集，可以通过 Icon 组件使用，也可以在其他组件中通过 icon 属性引用。



## 代码演示

### 基础用法

<div class="group">
  <div>
    <hor-icon name="arrow"/>
    <span>arrow</span>
  </div>
  <div>
    <hor-icon name="hor-keyboard"/>
    <span>hor-keyboard</span>
  </div>
  <div>
    <hor-icon name="icon-arrow"/>
    <span>icon-arrow</span>
  </div>
  <div>
    <hor-icon name="arrow"/>
    <span>arrow</span>
  </div>
</div>


### 复杂案例

<div>
  <hor-cell label="查看复杂案例" clickable arrow @click="$router.push('/widgets/hor-icon/index.vue')"/>
</div>




## 属性 Props

<table>
  <tr>
    <td>名称</td>
    <td>类型</td>
    <td>默认值</td>
  </tr>
  <tr v-for="(item, key) in horIconProps" :key="key">
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
  import { HorIcon, horIconProps } from './index'
  import { parseType } from '../utils'
</script>


<style lang="scss">
  .group{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: #333;
    div{
      width: 25%;
      display: flex;
      align-items: center;
      flex-direction: column;
      font-size: 24px;
    }
    span{
      margin-top: 10px;
      font-size: 12px;
    }
  }
</style>
