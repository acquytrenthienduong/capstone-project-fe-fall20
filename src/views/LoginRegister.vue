<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent content-class="login-register-dialog">
      <div class="content">
        <v-icon class="close-button" @click="dialog = false"> mdi-plus </v-icon>
        <v-tabs v-model="selectedTab" class="dialog-tabs">
          <v-tab class="tab-title">Đăng Ký</v-tab>
          <v-tab class="tab-title"> Đăng Nhập</v-tab>

          <v-tab-item>
            <RegisterSteps
              :dialog="dialog"
              :close="closeDialog"
              :selectedTab="selectedTab"
              @clicked="onClickChild"
            />
          </v-tab-item>
          <v-tab-item>
            <div class="container">
              <div class="text-center py-4">
                <img class="logo-headline" src="@/assets/logo-black.svg" alt="logo" />
              </div>
              <v-card class="elevation-0">
                <v-card-title class="justify-center">
                  Đăng nhập bằng tài khoản của bạn
                </v-card-title>
                <v-card-text>
                  <div>
                    <v-text-field
                      v-model="username"
                      prepend-inner-icon="mdi-phone"
                      label="Số điện thoại của bạn"
                      outlined
                      required
                      :rules="[rules.required, rules.started]"
                      >+84</v-text-field
                    >

                    <v-text-field
                      v-model="password"
                      prepend-inner-icon="mdi-lock"
                      label="Mật khẩu"
                      type="password"
                      :rules="[rules.required]"
                      outlined
                      required
                    ></v-text-field>
                    <h3 v-if="check">Sai tên tài khoản hoặc mật khẩu!</h3>
                    <ForgotPassword />
                  </div>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="center-button white--text py-2 login-btn"
                    color="blue darken-1"
                    @click="loginCustomer"
                  >
                    Đăng nhập
                  </v-btn>
                </v-card-actions>
              </v-card>
            </div>
          </v-tab-item>
        </v-tabs>
      </div>
    </v-dialog>
    <FlashMessage z-index="999"></FlashMessage>
  </v-row>
</template>

<script>
import RegisterSteps from "@/components/Register/register";
import ForgotPassword from "@/components/ForgotPassword/forgotpassword";
import axios from "axios";
import config from "../confighost/config";

export default {
  name: "login-register",
  components: {
    RegisterSteps,
    ForgotPassword,
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.loginRegisterModalOpen;
      },
      set(value) {
        this.closeDialog(value);
      },
    },
  },
  data() {
    return {
      host: config.config.host,
      username: "+84",
      password: "",
      rules: {
        required: (value) => !!value || "Bắt buộc",
        started: (v) => v.startsWith("+84") || "Bắt đầu bằng +84",
        min: (v) => v.length >= 8 || "Ít nhất 8 kí tự",
        passWordMatch: (val) => val === this.newPassWord || `Mật khẩu đã nhập không đúng`,
      },
      check: false,
      selectedTab: 0,
    };
  },

  methods: {
    loginCustomer() {
      axios
        .post(this.host + `/loginCustomer`, {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          this.check = false;
          // this.reset();
          localStorage.setItem("customerName", response.data.name);
          localStorage.setItem("customerPhone", response.data.account);
          localStorage.setItem("customerId", response.data.customer_id);
          localStorage.setItem("customerEmail", response.data.email);
          this.dialog = false;
          window.location.reload();
          this.$router.push("/navatan");
        })
        .catch(() => {
          this.check = true;
        });
    },

    closeDialog() {
      this.$store.commit("toggleLoginRegisterModal", false);
    },

    onClickChild(value) {
      this.selectedTab = value;
    },
  },
};
</script>
<style lang="scss">
.v-dialog.login-register-dialog {
  box-shadow: none;
}
</style>
<style lang="scss" scoped>
.right {
  display: flex;
  justify-content: inherit;
}

.login-register-dialog {
  border-radius: 0;
  .content {
    position: relative;
    max-width: 600px;
    padding: 16px;
    margin: 0 auto;
    .close-button {
      position: absolute;
      right: 0;
      top: 0;
      padding: 4px;
      background: #696969;
      border-radius: 50%;
      color: #ffffff;
      transform: rotate(45deg);
      z-index: 2;
    }
    .dialog-tabs {
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14),
        0 9px 46px 8px rgba(0, 0, 0, 0.12);
      .tab-title {
        width: 50%;
      }
    }
    .login-btn {
      width: 100%;
    }
  }
}

h3 {
  color: red;
  background-color: none !important;
}
</style>
