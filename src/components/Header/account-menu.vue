<template>
  <div class="text-center">
    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      :nudge-width="200"
      offset-y
      content-class="mt-6 account-menu"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text class="menu-btn-cta mr-2" v-bind="attrs" v-on="on">
          <v-icon color="#ffffff">mdi-account</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <img
                src="https://ui-avatars.com/api/?name=Cao+Sao+Vang"
                alt="CSV"
              />
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Cao Sao Vang</v-list-item-title>
              <v-list-item-subtitle
                >meoconlonton@gmail.com</v-list-item-subtitle
              >
            </v-list-item-content>

            <v-list-item-action>
              <span class="elevation-0" text>
                <v-icon color="yellow">mdi-star</v-icon>
              </span>
            </v-list-item-action>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content @click="editProfileHandler">
                <v-list-item-title> Lịch hẹn</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content @click="editProfileHandler">
                <v-list-item-title> Chỉnh sửa thông tin</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="error" text @click="logoutHandler"> Đăng xuất </v-btn>
        </v-card-actions>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  name: "account-menu",
  methods: {
    editProfileHandler() {},
    logoutHandler() {},
  },
  data() {
    return { menu: false };
  },
};
</script>

<style lang="scss" scoped>
.account-menu {
  transform: translateX(-40%);
  max-width: 250px;
}
.menu-btn-cta {
  height: 41px !important;
  background: transparent;
  color: #ffffff;
  font-size: 18px;
  line-height: 23px;
  padding: 6px 12px;
  border: 1px solid #ffffff;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 0;
}
</style>