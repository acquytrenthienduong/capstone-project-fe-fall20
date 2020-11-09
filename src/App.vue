<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");
html {
  font-family: "Montserrat", sans-serif;
  max-width: 1920px;
  margin: 0 auto;
}
</style>
<script>
import "normalize.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
export default {
  name: "app",
  components: {
    Header,
    Footer,
  },
};
</script>
