<template>
  <div>
    <span>按省份选择</span>
    <m-select :list="provinceList" :title="province"
              :value="value" @change_active="changeProvinceActive"
              :isActive="provinceActive"
              @item_select="getSelectedProvince"
    />
    <m-select :list="cities" :title="city"
              :value="city" @change_active="changeCityActive"
              :isActive="cityActive"
    />
    <span>直接搜索</span>
    <el-select
    v-model="searchWord"
    filterable
    remote
    reserve-keyword
    placeholder="请输入关键词"
    :remote-method="remoteMethod"
    >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  </div>
</template>

<script>
import MSelect from './mSelect'
export default {
  name: 'province',
  data () {
    return {
      province: '省份',
      city: '城市',
      value: '省份',
      provinceList: [
        ['山东', '甘肃', '江苏', '北京', '云南', '海南', '浙江', '上海', '天津', '陕西', '新疆', '贵州'],
        ['安徽', '澳门', '湖南', '河北', '香港', '辽宁', '四川', '宁夏', '吉林', '福建', '湖北', '广东'],
        ['重庆', '山西', '江西', '黑龙江', '青海', '河南', '台湾', '内蒙古', '西藏', '广西']
      ],
      cities: [
        [ '青岛', '淄博', '济南', '烟台', '枣庄', '东营', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜' ],
        [ '临沂', '德州', '聊城', '滨州', '菏泽', '兖州', '章丘区', '龙口', '寿光', '青州', '荣成', '文登' ],
        [ '乳山', '邹平', '新泰', '诸城', '昌邑', '莱州', '临清', '广饶', '肥城', '滕州', '莱阳', '海阳' ],
        [ '平度', '胶州', '招远', '蓬莱', '安丘', '高密', '禹城', '乐陵', '莱西', '即墨', '齐河', '夏津' ],
        [ '昌乐', '东平', '临朐', '平原', '宁阳', '宁津', '单县', '邹城', '牟平', '博兴', '茌平', '阳谷' ],
        [ '垦利', '河口', '巨野', '曹县', '郓城', '梁山', '微山', '汶上', '嘉祥', '金乡', '利津', '武城' ],
        [ '临邑', '石岛', '栖霞', '费县', '薛城', '兰陵', '沂水', '莒南', '郯城', '沂南', '蒙阴', '平邑' ],
        [ '临沭', '博山', '庆云', '商河', '泗水', '鄄城县', '平阴县', '长清区', '鱼台县', '成武县', '东明县', '定陶区' ] ],
      provinceActive: false,
      cityActive: false,
      selectedP: null,
      searchWord: '',
      options: [
        {
          label: '北京',
          value: '1'
        },
        {
          label: '上海',
          value: '2'
        },
        {
          label: '广州',
          value: '3'
        },
        {
          label: '深圳',
          value: '4'
        },
        {
          label: '成都',
          value: '5'
        }
      ]
    }
  },
  methods: {
    changeProvinceActive (flag) {
      this.provinceActive = flag
      if (flag) {
        this.cityActive = false
      }
    },
    changeCityActive (flag) {
      this.cityActive = flag
      if (flag) {
        this.provinceActive = false
      }
    },
    getSelectedProvince (item) {
      this.selectedP = item
      // 发送请求去获取对应省份的城市/区县
      // axios.get('/getCity?city=' + item)
    },
    remoteMethod (e) {
      console.log(e)
    }
  },
  components: {
    MSelect
  }
}
</script>

<style scoped>
</style>
