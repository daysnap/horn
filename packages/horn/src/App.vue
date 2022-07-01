
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
  <!-- <dl>
    <dt>pageStack:</dt>
    <dd v-for="(item, index) in routeStack" :key="index">
      {{ item.meta?.title }}
      是否缓存 =>
      <strong style="color: red" v-if="item.meta?.keepAlive">是</strong>
      <strong style="color: #999" v-else>否</strong>
      <p>{{ item }}</p>
    </dd>
  </dl> -->
  <!-- <p>includes: {{ includes }}</p> -->

</template>


<script setup lang="ts">

  import { useKeepAliveIncludes } from '@daysnap/horn-use'

  const [ includes, data ] = useKeepAliveIncludes(false)

</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define.scss';

  .view-wrap{
  }
</style>