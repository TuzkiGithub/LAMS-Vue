import Vue from 'vue'
import Vuex from 'vuex'
import vuexI18n from 'vuex-i18n'
import FastClick from 'fastclick'
import VueRouter from './router/index.js'
import App from './App'
import Store from './store/index.js'

import { Group, Cell, DatetimePlugin, ConfigPlugin, BusPlugin, DevicePlugin, ToastPlugin, AlertPlugin, ConfirmPlugin, LoadingPlugin, WechatPlugin, AjaxPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(Vuex)

require('es6-promise').polyfill()

/** i18n **/
let store = new Vuex.Store({
  modules: {
    i18n: vuexI18n.store
  }
})

Vue.use(vuexI18n.plugin, store)

if (/no-background-color=true/.test(location.href)) {
  document.body.style['background-color'] = '#fff'
}

// no transitoin in demo site
const shouldUseTransition = !/transition=none/.test(location.href)

Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.use(LoadingPlugin)

store.registerModule('vux', {
  state: {
    demoScrollTop: 0,
    isLoading: false,
    direction: shouldUseTransition ? 'forward' : ''
  },
  mutations: {
    updateDemoPosition (state, payload) {
      state.demoScrollTop = payload.top
    },
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    },
    updateDirection (state, payload) {
      if (!shouldUseTransition) {
        return
      }
      state.direction = payload.direction
    }
  },
  actions: {
    updateDemoPosition ({commit}, top) {
      commit({type: 'updateDemoPosition', top: top})
    }
  }
})

// global VUX config
Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX' // global config for VUX, since v2.5.12
})

// plugins
Vue.use(DevicePlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(BusPlugin)
Vue.use(DatetimePlugin)
FastClick.attach(document.body)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store: Store,
  router: VueRouter,
  render: h => h(App)
}).$mount('#app')
