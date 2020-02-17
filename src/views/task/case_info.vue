<template>
  <div>
    <div class="info_container">
      <divider><a>基本信息</a></divider>
      <div>
          <x-table :cell-bordered="true" :content-bordered="true" style="background-color:#fff;">
            <tbody>
              <tr v-for="(item, index) in baseInfo" v-bind:key="index">
                <td class="th_lable">{{item.label}}</td>
                <td class="th_value">{{item.value}}</td>
              </tr>
            </tbody>
          </x-table>
      </div>
    </div>
    <div class="info_container">
      <divider><a>付款信息</a></divider>
      <div>
          <x-table :cell-bordered="true" :content-bordered="true" style="background-color:#fff;">
            <thead>
              <tr>
                <th class="th_lable">起始日期</th>
                <th class="th_lable">起止日期</th>
                <th class="th_lable">付款金额</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in baseInfo" v-bind:key="index">
                <td class="th_v_value">{{item.label}}</td>
                <td class="th_v_value">{{item.value}}</td>
                <td class="th_v_value">{{item.value}}</td>
              </tr>
            </tbody>
          </x-table>
      </div>
    </div>
    <divider style="padding-bottom: 57px">到底了</divider>
  </div>
</template>

<script>
import { XTable, LoadMore, Divider, Panel } from 'vux'

export default {
  components: {
    XTable,
    LoadMore,
    Divider,
    Panel
  },
  methods: {
  },
  data () {
    return {
      baseInfo: [{
        label: '金额',
        value: '20000.00元'
      }, {
        label: '类型',
        value: '金融合同'
      }, {
        label: '币种',
        value: '人民币'
      }, {
        label: '类型',
        value: '金融合同'
      }, {
        label: '备注',
        value: '无'
      }]
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
.th_lable {
  width: 20%;
  color: #888;
  font-size: 14px;
}
.th_value {
  padding: 10px 5px 10px 5px;
  text-align: initial;
  font-size: 13px;
  line-height:20px;
}
.th_v_value {
  padding: 10px 5px 10px 5px;
  text-align: center;
  font-size: 13px;
  line-height:20px;
}
.info_container {
  text-align: center;
}
</style>
