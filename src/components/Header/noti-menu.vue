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
        <span>{{ numberUnseen }}</span>
      </v-btn>
    </template>

    <v-card class="pa-4">
      <div class="title mb-2"><v-icon>mdi-bell</v-icon> Notifications</div>
      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="noti in listNoti"
          :key="noti.notification_id"
          class="pa-2"
        >
          <div class="container--fluid">
            <a href="#" @click="seenNoti(noti)">
              {{ noti.content }}
            </a>
            <!-- You have successfully scheduled a session! -->
          </div>
        </v-list-item>
      </v-list>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="primary" text> Clear all </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import axios from "axios";
export default {
  name: "noti-menu",
  data() {
    return {
      menu: false,
      listNoti: [],
      numberUnseen: 0,
    };
  },

  methods: {
    loadNotificationOfCustomer() {
      axios
        .get(
          "http://localhost:8000/findNotificationForCustomer/" +
            localStorage.getItem("customerId")
        )
        .then((response) => {
          this.listNoti = response.data;
          this.numberUnseen = response.data.length;
          // window.location.reload();
        });
    },

    seenNoti(noti) {
      noti.seen = 1;
      axios
        .post(`http://localhost:8000/UserSeenNoti/` + noti.notification_id, {
          noti,
        })
        .then((response) => {
          console.log(response);
          this.menu = false;
          this.loadNotificationOfCustomer();
          this.$router.push("/orders");
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },

  mounted() {
    this.loadNotificationOfCustomer();

    setInterval(() => {
      this.loadNotificationOfCustomer();
    }, 10000);
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

a :hover {
  color: green;
}
</style>
