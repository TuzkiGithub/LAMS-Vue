<template>
  <div style="height:100%;">
    <div style="height:33px;">
      <sticky
        scroll-box="vux_view_box_body"
        :offset="46"
        :check-sticky-support="false"
        :disabled="disabled">
        <div>
          <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel" placeholder="名称/编号"></search>
          <!-- <tab v-model="index" prevent-default @on-before-index-change="switchTabItem">
            <tab-item selected>待处理</tab-item>
            <tab-item>已处理</tab-item>
          </tab> -->
        </div>
      </sticky>
    </div>
    <panel :list="list" :type="type" @on-img-error="onImgError"></panel>
    <divider style="padding-bottom: 57px">到底了</divider>
  </div>
</template>

<script>
import { Search, Tab, TabItem, Divider, Panel, Sticky } from 'vux'

export default {
  components: {
    Search,
    Tab,
    TabItem,
    Divider,
    Panel,
    Sticky
  },
  methods: {
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
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
    switchTabItem (index) {
      console.log('on-before-index-change', index)
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
    },
    onImgError (item, $event) {
      console.log(item, $event)
    }
  },
  data () {
    return {
      index: 0,
      results: [],
      autoFixed: false,
      value: '',
      disabled: typeof navigator !== 'undefined' && /iphone/i.test(navigator.userAgent) && /ucbrowser/i.test(navigator.userAgent),
      type: '5',
      list: [{
        src: './src/assets/icon/icon_cnt.png',
        title: '采购合同',
        desc: '采购合同内容。采购合同内容。采购合同内容。采购合同内容。采购合同内容。',
        url: '/task/' + '202002120001',
        meta: {
          source: '2020-02-22',
          date: '风险法律部',
          other: '王凯文'
        }
      },
      {
        src: './src/assets/icon/icon_cnt.png',
        title: '战略协议',
        desc: '战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。',
        url: {
          path: '/task/' + '202002120002',
          replace: false
        },
        meta: {
          source: '2020-02-11',
          date: '产品研发部',
          other: '王凯文'
        }
      },
      {
        src: './src/assets/icon/icon_cnt.png',
        title: '框架协议',
        desc: '战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。',
        url: {
          path: '/task/' + '202002120002',
          replace: false
        },
        meta: {
          source: '2020-02-11',
          date: '产品研发部',
          other: '王凯文'
        }
      },
      {
        src: './src/assets/icon/icon_cnt.png',
        title: '采购合同',
        desc: '战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。',
        url: {
          path: '/task/' + '202002120002',
          replace: false
        },
        meta: {
          source: '2020-02-11',
          date: '产品研发部',
          other: '王凯文'
        }
      },
      {
        src: './src/assets/icon/icon_cnt.png',
        title: '战略合作协议',
        desc: '战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。',
        url: {
          path: '/task/' + '202002120002',
          replace: false
        },
        meta: {
          source: '2020-02-11',
          date: '产品研发部',
          other: '王凯文'
        }
      },
      {
        src: './src/assets/icon/icon_cnt.png',
        title: '知识产权协议',
        desc: '战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。战略协议内容。',
        url: {
          path: '/task/' + '202002120002',
          replace: false
        },
        meta: {
          source: '2020-02-11',
          date: '产品研发部',
          other: '王凯文'
        }
      }],
      footer: {
        title: 'more',
        url: 'http://vux.li'
      }
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 8; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style scoped>
p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
</style>
