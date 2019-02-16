<template>
  <div class="right-banner clearfix">
    <header-link />
    <slider-row />
    <pic-show-row />
  </div>
</template>

<script>
import headerLink from './headerLink'
import sliderRow from './sliderRow'
import picShowRow from './picShowRow'
export default {
  name: 'rightbanner',
  components: {
    headerLink,
    sliderRow,
    picShowRow
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/index/rightBanner";
</style>
