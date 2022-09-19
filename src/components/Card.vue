<template>
  <div class="card">
    <router-link :to="{ name: 'Movie', params: { id: movie.id } }">
      <img :src="movie.image.replace(/original/g, '200x300')" />
      <p>{{ movie.title }} {{ movie.year ?? movie.description }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    movie: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  img {
    width: 10vw;
    height: 25vh;
  }

  p {
    color: #6262be;
    font-size: 0.4vw;
    font-family: sans-serif;
  }
}
</style>
