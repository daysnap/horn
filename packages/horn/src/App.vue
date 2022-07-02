
<template>
  <router-view v-slot="{ Component, route }">
    <!-- <transition name=""> -->
      <keep-alive :include="includes">
          <component :is="Component"/>
      </keep-alive>
    <!-- </transition> -->
  </router-view>
  <p>includes: {{ includes }}</p>
  <p>data: {{ data }}</p>
</template>


<script setup lang="ts">

  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  const [ includes, data ] = useKeepAliveIncludes(false)

</script>

<style lang="scss">
  @import 'src/assets/scss/common.scss';

  .view-wrap{
  }
</style>