<template>
  <div class="MyFirstWidget">
    <h1>I'm the first widget ! And my name is : {{ widgetName }}</h1>
    <WidgetChild/>
  </div>
</template>

<script>
import WidgetChild from './components/WidgetChild'

export default {
  name: 'MyFirstWidget',
  props: ['widgetName'],
  components: {
    WidgetChild
  }
}
</script>