// vuex配置

import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions.js'
import mutations from './mutations.js'
import state from './state.js'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  actions,
  mutations,
  strict: debug
})
