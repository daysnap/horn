
<template>
  <hor-view
    :use-nav-bar="false"
    :left-arrow="false">
    <van-grid 
      :column-num="3" 
      clickable
      square>
      <van-grid-item 
        v-for="(item) in arrData" 
        :key="item.text" 
        icon="photo-o"
        :text="item.text" 
        :to="`/hooks/${ item.name }`"
      />
    </van-grid>
  </hor-view>
</template>

<route>{ meta: { title: 'Hooks', icon: 'aim' } }</route>

<script setup lang="ts">
  import * as HorUse from '@daysnap/horn-use'
  import humps from 'humps'

  defineOptions({ name: 'index-hooks' })

  const arrData = computed(() => {
    return Object.keys(HorUse)
      .filter(item => item.startsWith('use'))
      .map(text => ({
        text,
        name: humps.decamelize(text, { separator: '-' })
      }))
  })
</script>