<template>
  <div class="root">
    <div
      class="backdrop"
      :class="{ visible: showMenu }"
      @click="showMenu = false"
    ></div>

    <div class="content">
      <div class="left">
        <button class="menu-btn" @click="toggleMenuHandler">Khám phá</button>
        <router-link tag="button" class="menu-btn" to="/schedule">
          Dịch Vụ
        </router-link>
        <router-link tag="button" class="menu-btn" to="/test">
          Liên Hệ
        </router-link>
      </div>
      <div class="middle">
        <router-link tag="div" class="logo" to="/navatan">
          <img src="../../assets/header-logo.png" alt="logo" />
        </router-link>
      </div>
      <div class="right">
        <LoginRegister v-if="!customerName" />
        <div v-if="customerName" class="flex">
          <NotiMenu />
          <AccountMenu />
          <button class="menu-btn-cta">
            Xem lịch đặt
          </button>
        </div>
      </div>
    </div>
    <MenuExplore :isVisible="showMenu" />
  </div>
</template>

<script>
import MenuExplore from "./menu-explore";
import LoginRegister from "../../views/LoginRegister";
import NotiMenu from "./noti-menu";
import AccountMenu from "./account-menu";

export default {
  name: "header-custom",
  components: {
    MenuExplore,
    LoginRegister,
    NotiMenu,
    AccountMenu,
  },
  methods: {
    toggleMenuHandler() {
      this.showMenu = !this.showMenu;
    },
  },
  data() {
    return {
      showMenu: false,
      customerName: localStorage.getItem("customerName"),
    };
  },
};
</script>
<style lang="scss" scoped>
.root {
  position: relative;
  background: #000000;
  .logo {
    cursor: pointer;
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
        font-size: 18px;
        line-height: 23px;
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
        background: transparent;
        color: #ffffff;
        font-size: 18px;
        line-height: 23px;
        padding: 6px 12px;
        border: 1px solid #ffffff;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}

.flex {
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
</style>
