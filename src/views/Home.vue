<template>
  <div class="root">
    <Slides />
    <Services />
    <Products />
    <Videos />
    <About />
    <Socials />
  </div>
</template>

<script>
import Slides from "@/components/Home/slides";
import Services from "@/components/Home/services";
import Products from "@/components/Home/products";
import Videos from "@/components/Home/videos";
import Socials from "@/components/Home/socials";
import About from "@/components/Home/about";
export default {
  name: "homepage",
  components: {
    Slides,
    Services,
    Products,
    Videos,
    Socials,
    About,
  },
};
</script>

<style lang="scss" scoped>
.root {
  /* background: #000000; */
}
</style>
