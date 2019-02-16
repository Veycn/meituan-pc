<template>
  <div class="pic-show">
    <div class="pub pic">
      <router-link to="/">
        <img src="../../assets/img/banner/2.jpg" alt="">
      </router-link>
    </div>
    <div class="pub pic">
      <router-link to="/">
        <img src="../../assets/img/banner/2.png" alt="">
      </router-link>
    </div>
    <div class="pub pic_s">
      <router-link to="/">
        <img src="../../assets/img/banner/3.jpg" alt="">
      </router-link>
    </div>
    <div class="pub app-download">
      <div class="img-wrapper">
          <img src="../../assets/img/banner/4.png" alt="">
      </div>
      <p>美团APP手机版</p>
      <p><span>1元起</span><span>吃喝玩乐</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'picShowRow'
}
</script>

<style scoped lang="scss">
.pic-show {
  .pub {
    height: 165px;
    float: left;
    a {
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
  .pic {
    width: 270px;
    margin-right: 10px;
  }
  .pic_s {
    width: 150px;
    margin-right: 10px;
  }
  .app-download {
    width: 230px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    background: #fff;
    .img-wrapper {
      width: 100%;
      padding-top: 10px;
      img {
        display: block;
        margin: 0 auto;
        width: 95px;
        height: 95px;
      }
    }
    p {
      text-align: center;
      span {
        font-size: 12px;
        &:nth-child(1){
          color: red;
          margin-right: 4px;
        }
        &:nth-child(2){
          color: #3f3f3f;
        }
      }
    }
  }
}
</style>
