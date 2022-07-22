<template>
  <div id="hor-bmap"> </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue'
  import { horBmapProps } from './types'

  defineOptions({ name: 'HorBmap' })
  // 如果定义属性 这里传 horBmapProps， 在 types 里完善类型
  defineProps(horBmapProps)
  let map: any
  let LocalSearch: any
  let searchResolve: any
  let searchReject: any
  let transit: any
  let transitResolve: any
  let transitReject: any
  //正逆地图解析
  let Geocoder = new BMapGL.Geocoder()
  const navi3DCtrl = new BMapGL.NavigationControl3D() // 添加3D控件
  onMounted(() => {
    map = new BMapGL.Map('hor-bmap', {
      maxZoom: 19,
      minZoom: 5,
    })
    const point = new BMapGL.Point(121.39745602084746, 31.260395183352788) // 创建点坐标
    map.centerAndZoom(point, 18)
    map.enableScrollWheelZoom(true)
    var marker = new BMapGL.Marker(point, {
      // enableDragging: true,
      raiseOnDrag: true,
    })
    map.addOverlay(marker)
    //关键字检索
    LocalSearch = new BMapGL.LocalSearch(map, {
      onSearchComplete: (res: any) => {
        if (LocalSearch.getStatus() === BMAP_STATUS_SUCCESS) {
          let onSearchRes = []
          for (var i = 0; i < res.getCurrentNumPois(); i++) {
            onSearchRes.push(res.getPoi(i))
          }
          searchResolve(onSearchRes)
        } else {
          searchReject('未搜索到相关信息')
        }
      },
    })

    //两点距离
    transit = new BMapGL.DrivingRoute(map, {
      renderOptions: { map },
      onSearchComplete: function (results: any) {
        if (transit.getStatus() === BMAP_STATUS_SUCCESS) {
          const plan = results.getPlan(0)
          transitResolve({
            duration: plan.getDuration(true),
            distance: plan.getDistance(true),
          })
        } else {
          transitReject('获取路线信息失败')
        }
      },
    })
    map.addControl(navi3DCtrl)
  })
  const search = function (val: string | number) {
    return new Promise((resolve, reject) => {
      searchResolve = resolve
      searchReject = reject
      LocalSearch.search(val)
    })
  }
  const getRoadMapInfo = function (start: any, end: any) {
    return new Promise((resolve, reject) => {
      transitResolve = resolve
      transitReject = reject
      transit.search(start, end)
    })
  }
  const getPoint = function (address: string | number, city: string) {
    return new Promise((reslove, reject) => {
      Geocoder.getPoint(
        address,
        function (point: any) {
          if (point) {
            reslove(point)
          } else {
            reject('获取失败')
          }
        },
        city,
      )
    })
  }
  const getLocation = function (point: any) {
    return new Promise((reslove, reject) => {
      Geocoder.getLocation(point, function (rs: any) {
        if (rs) {
          reslove(rs)
        } else {
          reject('获取失败')
        }
      })
    })
  }
  const clearOverlays = function () {
    map.clearOverlays()
  }
  defineExpose({
    search,
    getPoint,
    getRoadMapInfo,
    getLocation,
    clearOverlays,
  })
</script>

<style lang="scss">
  @import '../styles/define.scss';
  #hor-bmap {
    width: j(375);
    height: j(300);
  }
</style>
