<template>
  <div style="height:100%;">
    <div class="head_box">
      <div class="headimg"><img src="../../assets/logo.png"></div>
      <h3 style="text-align: center;margin-top: 3px;">王凯文</h3>
      <p style="text-align: center;margin-top: -5px;">光大科技 | 产品研发部</p>
    </div>
    <card :header="{title: '数据中心'}" style="margin-top: -2px;">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-r">
          <span>11</span>
          <br/>
          待办
        </div>
        <div class="vux-1px-r">
          <span>150</span>
          <br/>
          合同
        </div>
        <div class="vux-1px-r">
          <span>340</span>
          <br/>
          商标
        </div>
        <div>
          <span>8</span>
          <br/>
          案件
        </div>
      </div>
    </card>
    <group style="margin-top: -15px;">
      <cell is-link>
        <span slot="title" style="color:green;"><span style="vertical-align:middle;">{{ $t('我的消息') }}</span> <badge text="8"></badge></span>
      </cell>
      <cell :title="$t('个人资料')" is-link></cell>
      <cell :title="$t('常见问题')" is-link></cell>
      <cell :title="$t('意见反馈')" is-link></cell>
      <!-- <cell :title="$t('General')" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
      </cell> -->
    </group>
    <group style="margin-top: -16px;">
      <cell :title="$t('关于')" is-link></cell>
    </group>
    <box gap="10px 10px">
      <x-button plain type="warn">退出</x-button>
    </box>
  </div>
</template>

<script>
import { Badge, Box, Card, Cell, Tab, TabItem, Divider, Group, Sticky, XButton } from 'vux'

export default {
  components: {
    Badge,
    Box,
    Card,
    Cell,
    Tab,
    TabItem,
    Divider,
    Group,
    Sticky,
    XButton
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="less">
@import '~vux/src/styles/1px.less';

p {
  padding: 10px 15px;
  font-size: 14px;
  color: #888;
}
body {
  text-align: center;
}
.headimg {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;
  margin-top: 10px;
}
.headimg img {
  width: 100%;
  height: 100%;
}
.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
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
}
</style>