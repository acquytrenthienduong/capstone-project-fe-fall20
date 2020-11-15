<template>
  <div class="root">
    <div class="title">SERVICES</div>
    <div class="subtitle">Choose your options below</div>
    <div class="services">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col v-for="n in 2" :key="n" cols="12" md="6">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title> Massage </v-card-title>

              <v-card-actions>
                <v-btn color="orange lighten-2" text> Explore </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
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
  .service-card {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
