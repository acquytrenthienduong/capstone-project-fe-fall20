<template>
  <div class="root">
    <div class="header">
      <div class="inner-content">
        <!-- <div class="category-title">SẢN PHẨM LOTION</div>
        <div class="category-subtitle">Sản phẩm chăm sóc da chuyên dụng</div> -->
      </div>
    </div>
    <sequential-entrance fromLeft>
      <v-container class="products py-10">
        <div class="product-card-container">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/lotions/sanpham_02.png"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="product-card-container">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/lotions/sanpham_01.png"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="product-card-container">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/lotions/sanpham_03.png"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="product-card-container">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/lotions/sanpham_04.png"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="product-card-container">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/lotions/sanpham_05.png"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>

        <div class="product-card-container">
          <v-card class="product-card" max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="@/assets/lotions/sanpham_06.png"
            >
              <v-card-title>Top 10 Australian beaches</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0"> Number 10 </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>Whitehaven Beach</div>

              <div>Whitsunday Island, Whitsunday Islands</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="orange" text> Share </v-btn>

              <v-btn color="orange" text> Explore </v-btn>
            </v-card-actions>
          </v-card>
        </div>
      </v-container>
    </sequential-entrance>
    <v-container class="py-10">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default { name: "category" };
</script>
<style lang="scss" scoped>
.root {
  .header {
    position: relative;
    background: url("../assets/lotions/cover_product.png");
    background-size: cover;
    .inner-content {
      color: #ffffff;
      max-width: 1170px;
      padding: 128px 0;
      margin: 0 auto;
      .category-title {
        font-weight: bold;
        font-size: 2rem;
        text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
          #000000 0px 0px 20px, #000000 0px 0px 30px, #000000 0px 0px 40px,
          #000000 0px 0px 50px, #000000 0px 0px 75px;
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
    }
  }
}
</style>
