<template>
  <div id="search-bar">
    <div class="search-container clearfix">
      <div class="header-title">
        <img src="../../assets/img/logo.png" alt="">
      </div>
      <div class="header-search">
        <label for="search">
          <input type="text" id="search" placeholder="搜索商家或地点" @focus="onFocus" @blur="onBlur" v-model="searchWord">
        </label>
        <button class="searchBtn" @click="searchGo">搜索</button>
        <div class="search-suggest" v-if="isHotPlace">
          <div class="recent-search" v-if="historyList.length > 0">
            <div class="banner">
              <span>最近搜索</span>
              <span class="del" @click="delHistory">删除搜索历史</span>
            </div>
            <div class="history-list">
              <ul>
                <li v-for="(item, index) in historyList" :key="index">
                  <router-link to="/">{{ item }}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="hot-search">
            <div class="banner">
              <span>热门搜索</span>
            </div>
            <div class="hot-list">
              <span><router-link to="/">重庆欢乐谷</router-link></span>
              <span><router-link to="/">重庆曼谷园</router-link></span>
            </div>
          </div>
        </div>
        <div class="search-keyword" v-if="searchShow">
          <ul>
            <li><router-link to="/s">火锅</router-link></li>
            <li><router-link to="/s">火锅外卖</router-link></li>
            <li><router-link to="/s">火锅 重庆</router-link></li>
          </ul>
        </div>
        <div class="search-hotword">
          <router-link :to="{path: 'search', params: {aid: item}}" v-for="(item, index) in hotWord" :key="index">{{ item }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serachBar',
  data () {
    return {
      searchWord: '',
      focus: false,
      historyList: [
        '123465',
        '1234569',
        '123456789'
      ],
      hotWord: ['融汇温泉',
        '重庆欢乐谷',
        '天赐温泉',
        '重庆曼谷园',
        '重庆南山·海昌汤都',
        '古木枫老火锅']
    }
  },
  computed: {
    isHotPlace () {
      return this.focus && !this.searchWord
    },
    searchShow () {
      return this.focus && this.searchWord
    }
  },
  methods: {
    onFocus () {
      this.focus = true
    },
    onBlur () {
      setTimeout(() => {
        this.focus = false
      }, 200)
    },
    delHistory () {
      this.historyList = []
    },
    searchGo () {
      // code ...
      // 发送搜索请求, 之后 push 一条历史记录
      this.pushHistory(this.searchWord)
    },
    pushHistory (data) {
      this.historyList.push(data)
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/header/searchBar";
</style>
