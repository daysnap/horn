<template>
  <van-date-picker
      v-model="currentDate"
      title="选择日期"
  />
</template>

<script setup lang="ts">
  defineOptions({
    name: 'CpaDatePicker',
  })

</script>

<style scoped>

</style>