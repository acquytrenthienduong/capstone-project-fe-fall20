<template>
  <div class="root">
    <sequential-entrance fromRight>
      <div class="title">Dịch vụ tại Navatan</div>
    </sequential-entrance>

    <div class="services">
      <v-container class="grey lighten-5">
        <sequential-entrance fromLeft>
          <v-row>
            <v-col cols="12" md="4">
              <v-card class="mx-auto service-card" max-width="344">
                <v-img
                  src="@/assets/services/standup.jpg"
                  height="200px"
                ></v-img>

                <v-card-title> Stand Up Tanning </v-card-title>
                <v-card-text>
                  Tanning đứng với máy SunCapsule đến từ CHLB Đức.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    class="xemthem"
                    text
                    @click="detail1"
                  >
                    xem thêm
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="mx-auto service-card" max-width="344">
                <v-img
                  src="@/assets/services/laydown.jpg"
                  height="200px"
                ></v-img>

                <v-card-title> Lay Down Tanning </v-card-title>
                <v-card-text>
                  Tanning nằm với máy high-powered SunCapsule 2 cấp độ.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    class="xemthem"
                    text
                    @click="detail2"
                  >
                    xem thêm
                  </v-btn>

                  <v-spacer></v-spacer>
                  <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
                </v-card-actions>
              </v-card>
            </v-col>

            <v-col cols="12" md="4">
              <v-card class="mx-auto service-card" max-width="344">
                <v-img src="@/assets/services/spray.jpg" height="200px"></v-img>

                <v-card-title> Spray Tanning </v-card-title>
                <v-card-text>
                  Da tan hoàn toàn đồng đều chỉ trong 90 giây với Spray Tanning.
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="orange lighten-2"
                    class="xemthem"
                    text
                    @click="detail3"
                  >
                    xem thêm
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </sequential-entrance>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    detail1() {
      this.$router.push({ name: "Schedule", params: { type: "1" } });
    },
    detail2() {
      this.$router.push({ name: "Schedule", params: { type: "2" } });
    },
    detail3() {
      this.$router.push({ name: "Schedule", params: { type: "3" } });
    },
  },
};
</script>

<style lang="scss" scoped>
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
  .service-card {
    margin-left: auto;
    margin-right: auto;
  }
  .xemthem {
    margin-top: -25px;
  }
}
</style>
