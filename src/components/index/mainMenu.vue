<template>
  <div class="menu">
    <div class="list-header">
      <span>全部分类</span>
    </div>
    <dl class="menu-list">
      <dd v-for="(item, index) in navList" :key="item.id" class="list-item" @mouseenter="MEnter(index)">
        <span :class="item.class" class="list-icon"></span>
        <router-link to="/">{{ item.title }}</router-link>
        <span class="right-arrow icon-keyboard_arrow_right"></span>
        <div class="item-detail-container">
          <div class="item-detail">
            <div v-for="(i, index) in item.subItem" :key="index" class="item-subModule">
              <div class="item-header">
                <span class="title">{{ i.title }}</span>
                <span class="more">更多<span class="icon-keyboard_arrow_right"></span></span>
              </div>
              <div class="item-content">
                <span class="link-wrapper" v-for="(link, index) in i.items" :key="index">
                  <router-link to="/">{{ link }}</router-link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'mainMenu',
  data () {
    return {
      navList: [
        {
          id: 1,
          title: '美食',
          class: 'icon-thumb_down',
          subItem: [
            {
              title: '美食',
              items: ['代金券', '甜点饮品', '火锅', '自助餐', '小吃', '快餐', '日韩料理', '西餐', '聚餐', '宴请', '烧烤', '烤肉', '东北菜', '川湘菜', '江浙菜', '香锅', '烤鱼', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡', '酒吧', '茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '汤/粥/炖菜', '蒙餐', '新疆菜', '其他美食', '京菜', '鲁菜']
            }
          ]
        },
        {
          id: 2,
          title: '外卖',
          class: 'icon-thumb_up',
          subItem: [
            {
              title: '外卖',
              items: ['美团外卖']
            }
          ]
        },
        {
          id: 3,
          title: '酒店HOT',
          class: 'icon-office',
          subItem: [
            {
              title: '酒店星级',
              items: ['经济型', '舒适/三星', '高档/四星', '豪华/五星']
            }
          ]
        },
        {
          id: 4,
          title: '榛果民宿',
          class: 'icon-blog',
          subItem: [
            {
              title: '榛果民宿',
              items: ['上海', '成都', '北京', '重庆', '南京', '杭州', '广州', '西安', '大连']
            }
          ]
        },
        {
          id: 5,
          title: '猫眼电影',
          class: 'icon-camera',
          subItem: [
            {
              title: '猫眼电影',
              items: ['飞驰人生', '疯狂的外星人', '流浪地球', '新喜剧之王', '神探蒲松龄', '廉政风云', '小猪佩奇过大年', '熊出没', '原始时代']
            }
          ]
        },
        {
          id: 6,
          title: '机票 / 火车票',
          class: 'icon-music',
          subItem: [
            {
              title: '机票',
              items: ['国内机票', '国际/港澳台机票']
            },
            {
              title: '火车票',
              items: ['火车票']
            }
          ]
        },
        {
          id: 7,
          title: '休闲娱乐 / KTV',
          class: 'icon-podcast',
          subItem: [
            {
              title: '休闲娱乐',
              items: ['足疗', '按摩', '洗浴/汗蒸', '酒吧', '密室逃脱', '轰趴馆', '茶馆', '私人影院', 'DIY手工坊', '采摘/农家乐', '网吧', '网咖', '游乐游艺', 'VR桌面游戏', '真人CS', '棋牌室', '其他玩乐']
            },
            {
              title: 'KTV',
              items: ['KTV']
            }
          ]
        },
        {
          id: 8,
          title: '生活服务',
          class: 'icon-dice',
          subItem: [
            {
              title: '生活服务',
              items: ['衣物/皮具洗护', '家政', '搬家运输', '送水', '充值缴费', '服饰/鞋包养护', '开锁换锁', '居家维修', '管道疏通', '家电维修清洗', '电脑维修', '手机维修', '证件照/肖像摄影', '照片冲印/图文文印', '商务服务/法律服务', '文化传媒机构', '成人用品/情趣用品']
            }
          ]
        },
        {
          id: 9,
          title: '丽人 / 美发 / 医学美容',
          class: 'icon-folder-open',
          subItem: [
            {
              title: '丽人',
              items: ['美发', '美甲', '美睫', '美容', '美体', '医学美容', '瑜伽舞蹈', '瘦身纤体', '韩式定妆', '祛痘纹身', '化妆品', '养发']
            }
          ]
        },
        {
          id: 10,
          title: '结婚 / 婚纱摄影 / 婚宴',
          class: 'icon-library',
          subItem: [
            {
              title: '结婚',
              items: ['婚纱摄影', '旅拍', '个性写真', '婚宴', '婚庆公司', '婚纱礼服', '西服定制', '婚戒', '首饰', '婚车租赁', '司仪主持', '彩妆造型', '婚礼跟拍', '婚礼小礼品', '更多婚礼服务']
            }
          ]
        },
        {
          id: 11,
          title: '亲子 / 儿童乐园 / 幼教',
          class: 'icon-database',
          subItem: [
            {
              title: '儿童乐园',
              items: ['婴儿游泳', '其它亲子游乐']
            },
            {
              title: '幼儿教育',
              items: ['早教中心', '少儿英语', '智力开发', '托班/幼儿园', '幼儿教育', '其他幼儿教育']
            },
            {
              title: '亲子摄影',
              items: ['儿童摄影', '孕妇写真', '上门拍', '其他亲子摄影']
            },
            {
              title: '孕产护理',
              items: ['月子会所', '产后恢复', '妇幼医院', '孕产用品', '开奶催乳', '月嫂', '亲子购物', '宝宝派对', '亲子服务']
            }
          ]
        },
        {
          id: 12,
          title: '运动健身 / 健身中心',
          class: 'icon-bell',
          subItem: [
            {
              title: '运动健身',
              items: ['健身中心', '武术场馆', '游泳馆', '羽毛球馆', '溜冰场', '射箭馆', '篮球场', '网球馆', '台球馆', '乒乓球', '足球场', '高尔夫场', '保龄球馆', '体育场馆', '马术场', '壁球馆', '更多运动']
            }
          ]
        },
        {
          id: 13,
          title: '家装 / 建材 / 家居',
          class: 'icon-spinner5',
          subItem: [
            {
              title: '装修设计',
              items: ['半包装修', '全包装修', '清包装修']
            },
            {
              title: '装修建材',
              items: ['地板瓷砖', '石材橱柜', '灯饰照明', '厨卫洁具', '油漆涂料', '集成吊顶', '墙纸墙艺', '门窗', '木材板材', '家用五金', '电工电料', '楼梯', '管材管件']
            },
            {
              title: '家具家居',
              items: ['家具', '床上用品/家纺家居', '饰品', '厨具餐具', '智能家居']
            },
            {
              title: '家装卖场',
              items: ['建材卖场', '家居卖场', '灯饰卖场']
            }
          ]
        },
        {
          id: 14,
          title: '学习培训 / 音乐培训',
          class: 'icon-wrench',
          subItem: [
            {
              title: '音乐培训',
              items: ['钢琴', '吉他', '小提琴', '古筝', '架子鼓', '声乐', '其他音乐培训']
            },
            {
              title: '职业技术',
              items: ['美容化妆', '会计', 'IT', '厨艺', '管理培训', '摄影培训', '司法考试', '公务员培训', '其他职业培训']
            },
            {
              title: '外语培训',
              items: ['英语', '日语', '韩语', '法语', '德语', '汉语', '俄语', '西班牙语', '其他外语']
            },
            {
              title: '美术培训',
              items: ['绘画', '书法', '其他美术']
            }
          ]
        },
        {
          id: 15,
          title: '医疗健康 / 宠物 / 爱车',
          class: 'icon-star-full',
          subItem: [
            {
              title: '医疗健康',
              items: ['医院', '齿科口腔', '体检中心', '药店', '中医', '其他健康服务']
            },
            {
              title: '爱车',
              items: ['洗车', '租车', '加油站', '维修', '保养驾校', '汽车美容', '陪练', '汽车用品', '停车场', '汽车保险', '4S店/汽车销售', '更多汽车服务', '机油保养', '汽车报价', '二手车广告', '驾校', '交警队', '汽车改装', '汽车配件']
            },
            {
              title: '宠物',
              items: ['宠物店', '宠物医院']
            }
          ]
        },
        {
          id: 16,
          title: '酒吧 / 密室逃脱',
          class: 'icon-shield',
          subItem: [
            {
              title: '玩乐',
              items: ['KTV', '酒吧', '密室逃脱', '游乐游艺', '网吧网咖', '私人影院', 'DIY手工坊', '桌面游戏', '采摘/农家乐', '棋牌室', '轰趴馆', '真人CS', 'VR', '其他玩乐']
            }
          ]
        }
      ],
      show: {
        container: false,
        sub: false
      }
    }
  },
  methods: {
    MEnter (index) {
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/index/menu";
</style>
