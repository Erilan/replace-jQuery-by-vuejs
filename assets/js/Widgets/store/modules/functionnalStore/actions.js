import * as types from './types'

export default {
  [types.FETCH_DATA] ({state, commit}) {
    // fetch data from API, file, etc..
    let data = {}
    commit(types.SET_DATA, data)
  }
}