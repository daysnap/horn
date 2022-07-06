<template>
  <hor-view :use-nav-bar="false" :left-arrow="false">
    <van-grid :column-num="3" clickable square>
      <van-grid-item
        v-for="item in arrData"
        :key="item.text"
        icon="photo-o"
        :text="item.text"
        :to="`/widgets/${item.name}`"
      />
    </van-grid>
  </hor-view>
</template>

<route>{ meta: { title: '部件', icon: 'apps-o', depth: 1 } }</route>

<script setup lang="ts">
  import * as HorUi from '@daysnap/horn-ui'
  import humps from 'humps'

  defineOptions({ name: 'index-widgets' })

  const arrData = computed(() => {
    return Object.keys(HorUi)
      .filter((item) => item.startsWith('Hor'))
      .map((text) => ({
        text,
        name: humps.decamelize(text, { separator: '-' }),
      }))
  })
</script>
