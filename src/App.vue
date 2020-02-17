<template>
  <div style="height:100%;">
    <div v-transfer-dom>
      <loading v-model="isLoading"></loading>
    </div>
    <!-- main content -->
    <view-box ref="viewBox" :body-padding-top="isShowNav ? '46px' : '0'" body-padding-bottom="55px">
      <x-header
        v-if="isShowNav"
        slot="header"
        style="width:100%;position:absolute;left:0;top:0;z-index:100;"
        :left-options="leftOptions"
        :right-options="rightOptions"
        :title="title"
        :transition="headerTransition"></x-header>
        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
        </transition>
      <tabbar v-model="tabbarIndex" style="position: fixed">
        <tabbar-item selected @on-item-click="goTabPage(0)">
          <img slot="icon" src="./assets/icon/icon_task.png">
          <img slot="icon-active" src="./assets/icon/icon_task_active.png">
          <span slot="label">审批</span>
        </tabbar-item>
        <tabbar-item @on-item-click="goTabPage(1)">
          <img slot="icon" src="./assets/icon/icon_search.png">
          <img slot="icon-active" src="./assets/icon/icon_search_active.png">
          <span slot="label">查询</span>
        </tabbar-item>
        <tabbar-item @on-item-click="goTabPage(2)">
          <img slot="icon" src="./assets/icon/icon_statistics.png">
          <img slot="icon-active" src="./assets/icon/icon_statistics_active.png">
          <span slot="label">统计</span>
        </tabbar-item>
        <tabbar-item @on-item-click="goTabPage(3)">
          <img slot="icon" src="./assets/icon/icon_mine.png">
          <img slot="icon-active" src="./assets/icon/icon_mine_active.png">
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, Tabbar, TabbarItem, Group, Cell, XHeader, Loading, TransferDom } from 'vux'
import { mapState, mapActions } from 'vuex'

export default {
  directives: {
    TransferDom
  },
  components: {
    ViewBox,
    Tabbar,
    TabbarItem,
    Group,
    Cell,
    XHeader,
    Loading,
    TransferDom
  },
  data () {
    return {
      entryUrl: document.location.href,
      tabbarIndex: this.$store.state.tabbarIndex
    }
  },
  methods: {
    goTabPage (tabbarIndex) {
      this.$store.dispatch('updateTabbarIndex', {tabbarIndex: tabbarIndex})
    },
    ...mapActions([
      'updateDemoPosition'
    ])
  },
  computed: {
    ...mapState({
      isLoading: state => state.isLoading,
      direction: state => state.direction
    }),
    isShowNav () {
      if (this.entryUrl.indexOf('hide-nav') > -1) {
        return false
      }
      return true
    },
    leftOptions () {
      return {
        showBack: this.$route.path !== ('/' || '/task')
      }
    },
    rightOptions () {
      return {
        showMore: false
      }
    },
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    componentName () {
      if (this.$route.path) {
        const parts = this.$route.path.split('/')
        console.log(parts)
        return parts[2]
        // if (/component/.test(this.$route.path) && parts[2]) return parts[2]
      }
    },
    title () {
      if (this.$route.path === '/') return '工作台'
      if (this.$route.path === '/task') return '工作台'
      if (this.$route.path === '/inquire') return '合同台账'
      if (this.$route.path === '/statistics') return '数据中心'
      if (this.$route.path === '/mine') return '个人中心'
      return this.componentName ? `${this.componentName}` : 'Other'
    },
    viewTransition () {
      if (!this.direction) return ''
      return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #EFEFF4;
}
html, body {
  height: 100%; //固定header和tab设置父级div为100%
  width: 100%;
  overflow-x: hidden;
}
</style>
