<template>
  <div class="change-city-wrapper">
    <div class="pub selection-wrapper">
      <province />
    </div>
    <div class="pub city-suggest">
      <span class="title">热门城市:</span>
      <span v-for="(item, index) in hot" :key="index" class="item">{{ item }}</span>
    </div>
    <div class="pub recent-search">
      <span class="title">最近访问:</span>
      <span v-for="(item, index) in recent" :key="index" class="item">{{ item }}</span>
    </div>
    <div class="pub select-city">
      <div class="alpha">
        <span>按拼音首字母选择:</span>
        <span v-for="(item, index) in alpha" :key="index" class="item">{{ item }}</span>
      </div>
      <div v-for="(items, index) in cityList" :key="index" v-if="items.cities.length > 0" class="city-container">
        <span class="city-label">{{ items.zm }}</span>
        <span class="city-item-wrapper">
          <router-link :to="{name: 'index', params: {city: city}}" v-for="(city, index) in items.cities" :key="index" class="city-item">{{ city }}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import province from '../components/changeCity/province'
import axios from 'axios'
export default {
  name: 'changeCity',
  data () {
    return {
      cityList: null,
      hot: ['北京', '上海', '深圳', '广州', '重庆'],
      recent: ['北京', '上海', '深圳', '广州', '重庆', '杭州', '柳州'],
      alpha: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    }
  },
  mounted () {
    axios.get('https://www.easy-mock.com/mock/5bf57cbde3a55a7e1b0e18b5/example/cities')
      .then(res => {
        this.cityList = res.data.data
      }).catch(err => {
        console.log(err)
      })
  },
  components: {
    province
  }
}
</script>

<style scoped lang="scss">
.change-city-wrapper {
  width: 1190px;
  margin: 0 auto;
  background: #fff;
  padding: 15px;
  .pub {
    border-bottom: 1px solid #eee;
    padding: 30px 0;
    .item {
      margin: 0 10px;
      font-size: 14px;
      color: #555;
      cursor: pointer;
      &:hover{
        color: #31bbac;
      }
    }
    .title {
      font-size: 16px;
    }
  }
  .selection-wrapper{
  }
  .city-suggest{
  }
  .recent-search{
  }
  .select-city{
    border-bottom: none;
    .alpha {
      padding: 10px 0 30px 0;
    }
    .item {
      width: 25px;
      height: 25px;
      display: inline-block;
      line-height: 25px;
      border-radius: 50%;
      font-size: 16px;
      text-align: center;
      margin-left: 4px;
      &:hover {
        background: #e5e5e5;
      }
    }
    .city-container {
      .city-label {
        box-sizing: border-box;
        vertical-align: top;
        padding-top: 10px;
        display: inline-block;
        text-align: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        color: #fff;
        background: #13D1BE;
        box-shadow: 0 4px 5px 0 rgba(39,178,164,.22);
      }
      .city-item-wrapper {
        display: inline-block;
        max-width: 1065px;
        .city-item {
          margin: 10px 20px;
          color: #666;
          display: inline-block;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
