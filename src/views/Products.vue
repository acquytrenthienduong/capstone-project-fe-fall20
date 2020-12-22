<template>
  <div class="root">
    <div class="header">
      <div class="inner-content">
        <div class="category-title">SẢN PHẨM LOTION</div>
      </div>
    </div>
    <sequential-entrance fromLeft class="bao">
      <v-container class="products py-10" v-if="page == 1">
        <div
          class="product-card-container"
          v-for="(product, i) in productMocks"
          :key="i"
        >
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="product.src"
            >
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ product.title }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ product.description }}</div>
            </v-card-text>
          </v-card>
        </div>
      </v-container>

      <!-- page 2 -->
      <!-- <v-container class="products py-10" v-if="page === 2">
        <div class="product-card-container" v-for="(product,i) in productMocks" :key="i">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="300px"
              :src="product.src"
            >
            </v-img>

            <v-card-subtitle class="pb-0"> Kem bôi trơn </v-card-subtitle>

            <v-card-text class="text--primary">
              <div></div>
            </v-card-text>
          </v-card>
        </div>
      </v-container> -->
    </sequential-entrance>
    <v-container class="py-10">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "productTanning",
  data() {
    return {
      page: 1,
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
    };
  },
};
</script>
<style lang="scss" scoped>
.bao {
  display: flex;
  justify-content: center;
}
.root {
  .header {
    position: relative;
    background: url("../assets/home/covernew.png");
    background-size: 100%;
    height: 25%;
    .inner-content {
      color: #ffffff;
      max-width: 1170px;
      padding: 128px 0;
      margin: 0 auto;
      .category-title {
        padding-left: 16px;
        padding-right: 16px;
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
        font-family: "Montserrat", sans-serif !important;
      }
      .category-subtitle {
        text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
          #000000 0px 0px 20px, #000000 0px 0px 30px, #000000 0px 0px 40px,
          #000000 0px 0px 50px, #000000 0px 0px 75px;
      }
    }
  }
  .products {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    margin-top: 40px;
    .product-card-container {
      padding: 8px;
      width: 33%;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
