<template>
  <div class="tab-container">
    <div class="list">
      <ul class="tab-wrapper clearfix">
        <li class="tab-title">{{ styleList[0].style }}</li>
        <li class="tab-item" v-for="(items, i) in styleList" :key="items.id" @mouseenter.self="liEnter(items.children, i)">
          {{ items.title }}
        </li>
      </ul>
      <div class="content-wrapper clearfix" >
        <a class="content-detail" v-for="(item, index) in curItem" :key="index">
          <div class="item-pic">
            <img :src=item.imgSrc alt="">
          </div>
          <div class="item-content">
            <p class="title">{{ item.title }}</p>
            <p class="description">{{ item.des }}</p>
            <div class="price-info clearfix">
              <div class="price" v-if="item.price">
                <span class="curPrice">¥{{item.price}}</span>
                <span v-if="item.oldPrice" class="oldPrice">{{item.oldPrice}}</span>
                <span v-else class="aver">{{item.aver}}</span>
              </div>
              <span class="address">{{ item.address }}</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myStyle',
  data () {
    return {
      styleList: [
        {
          id: 1,
          style: '推荐民宿',
          title: '成都',
          children: [
            {
              imgSrc: 'https://img.meituan.net/phoenix/34eb96f38c3f1bbee0258a223342bcfe1162498.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/c4843446e2d357966d4ba332455b095c810086.jpg@200w_200h_1e_1c',
              title: '春熙路/宽窄巷子/太古里IFS/熊猫基地/昭觉寺地铁站地主家的民宿',
              des: ['整套1居室', '可住2人'],
              price: 120,
              address: '成都站'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/b6acdcba9ac87b02585d2d5d7a84bbfe263254.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/23e1184a17c19224f5f4ea944544a48a30159.jpg@200w_200h_1e_1c',
              title: '地铁三号线昭觉寺南路站／动物园／熊猫基地',
              des: ['整套1居室', '可住2人'],
              price: 148,
              address: '成都站'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/971ab6fd24240f392cd87bfccb042575175326.jpg@740w_416h_1e_1c',
              avatar: 'https://cq.meituan.com/@200w_200h_1e_1c',
              title: '你想要的 温柔超软大床两房 北欧清新风落地窗 超棒视野 光华大道 国色天香',
              des: ['整套2居室', '可住4人'],
              price: 238,
              address: '温江地区'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/90524af7f605fa1011f87984f483ddac899115.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/24e499443ebe807464062056b73b0732174636.jpg@200w_200h_1e_1c',
              title: '骡马市临街大窗复式公寓，北欧式清新风’近地铁、100兆电信光纤',
              des: ['整套1居室', '可住4人'],
              price: 128,
              address: '骡马市/新城市广场'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/25e65eeb838740b90e2acd59705f923949912.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/df54cde703b8fd21b4eea825450c58c122468.jpg@200w_200h_1e_1c',
              title: '',
              des: ['整套1居室', '可住2人'],
              price: 98,
              address: '双流机场'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/0116292afface44e56f9ac8963e0cccf542479.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/1a333acd7e1b8bfb7f78155d2d561f6912374.jpg@200w_200h_1e_1c',
              title: '高新区城市公寓  简约风格 家电齐全',
              des: ['整套1居室', '可住2人'],
              price: 238,
              address: '高新南区/金融城商业区'
            }
          ]
        },
        {
          id: 2,
          title: '贵阳',
          children: [
            {
              imgSrc: 'https://img.meituan.net/phoenix/20ee38a185db4841a8c267b6a58a2fe5809085.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/b5f1a4ecc079fbc05ddc460e8f98dc34557304.jpg@200w_200h_1e_1c',
              title: '『小鹿民宿』少女的祈祷【比邻双子塔和白宫】',
              des: ['整套1居室', '可住2人'],
              price: 200,
              address: '花果园地区'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/dd3ea5aec9497677c31eacc736896b5f364401.jpg@740w_416h_1e_1c',
              avatar: 'https://phoenix.meituan.com/housing/3425697/?phx_wake_up_type=mtpc_category&phx_wake_up_source=recommend',
              title: '『一尘民宿』超温馨｜巨幕投影｜近甲秀楼｜黔灵公园｜机场｜火车站｜火车北站｜市中心｜交通便利',
              des: ['整套2居室', '可住4人'],
              price: 238,
              address: '河滨公园/甲秀楼'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/707b3ac5ef2d19c4cf99aea53c0f066a1832339.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/8878302d449221fafbcd85de14f47d67210397.jpg@200w_200h_1e_1c',
              title: '【朴宿|Pursue】市中心喷水池花果园巨型布朗熊＃小红书网红店#LOFT复式天台#生日烧烤BBQ聚会＃巨幕投影仪＃求婚',
              des: ['整套2居室', '可住4人'],
              price: 338,
              address: '喷水池/星力广场'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/d33f42284c34a77687c52417f687cb72464922.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/8878302d449221fafbcd85de14f47d67210397.jpg@200w_200h_1e_1c',
              title: '【外婆家|Homeofheart】感受老贵阳的生活＃火车站#露天花园#BBQ、打麻将#看电影#二七小吃街#机场直达',
              des: ['整套3居室', '可住7人'],
              price: 388,
              address: '河滨公园/甲秀楼'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/2084ba2c0fed103c607ae6a4fdb14932143042.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/b5f1a4ecc079fbc05ddc460e8f98dc34557304.jpg@200w_200h_1e_1c',
              title: '『小鹿民宿』日落观景•loft公寓•师大',
              des: ['整套1居室', '可住2人'],
              price: 238,
              address: '市西路/大十字广场'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/5de4135b2c06a801144cfe6a08697ec1264545.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/b5f1a4ecc079fbc05ddc460e8f98dc34557304.jpg@200w_200h_1e_1c',
              title: '【小鹿民宿】loft公寓总统套房',
              des: ['整套1居室', '可住2人'],
              price: 238,
              address: '市西路/大十字广场'
            }
          ]
        },
        {
          id: 3,
          title: '乐山',
          children: [
            {
              imgSrc: 'http://p0.meituan.net/phoenix/1b19febeae7f276b2984ae845fb1074a783798.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/720ddaa7866bfeef3652a04b2c332e53327937.jpg@200w_200h_1e_1c',
              title: '报国寺伏虎寺旁/温泉小居/峨秀湖对面/望金顶/跃层北欧风',
              des: ['整套2居室', '可住6人'],
              price: 298,
              address: '人人乐百货'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/ef0ff263114524126a14b8a0630f7851676619.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/4a703d3c651550c1ce8431104385f02a22168.jpg@200w_200h_1e_1c',
              title: '【壹度•肆间】近张公桥美食街/近乐山大佛/超清投影仪/',
              des: ['整套1居室', '可住2人'],
              price: 198,
              address: '人人乐百货'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/ff396b0ddf4e9144395dccf234f818b4346696.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/f98b41633e29cd323c6140b399b428aa9359.jpg@200w_200h_1e_1c',
              title: '近乐山大佛 张公桥美食街 ins风投影大床房',
              des: ['整套1居室', '可住2人'],
              price: 168,
              address: '人人乐百货'
            },
            {
              imgSrc: 'http://p1.meituan.net/phoenix/062a1c43b9d451698fa1718d007fcc20154680.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/f718a9bd8a455475ee59e18550a2cf2f183278.jpg@200w_200h_1e_1c',
              title: '《乐佛之家》美食街/人人乐/近大佛/高铁站/交通方便，温馨美宿',
              des: ['整套2居室', '可住4人'],
              price: 208,
              address: '人人乐百货'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/7e318a5da7dacc09e05eac2a2645fcf8389843.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/c142afcd7960cef5d9f8ca5b5b89e9af6990.jpg@200w_200h_1e_1c',
              title: '近大佛临名小吃街直达高铁理想民宿大床房',
              des: ['整套2居室', '可住5人'],
              price: 218,
              address: '人人乐百货'
            },
            {
              imgSrc: 'https://img.meituan.net/phoenix/581e8721f03236716106e3d5c0a13e4a566741.jpg@740w_416h_1e_1c',
              avatar: 'https://img.meituan.net/avatar/6481bb1730bbba7e131a616b1e771c7910568.jpg@200w_200h_1e_1c',
              title: '张公桥4 近乐山大佛 全套宜家家居 人人乐 两室整租',
              des: ['整套1居室', '可住2人'],
              price: 158,
              address: '人人乐百货'
            }
          ]
        }
      ],
      curItem: null
    }
  },
  mounted () {
    this.curItem = this.styleList[0].children
  },
  methods: {
    liEnter (item) {
      this.curItem = item
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/index/live";
</style>
