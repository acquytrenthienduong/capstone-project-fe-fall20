<template>
  <v-container fluid class="pa-0" id="navbarfixed">
    <div
      class="backdrop"
      :class="{ visible: showMenu }"
      @click="showMenu = false"
    ></div>
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <div class="content">
        <div class="left d-none d-md-block">
          <button class="menu-btn" @click="toggleMenuHandler">Khám phá</button>
          <router-link
            tag="button"
            class="menu-btn"
            :to="{ name: 'Schedule', params: { type: '1' } }"
          >
            Dịch Vụ
          </router-link>
          <router-link tag="button" class="menu-btn" to="/about">
            Liên Hệ
          </router-link>
        </div>
        <div class="middle">
          <router-link tag="div" class="logo" to="/Navatan">
            <img
              src="../../assets/header-logo.png"
              alt="logo"
              class="logo-img"
            />
          </router-link>
        </div>
        <div class="right">
          <v-btn
            class="menu-btn-cta"
            @click="showLoginRegisterModal"
            v-if="!customerName"
          >
            Tài khoản
          </v-btn>

          <div v-if="customerName" class="customFlex ">
            <div class="d-none d-md-block">
              <NotiMenu />
            </div>
            <div class="d-none d-md-block">
              <AccountMenu />
            </div>
            <button class="white--text menu-btn-cta" @click="showScheduleModal">
              ĐẶT LỊCH NGAY
            </button>
          </div>
        </div>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item link to="/schedule" v-if="customerName">
            <v-list-item-icon>
              <v-icon>mdi-clipboard-list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dịch vụ</v-list-item-title>
          </v-list-item>
          <v-list-item @click="showLoginRegisterModal" v-if="!customerName">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Tài khoản</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <MenuExplore :isVisible="showMenu" />
  </v-container>
</template>

<script>
import MenuExplore from "./menu-explore";
import NotiMenu from "./noti-menu";
import AccountMenu from "./account-menu";

export default {
  name: "header-custom",
  components: {
    MenuExplore,
    NotiMenu,
    AccountMenu,
  },
  methods: {
    toggleMenuHandler() {
      this.showMenu = !this.showMenu;
    },
    showScheduleModal() {
      this.$store.commit("toggleScheduleModal", true);
    },
    showLoginRegisterModal() {
      this.$store.commit("toggleLoginRegisterModal", true);
    },
  },
  data() {
    return {
      drawer: false,
      showMenu: false,
      customerName: localStorage.getItem("customerName"),
      group: [],
    };
  },
};
</script>
<style lang="scss" scoped>
#navbarfixed {
  height: 64px;
  margin-top: 0px;
  transform: translateY(0px);
  left: 0px;
  /* right: 0px; */
  top: 0px;
  position: fixed;
  z-index: 200;
  width: 100vw;
}
.logo {
  display: flex;
  justify-content: center;
  cursor: pointer;
  .logo-img {
    height: 36px;
  }
}
.backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  z-index: -9999;
  transition: 0.3s ease background;
  &.visible {
    background: rgba(0, 0, 0, 0.5);
    z-index: 9;
  }
}
.content {
  max-width: 1620px;
  display: flex;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  justify-content: center;
  flex: 1;
  .left {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .menu-btn {
      height: 41px;
      background: transparent;
      color: #ffffff;
      font-size: 14px;
      line-height: 22px;
      padding: 6px 12px;
      border: none;
      text-transform: uppercase;
      cursor: pointer;
    }
  }
  .middle {
    flex: 1;
    text-align: center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .menu-btn-cta {
      height: 41px;
      background: transparent !important;
      color: #ffffff;
      font-size: 14px;
      line-height: 22px;
      padding: 6px 12px;
      border: 1px solid #ffffff;
      text-transform: uppercase;
      border-radius: 0;
      cursor: pointer;
    }
  }
}

.customFlex {
  display: flex;
  align-items: center;
  justify-content: inherit;
}

.space-right {
  margin-right: 5px;
}

.justify-center {
  justify-content: inherit !important;
}
@media (max-width: 768px) {
  .content {
    padding-left: 0;
    padding-right: 0;
    .right {
      .menu-btn-cta {
        font-size: 12px;
        padding: 0 8px;
        line-height: 16px;
      }
    }
  }
}
</style>
