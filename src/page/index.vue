<template>
  <div class="main-content">
    <div class="main-container clearfix">
      <m-menu />
      <right-banner />
    </div>
    <div class="istyle">
      <my-style />
    </div>
    <div class="movie">
      <movie />
    </div>
    <div class="live-container">
      <live />
    </div>
    <nav class="navigation-wrapper">
      <navigation />
    </nav>
  </div>
</template>

<script>
import MMenu from '../components/index/mainMenu'
import rightBanner from '../components/index/rightBanner'
import navigation from '../components/navigation'
import myStyle from '../components/index/myStyle'
import live from '../components/index/live'
import movie from '../components/index/movie'
export default {
  name: 'index',
  components: {
    MMenu,
    rightBanner,
    navigation,
    myStyle,
    live,
    movie
  }
}
</script>

<style scoped lang="scss">
  .main-content{
    width: 100%;
    background: #f8f8f8;
    .main-container, .navigation-wrapper, .istyle, .live-container, .movie {
      width: 1190px;
      margin: 0 auto;
    }
  }
</style>
