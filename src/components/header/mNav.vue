<template>
  <nav class="nav-right">
    <ul class="nav-first">
      <li class="nav-item dialog">
        <router-link to="/user">我的美团</router-link>
        <ul class="nav-second">
          <li><router-link to="/user">我的订单</router-link></li>
          <li><router-link to="/user">我的收藏</router-link></li>
          <li><router-link to="/user">抵用券</router-link></li>
          <li><router-link to="/user">账户设置</router-link></li>
        </ul>
      </li>
      <li class="nav-item"><router-link to="/app">手机APP</router-link></li>
      <li class="nav-item dialog">
        <router-link to="/shop_center">商家中心</router-link>
        <ul class="nav-second w140">
          <li><router-link to="/user">登录商家中心</router-link></li>
          <li><router-link to="/user">美团智能收银</router-link></li>
          <li><router-link to="/user">我想合作</router-link></li>
          <li><router-link to="/user">手机免费开店</router-link></li>
          <li><router-link to="/user">餐饮代理商招募</router-link></li>
          <li><router-link to="/user">商家申请开票</router-link></li>
          <li><router-link to="/user">免费合作美团排队</router-link></li>
        </ul>
      </li>
      <li class="nav-item dialog">
        <router-link to="/nav">网站导航</router-link>
        <div class="subContainer nav-second w1200">
          <div class="container clearfix">
            <div class="list tour">
              <dl class="nav-third">
                <dt>酒店旅行</dt>
                <dd><router-link to="/">国际机票</router-link></dd>
                <dd><router-link to="/">火车票</router-link></dd>
                <dd><router-link to="/">榛果民宿</router-link></dd>
                <dd><router-link to="/">经济型酒店</router-link></dd>
                <dd><router-link to="/">主题酒店</router-link></dd>
                <dd><router-link to="/">商务酒店</router-link></dd>
                <dd><router-link to="/">公寓</router-link></dd>
                <dd><router-link to="/">豪华酒店</router-link></dd>
                <dd><router-link to="/">客栈</router-link></dd>
                <dd><router-link to="/">青年旅社</router-link></dd>
                <dd><router-link to="/">度假酒店</router-link></dd>
                <dd><router-link to="/">别墅</router-link></dd>
                <dd><router-link to="/">农家院</router-link></dd>
              </dl>
            </div>
            <div class="list eat">
              <dl class="nav-third">
                <dt>吃美食</dt>
                <dd><router-link to="/">烤鱼</router-link></dd>
                <dd><router-link to="/">特色小吃</router-link></dd>
                <dd><router-link to="/">烧烤</router-link></dd>
                <dd><router-link to="/">自助餐</router-link></dd>
                <dd><router-link to="/">火锅</router-link></dd>
                <dd><router-link to="/">代金券</router-link></dd>
              </dl>
            </div>
            <div class="list movie">
              <dl class="nav-third">
                <dt>看电影</dt>
                <dd><router-link to="/">热映电影</router-link></dd>
                <dd><router-link to="/">热门影院</router-link></dd>
                <dd><router-link to="/">热映电影口碑榜</router-link></dd>
                <dd><router-link to="/">最受期待的电影</router-link></dd>
                <dd><router-link to="/">国内票房榜</router-link></dd>
                <dd><router-link to="/">北美票房榜</router-link></dd>
                <dd><router-link to="/">电影排行榜</router-link></dd>
              </dl>
            </div>
            <div class="list app">
              <dl class="nav-third">
                <dt>手机应用</dt>
                <dd><router-link to="/"><img class="appicon" src="../../assets/img/icon/meituan.png"></router-link></dd>
                <dd><router-link to="/"><img class="appicon" src="../../assets/img/icon/waimai.png"></router-link></dd>
                <dd><router-link to="/"><img class="appicon" src="../../assets/img/icon/zhenguo.png"></router-link></dd>
                <dd><router-link to="/"><img class="appicon" src="../../assets/img/icon/dianping.png"></router-link></dd>
                <dd><router-link to="/"><img class="appicon" src="../../assets/img/icon/maoyan.png"></router-link></dd>
              </dl>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'mNav'
}
</script>

<style scoped lang="scss">
  @import "../../assets/css/header/right";
</style>
