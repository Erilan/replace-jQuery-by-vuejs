<template>
  <div class="Recipe-Ingredient">{{ name }} : <span>{{ serving * baseValue }}</span>{{ metric }}</div>
</template>

<script>
  export default {
    name: 'RecipeIngredient',
    props: ['name', 'serving', 'baseValue', 'metric']
  }
</script>