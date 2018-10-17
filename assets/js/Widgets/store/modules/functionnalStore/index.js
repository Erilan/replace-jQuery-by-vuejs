import * as types from './types'
import actions from './actions'

const state = {
  data: null
}

const mutations = {
  [types.SET_DATA] (state, data) {
    state.DATA = data
  }
}

export default {
  state,
  mutations,
  actions
}