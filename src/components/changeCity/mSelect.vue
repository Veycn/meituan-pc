<template>
  <div class="select" @click="show" v-document-click="documentClick">
    <span>{{ select == null ? value : select }}</span>
    <i class="el-icon-caret-bottom"></i>
    <div class="dialog" :style="{width: w + 'px'}" :class="{active: isActive}">
      <p>{{ title }}</p>
      <div class="province-wrapper clearfix">
        <div class="province-column" v-for="(items, index) in list" :key="index">
          <span v-for="(item, index) in items" :key="index" class="province-item" @click="choose(item)">{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mSelect',
  props: ['value', 'title', 'list', 'isActive'],
  data () {
    return {
      select: null
    }
  },
  methods: {
    show (e) {
      e.stopPropagation()
      this.$emit('change_active', true)
    },
    choose (item) {
      this.select = item
      this.$emit('item_select', item)
    },
    documentClick () {
      this.$emit('change_active', false)
    }
  },
  computed: {
    w () {
      return this.list.length * 88
    }
  }
}
</script>

<style scoped lang="scss">
.select {
  padding: 10px 0 10px 10px;
  vertical-align: middle;
  display: inline-block;
  width: 150px;
  height: 40px;
  position: relative;
  font-size: 14px;
  color: #666;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background: #fff;
  margin: 0 15px;
  i {
    float: right;
    margin-right: 10px;
  }
  .dialog {
    position: absolute;
    cursor: default;
    top: 45px;
    left: 0;
    height: 375px;
    padding: 20px 0 20px 15px;
    box-sizing: border-box;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    display: none;
    &.active {
      display: block;
    }
    p {
      font-size: 16px;
      color: #CCC;
      margin-bottom: 11px;
    }
    &:after {
      content: "";
      position: absolute;
      left: 26px;
      top: 0;
      border-left: 6px solid red;
      border-right: 6px solid red;
      border-top: 0;
      background: red;
    }
    .province-wrapper {
      .province-column {
        float: left;
        span {
          cursor: pointer;
          font-size: 12px;
          color: #666;
          display: table;
          box-sizing: border-box;
          min-width: 40px;
          height: 20px;
          padding: 1px 8px;
          margin: 6px 38px 6px 0;
          &:hover {
            color: #31bbac;
          }
        }
      }
    }
  }
}
</style>
