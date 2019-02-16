<template>
  <div class="navigation">
    <div class="title">美团导航</div>
    <dl>
      <div v-for="(items) in navList" :key="items.id" class="classification">
        <dt class="subtitle">{{ items.title }}</dt>
        <div>
          <dd v-for="(item, index) in items.cities" :key="index" class="list-item">
            <router-link to="/">{{ item }}</router-link>
          </dd>
        </div>
      </div>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data () {
    return {
      navList: [
        {
          id: 1,
          title: '热门城市',
          cities: ['武汉', '苏州', '宁波', '郑州', '南京', '北京', '重庆', '无锡', '厦门', '南宁', '大连', '青岛', '杭州', '天津', '成都', '深圳', '东莞', '常州', '长沙', '长春']
        },
        {
          id: 2,
          title: '热门分类',
          cities: ['酒店HOT', '美食', '休闲娱乐', '运动健身', '生活服务', '上门服务', '购物', '时尚购', '本地购物', '结婚', '摄影写真', '宴会', '丽人', '母婴亲子', '学习培训', '家装', '汽车服务', '医疗', '宠物']
        },
        {
          id: 3,
          title: '周边热门',
          cities: ['重庆酒店', '永川美食', '重庆休闲娱乐', '永川运动健身', '永川生活服务', '永川上门服务', '永川时尚购', '永川本地购物', '重庆结婚', '铜梁摄影写真', '铜梁宴会', '铜梁丽人', '铜梁母婴亲子', '铜梁学习培训', '重庆家装', '永川汽车服务', '永川医疗', '永川宠']
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.navigation {
  width: 1190px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  margin: 40px auto 0;
  .title {
    width: auto;
    height: 44px;
    font-size: 16px;
    font-weight: 500;
    color: #FFF;
    text-align: left;
    padding-left: 20px;
    line-height: 44px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin-bottom: 6px;
    background-color: #0ECAC7;
    background-image: linear-gradient(-90deg,#0ECAC7 0,#06C1AE 100%);
  }
  dl {
    width: 100%;
    height: auto;
    overflow: hidden;
    .classification {
      width: 100%;
      height: auto;
      overflow: hidden;
      .subtitle {
        width: 100px;
        height: 100%;
        float: left;
        font-size: 14px;
        font-weight: 500;
        color: #222;
        text-align: center;
        padding: 10px 0;
      }
      .list-item {
        width: 100px;
        height: 17px;
        font-size: 12px;
        text-align: left;
        margin-bottom: 13px;
        float: left;
        a {
          color: #666;
          &:hover {
            color: #31bbac;
          }
        }
      }
    }
  }
}
</style>
