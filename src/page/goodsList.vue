<template>
  <div class="goodsList-wrapper">
    <div class="goodsList-container">
      <div class="position">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">重庆</el-breadcrumb-item>
          <el-breadcrumb-item>重庆重庆曼谷园</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="classify clearfix">
        <div class="left pub">
          <div class="banner">
            <div class="filter-condition" v-if="show">
              <span>已选条件</span>
              <div class="conditions">
                <span v-for="(item, index) in conditions" :key="index" class="item">{{ item }}<i class="el-icon-close"></i> </span>
                <span class="clear">· 清除全部</span>
              </div>
            </div>
            <div class="classify-wrapper public">
              <span>分类</span>
              <span class="all">全部</span>
              <div class="second-filter">
                <el-dropdown>
                <span class="el-dropdown-link">
                  周边游
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span>旅游</span>
              </div>
            </div>
            <div class="area-wrapper public">
              <span>区域</span>
              <span class="all">全部</span>
              <div class="second-filter" style="border-bottom: none">
                <el-dropdown>
                <span class="el-dropdown-link">
                  九龙坡区
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
          <div class="list">
            <div class="filter">
              <span class="active">智能排序</span>
              <span>价格排序</span>
              <span>人气最高</span>
              <span>评价最高</span>
            </div>
            <div class="shop-list">
              <div>
                <img src="https://p1.meituan.net/hotel/1652a6601dd9bf7d643afa94d3f325341597604.png@275w_156h_1e_1c" alt="">
                <div>
                  <div>info</div>
                  <div>描述</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right pub">
          <button @click="getData">156468548</button>
        </div>
      </div>
    </div>
    <m-nav />
  </div>
</template>

<script>
import mNav from '../components/navigation'
import axios from 'axios'
export default {
  name: 'goodsList',
  components: {
    mNav
  },
  data () {
    return {
      show: false,
      conditions: ['主题公园'],
      shops: []
    }
  },
  methods: {
    getData () {
      axios.get('https://www.easy-mock.com/mock/5bf57cbde3a55a7e1b0e18b5/example/meituan')
        .then(res => {
          this.shops = res.data.data.searchResult
        })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/goodsList/index";
</style>
