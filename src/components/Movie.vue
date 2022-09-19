<template>
  <div class="card">
    <img :src="this.movie.image" />
    <h1>{{ this.movie.fullTitle }}</h1>
    <div :key="movie.id" v-for="movie in movies"></div>
  </div>
</template>

<script>
export default {
  name: "Movie",
  props: {
    movie: Object,
  },
  methods: {
    async AddToMyList() {
      /*      await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});*/
    },
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
