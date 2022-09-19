<template>
  <div :key="movie.id" v-for="movie in movies">
    <Card :movie="movie"></Card>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  name: "Container",
  props: {
    movies: Array,
  },
  components: { Card },
};
</script>

<style scoped>
div {
  width: 10vw;
  height: 30vh;
  margin: 10px;
  display: inline-block;
}
</style>
