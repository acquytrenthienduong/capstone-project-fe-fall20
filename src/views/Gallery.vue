<template>
  <div>
    <v-row>
      <v-col v-for="(image, i) in images" :key="i" class="d-flex child-flex" cols="4">
        <v-img
          :src="image"
          :lazy-src="`https://picsum.photos/10/6?image=${i * 5 + 10}`"
          aspect-ratio="1"
          class="d-flex child-flex"
          @click="onClick(i)"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
        <h3>Chú thich</h3>
      </v-col>
    </v-row>
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
        require("@/assets/lotions/sp1.png"),
        require("@/assets/lotions/sp2.png"),
        require("@/assets/lotions/sp3.png"),
        require("@/assets/lotions/sp4.png"),
        require("@/assets/lotions/sp5.png"),
        require("@/assets/lotions/sp6.png"),
      ],
      index: 0,
    };
  },
};
</script>
<style scoped>
.d-flex {
  margin-top: 5%;
}
</style>
