<template>
  <div class="header">
    <top-nav />
    <search-bar />
  </div>
</template>

<script>
import topNav from './topNav'
import searchBar from './serachBar'
export default {
  name: 'index',
  components: {
    topNav,
    searchBar
  }
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;

}
</style>
