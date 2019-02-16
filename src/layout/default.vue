<template>
  <div class="page-default">
    <div class="header">
      <header-bar />
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <footer-bar />
    </div>
  </div>
</template>

<script>
import headerBar from '../components/header/index'
import footerBar from '../components/footer/index'
export default {
  name: 'default',
  components: {
    headerBar,
    footerBar
  }
}
</script>

<style scoped lang="scss">
  .page-default {
    background: #f8f8f8;
  }
</style>
