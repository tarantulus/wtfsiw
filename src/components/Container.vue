<template>
  <div :key="movie.id" v-for="movie in movies">
    <p>{{ movie.title }}</p>
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
