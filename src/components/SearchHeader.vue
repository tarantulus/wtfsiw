<template>
  <header>
    <h1>What the fuck should I watch?</h1>
    <form @submit.prevent="$emit('search',this.searchTerm)">
      <input type="text" id="search" v-model="searchTerm" placeholder="search" />
        <button class="btn" :style="{ background: buttonColour }">
          Search
        </button>
    </form>
  </header>
</template>

<script>

export default {
  name: "SearchHeader",
  emits: ["search"],
  props: {
    text: String,
    buttonColour: String,
  },  
  data() {
    return {
      searchTerm: ''
    }
  }
};
</script>
