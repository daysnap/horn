<template>
  <van-popup class="hor-keyboard" @click-overlay="hide" position="bottom" :show="visible">
    <div class="hor-keyboard-header">
      <span class="hor-keyboard-value" :class="[!val && 'place-value']">
        <em>{{ val || innerProps.placeholder }}</em>
      </span>
      <!-- <van-button class="hor-keyboard-copy" type="success" size="small"> 粘贴 </van-button> -->
      <van-button class="hor-keyboard-cancel" type="warning" @click="hide" size="small">
        取消
      </van-button>
    </div>
    <ul class="hor-keyboard-content" :class="{ 'hor-keyboard-number': numKeyborard }">
      <li class="hor-keyboard-li" v-for="(arr, index) in sources.value" :key="index">
        <div
          class="hor-keyboard-cell"
          :class="['key-' + item, innerProps.disabledKey.includes(item) ? 'disabled' : '']"
          v-for="item in arr"
          :key="item"
          @click="handleKey(item)"
        >
          <template v-if="item === 'shrink'">
            <hor-icon
              class="hor-keyboard-collapse"
              classPrefix="hor-icon"
              name="keyboard"
            ></hor-icon>
          </template>
          <template v-else>
            {{ item === 'DELETE' ? '' : item === 'SURE' ? '完成' : item }}
          </template>
        </div>
      </li>
    </ul>
  </van-popup>
</template>

<script setup lang="ts">
  import { useVisible } from '@daysnap/horn-use'
  import { computed, defineProps, ref, watchEffect } from 'vue'
  import { horKeyboardProps, HorKeyboardProps } from './type'
  import { HorIcon } from '../hor-icon'

  defineOptions({ name: 'HorKeyboard' })
  const props = defineProps(horKeyboardProps)
  const dynamicProps = ref<Partial<HorKeyboardProps>>()
  const computedProps = computed<HorKeyboardProps>(() => {
    return Object.assign({}, props, dynamicProps.value)
  })

  const innerProps = computed(() => {
    let { type, maxlength, placeholder, disabledKey } = computedProps.value
    if (type === 'vin') {
      maxlength = 17
      disabledKey = ['Q', 'I', 'O']
      placeholder = '请输入VIN码'
    } else if (type === 'lic') {
      maxlength = 7
      disabledKey = ['I', 'O']
      placeholder = '请输入车牌号'
    } else if (type === 'idNum') {
      maxlength = 18
      placeholder = '请输入身份证号'
    } else if (type === 'phone') {
      maxlength = 11
      placeholder = '请输入手机号'
    }
    return { type, maxlength, disabledKey, placeholder }
  })
  const numKeyborard = computed(() => {
    const { type } = computedProps.value
    return ['idNum', 'num', 'phone'].includes(type)
  })
  const sourcesAll = ref([
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'DELETE'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'SURE'],
  ])
  const sourcesNumber = ref([
    ['1', '4', '7', 'shrink'],
    ['2', '5', '8', '0'],
    ['3', '6', '9', '00'],
    ['DELETE', 'SURE'],
  ])
  watchEffect(() => {
    if (dynamicProps?.value?.type === 'num') {
      sourcesNumber.value[0].splice(3, 1, '.')
    } else if (dynamicProps?.value?.type === 'idNum') {
      sourcesNumber.value[0].splice(3, 1, 'X')
    }
  })
  let val = ref('')
  const sources = computed(() => (numKeyborard.value ? sourcesNumber : sourcesAll))
  const { show, hide, confirm, visible } = useVisible<Partial<HorKeyboardProps>, { value: string }>(
    {
      showCallback: (options) => {
        dynamicProps.value = options
        val.value = options?.value || ''
      },
      confirmCallback: (res) => res,
    },
  )
  const handleKey = (keyItem: string) => {
    let { value } = val
    const { maxlength, disabledKey } = innerProps.value
    if (disabledKey.includes(keyItem)) return
    if (keyItem === 'SURE') {
      return confirm({ value })
    } else if (keyItem === 'DELETE') {
      value = value?.substring(0, value.length - 1)
    } else if (keyItem === 'shrink') {
      return hide()
    } else {
      value += keyItem
    }
    if (maxlength > -1 && (value.length || 0) > maxlength) {
      value = value?.substring(0, Number(maxlength))
    }
    val.value = value
  }
  defineExpose({
    show,
  })
</script>

<style lang="scss">
  @import '../styles/define.scss';
  @include b(keyboard) {
    @extend %ncp;
    background-color: #ddd;
    &-header {
      @extend %df;
      @extend %aic;
      @extend %jcs;
      @extend %bw05;
      @extend %bwb;
      padding: j(10) 0 j(10) j(10);
    }
    &-value {
      @extend %df1;
      @extend %df;
      @extend %aic;
      @extend %c3;
      @extend %bsb;
      min-width: 70%;
      overflow: hidden;
      padding: 0 j(16);
      font-size: j(14);
      background-color: #fff;
      border-radius: j(8);
      height: j(40);
      margin-right: j(8);
      box-shadow: inset 0 0 j(2) #5d5d5d;
      &.place-value {
        color: #cbcbcb;
      }
    }
    &-cancel,
    &-copy {
      @extend %df;
      @extend %aic;
      @extend %jcc;
      @extend %cp;
      @extend %ao8;
      padding: 0 j(28);
      margin-right: j(8);
    }
    &-content {
      padding: 0 j(10) j(40);
    }
    &-li {
      @extend %df;
      @extend %aic;
      @extend %df1;
      margin-bottom: j(10);
      margin-right: j(-5);
      &:last-child {
        margin-bottom: 0;
      }
    }
    &-cell {
      // @extend %df1;
      @extend %df;
      @extend %aic;
      @extend %jcc;
      @extend %c3;
      @extend %cp;
      @extend %w100;
      @extend %df1;
      &:active {
        opacity: 0.4;
      }
      margin-right: j(4);
      font-size: j(14);
      background-color: #fff;
      height: j(34);
      border-radius: j(4);
      box-shadow: 0 0 j(1) j(1) #c3c3c3;
    }
    &-collapse {
      font-size: j(28);
    }
    .key-DELETE {
      flex: 1.5;
      background: #fff
        url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAlFJREFUSEvt1k+oDVEcB/Dvb2IpCzYsrKxf7vlNerqp21uj/HsrYoek1KNYUNgQKaVbbGy8hUIIK+pm8+ie39ykbNhYoKxeVjdpjo7O6Nx5Z87M0+Vu3mzPn8/8fud3fjOECT00IRcr8H/LfG2qmfkcgItjfqNuFGbmOQDXALwH8G1MeAdArxJm5mMAugA+AtgjIu8szMwbRORr05dotVrbBoPBQjGfmU0lrJQ6TER3AHwyxuzNskwKFMBTAK9F5HgdnqbpVmPMGwBnROSK2yMMK6VmiegegC95nu/z37bdbq8ZDoffHdiN4R4KIjqhtb5ZCSuldhDRQwCLDn1VjqoJXoUGYaXUjENNkiT7+/3+i6pUOvwZgO22DvzIHWrH1vuRBs9YKTVNRA8ArCWiWa3187rzC+F16EjESqkph25y6OM6tBgv4fcB2KsSjHRJxMxsq/eQQ+3iZT0Ot7WwxS4Mpdff8M91YuarAE4R0V2t9cFlqQBceu3RrGtS7SP3OE3TJ8aYnUR0W2t9pCnun2mSJKfzPN8VKrhgxF7uXwKYAXBDRE7W4aFCilV7tHMxs21t0wAui8jZKjx2T+vwypbJzG8BTAE4LyKXyngMraj2kXse7dXM/AHAZgBzInK92LAJWsKL9goR+f1BisJuwmcAG4noqNb6lndG80S0UPTeWC147XW3iDxqBLtJi7abGWMOZFk2X1dwofFOp7Oq1+v9jBZXaCEz/wCw2n5D/wYOrIn/CJTunrbHMyYYxpgLtf9c48LK+6zA/yqzS/adWKp/AcS5YqLVfkUYAAAAAElFTkSuQmCC')
        center no-repeat;
      background-size: 44%;
    }
    .key-SURE {
      flex: 2.3;
      background-color: #0095d9;
      color: #fff;
    }
    .disabled {
      @extend %cfff;
      background-color: #bbb;
      &:active {
        opacity: 1;
      }
    }
    &-number {
      @extend %df;
      padding: 0 j(10) j(40);
      .hor-keyboard-li {
        flex-direction: column;
        margin-right: j(6);
        margin-bottom: 0;
        height: j(200);
        &:last-child {
          margin-right: j(-6);
        }
        .key-DELETE {
          @extend %df1;

          background-size: 28%;
        }
        .key-SURE {
          @extend %df1;
        }
      }
      .hor-keyboard-cell {
        border-radius: j(8);
        margin-bottom: j(6);
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
</style>
