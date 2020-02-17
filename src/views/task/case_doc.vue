<template>
  <div>
    <div class="info_container">
      <divider><a>主合同</a></divider>
      <div>
          <x-table :cell-bordered="true" :content-bordered="true" style="background-color:#fff;">
            <thead>
              <tr>
                <th class="th_lable" style="width: 50%">文件</th>
                <th class="th_lable" style="width: 25%">上传人</th>
                <th class="th_lable" style="width: 25%">上传时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in baseInfo" v-bind:key="index">
                <td class="th_v_value"><a href="baidu.com">{{item.file}}</a></td>
                <td class="th_v_value">{{item.person}}</td>
                <td class="th_v_value">{{item.date}}</td>
              </tr>
            </tbody>
          </x-table>
      </div>
      <divider><a>审批附件</a></divider>
      <div>
          <x-table :cell-bordered="true" :content-bordered="true" style="background-color:#fff;">
            <thead>
              <tr>
                <th class="th_lable" style="width: 50%">文件</th>
                <th class="th_lable" style="width: 25%">上传人</th>
                <th class="th_lable" style="width: 25%">上传时间</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in base2Info" v-bind:key="index">
                <td class="th_v_value"><a href="http://baidu.com">{{item.file}}</a></td>
                <td class="th_v_value">{{item.person}}</td>
                <td class="th_v_value">{{item.date}}</td>
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
        file: '主合同1.docx',
        person: '王凯文',
        date: '2020-02-02'
      }, {
        file: '主合同2.docx',
        person: '王凯文',
        date: '2020-02-02'
      }, {
        file: '主合同3.docx',
        person: '王凯文',
        date: '2020-02-02'
      }],
      base2Info: [{
        file: '附件1.docx',
        person: '王凯文',
        date: '2020-02-02'
      }, {
        file: '附件2.docx',
        person: '王凯文',
        date: '2020-02-02'
      }, {
        file: '附件3.docx',
        person: '王凯文',
        date: '2020-02-02'
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
td a {
  font-size: 14px;
  color: #007AFF;
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
