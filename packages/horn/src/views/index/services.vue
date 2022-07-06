
<template>
  <hor-view
    :use-nav-bar="false"
    :left-arrow="false">
    <div class="group"
      v-for="(item, index) in arrData" 
      :key="index">
      <p>{{ humps.pascalize(item.group) }}</p>
      <hor-cell 
        v-for="(name) in item.children"
        :key="name"
        :label="humps.pascalize(name)"
        @click="$router.push(`/services/${ item.group }/${ name }`)"
      ></hor-cell>
    </div>
  </hor-view>
</template>

<route>{ meta: { title: '服务', icon: 'smile-comment-o' } }</route>

<script setup lang="ts">
  import humps from 'humps'
  
  defineOptions({ name: 'index-services' })

  const arrData = computed(() => {
    const data = import.meta.glob(`../../../node_modules/@daysnap/horn-jssdk/src/**/index.md`)
    return Object.keys(data).map(item => {
      return item.substring(item.indexOf('src/') + 4)
    }).map(item => {
      const [group, name] = item.replace(/\\/g, '/').split('\/')
      return { group, name }
    }).reduce<{group: string, children: string[]}[]>((result, item) => {
      const { name, group } = item
      let r = result.find(r => r.group = group)
      if (!r) {
        r = { children: [], group }
        result.push(r)
      }
      r.children.push(name)
      return result
    }, [])
  })
</script>

<style lang="scss" scoped>
  @import 'src/assets/scss/define.scss';
  .group{
    p{
      @extend %bw05;
      @extend %bwb;
      @extend %c9;
      padding: 6px 16px;
    }
  }
</style>
