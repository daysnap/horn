
## 介绍

单元格为列表中的单个展示项。



## 代码演示

### 基础用法

<div>
  <hor-cell label="单元格" value="内容" />
  <hor-cell label="单元格" value="内容" arrow />
  <hor-cell label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容2" />
  <hor-cell label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容2" ellipsis />
  <hor-cell required label="单元格" value="内容" />
  <hor-cell required direction="column" label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容2" arrow />
  <hor-cell direction="column" lineClamp="2" label="单元格" value="1内容内容内容内容内容内容内容内容内容内容内容内容21内容内容内容内容内容内容内容内容内容内容内容内容21内容内容内容内容内容内容内容内容内容内容内容内容2" />
</div>


### 使用插槽




## API



<script setup lang="ts">
  import { useRouter } from 'vue-router'
  import { HorCell, horCellProps } from './index'
</script>
