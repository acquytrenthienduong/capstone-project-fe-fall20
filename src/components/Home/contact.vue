<template>
  <div class="root">
    <div class="container">
      <div class="row justify-space-between center">
        <div class="col-md-8 col-12">
          <Map />
        </div>
        <div class="col-md-4 col-12">
          <v-list two-line>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black"> mdi-phone </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>(650) 555-1234</v-list-item-title>
                <v-list-item-subtitle>Mobile</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>(323) 555-6789</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black"> mdi-email </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>hoangtronganh23@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Personal</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-action></v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>navatan_tanning@gmail.com</v-list-item-title>
                <v-list-item-subtitle>Work</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider inset></v-divider>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black"> mdi-map-marker </v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>số 6 Hàng Muối</v-list-item-title>
                <v-list-item-subtitle>Hoàn Kiếm, Hà Nội</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Map from "@/components/Home/maps";
export default {
  name: "contact",
  data() {
    return {};
  },
  components: { Map },
};
</script>
<style lang="scss" scoped>
.root {
  padding: 56px 10px;
}
h1 {
  color: black;
  margin: 20%;
}

.center {
  display: flex;
  align-items: center;
}

.margin-bottom {
  margin-bottom: 10px;
}
</style>
