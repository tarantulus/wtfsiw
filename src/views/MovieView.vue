<template>
  <div class="movie">
    <Movie :movie="this.movie"></Movie>
  </div>
</template>

<script>
// @ is an alias to /src
import Movie from "@/components/Movie.vue";
import { getMovie } from "@/libs/movieDbApi";

export default {
  name: "MovieView",
  components: {
    Movie,
  },
  data() {
    return {
      id: this.$route.params.id,
      movie: Object,
      APIKEY: "k_5zh0b0pw",
    };
  },
  async created() {
    this.movie = await getMovie(this.id);
  },
};
</script>
