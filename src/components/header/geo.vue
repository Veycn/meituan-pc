<template>
  <div class="nav-left">
    <i class="el-icon-location" />
    <span class="current-city">{{ this.$store.state.cityPosition ? this.$store.state.cityPosition : '重庆' }}</span>
    <router-link :to="{name: 'changeCity'}" class="changeCity">切换城市</router-link>
    <div class="city-list">
      [
      <a href="#">璧山</a>
      <a href="#">铜梁</a>
      <a href="#">北碚</a>
      ]
    </div>
    <div class="user-entry">
      <router-link :to="{name: 'login'}" class="login">立即登录</router-link>
      <router-link :to="{name: 'register'}" class="register">注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'geo',
  mounted () {
    console.log(this.$store.state)
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/header/left";
</style>
