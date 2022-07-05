
## hor-cell

```html
<div>点击跳转</div>
```

<div class="text-center" @click="$router.push('/widgets/hor-cell/index.vue')">
  <!-- You can use Vue components inside markdown -->
  <div i-carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>About</h3>
  <hor-cell label="11" value="222"></hor-cell>
</div>

```js
// syntax highlighting example
function vitesse() {
  const foo = 'bar'
  console.log(foo)
}
```

<script setup>
  import { useRouter } from 'vue-router'
  import { HorCell } from './index'
</script>