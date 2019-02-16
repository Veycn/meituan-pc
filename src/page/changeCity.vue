<template>
  <div class="change-city">
    <div>
      <province />
    </div>
    <div>热门城市</div>
    <div>最近访问</div>
    <div>城市选择</div>
  </div>
</template>

<script>
import province from '../components/changeCity/province'
export default {
  name: 'changeCity',
  data () {
    return {
      //
    }
  },
  components: {
    province
  }
}
</script>

<style scoped lang="scss">
.change-city {
  width: 1190px;
  margin: 0 auto;
}
</style>
