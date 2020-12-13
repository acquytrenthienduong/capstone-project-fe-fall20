<template>
  <div class="root">
    <Slides />
    <Services />
    <Products />
    <Videos />
    <Step />
    <Map />
    <Number />
    <Socials />
  </div>
</template>

<script>
import Slides from "@/components/Home/slides";
import Services from "@/components/Home/services";
import Products from "@/components/Home/products";
import Videos from "@/components/Home/videos";
import Socials from "@/components/Home/socials";
import Number from "@/components/Home/number";
import Map from "@/components/Home/maps";
import Step from "@/components/Home/step";

export default {
  name: "homepage",
  components: {
    Slides,
    Services,
    Products,
    Videos,
    Step,
    Socials,
    Number,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.root {
  /* background: #000000; */
}
</style>
