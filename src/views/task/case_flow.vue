<template>
  <div class="timeline_flow">
    <timeline>
      <timeline-item v-for="(i, index) in flow_list.data" :key="index">
        <h4 :class="[index === 0 ? 'recent' : '']">{{i.state}}</h4>
        <div class="approval">
          <div class="avatar"><a>{{i.person.substr(0,1)}}</a></div>
          <div class="approval_info">
            <flexbox>
              <flexbox-item :span="1/3"><a class="approval_person">{{i.person}}</a><x-button mini class="aproval_status" disabled>处理中</x-button></flexbox-item>
              <flexbox-item style="text-align: right;"><a class="approval_date">{{i.date}}</a></flexbox-item>
            </flexbox>
            <a class="approval_comment">{{i.comment}}</a>
          </div>
        </div>
      </timeline-item>
    </timeline>
  </div>
</template>

<script>
import { Timeline, TimelineItem, Flexbox, FlexboxItem, XButton, Divider } from 'vux'

export default {
  components: {
    Timeline,
    TimelineItem,
    Flexbox,
    FlexboxItem,
    XButton,
    Divider
  },
  methods: {
  },
  data () {
    return {
      count: 5,
      flow_list: {
        count: 5,
        data: [
          {
            state: '已通过',
            person: '王凯文',
            date: '2020-02-04',
            comment: '同意，可以发起OA签报。'
          },
          {
            state: '已初审',
            person: '李四',
            date: '2020-02-03',
            comment: '初审通过，合同条款符合法律规定。'
          },
          {
            state: '已提交',
            person: '张三',
            date: '2020-02-02',
            comment: ''
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
.timeline_flow {
	p {
		color: #888;
		font-size: 0.8rem;
	}
	h4 {
		color: #666;
		font-weight: normal;
	}
	.recent {
		color: #007AFF;
	}
}
.approval {
  padding: 5px;
  border-radius: 5px;
  background-color: #F9F9F9;
}
.avatar {
  height: 28px;
  width: 28px;
  background-color: #4F77AA;
  opacity: 75%;
  border-radius: 50%;
  text-align: center;
  float: left;
}
.avatar a {
  line-height:28px;
  font-size: 16px;
  color: #fff;
}
.approval_info {
  padding-left: 35px;
}
.approval_person {
  font-size: 15px;
  font-weight: bold;
}
.approval_date {
  margin-right: 3px;
  font-size: 12px;
  font-weight: lighter;
}
.approval_comment {
  font-size: 13px;
}
.aproval_status {
  font-size: 2px;
  margin-left:3px;
}
</style>
