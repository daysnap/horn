
## 介绍

用户可以在文本框内输入或编辑文字。

## 代码演示

### 基础用法

<div>
  <hor-field
    placeholder="请填写身份证"
    label="身份证"
    direction="row"
    :maxlength="10"
    :pattern="pattern"
  ></hor-field>
  <hor-field
    placeholder="请填写身份证"
    label="必填"
    :required="true"
    direction="row"
    :maxlength="10"
  ></hor-field>
  <hor-field
    placeholder="请填写价格"
    label="单位"
    :required="true"
    direction="row"
    :maxlength="10"
    unit="万元"
  ></hor-field>
  <hor-field
    placeholder="请填写价格"
    label="禁用"
    :required="true"
    direction="row"
    :maxlength="10"
    :disabled="true"
  ></hor-field>
  <hor-field
    placeholder="请填写价格"
    label="是否可清空"
    :required="true"
    direction="row"
    :maxlength="10"
    v-model="field"
    clearable
  ></hor-field>
  <hor-field
    placeholder="请填写价格"
    label="数字"
    :required="true"
    direction="row"
    :maxlength="10"
    type="number"
    clearable
  ></hor-field>
  <hor-field
    placeholder="请填写价格"
    label="小数"
    :required="true"
    direction="row"
    :maxlength="10"
    type="digit"
    clearable
    fractionDigits="4"
    :pattern="()=>({a:1})"
  ></hor-field>
  <hor-field
    placeholder="suffix插槽"
    label="suffix插槽"
    :required="true"
    direction="row"
    icon="gold-coin-o"
    :maxlength="10"
    type="digit"
    clearable
    v-model="field"
    fractionDigits="4"
    :pattern="pattern"
    >
    <template #suffix>
      <van-button style="margin-left:10px" size="small" type="primary">发送验证码</van-button>
    </template>
  </hor-field>
  <hor-field
    placeholder="请填写价格"
    label="小数"
    :required="true"
    direction="column"
    :maxlength="10"
    type="digit"
    clearable
    fractionDigits="4"
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
  import { HorField, horFieldProps } from './index'
  import { parseType } from '../utils'
  import { ref } from 'vue'
  const field = ref('');
  const pattern = (v: string) => {
    console.log('haha =>' );
    return v + "1"
  }
  const slots = [
    {
      name: 'prefix',
      explain: '自定义前缀',
    },
    {
      name: 'suffix',
      explain: '自定义后缀',
    }
  ]
</script>
