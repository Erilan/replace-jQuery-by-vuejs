require('../css/app.css')

import RecipeComponentsWebpack from './RecipeComponentsWebpack/Recipe'

new Vue({
  el: '.recipe-components-webpack',
  // 'h' is for hyperscript => Hyperscript itself stands for "script that generates HTML structure". It's a shortcut for DOM element creation
  render: h => h(RecipeComponentsWebpack)
})

import vueWidgetHandler from './Widgets/vueWidgetsHandler'

vueWidgetHandler.init()

// call others libraries if needed