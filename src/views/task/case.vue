<template>
  <div>
    <div class="tab_container">
      <div class="case_summary">
        <h3>合同审批:《采购合同》</h3>
        <a style="text-align: right">2020-02-02</a>
        <div class="vLine"></div>
        <a style="text-align: left">王凯文</a>
      </div>
      <sticky
          scroll-box="vux_view_box_body"
          :offset="46"
          :check-sticky-support="false"
          :disabled="disabled">
        <div class="tab_header">
          <tab v-model="index" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>申请信息</tab-item>
            <tab-item>相关文档</tab-item>
            <tab-item>审核进度</tab-item>
          </tab>
        </div>
      </sticky>
      <div class="tab_content">
        <component v-bind:is="tabView"></component>
      </div>
    </div>
    <div>
      <div v-transfer-dom>
        <popup v-model="show_y_comment" position="bottom" max-height="50%">
          <group>
            <x-textarea :max="500" placeholder='请输入审核意见' @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
          </group>
          <div style="padding: 15px;">
            <flexbox>
              <flexbox-item>
                <x-button @click.native="show_y_comment = false" plain type="primary">确认</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button @click.native="show_y_comment = false" plain type="warn">取消</x-button>
              </flexbox-item>
            </flexbox>
          </div>
        </popup>
        <popup v-model="show_n_comment" position="bottom" max-height="50%">
          <group>
            <x-textarea :max="500" placeholder='请输入审核意见' @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
          </group>
          <div style="padding: 15px;">
            <flexbox>
              <flexbox-item>
                <x-button @click.native="show_n_comment = false" plain type="primary">确认</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button @click.native="show_n_comment = false" plain type="warn">取消</x-button>
              </flexbox-item>
            </flexbox>
          </div>
        </popup>
        <popup v-model="show_z_comment" position="bottom" max-height="50%">
          <group>
            <cell title="转派人" :value="zperson" @click.native="onClick"></cell>
            <!-- <radio :options="radio001" @on-change="change"></radio> -->
            <x-textarea :max="500" placeholder='请输入转派意见' @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
          </group>
          <div style="padding: 15px;">
            <flexbox>
              <flexbox-item>
                <x-button @click.native="show_z_comment = false" plain type="primary">确认</x-button>
              </flexbox-item>
              <flexbox-item>
                <x-button @click.native="show_z_comment = false" plain type="warn">取消</x-button>
              </flexbox-item>
            </flexbox>
          </div>
        </popup>
        <popup v-model="show_z_popup" position="right" width="100%">
          <div class="position-horizontal-demo">
                <div style="height:78px;">
                  <sticky
                    scroll-box="vux_view_box_body"
                    :offset="46"
                    :check-sticky-support="false"
                    :disabled="disabled">
                    <div>
                      <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel" placeholder="姓名/工号"></search>
                      <tab v-model="index" prevent-default @on-before-index-change="switchZpersonTabItem">
                        <tab-item selected>本部门</tab-item>
                        <tab-item>所有部门</tab-item>
                      </tab>
                    </div>
                  </sticky>
                </div>
            <radio :options="z_person_radio" @on-change="changeOption" v-model="z_person_radioValue" style="background-color:#fff"></radio>
            <div class="zperson_flexbox">
              <flexbox>
                <flexbox-item>
                  <x-button @click.native="show_z_popup = false" plain type="primary">确认</x-button>
                </flexbox-item>
                <flexbox-item>
                  <x-button @click.native=zpersonCancel plain type="warn">取消</x-button>
                </flexbox-item>
              </flexbox>
            </div>
            <!-- <span class="vux-close" @click="show_z_popup = false"></span> -->
          </div>
       </popup>
      </div>
    </div>
    <div id="approval_card" style="width: 100%">
      <card>
        <div slot="content" class="card-demo-flex card-demo-content01">
          <div class="vux-1px-r">
            <span @click="goYpopup" style="color: green">同意</span>
          </div>
          <div class="vux-1px-r">
            <span @click="goZpopup" style="color: black">转派</span>
          </div>
          <div class="vux-1px-r">
            <span @click="goNpopup">退回</span>
            <br/>
          </div>
        </div>
      </card>
    </div>
    <!-- <div id="approval_box" style="width: 100%">
      <flexbox>
        <flexbox-item>
          <x-button plain type="primary" class="approval_button">同意</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="default" class="approval_button">转派</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="warn" class="approval_button">驳回</x-button>
        </flexbox-item>
      </flexbox>
    </div> -->
  </div>
</template>

<script>
import { Cell, Card, Tab, TabItem, XButton, Box, GroupTitle, Group, Radio, Flexbox, FlexboxItem, Panel, Sticky, TransferDom, Popup, XTextarea, Search, Divider } from 'vux'
import Tab0 from './case_info'
import Tab1 from './case_doc'
import Tab2 from './case_flow'

export default {
  directives: {
    TransferDom
  },
  components: {
    Cell,
    Card,
    Tab,
    TabItem,
    XButton,
    Box,
    GroupTitle,
    Group,
    Radio,
    Flexbox,
    FlexboxItem,
    Panel,
    Sticky,
    TransferDom,
    Popup,
    XTextarea,
    Search,
    Divider,
    Tab0,
    Tab1,
    Tab2
  },
  methods: {
    switchTabItem (index) {
      console.log('on-before-index-change', index)
      this.tabView = 'Tab' + index
      this.$vux.loading.show({
        text: '加载中'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index = index
      }, 300)
    },
    onItemClick (index) {
      console.log('on item click:', index)
      if (index === '2') this.tabView = 'TabFlow'
    },
    onImgError (item, $event) {
      console.log(item, $event)
    },
    goYpopup () {
      this.show_y_comment = true
    },
    goNpopup () {
      this.show_n_comment = true
    },
    goZpopup () {
      this.show_z_comment = true
    },
    onEvent (event) {
      console.log('on', event)
    },
    changeOption (value, label) {
      console.log('change:', value, label)
      this.zperson = value
    },
    onClick () {
      console.log('on click')
      this.show_z_popup = true
    },
    zpersonCancel () {
      this.show_z_popup = false
      this.z_person_radioValue = ''
      this.zperson = '请选择'
    },
    onSubmit (val) {
      window.alert('on submit' + val)
    },
    onCancel () {
      console.log('on cancel')
    },
    onFocus () {
      console.log('on focus')
    },
    switchZpersonTabItem (index) {
      console.log('on-before-index-change', index)
      this.$vux.loading.show({
        text: '加载中'
      })
      setTimeout(() => {
        this.$vux.loading.hide()
        this.index = index
      }, 300)
    },
    onZpersonItemClick (index) {
      console.log('on item click:', index)
    }
  },
  data () {
    return {
      index: 0,
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      tabView: Tab0,
      type: '4',
      list: [{
        title: '合同审批:《采购合同》',
        meta: {
          source: '2020-02-22',
          other: '王凯文'
        }
      }],
      zperson: '请选择',
      z_person_radio: [ '张三-18002931', '李四-18002935', '王五-18002985' ],
      z_person_radioValue: '',
      show_y_comment: false,
      show_n_comment: false,
      show_z_comment: false,
      show_z_popup: false,
      autoFixed: false
    }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/close.less';

.case_summary {
  padding: 5px 10px;
  background-color: #fff;
}
.case_summary a {
  font-size: 12px;
}
.vLine {
    border-left: solid 2px #ccc;
    height: 12px;
    vertical-align: middle;
    display: inline-block;
}
.tab_header {
  border-top:1px solid #EFEFF4;
}
#approval_box {
  position: fixed;
  bottom: 0;
  padding-top: 5px;
  padding-bottom: 56px;
  background-color: #F7F7FA
}
.approval_button {
  font-size: 15px;
}
#approval_card {
  position: fixed;
  bottom: 0;
  padding-top: 1px;
  padding-bottom: 52px;
  background-color: #F7F7FA;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
  background-color: #F7F7FA
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
  font-size: 16px;
  font-weight: lighter;
}
.demo3-slot {
  text-align: center;
  padding: 8px 0;
  color: #888;
}
.position-horizontal-demo {
  position: relative;
  height: 100%;
  .vux-close {
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%) scale(4);
    color: #000;
  }
}
.zperson_flexbox{
  position: fixed;
  bottom: 0;
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
}
</style>
