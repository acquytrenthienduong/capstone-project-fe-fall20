<template>
  <div>
    <img
      class="image"
      v-for="(image, i) in images"
      :src="image"
      @click="onClick(i)"
      v-bind:key="i"
    />
    <vue-gallery-slideshow
      :images="images"
      :index="index"
      @close="index = null"
      id="show"
    ></vue-gallery-slideshow>
  </div>
</template>

<script>
import VueGallerySlideshow from "vue-gallery-slideshow";

export default {
  components: {
    VueGallerySlideshow,
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
  },
  data() {
    return {
      images: [
        "@/assets/lotions/sp1.png",
        "@/assets/lotions/sp2.png",
        "@/assets/lotions/sp3.png",
        "@/assets/lotions/sp4.png",
        "@/assets/lotions/sp5.png",
        "@/assets/lotions/sp6.png",
      ],
      index: 0,
    };
  },
};
</script>
<style scoped>

</style>
