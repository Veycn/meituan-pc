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
          style: '有格调',
          title: '全部',
          children: [
            {
              imgSrc: '//p1.meituan.net/msmerchant/8071fc2511131749b6aa47c8b1487f08194991.jpg@460w_260h_1e_1c',
              title: '哈根达斯（龙湖时代天街店）',
              des: '800克欢乐芝间蛋糕冰淇淋1个，约800克，圆',
              price: 248,
              oldPrice: '门市价¥298',
              address: '龙湖时代天街'
            },
            {
              imgSrc: '//p0.meituan.net/deal/65df3f322ad9231108065fecd6a6a997104288.jpg@460w_260h_1e_1c',
              title: '艾璐蛋糕 (半山华府店)',
              des: '蛋糕4选1,约3磅，方形慕斯蛋糕，生日蛋糕全城免费配送上门',
              price: 148,
              oldPrice: '门市价¥268',
              address: '东方家园'
            },
            {
              imgSrc: '//p1.meituan.net/scarlett/7b5f675c70e84c66907759c9a559e5c8112620.jpg@460w_260h_1e_1c',
              title: '幸福西饼生日蛋糕（盘龙店）',
              des: '天天好吃鲜芒九方1个，约560克，方形，美味下午茶',
              price: 99,
              oldPrice: '门市价¥148',
              address: '巴国城'
            },
            {
              imgSrc: '//p0.meituan.net/scarlett/dd40062805e73a876692b9589339b1c6223571.png@460w_260h_1e_1c',
              title: '储缘蛋糕（北碚店）',
              des: '6英寸欧式水果蛋糕（helloKitty海绵宝宝、多啦a梦）免费赠送蜡烛、配送叉盘-1个，约6英寸，圆型',
              price: 48,
              oldPrice: '门市价¥58',
              address: '老城区/天奇广场'
            },
            {
              imgSrc: '//p0.meituan.net/shopmainpic/245bf5bcdfcee4fdef9a67987c1c2c2815004.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '公主美甲（大坪店）',
              des: '公主美甲（大坪店）',
              price: null,
              oldPrice: null,
              address: '大坪'
            },
            {
              imgSrc: '//p0.meituan.net/msmerchant/c841b54d6558a46a67087aa0abca23d52993992.jpg@460w_260h_1e_1c',
              title: '必胜客（大坪英利店）',
              des: '【新春限定丰盛2人餐D041】1份',
              price: 199,
              oldPrice: '门市价¥325',
              address: '大坪'
            }
          ]
        },
        {
          id: 2,
          title: '约会聚餐',
          children: [
            {
              imgSrc: '//p0.meituan.net/msmerchant/0a86f80b843712318e135e89346268ca628497.jpg@460w_260h_1e_1c',
              title: '湘域中餐厅（时代天街店）',
              des: '10人聚会大桌餐，有赠品',
              price: 1388,
              oldPrice: '门市价¥1556',
              address: '龙湖时代天街'
            },
            {
              imgSrc: '//p0.meituan.net/msmerchant/19fb654bafcd442959dc0bae990f6977312768.jpg@460w_260h_1e_1c',
              title: '你的蛋糕',
              des: '蛋糕20选1,约6英寸，圆形',
              price: 168,
              oldPrice: '门市价¥198',
              address: '大坪'
            },
            {
              imgSrc: '//p1.meituan.net/mogu/417aab28c545c318146470c2495d3132378057.jpg@460w_260h_1e_1c',
              title: '守柴炉烤鸭（大坪医院店）',
              des: '守柴炉烤鸭大坪店278元八人餐',
              price: 288,
              oldPrice: '门市价¥413',
              address: '大坪'
            },
            {
              imgSrc: '//p0.meituan.net/msmerchant/c841b54d6558a46a67087aa0abca23d52993992.jpg@460w_260h_1e_1c',
              title: '必胜客（大坪英利店）',
              des: '新年限定牛排比萨餐D0401份',
              price: 229,
              oldPrice: '门市价¥360',
              address: '大坪'
            },
            {
              imgSrc: '//p0.meituan.net/msmerchant/c946499d5caec6d62239defb2019246d4957491.jpg@460w_260h_1e_1c',
              title: '火山夜三里火锅',
              des: '豪华聚会套餐，建议6-8人使用',
              price: 288,
              oldPrice: '门市价¥393',
              address: '北滨路/金源/星悦荟'
            },
            {
              imgSrc: '//p1.meituan.net/msmerchant/1604e35e446488aeab9a78c81bc2878e1532083.jpg@460w_260h_1e_1c',
              title: '德香苑北京烤鸭（新世纪百货奥特莱斯店）',
              des: '4人套餐，提供免费WiFi',
              price: 249,
              oldPrice: '门市价¥424',
              address: '观音桥'
            }
          ]
        },
        {
          id: 3,
          title: '丽人SPA',
          children: [
            {
              imgSrc: '//p1.meituan.net/poi/08e5dfe2163c2fc1cc70e249749c7918143360.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '88潮牌',
              des: '88潮牌',
              price: null,
              oldPrice: null,
              address: '大坪'
            },
            {
              imgSrc: '//p1.meituan.net/wedding/ccdf8795d023d1b6ce143e01d07a082562893.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '悦·肤·荟',
              des: '悦·肤·荟',
              price: null,
              oldPrice: null,
              address: '无合适商圈'
            },
            {
              imgSrc: '//p0.meituan.net/wedding/efd7307e3860820eb9ce20b0ce2230d04284439.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '袭色HISIERA（时代天街旗舰店）',
              des: '袭色HISIERA（时代天街旗舰店）',
              price: 316,
              oldPrice: null,
              aver: '/起',
              address: '龙湖时代天街'
            },
            {
              imgSrc: '//p0.meituan.net/shopmainpic/e0b7e9da51d10aa800d759c4332a315164342.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '希丽妍sealine（时代天街旗舰店）',
              des: '希丽妍sealine（时代天街旗舰店）',
              price: 126,
              oldPrice: null,
              aver: '/起',
              address: '龙湖时代天街'
            },
            {
              imgSrc: '//p0.meituan.net/deal/d039af94385ea495b48f9935b2aad4c173629.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '爱丝美容院',
              des: '爱丝美容院',
              price: null,
              oldPrice: null,
              address: '大坪'
            },
            {
              imgSrc: '//p1.meituan.net/wedding/6b9498208f6299bdfa969534a800307b42020.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|460w_260h_1e_1c',
              title: '帝美美容中心',
              des: '帝美美容中心',
              price: null,
              oldPrice: null,
              address: '大坪'
            }
          ]
        },
        {
          id: 4,
          title: '电影演出',
          children: [
            {
              imgSrc: '//p0.meituan.net/deal/__7970247__6262397.jpg@460w_260h_1e_1c',
              title: '中影国际影城(九龙坡印象汇店)',
              des: '免押金,可停车,儿童票,有WIFI,RealD厅,巨幕厅',
              price: 30.9,
              oldPrice: null,
              aver: '/人均',
              address: null
            },
            {
              imgSrc: '//p1.meituan.net/deal/201211/20/1_1120173125.jpg@460w_260h_1e_1c',
              title: '卢米埃北滨IMAX影城',
              des: '免押金,可停车,儿童票,有WIFI,IMAX厅,4DX厅',
              price: 35,
              oldPrice: null,
              aver: '/人均',
              address: null
            },
            {
              imgSrc: '//p0.meituan.net/deal/90af0130d9281266ebe22da9820abfa8197842.jpg@460w_260h_1e_1c',
              title: '越界影城IMAX(大学城店)',
              des: '免押金,可停车,儿童票,有WIFI,IMAX厅,4D厅',
              price: 19.9,
              oldPrice: null,
              aver: '/人均',
              address: null
            },
            {
              imgSrc: '//p1.meituan.net/deal/201208/22/1_0822151022.jpg@460w_260h_1e_1c',
              title: '红星太平洋(金辉店)',
              des: '免押金,可停车,儿童票,4D厅',
              price: 30.9,
              oldPrice: null,
              aver: '/人均',
              address: null
            },
            {
              imgSrc: '//p1.meituan.net/deal/ed71fab94b9ddd5c1f324c06217df365100712.jpg@460w_260h_1e_1c',
              title: '博纳国际影城(虎头岩店)',
              des: '免押金,可停车,儿童票,有WIFI,中国巨幕厅,杜比全景声厅,60帧厅',
              price: 19.9,
              oldPrice: null,
              aver: '/人均',
              address: null
            },
            {
              imgSrc: '//p0.meituan.net/poi/1531234198008859de76fedb823cce9892160.jpg@460w_260h_1e_1c',
              title: '越界影城IMAX(石桥铺店)',
              des: '免押金,可停车,儿童票,有WIFI,IMAX厅,4K厅,60帧厅',
              price: 19.9,
              oldPrice: null,
              aver: '/人均',
              address: null
            }
          ]
        },
        {
          id: 5,
          title: '品质出游',
          children: [
            {
              imgSrc: '//p0.meituan.net/dnaimgdark/77fc47bcae753850ae0334e6661d7f8c2436126.jpg@460w_260h_1e_1c',
              title: '秀泉映月温泉花园酒店',
              des: ['新客超值优惠', '极速退款', '酒店套餐', '亲子场景酒店'],
              price: 654,
              oldPrice: null,
              aver: '/起',
              address: null
            },
            {
              imgSrc: '//p0.meituan.net/tdchotel/4c53d17883758446e9a3b478f8b7d23d292284.jpg@460w_260h_1e_1c',
              title: '重庆希尔顿酒店',
              des: ['酒店套餐', '亲子场景酒店', '房量充足'],
              price: 688,
              oldPrice: null,
              aver: '/起',
              address: null
            },
            {
              imgSrc: '//p1.meituan.net/tdchotel/04cae6be3078d689ae0710565ec7818399611.jpeg@460w_260h_1e_1c',
              title: '重庆洪崖洞大酒店',
              des: ['新客超值优惠', '酒店套餐', '亲子场景酒店'],
              price: 1018,
              oldPrice: null,
              aver: '/起',
              address: null
            },
            {
              imgSrc: '//p1.meituan.net/tdchotel/fadf41a2d70390df58c213ad68636ca8174452.jpg@460w_260h_1e_1c',
              title: '维也纳国际酒店',
              des: ['麻将房', '房量充足', '员工特惠'],
              price: 19.9,
              oldPrice: null,
              aver: '/起',
              address: null
            },
            {
              imgSrc: '//p0.meituan.net/tdchotel/ce52c2838a9c98a4f191524bcda5a0d094364.jpg@460w_260h_1e_1c',
              title: '重庆凯宾斯基酒店',
              des: ['酒店套餐', '亲子场景酒店', '亲子酒店'],
              price: 1017,
              oldPrice: null,
              aver: '/起',
              address: null
            },
            {
              imgSrc: '//p0.meituan.net/tdchotel/dc51fe506cc0985305d362ccb5e4799c539621.jpg@460w_260h_1e_1c',
              title: '重庆融汇丽笙酒店',
              des: ['新客超值优惠', '亲子场景酒店', '酒店套餐'],
              price: 934,
              oldPrice: null,
              aver: '/起',
              address: null
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
@import "../../assets/css/index/mystyle";
</style>
