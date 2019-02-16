<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "assets/style.css";
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}
button, input {
  outline: none;
  border: none;
}
.clearfix:before,.clearfix:after{
   content:"";
   display:table;
 }
.clearfix:after{clear:both;}
.clearfix{
  *zoom:1;/*IE/7/6*/
}
#app {

}
</style>
