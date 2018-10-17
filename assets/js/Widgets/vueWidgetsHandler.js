import Vue from 'vue'
import Vuex from 'vuex'
import functionnalStore from './store'

import MyFirstWidget from './MyFirstWidget/MyFirstWidget'
import MySecondWidget from './MySecondWidget/MySecondWidget'

Vue.use(Vuex)

export default (function () {
  let self = {}

  self.init = function () {
    document.querySelectorAll('[data-vue-widget="MyFirstWidget"]').forEach(function (element) {
      let props = {}
      for (let key in element.dataset) {
        try {
          props[key] = JSON.parse(element.dataset[key])
        } catch(error) {
          props[key] = element.dataset[key]
        }
      }

      new Vue({
        store: functionnalStore,
        render: h => h(MyFirstWidget, {props}),
      }).$mount(element)
    })

    document.querySelectorAll('[data-vue-widget="MySecondWidget"]').forEach(function (element) {
      new Vue({
        render: h => h(MySecondWidget),
      }).$mount(element)
    })
  }

  return self
})()