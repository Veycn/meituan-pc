<template>
  <div id="footer">
    <div class="list-items clearfix">
      <div class="item-column" v-for="(items, index) in footer" :key="index">
        <dl class="module" v-for="(item, index) in items" :key="index">
          <dt class="items-title">{{item.title}}</dt>
          <dd v-for="(key) in item.items" :key="key.id" class="item">
            <router-link to="/">{{key.title}}</router-link>
          </dd>
        </dl>
      </div>
    </div>
    <div class="copyright clearfix">
      <div class="copyright-container">
        <div class="left">
          <p>©美团网团购 meituan.com<router-link to="/" style="margin-left: 20px;">京ICP证070791号</router-link><router-link to="/" >京ICP备10211739号</router-link></p>
          <p><router-link to="/" target="_blank">广播电视节目制作经营许可证（京）字第03889号</router-link></p>
          <p><router-link to="/" target="_blank">食品经营许可证</router-link><router-link to="/" target="_blank">互联网药品信息服务资格证</router-link></p>
          <p><router-link to="/" target="_blank">医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</router-link></p>
        </div>
        <div class="right">
          <router-link to="/" target="_blank">京公网安备11010502025545号</router-link>
          <br>
          <a class="sp-ft sp-ft--record" href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/sankuai" title="备案信息" target="_blank">备案信息</a>
          <a class="sp-ft sp-ft--knet" href="http://t.knet.cn/index_new.jsp" title="可信网站认证" target="_blank">可信网站</a>
          <a class="sp-ft sp-ft--12315" href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq" title="12315消费争议" target="_blank">12315消费争议</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      footer: [
        [
          {
            title: '用户帮助',
            items: [
              {
                id: 1,
                title: '申请退款'
              },
              {
                id: 2,
                title: '查看美团券密码'
              },
              {
                id: 3,
                title: '常见问题'
              },
              {
                id: 4,
                title: '用户协议'
              },
              {
                id: 5,
                title: '隐私政策'
              },
              {
                id: 6,
                title: '反诈骗公告'
              }
            ]
          },
          {
            title: '美团服务',
            items: [
              {
                id: 7,
                title: '美团外卖'
              },
              {
                id: 8,
                title: '美团酒店'
              },
              {
                id: 9,
                title: '猫眼电影'
              },
              {
                id: 10,
                title: '美团配送'
              },
              {
                id: 11,
                title: '美团云'
              },
              {
                id: 12,
                title: '大众点评'
              },
              {
                id: 13,
                title: '榛果民宿'
              },
              {
                id: 14,
                title: '无人配送'
              }
            ]
          }
        ],
        [
          {
            title: '商家合作',
            items: [
              {
                id: 15,
                title: '榛果民宿房东商家入驻'
              },
              {
                id: 16,
                title: '商家开票申请'
              },
              {
                id: 17,
                title: '美团点评智能收银机'
              },
              {
                id: 18,
                title: '聚宝盆餐饮开放平台'
              },
              {
                id: 19,
                title: '美团智能支付'
              },
              {
                id: 20,
                title: '免费使用美团排队'
              },
              {
                id: 21,
                title: '快驴进货商家合作'
              },
              {
                id: 22,
                title: '美团闪购商家入驻'
              },
              {
                id: 23,
                title: '综合商家入驻'
              },
              {
                id: 24,
                title: '境内度假商家入驻'
              },
              {
                id: 25,
                title: '美团点评餐饮学院'
              },
              {
                id: 26,
                title: '外卖配送加盟申请'
              },
              {
                id: 27,
                title: '美团收银官网'
              },
              {
                id: 28,
                title: '美团外卖开店申请'
              },
              {
                id: 29,
                title: '美食商家入驻(非外卖)'
              }
            ]
          }
        ],
        [
          {
            title: '代理商加盟',
            items: [
              {
                id: 30,
                title: '智能支付渠道加盟商招募'
              },
              {
                id: 31,
                title: '到店餐饮代理商招募'
              },
              {
                id: 32,
                title: '非餐饮代理商招募'
              },
              {
                id: 33,
                title: '美团联盟'
              },
              {
                id: 34,
                title: '美团收银招募线上分销商'
              },
              {
                id: 35,
                title: '美团点评5S服务商招募'
              }
            ]
          },
          {
            title: '行业规范',
            items: [
              {
                id: 36,
                title: '美团点评餐饮安全管理办法'
              }
            ]
          },
          {
            title: '廉正举报',
            items: [
              {
                id: 37,
                title: '廉政邮箱'
              }
            ]
          }
        ],
        [
          {
            title: '关注美团',
            items: [
              {
                id: 38,
                title: '美团新浪微博'
              }
            ]
          },
          {
            title: '公司信息',
            items: [
              {
                id: 39,
                title: '关于我们'
              },
              {
                id: 40,
                title: '投资者关系'
              },
              {
                id: 41,
                title: '加入我们'
              },
              {
                id: 42,
                title: '法律声明'
              },
              {
                id: 43,
                title: '价格说明'
              },
              {
                id: 44,
                title: '美团网平台点评规则'
              },
              {
                id: 45,
                title: '美团点评团购用户服务条款'
              },
              {
                id: 46,
                title: '商户诚信公约及管理办法'
              }
            ]
          }
        ],
        [
          {
            title: '消费者服务热线',
            items: [
              {
                id: 47,
                title: '外卖消费者：10109777'
              },
              {
                id: 48,
                title: '猫眼消费者：10105335'
              },
              {
                id: 49,
                title: '其他消费者：10107888'
              }
            ]
          }
        ]
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/footer/footer";
</style>
