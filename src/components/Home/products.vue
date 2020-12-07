<template>
  <div class="root">
    <sequential-entrance fromRight>
      <div class="title">Sản phẩm dưỡng da</div>
    </sequential-entrance>
    <div class="products">
      <v-container class="grey lighten-5">
        <sequential-entrance fromLeft>
          <splide :options="options" class="sliderProduct">
            <splide-slide>
              <v-card class="product-card" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="300px"
                  src="@/assets/lotions/sp1.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Pure™ Nature Tanning</v-card-subtitle
                >

                <v-card-text class="text--primary">
                  <div>Dưỡng nâu tự nhiên</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> xem thêm </v-btn>
                </v-card-actions>
              </v-card>
            </splide-slide>
            <splide-slide>
              <v-card class="product-card" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="300px"
                  src="@/assets/lotions/sp2.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Pure™ Men – Natural Tanning
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Kem dưỡng da nâu</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> xem thêm </v-btn>
                </v-card-actions>
              </v-card>
            </splide-slide>
            <splide-slide>
              <v-card class="product-card" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="300px"
                  src="@/assets/lotions/sp3.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Peau D'Or SPF 50 100ml</v-card-subtitle
                >

                <v-card-text class="text--primary">
                  <div>Kem chống nắng cao cấp</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> xem thêm </v-btn>
                </v-card-actions>
              </v-card>
            </splide-slide>
            <splide-slide>
              <v-card class="product-card" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="300px"
                  src="@/assets/lotions/sp4.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0"> 24 Carat™ V2</v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Kem dưỡng nâu tự nhiên</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> xem thêm </v-btn>
                </v-card-actions>
              </v-card>
            </splide-slide>
            <splide-slide>
              <v-card class="product-card" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="300px"
                  src="@/assets/lotions/sp5.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Pure™ Men – Natural Tanning
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Kem dưỡng da nâu</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> xem thêm </v-btn>
                </v-card-actions>
              </v-card>
            </splide-slide>
            <splide-slide>
              <v-card class="product-card" max-width="400">
                <v-img
                  class="white--text align-end"
                  height="300px"
                  src="@/assets/lotions/sp6.png"
                >
                </v-img>

                <v-card-subtitle class="pb-0">
                  Pure™ Men – Natural Tanning
                </v-card-subtitle>

                <v-card-text class="text--primary">
                  <div>Kem dưỡng da nâu</div>
                </v-card-text>

                <v-card-actions>
                  <v-btn color="orange" text> xem thêm </v-btn>
                </v-card-actions>
              </v-card>
            </splide-slide>
          </splide>
        </sequential-entrance>
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
      options: {
        gap: "20px",
        type: "loop",
        perPage: 4,
        perMove: 1,
        forcus: "center",
        autoplay: true,
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
