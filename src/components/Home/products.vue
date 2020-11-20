<template>
  <div class="root">
    <div class="title">TANNING LOTION</div>
    <div class="subtitle">Choose your options below</div>
    <div class="products">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <div class="service-card">
              <img
                src="@/assets/lotions/tan.png"
                class="lotion-img"
                alt="lotion"
              />
            </div>
          </v-col>
        </v-row>
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
export default {};
</script>

<style lang="scss" scoped>
.root {
  padding-top: 48px;
  padding-bottom: 48px;
  .title {
    padding: 16px 0;
    text-align: center;
    font-size: 22px;
    font-weight: bold;
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
