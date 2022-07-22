<template>
  <van-popup class="hor-check-list-popup" @click-overlay="hide" :show="visible" position="right">
    <hor-view title="请选择">
      <div class="hor-check-list-popup-content">
        <van-search show-action v-model="search" placeholder="请输入搜索关键词">
          <template #action>
            <van-button class="search" size="small" type="primary">搜索</van-button>
          </template>
        </van-search>
      </div>
      <div class="hor-check-list-popup-footer">
        <van-button class="commit" type="primary" size="small">提交</van-button>
      </div>
    </hor-view>
  </van-popup>
</template>

<script setup lang="ts">
  import { horCheckListPopupProps, HorCheckListPopupProps } from './types'
  import { computed, ref } from 'vue'
  import { useVisible } from '@daysnap/horn-use'
  import { HorView } from '../hor-view'

  defineOptions({ name: 'HorCheckListPopup' })
  // 如果定义属性 这里传 horCheckListPopupProps， 在 types 里完善类型
  const props = defineProps(horCheckListPopupProps)
  const dynamicProps = ref<Partial<HorCheckListPopupProps>>()
  const computedProps = computed<HorCheckListPopupProps>(() =>
    Object.assign({}, props, dynamicProps.value),
  )
  console.log(computedProps)
  const search = ref('')
  const { show, hide, confirm, visible } = useVisible<
    Partial<HorCheckListPopupProps>,
    { value: any }
  >({
    showCallback: (options) => {
      dynamicProps.value = options
    },
    confirmCallback: (res) => {
      return res
    },
  })
  defineExpose({
    show,
    hide,
    confirm,
  })
</script>

<style lang="scss">
  @import '../styles/define.scss';
  @include b(check-list-popup) {
    width: 100%;
    height: 100%;
    @include e(footer) {
      height: j(60);
      box-shadow: 0 0 6px #c8c8c8;
      background-color: #f6f6f6;
      @extend %df;
      @extend %aic;
      .commit {
        padding: 0 j(20);
      }
    }
    @include e(content) {
      flex: 1;
      .search {
        padding: 0 j(20);
      }
    }
  }
</style>
