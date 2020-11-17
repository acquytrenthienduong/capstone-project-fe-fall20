<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
    content-class="mt-6 noti-menu"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-btn text class="menu-btn-cta mr-2" v-bind="attrs" v-on="on">
        <v-icon color="#ffffff">mdi-email</v-icon>
      </v-btn>
    </template>

    <v-card class="pa-4">
      <div class="title mb-2"><v-icon>mdi-bell</v-icon> Notifications</div>
      <v-divider></v-divider>

      <v-list>
        <v-list-item v-for="i in 3" :key="i" class="pa-2">
          <div class="container--fluid">
            You have successfully scheduled a session!
          </div>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="primary" text @click="menu = false"> Clear all </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: "noti-menu",
  data() {
    return {
      menu: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.noti-menu {
  transform: translateX(-40%);
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