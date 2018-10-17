<template>
  <div>
    <label>Portions :</label>
    <input type="number" v-model="serving">
    <button @click="decreaseServing">-</button>
    <button @click="increaseServing">+</button>

    <div class="Recipe-IngredientList">
      <RecipeIngredient name="Farine" :serving="serving" base-value="100" metric="g"></RecipeIngredient>
      <RecipeIngredient name="Oeuf" :serving="serving" base-value="2" metric=""/>
      <RecipeIngredient name="Lait" :serving="serving" base-value="150" metric="mL"/>
      <RecipeIngredient name="Lardon" :serving="serving" base-value="50" metric="g"/>
    </div>
  </div>
</template>

<script>
import RecipeIngredient from './components/RecipeIngredient'

export default {
  name: 'Recipe',
  components: {
    RecipeIngredient
  },
  data() {
    return {
      serving: 1
    }
  },
  methods: {
    decreaseServing() {
      this.serving = this.serving - 1
    },
    increaseServing() {
      this.serving = this.serving + 1
    }
  }
}
</script>