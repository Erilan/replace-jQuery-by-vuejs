import Vue from 'vue'
import Vuex from 'vuex'

import functionnalStore from './modules/functionnalStore'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    functionnalStore
  },
  strict: debug
})