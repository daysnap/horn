
## 介绍

// xxxx2



## 代码演示

### 基础用法
<van-button type='primary' size='small' @click="search">搜索金鼎香樟园</van-button><br>
<van-button type='primary' size='small' @click="getRoadMapInfo">获取两点距离,预估时间</van-button><br>
<van-button type='primary' size='small' @click="getPoint">地址获取经纬度</van-button><br>
<van-button type='primary' size='small' @click="getLocation">经纬度获取地址</van-button><br>
<van-button type='primary' size='small' @click="clearOverlays">清除覆盖物</van-button><br>
<hor-bmap ref="refBmap"></hor-bmap>


### 复杂案例

<div>
  <hor-cell label="查看复杂案例" clickable arrow @click="$router.push('/widgets/hor-bmap/index.vue')"/>
</div>




## 属性 Props

<table>
  <tr>
    <td>名称</td>
    <td>类型</td>
    <td>默认值</td>
  </tr>
  <tr v-for="(item, key) in horBmapProps" :key="key">
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
  import { HorBmap, horBmapProps ,HorBmapInstance} from './index'
  import { parseType } from '../utils'
  import { ref  } from 'vue'
  import { Button as VanButton } from 'vant';
  const refBmap = ref<HorBmapInstance>();

  const search = function(){
    refBmap.value.search('金鼎香樟园').then(res=>{
      alert(JSON.stringify(res[0]) )
      console.log('res =>' , res );
    })
  }
  const getRoadMapInfo = ()=>{
    refBmap.value.getRoadMapInfo(
      new BMapGL.Point(121.39745602084746,31.260395183352788),
      new BMapGL.Point(121.3662419704784,31.265318880489392)
    ).then(res=>{
      alert(JSON.stringify(res))
    })
  }
  const getPoint =  ()=>{
    refBmap.value.getPoint('金鼎香樟园','上海').then(point=>{
      alert(JSON.stringify(point))
    })
  }
  const getLocation = () => {
    refBmap.value.getLocation(new BMapGL.Point(121.39745602084746,31.260395183352788)).then(addr=>{
      alert(JSON.stringify(addr))
    })
  }
  const clearOverlays = ()=>{
    refBmap.value.clearOverlays()
  }
</script>
