
## 介绍

单元格为列表中的单个展示项。



## 代码演示

### 基础用法

<div>
  <hor-cell label="单元格" value="内容" />
  <hor-cell label="单元格" arrow />
  <hor-cell label="单元格" value="内容" arrow />
  <hor-cell label="单元格" value="内容" icon="setting-o" arrow />
  <hor-cell label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容2" />
  <hor-cell label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容2" ellipsis />
  <hor-cell required label="单元格" value="内容" />
  <hor-cell required direction="column" label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容2" arrow />
  <hor-cell direction="column" lineClamp="2" label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容21内容内容内容内容内容内容内容内容内容内容内容内容21内容内容内容内容内容内容内容内容内容内容内容内容2" />
</div>


### 使用插槽

<div>
  <hor-cell label="单元格">
    <b>插槽内容</b>
  </hor-cell>
  <hor-cell label="单元格" arrow>
    <input type="text" placeholder="请输入密码"/>
    <template #suffix>
      <van-icon name="plus" />
    </template>
  </hor-cell>
</div>


### 复杂案例

<div>
  <hor-cell label="查看复杂案例" clickable arrow @click="$router.push('/widgets/hor-cell/index.vue')"/>
</div>




## 属性 Props

<table>
  <tr>
    <td>名称</td>
    <td>类型</td>
    <td>默认值</td>
  </tr>
  <tr v-for="(item, key) in horCellProps" :key="key">
    <td>{{ key }}</td>
    <td>{{ parseType(item.type) }}</td>
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
    <td>click</td>
    <td>默认点击</td>
  </tr>
</table>



## 插槽 Slots

<table>
  <tr>
    <td>名称</td>
    <td>说明</td>
  </tr>
  <tr>
    <td>prefix</td>
    <td>自定义前缀</td>
  </tr>
  <tr>
    <td>label</td>
    <td>自定义左边内容</td>
  </tr>
  <tr>
    <td>value</td>
    <td>自定义右边内容</td>
  </tr>
  <tr>
    <td>suffix</td>
    <td>自定义后缀</td>
  </tr>
</table>


<script setup lang="ts">
  import { reserve } from '@daysnap/horn-shared'
  import { HorCell, horCellProps } from './index'
  import { Icon as VanIcon } from 'vant'
  import { parseType } from '../utils'
</script>
