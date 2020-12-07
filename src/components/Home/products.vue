<template>
  <div class="root">
    <div class="title">Sản phẩm dưỡng da</div>
    <div class="products">
      <v-container class="grey lighten-5">
        <splide :options="options" class="sliderProduct">
          <splide-slide v-for="(product, i) in productMocks" :key="i">
            <v-card class="product-card" max-width="400">
              <v-img
                class="white--text align-end"
                height="300px"
                :src="product.src"
              >
              </v-img>

              <v-card-subtitle class="pb-0">
                {{ product.title }}</v-card-subtitle
              >

              <v-card-text class="text--primary">
                <div>{{ product.description }}</div>
              </v-card-text>

              <v-card-actions>
                <v-btn color="orange" text> xem thêm </v-btn>
              </v-card-actions>
            </v-card>
          </splide-slide>  
        </splide>
      </v-container>
      <router-link class="products-page-link" to="/products">
        Khám phá thêm
        <v-icon color="black darken-2" style="vertical-align: text-bottom">
          mdi-arrow-right
        </v-icon>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/splide/dist/css/themes/splide-sea-green.min.css";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      productMocks: [
        {
          title: "Pure™ Nature Tanning",
          description: "Dưỡng nâu tự nhiên",
          src: require("@/assets/lotions/sp1.png"),
        },
        {
          title: "Pure™ Men – Natural Tanning",
          description: "Kem dưỡng da nâu",
          src: require("@/assets/lotions/sp2.png"),
        },
        {
          title: "Peau D'Or SPF 50 100ml",
          description: "Kem chống nắng cao cấp",
          src: require("@/assets/lotions/sp3.png"),
        },
        {
          title: "24 Carat™ V2",
          description: "Kem dưỡng nâu tự nhiên",
          src: require("@/assets/lotions/sp4.png"),
        },
        {
          title: "Pure™ Men – Natural Tanning",
          description: "Kem dưỡng da nâu",
          src: require("@/assets/lotions/sp5.png"),
        },
        {
          title: "Pure™ Men – Natural Tanning",
          description: "Kem dưỡng da nâu",
          src: require("@/assets/lotions/sp6.png"),
        },
      ],
      options: {
        gap: "1rem",
        type: "loop",
        perPage: 4,
        // perMove: 1,
        forcus: "center",
        autoplay: true,
        rewind : true,
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  margin-bottom: 10px;
}

.sliderProduct {
  max-width: 100% !important;
  margin: auto;
}
.root {
  padding-top: 48px;
  padding-bottom: 48px;
  .title {
    padding: 16px 0;
    text-align: center;
    font-size: 30px !important;
    font-weight: bold;
    text-transform: uppercase;
  }
  .subtitle {
    text-align: center;
    margin-bottom: 24px;
  }
  .products {
    text-align: center;
    .service-card {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      .lotion-img {
        max-width: 100%;
        object-fit: contain;
      }
    }
    .products-page-link {
      text-decoration: none;
      text-align: center;
      // font-family: "SVN-Gotham", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 23px;
      align-items: center;
      text-align: center;
      text-transform: uppercase;

      color: #000000;
    }
  }
}
</style>
