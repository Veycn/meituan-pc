<template>
  <div class="tab-container">
    <div class="list">
      <ul class="tab-wrapper clearfix">
        <li class="tab-title">{{ list[0].theme }}</li>
        <li class="tab-item" v-for="(items, i) in list" :key="items.id" @mouseenter.self="liEnter(items.children, i)">
          {{ items.title }}
        </li>
      </ul>
      <div class="content-wrapper clearfix" >
        <ul class="film-wrapper clearfix">
          <li class="item-detail" v-for="(item, index) in curItem" :key="index">
            <img :src="item.imgSrc" :alt="item.title">
            <img :src="item.flag" alt="item.flag" class="flag" v-if="item.flag">
            <div class="info-wrapper">
              <p class="film-score" v-if="item.score"><b>观众评</b><span class="score">{{ item.score }}</span></p>
              <p class="film-score" v-else><span class="score">{{ item.want }}<b>人想看</b></span></p>
              <p class="film-name">{{ item.title }}</p>
              <span class="buy-ticket">{{ item.state }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'movie',
  mounted () {
    this.curItem = this.list[0].children
  },
  data () {
    return {
      curItem: null,
      list: [
        {
          id: 1,
          theme: '猫眼电影',
          title: '正在热映',
          children: [
            {
              imgSrc: 'https://p0.meituan.net/movie/4ea3026406362a49c1409a69a0876c1a8591938.jpg@267w_371h_1e_1c',
              title: '神探蒲松龄',
              score: 7.7,
              state: '购票',
              flag: '//s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png'
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/acc799be77b65d9f396f4c225a26f61e4082113.jpg@267w_371h_1e_1c',
              title: '小猪佩奇过大年',
              score: 5.4,
              state: '购票',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/caa49433185fd62b4384e3ad195ec1541309089.jpg@267w_371h_1e_1c',
              title: '一吻定情',
              want: 51047,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p1.meituan.net/movie/616cd50a33550a9225ac781e52d14ae54967551.jpg@267w_371h_1e_1c',
              title: '流浪地球',
              score: 9.3,
              state: '购票',
              flag: '//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png'
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/6a21e35ad7106c60967954b165c09b92915222.jpg@267w_371h_1e_1c',
              title: '疯狂的外星人',
              score: 8.5,
              state: '购票',
              flag: '//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/894fb3b5d73f48148a79b7d8ad234f5010214941.jpg@267w_371h_1e_1c',
              title: '飞驰人生',
              score: 8.8,
              state: '购票',
              flag: '//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax.png'
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/ec30a55b1b20e7b8621bfb7682b530f9568248.jpg@267w_371h_1e_1c',
              title: '新喜剧之王',
              score: 7.9,
              state: '购票',
              flag: ''
            },
            {
              imgSrc: 'https://p1.meituan.net/movie/0ca4644c25ff01b7779a06e1ce4f1b011824360.jpg@267w_371h_1e_1c',
              title: '熊出没·原始时代',
              score: 9.2,
              state: '购票',
              flag: '//s0.meituan.net/bs/fe-web-meituan/9d1997a/img/3d.png'
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/fa4112a6da5a7cc6b6eefec6d989863c401228.jpg@267w_371h_1e_1c',
              title: '廉政风云',
              score: 6.8,
              state: '购票',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg@267w_371h_1e_1c',
              title: '阿丽塔：战斗天使',
              want: 74565,
              state: '预售',
              flag: '//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png'
            }
          ]
        },
        {
          id: 2,
          title: '即将上映',
          children: [
            {
              imgSrc: 'https://p0.meituan.net/movie/caa49433185fd62b4384e3ad195ec1541309089.jpg@267w_371h_1e_1c',
              title: '一吻定情',
              want: 51047,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p1.meituan.net/movie/023ac53163cf9a1467825f6dd161110a4206220.jpg@267w_371h_1e_1c',
              title: '今夜在浪漫剧场',
              want: 20325,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/3b84cf0550475ca29d649caec5f5fca94098960.jpg@267w_371h_1e_1c',
              title: '蓝色生死恋',
              want: 11801,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/93109d101e4ad66255b7473cb6acacc8797456.jpg@267w_371h_1e_1c',
              title: '五十米之恋',
              want: 11635,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/e3024bf38da8ed2a9250e301a7a0532186538.jpg@267w_371h_1e_1c',
              title: '北斗风云',
              want: 740,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/fc4dd6cd0c6f7db566a128cc05c475355664427.jpg@267w_371h_1e_1c',
              title: '阿丽塔：战斗天使',
              want: 74565,
              state: '预售',
              flag: '//s0.meituan.net/bs/fe-web-meituan/25e6614/img/imax3d.png'
            },
            {
              imgSrc: 'https://p1.meituan.net/movie/82fcca2016ecee06f95dcb4979b328b6341744.jpg@267w_371h_1e_1c',
              title: '朝花夕誓-于离别之朝束起约定之花',
              want: 49565,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/4ecec64ff6bb6c2e7d1b1f86ce0f76fb315046.jpg@267w_371h_1e_1c',
              title: '古井凶灵',
              want: 3447,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p0.meituan.net/movie/9ef02a501fee7f62d49d2096b52175d32155331.jpg@267w_371h_1e_1c',
              title: '驯龙高手3',
              want: 46587,
              state: '预售',
              flag: ''
            },
            {
              imgSrc: 'https://p1.meituan.net/movie/c9b280de01549fcb71913edec05880585769972.jpg@267w_371h_1e_1c',
              title: '绿皮书',
              want: 4528,
              state: '预售',
              flag: ''
            }
          ]
        }
      ]
    }
  },
  methods: {
    liEnter (item, i) {
      this.curItem = item
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/index/movie";
</style>
