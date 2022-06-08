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
