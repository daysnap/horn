<template>
  <ul class="dashboard-section">
    <li class="dashboard-item" @click="$router.replace('/hooks')">
      <span>Hooks</span>
      <strong>{{ arrHooksData.length }}</strong>
    </li>
    <li class="dashboard-bar"></li>
    <li class="dashboard-item" @click="$router.replace('/services')">
      <span>服务</span>
      <strong>{{ arrServiceData.length }}</strong>
    </li>
    <li class="dashboard-bar"></li>
    <li class="dashboard-item" @click="$router.replace('/widgets')">
      <span>部件</span>
      <strong>{{ arrWidgetData.length }}</strong>
    </li>
  </ul>
</template>

<script setup lang="ts">
  import * as HorUse from '@daysnap/horn-use'
  import * as HorUi from '@daysnap/horn-ui'

  import humps from 'humps'
  const arrHooksData = computed(() => {
    return Object.keys(HorUse).filter((item) => item.startsWith('use'))
  })

  const arrServiceData = computed(() => {
    const data = import.meta.glob(`../../../../node_modules/@daysnap/horn-jssdk/src/**/index.md`)
    console.log('data => ', data)
    return Object.keys(data)
  })

  const arrWidgetData = computed(() => {
    return Object.keys(HorUi)
      .filter((item) => item.startsWith('Hor'))
      .map((text) => ({
        text,
        name: humps.decamelize(text, { separator: '-' }),
      }))
  })
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define.scss';
  .dashboard-section {
    @extend %df;
    @extend %aic;
    padding: j(16) 0;
  }
  .dashboard-item {
    @extend %df1;
    @extend %df;
    @extend %fdc;
    @extend %aic;
    @extend %jcc;
    @extend %c9;
    @extend %c9;
    span {
      font-size: j(14);
    }
    strong {
      color: $color-primary;
      margin-top: j(10);
      font-size: j(32);
    }
  }
  .dashboard-bar {
    width: 1px;
    background-color: #ddd;
    height: j(40);
  }
</style>
