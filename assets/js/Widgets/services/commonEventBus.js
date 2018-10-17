import Vue from 'vue'

let eventBus = new Vue()

export default eventBus

eventBus.$on('My::Event', () => {
  // someAction()
})