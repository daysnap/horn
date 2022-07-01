
<template>
  <p>home</p>
    <van-button @click="handleClick">click me</van-button>
    <hor-date-picker ref="refDate"></hor-date-picker>

  <div>
  </div>
</template>

<script setup lang="ts">
 const refDate = ref();
 const currentDate = ref(['2021', '01']);

 const handleClick = ()=>{
    console.log(refDate)
    refDate.value.show({
      value:currentDate,
      columnsType:['year','month','day']
    })
 }
 refDate
</script>

<style lang="scss" scoped>

</style>
