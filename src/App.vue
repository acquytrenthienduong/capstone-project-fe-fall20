<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import "normalize.css";
import HomePage from "./pages/home.vue";

export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");
html {
  font-family: "Montserrat", sans-serif;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
