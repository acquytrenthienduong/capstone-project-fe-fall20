<template>
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
</template>

<script>
import { mdiPhone, mdiLock, mdiCloseBox } from "@mdi/js";
import firebase from "@firebase/app";
import { fb } from "@/firebase";
import axios from "axios";
import config from "../../confighost/config";
import swal from "sweetalert";

export default {
  name: "register-steps",
  // props: ["dialog"],
  props: {
    close: {
      type: Function,
    },
    selectedTab: {
      type: Number,
    },
  },

  watch: {
    dialog(value) {
      if (!value) {
        this.step = 1;
      }
    },
  },
  methods: {
    initRecaptcha() {
      fb.auth().languageCode = "vi";
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container"
      );
      window.recaptchaVerifier.render();
    },

    register() {
      if (this.email != "" && this.name != "") {
        axios
          .post(this.host + `/register`, {
            account: this.phone,
            password: this.password,
            email: this.email,
            gender: 1,
            name: this.name,
          })
          .then(() => {
            this.checkStep3 = false;
            swal("Đăng kí thành công!", "Hãy đăng nhập thử nhé!", "success");
            this.registerSuccess();
            this.reset();
            // this.close();
            // this.dialog = false;
          })
          .catch((e) => {
            this.errors.push(e);
          });
      } else {
        this.checkStep3 = true;
      }
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
          swal(
            "Xác nhận thành công!",
            "hãy điền nốt thông tin nhé!",
            "success"
          );
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
  data() {
    return {
      host: config.config.host,
      step: 1,
      svgPath: mdiPhone,
      mdiLock: mdiLock,
      mdiClose: mdiCloseBox,
      error: [],
      phone: "",
      code: "",
      password: "",
      repassword: "",
      name: "",
      email: "",
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
    };
  },
  mounted() {
    this.initRecaptcha();
  },
};
</script>
<style lang="scss" scoped>
.first-step-btn {
  color: #fff;
  width: 100%;
  border-radius: 0;
}
.otp-confirm-btn {
  width: 100%;
}
.complete-profile-btn {
  width: 100%;
}
.step-2-card {
  padding-top: 40px;
  padding-bottom: 40px;
}

h3 {
  color: red;
}
</style>
