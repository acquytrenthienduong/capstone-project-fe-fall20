<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" content-class="login-register-dialog">
      <template v-slot:activator="{ on, attrs }">
        <a href="#" menu-btn-cta v-bind="attrs" v-on="on">Quên mật khẩu</a>
      </template>
      <div class="container">
        <div class="text-center py-4">
          <img class="logo-headline" src="@/assets/logo-black.svg" alt="logo" />
        </div>
        <v-stepper v-model="step" class="elevation-0">
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="step-1-card">
                <v-card-title class="justify-center flex-column">
                  <div class="text-center">Đăng ký tài khoản mới</div>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-form>
                      <v-text-field
                        v-model="phone"
                        prepend-inner-icon="mdi-phone"
                        label="Số điện thoại của bạn"
                        :rules="[rules.required, rules.started]"
                        outlined
                        required
                      ></v-text-field>
                      <div id="recaptcha-container"></div>

                      <v-text-field
                        v-model="password"
                        prepend-inner-icon="mdi-lock"
                        label="Mật khẩu*"
                        :rules="[rules.required]"
                        type="password"
                        outlined
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="repassword"
                        prepend-inner-icon="mdi-lock"
                        label="Nhập lại mật khẩu*"
                        type="password"
                        :rules="[rules.passWordMatch, rules.required]"
                        outlined
                        required
                      ></v-text-field>
                    </v-form>
                    <h3 v-if="checkStep1">Hãy điền hết thông tin nhé!</h3>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    class="first-step-btn"
                    color="blue darken-1"
                    @click="sendCode"
                  >
                    Tiếp tục
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-stepper-content>

            <v-stepper-content step="2">
              <div class="container step-2-card">
                <div class="text-center pb-4">
                  Nhập mã xác nhận được gửi tới số điện thoại đã đăng ký
                </div>
                <v-form>
                  <v-text-field
                    v-model="code"
                    prepend-inner-icon="mdi-shield-check"
                    label="Mã xác nhận"
                    type="text"
                    name="otp"
                    outlined
                    required
                  ></v-text-field>

                  <v-row class="mb-8 text-center">
                    <v-col>
                      <v-btn @click="backToStep1" class="red--text" text>
                        Không nhận được mã, quay lại bước 1
                      </v-btn>
                    </v-col>
                  </v-row>
                  <h3 v-if="checkStep2">Mã xác nhận không đúng</h3>
                  <div class="container--fluid align-content-stretch">
                    <v-btn
                      class="blue white--text otp-confirm-btn"
                      @click="enterCode"
                      >Xác nhận
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div class="container step-3-card">
                <div class="text-center pb-4">Nhập họ tên và email của bạn</div>
                <v-form>
                  <v-text-field
                    v-model="name"
                    prepend-inner-icon="mdi-account"
                    label="Họ tên"
                    type="text"
                    name="fullName"
                    outlined
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    prepend-inner-icon="mdi-email"
                    label="Email"
                    type="email"
                    name="email"
                    outlined
                    required
                  ></v-text-field>
                  <h3 v-if="checkStep3">
                    Hãy điền nhập email và tên của bạn đã nhé!
                  </h3>
                  <div class="container--fluid align-content-stretch">
                    <v-btn
                      class="blue white--text complete-profile-btn"
                      @click="register"
                      >Hoàn tất
                    </v-btn>
                  </div>
                </v-form>
              </div>
            </v-stepper-content>
          </v-stepper-items>
        </v-stepper>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";
import config from "../../confighost/config";
import firebase from "@firebase/app";
import { fb } from "@/firebase";

export default {
  name: "login-register",
  components: {},
  data() {
    return {
      host: config.config.host,
      dialog: false,
      step: 1,
      rules: {
        required: (value) => !!value || "Bắt buộc",
        started: (v) => v.startsWith("+84") || "Bắt đầu bằng +84",
        min: (v) => v.length >= 8 || "Ít nhất 8 kí tự",
        passWordMatch: (val) =>
          val === this.repassword || `Mật khẩu đã nhập không khớp`,
      },
      checkStep1: false,
      checkStep2: false,
      checkStep3: false,
      phone: "",
      code: "",
      password: "",
      repassword: "",
      name: "",
      email: "",
      widgetId: 0,
    };
  },

  methods: {
    executeCapcha() {
      window.grecaptcha.execute(this.widgetId);
    },
    resetCapcha() {
      window.grecaptcha.reset(this.widgetId);
    },

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
        .catch((error) => {
          console.log(error);
          this.check = true;
        });
    },

    closeDialog() {
      this.dialog = false;
    },

    onClickChild(value) {
      this.selectedTab = value;
    },

    register() {
      console.log("register");
    },

    initRecaptcha() {
      this.reset();
      fb.auth().languageCode = "vi";
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );

      window.recaptchaVerifier.render();
    },

    enterCode: function() {
      let code = this.code;
      var credential = firebase.auth.PhoneAuthProvider.credential(
        window.confirmationResult.verificationId,
        code
      );

      firebase
        .auth()
        .signInWithCredential(credential)
        .then(() => {
          this.checkStep2 = false;
          this.step = 3;
        })
        .catch(() => {
          this.checkStep2 = true;
        });
    },

    sendCode: function() {
      if (this.phone != "" && this.password != "" && this.repassword != "") {
        this.checkStep1 = false;
        let phone = this.phone;
        this.step = 2;
        var appVerifier = window.recaptchaVerifier;
        console.log('asdsadasd')
        firebase
          .auth()
          .signInWithPhoneNumber(phone, appVerifier)
          .then(function(confirmationResult) {
            window.confirmationResult = confirmationResult;
          })
          .catch((error) => {
            this.errors.push(error);
          });
      } else {
        this.checkStep1 = true;
      }
    },

    reset() {
      this.phone = "";
      this.code = "";
      this.password = "";
      this.repassword = "";
      this.name = "";
      this.email = "";
    },

    backToStep1() {
      this.step = 1;
    },

    registerSuccess() {
      this.$emit("clicked", 1);
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
    width: 600px;
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
      box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2),
        0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);
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
