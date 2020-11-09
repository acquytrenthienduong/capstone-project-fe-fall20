<template>
  <div class="root">
    <Header />
    <Slides />
    <TanningOptions />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header/header";
import Slides from "../components/Slides/slides";
import Footer from "../components/Footer/footer";
import TanningOptions from "../components/TanningOptions/tanningOptions";
export default {
  name: "homepage",
  components: {
    Header,
    Slides,
    Footer,
    TanningOptions,
  },
};
</script>

<style lang="scss" scoped>
.root {
  /* background: #000000; */
}
</style>
