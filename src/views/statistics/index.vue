<template>
  <div style="height:100%;">
    <div style="height:45px;">
      <sticky
        scroll-box="vux_view_box_body"
        :offset="46"
        :check-sticky-support="false"
        :disabled="disabled">
        <div>
          <tab v-model="index" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>合同</tab-item>
            <tab-item>商标</tab-item>
            <tab-item>案件</tab-item>
          </tab>
        </div>
      </sticky>
    </div>
    <div class="vChart_container">
      <div class="cnt_all">
        <divider><a>总览</a></divider>
        <v-chart
          :data="alldata"
          :padding="[20, 'auto']">
          <v-tooltip disabled />
          <v-scale y :options="yOptions" />
          <v-pie :radius="0.85" :inner-radius="0.7" series-field="name" :colors="['#FE5D4D','#FCDC00','#68CCCA','#3BA4FF','#737DDE']" />
          <v-legend :options="legendOptions" />
          <v-guide type="html" :options="htmlOptions" />
        </v-chart>
      </div>
      <div class="cnt_line">
        <divider><a>申请趋势</a></divider>
        <v-chart :data="linedata">
          <v-line series-field="type" />
        </v-chart>
      </div>
    </div>
    <divider style="padding-bottom: 57px">到底了</divider>
  </div>
</template>

<script>
import { Tab, TabItem, Divider, Sticky, VChart, VLine, VArea, VAxis, VTooltip, VLegend, VBar, VPie, VGuide, VScale } from 'vux'

import linedata from './line_color.json'

const alldata = [
  { name: '日常经营合同', percent: 63.59, a: '1' },
  { name: '战略合作协议', percent: 2.17, a: '1' },
  { name: '保密协议', percent: 4.18, a: '1' },
  { name: '投融资合同', percent: 24.24, a: '1' },
  { name: '其它', percent: 14.24, a: '1' }
]

const map = {}
alldata.map(obj => {
  map[obj.name] = obj.percent + '%'
})

export default {
  components: {
    Tab,
    TabItem,
    Divider,
    Sticky,
    VChart,
    VLine,
    VArea,
    VAxis,
    VTooltip,
    VLegend,
    VBar,
    VPie,
    VGuide,
    VScale
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: '加载中'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index = index
      }, 300)
    }
  },
  data () {
    return {
      index: 0,
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      map,
      htmlOptions: {
        position: [ '50%', '45%' ],
        html: `
          <div style="width: 250px;height: 40px;text-align: center;">
            <div style="font-size: 16px">合同总额</div>
            <div style="font-size: 24px">133.08 亿</div>
          </div>`
      },
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      alldata,
      linedata
    }
  }
}
</script>

<style scoped>
a {
  padding: 10px 15px;
  font-size: 14px;
  color: #007AFF;
  font-weight: lighter;
}
p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
</style>
