<template>
  <div class="slider-row clearfix">
    <div class="pub slider">
      <div class="block">
        <el-carousel height="240px">
          <el-carousel-item v-for="item in imgArr" :key="item.id">
            <router-link to="/"><img :src="item.src" alt="none"></router-link>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="pub pic">
      <router-link to="/">
        <img src="../../assets/img/banner/1.jpg" alt="">
      </router-link>
    </div>
    <div class="pub login">
      <div class="content">
        <img src="../../assets/img/avatar.jpg" alt="">
        <p>Hi! 你好</p>
        <router-link to="/">注册</router-link>
        <router-link to="/">立即登录</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import a from '../../assets/img/slider/1.jpg'
import b from '../../assets/img/slider/2.jpg'
import c from '../../assets/img/slider/3.jpg'
import d from '../../assets/img/slider/4.jpg'
import e from '../../assets/img/slider/5.png'
export default {
  name: 'slider',
  data () {
    return {
      imgArr: [
        {
          id: 1,
          src: a
        },
        {
          id: 2,
          src: b
        },
        {
          id: 3,
          src: c
        },
        {
          id: 4,
          src: d
        },
        {
          id: 5,
          src: e
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.slider-row {
  margin-bottom: 10px;
  .pub {
    float: left;
    a {
      img {
        width: 100%;
        height: 100%;
        display: inline-block;
      }
    }
  }
  & .pub:nth-child(2) {
    margin: 0 10px;
  }
  .slider {
    width: 550px;
    height: 240px;
  }
  .pic {
    width: 150px;
    height: 240px;
  }
  .login {
    width: 230px;
    height: 240px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    padding-top: 30px;
    background: #fff;
    .content {
      text-align: center;
      img {
        width: 55px;
        height: 55px;
        border-radius: 50%;
      }
      p {
        font-size: 16px;
        color: #222;
        text-align: center;
        font-weight: 500;
        white-space: nowrap;
        width: 6em;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 0 auto;
      }
      a {
        width: 118px;
        text-align: center;
        margin: 10px auto 15px;
        background: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 40px;
        font-size: 14px;
        color: #333;
        transition: background-color .5s;
        display: block;
        line-height: 38px;
        &:hover {
          background: #f6f6f6;
        }
      }
    }
  }
}
.el-carousel__item {
  img {
    width: 100%;
    height: 100%;
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
