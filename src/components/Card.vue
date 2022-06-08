<template>
  <div class="card">
    <img :src="movie.image" />
    <p>{{movie.title}} {{movie.year??movie.description}}</p>
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
.card{
    img{
        width: 10vw;
        height: 25vh;
    }

    p{
        color: #6262be;
        font-size: 0.7em;
        font-family: sans-serif;
    }
}
</style>
