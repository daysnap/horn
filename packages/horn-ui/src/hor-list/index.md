
## 介绍

用户可以在文本框内输入或编辑文字。

## 代码演示

### 基础用法

<div>
  <HorList>
  
  </HorList>
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
  <tr v-for="(item, key) in horListProps" :key="key">
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
  import { Button as VanButton } from 'vant';
  import { HorCell } from '../hor-cell'
  import { HorList, horListProps } from './index'
  import { parseType } from '../utils'
  import { ref } from 'vue'
  const field = ref('');
  const pattern = (v: string) => {
    console.log('haha =>' );
    return v + "1"
  }
  const slots = [
  ]
</script>
