import * as types from './mutation-types.js'

export const goTo = ({commit}, user) => {
  setInterval(() => {
    commit(types.GOTO, {
      userId: user.userId
    })
  }, 2000)
}

// 更新全局tabbar索引
export const updateTabbarIndex = ({commit}, param) => {
  commit(types.UPDATE_TABBAR_INDEX, {
    tabbarIndex: param.tabbarIndex
  })
}
