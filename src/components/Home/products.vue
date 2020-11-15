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
                src="@/assets/lotions/1.png"
                class="lotion-img"
                alt="lotion"
              />
            </div>
          </v-col>
        </v-row>
      </v-container>
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
    .service-card {
      margin-left: auto;
      margin-right: auto;
      text-align: center;
      .lotion-img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
