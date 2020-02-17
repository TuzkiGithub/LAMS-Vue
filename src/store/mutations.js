import * as types from './mutation-types.js'
import VueRouter from '../router/index.js'

export default {
  [types.GOTO] (state, {userId}) {
    console.log('GOTO,userId=' + userId)
    VueRouter.push({
      name: 'list', params: {userId: userId, title: state.title}
      // 如果需要传参，则不能使用path，需要使用name
    })
  },
  [types.UPDATE_LOADING] (state, status) {
    state.isLoading = status
  },
  [types.UPDATE_DIRECTION] (state, direction) {
    state.direction = direction
  },
  [types.UPDATE_TABBAR_INDEX] (state, {tabbarIndex}) {
    console.log('UPDATE_TABBAR_INDEX,tabbarIndex=' + tabbarIndex)
    // 改变值
    state.tabbarIndex = tabbarIndex
    if (tabbarIndex === 0) {
      VueRouter.push({
        path: '/'
      })
    }
    if (tabbarIndex === 1) {
      VueRouter.push({
        path: '/inquire'
      })
    }
    if (tabbarIndex === 2) {
      VueRouter.push({
        path: '/statistics'
      })
    }
    if (tabbarIndex === 3) {
      VueRouter.push({
        path: '/mine'
      })
    }
  }
  //
  // [types.GO_PERSONAL_PAGES](state, {userId}) {
  //   VueRouter.push({ name: 'personal', params: { userId: userId }})
  // },
  //
  // [types.TOGGLE_FOLLOW_PERSON](state) {
  //   // 正常的逻辑应该是将是否关注提交到数据库，更改数据库的字段并返回前端，现在是mock环境，只能在state中加了一个临时变量
  //   if (state.isfollow) {
  //     state.followcount --
  //   } else {
  //       state.followcount ++
  //   }
  //   state.isfollow = !state.isfollow
  // },
  //
  // [types.TOGGLE_SLIDE_BAR](state) {
  //   state.isSlideBarShow = !state.isSlideBarShow
  // },
  //
  // [types.TOGGLE_HEADER](state) {
  //   state.isDetailHeader = !state.isDetailHeader
  // },
  //
  // [types.ADD_DETAIL_HEADER_NICKNAME](state,{nickname}) {
  //   state.detailHeaderNickName = nickname
  // },
  //
  // [types.DELEATE_DETAIL_HEADER_NICKNAME](state) {
  //   state.detailHeaderNickName = ''
  // },
  //
  // [types.TOGGLE_PLAYER_STATUS](state,{currentPlayerUrl}) {
  //   if (!state.isAudioPlay) {
  //     state.currentPlayerUrl = currentPlayerUrl
  //     state.isAudioPlay = true
  //   } else {
  //     state.currentPlayerUrl = currentPlayerUrl
  //   }
  // },
  //
  // [types.GO_DETAIL_PAGES](state, {id}) {
  //   VueRouter.push({ name: 'detail', params: { id: id }})
  // },
  //
  // [types.TOGGLE_LOVE](state) {
  //   // 正常的逻辑应该是将是否关注提交到数据库，更改数据库的字段并返回前端，现在是mock环境，只能在state中加了一个临时变量
  //   if (state.isLove) {
  //     state.lovecount --
  //   } else {
  //       state.lovecount ++
  //   }
  //   state.isLove = !state.isLove
  // },

}
