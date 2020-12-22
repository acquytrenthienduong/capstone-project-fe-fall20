<template>
  <div class="root">
    <Slides />
    <sequential-entrance fromRight>
      <div class="title">Dịch vụ tại Navatan</div>
    </sequential-entrance>
    <Services />
    <sequential-entrance fromRight>
      <div class="title">Sản phẩm dưỡng da</div>
    </sequential-entrance>
    <Products />
    <Videos />
    <sequential-entrance fromRight>
      <div class="title">7 BƯỚC TANNING TẠI NAVATAN</div>
    </sequential-entrance>
    <Step />
    <Story />
    <Map />
    <Socials />
  </div>
</template>

<script>
import Slides from "@/components/Home/slides";
import Services from "@/components/Home/services";
import Products from "@/components/Home/products";
import Videos from "@/components/Home/videos";
import Socials from "@/components/Home/socials";
import Story from "@/components/Home/story";
import Map from "@/components/Home/maps";
import Step from "@/components/Home/step";

export default {
  name: "homepage",
  components: {
    Slides,
    Services,
    Products,
    Videos,
    Story,
    Step,
    Socials,
    Map,
  },
};
</script>

<style lang="scss" scoped>
.root {
  .title {
    margin-top: 5%;
    margin-bottom: -3%;
    padding: 0 0;
    text-align: center;
    font-size: 30px !important;
    font-weight: bold;
    text-transform: uppercase;
  }
}
</style>
