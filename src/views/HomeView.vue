<template>
  <div class="home">
    <SearchHeader @search="async (text) => await searchMovies(text)" />
    <Container :movies="movies"></Container>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHeader from "@/components/SearchHeader.vue";
import Container from "@/components/Container.vue";
import { searchMovies, getPopularMovies } from "@/libs/movieDbApi";

export default {
  name: "HomeView",
  components: {
    SearchHeader,
    Container,
  },
  data() {
    return {
      movies: [],
    };
  },
  async created() {
    this.movies = await this.getPopularMovies();
  },
  methods: {
    searchMovies,
    getPopularMovies,
  },
};
</script>
