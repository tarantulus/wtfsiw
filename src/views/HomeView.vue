<template>
  <div class="home">
    <SearchHeader :buttonColour='red' @search="async (text) => await searchMovies(text)" />
    <Container :movies="movies"></Container>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchHeader from "@/components/SearchHeader.vue";
import Container from "@/components/Container.vue";

export default {
  name: "HomeView",
  components: {
    SearchHeader,
    Container
  },
  data() {
    return {
      movies: [],
      APIKEY: "k_5zh0b0pw"
    };
  },
  async created() {
    this.movies = await this.getPopularMovies();
  },
  methods: {    
    async getPopularMovies() {
      
      const DEFAULTAPIURL =
        "https://imdb-api.com/en/API/MostPopularMovies/" + this.APIKEY;
      var data = await this.callApi(DEFAULTAPIURL);
      console.log(data.items)      
      return data.items;
    },
    async searchMovies(searchTerm) {
    console.log("searching")
    const SEARCHAPIURL = 'https://imdb-api.com/en/API/SearchMovie/'+ this.APIKEY    
    var data = await this.callApi(SEARCHAPIURL+"/"+searchTerm)
    this.movies = data.results;
    if (data.results === null){
      await this.getPopularMovies()
    }
    },
    async callApi(endpoint) {
      const resp = await fetch(endpoint);
      const data = await resp.json();
      return data;
    }
  }
};
</script>
