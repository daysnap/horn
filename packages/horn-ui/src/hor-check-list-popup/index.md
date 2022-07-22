
## 介绍

// xxxx



## 代码演示

### 基础用法
<van-button @click="handleShowList" >点击唤起选择弹框</van-button>
<hor-check-list-popup ref="refHorCheckListPopup">

</hor-check-list-popup>


### 复杂案例

<div>
  <hor-cell label="查看复杂案例" clickable arrow @click="$router.push('/widgets/hor-check-list-popup/index.vue')"/>
</div>




## 属性 Props

<table>
  <tr>
    <td>名称</td>
    <td>类型</td>
    <td>默认值</td>
  </tr>
  <tr v-for="(item, key) in horCheckListPopupProps" :key="key">
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
  import { HorCheckListPopup, horCheckListPopupProps } from './index'
  import { parseType } from '../utils'
  import { ref } from 'vue'
  import { Button as VanButton } from 'vant';
  const refHorCheckListPopup = ref()
  const handleShowList = function (){
    refHorCheckListPopup.value.show()
  }
</script>
