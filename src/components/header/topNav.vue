<template>
  <header id="top-nav">
    <div class="nav-wrapper">
      <geo />
      <m-nav />
    </div>
  </header>
</template>

<script>
import geo from './geo'
import mNav from './mNav'
export default {
  name: 'topNav',
  components: {
    geo,
    mNav
  }
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/header/topnav";
</style>
