<template>
  <div class="headerLink">
    <router-link to="/" v-for="(item, index) in links" :key="index">{{ item.title }}</router-link>
  </div>
</template>

<script>
export default {
  name: 'headerLink',
  data () {
    return {
      links: [
        {
          id: 1,
          title: '美团外卖',
          class: 'link-color-1'
        },
        {
          id: 2,
          title: '猫眼电影',
          class: 'link-color-2'
        },
        {
          id: 3,
          title: '美团酒店',
          class: 'link-color-3'
        },
        {
          id: 4,
          title: '民宿／公寓',
          class: 'link-color-4'
        },
        {
          id: 5,
          title: '商家入驻',
          class: 'link-color-5'
        },
        {
          id: 6,
          title: '美团公益',
          class: 'link-color-6',
          a: ['', '#Ed1e24', '', '', '', '#f04d4e']
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/css/index/headerLink";
</style>
