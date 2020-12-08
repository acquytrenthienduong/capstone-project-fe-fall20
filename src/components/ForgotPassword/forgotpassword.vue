<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      content-class="login-register-dialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <a href="#" menu-btn-cta v-bind="attrs" v-on="on">Quên mật khẩu</a>
      </template>
      <div class="content">
        <v-icon class="close-button" @click="dialog = false"> mdi-plus </v-icon>
        <div class="text-center py-4">
          <img class="logo-headline" src="@/assets/logo-black.svg" alt="logo" />
        </div>
        <v-stepper v-model="step" class="elevation-0">
          <v-stepper-items>
            <v-stepper-content step="1">
              <v-card class="step-1-card">
                <v-card-title class="justify-center flex-column">
                  <div class="text-center">Điền email đã đăng kí khi tạo tài khoản</div>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-form>
                      <v-text-field
                        v-model="email"
                        prepend-inner-icon="mdi-email"
                        label="Email của bạn"
                        :rules="[rules.required]"
                        outlined
                        required
                      ></v-text-field>
                    </v-form>
                    <h3 v-if="checkStep1">Hãy điền email của bạn đã!</h3>
                  </v-container>
                </v-card-text>
                <v-card-actions class="justify-content">
                  <v-btn
                    class="first-step-btn blue white--text otp-confirm-btn"
                    color="blue darken-1"
                    @click="sendEmail"
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
                  <v-card-actions class="justify-content">
                    <div class="container--fluid align-content-stretch">
                      <v-btn
                        class="blue white--text otp-confirm-btn justify-content"
                        @click="enterCode"
                        >Xác nhận
                      </v-btn>
                    </div>
                  </v-card-actions>
                </v-form>
              </div>
            </v-stepper-content>

            <v-stepper-content step="3">
              <div class="container step-2-card">
                <div class="text-center pb-4">
                  Đặt lại mật khẩu
                </div>
                <v-form>
                  <v-text-field
                    v-model="password"
                    prepend-inner-icon="mdi-shield-check"
                    label="Mật khẩu mới"
                    type="text"
                    outlined
                    :rules="[rules.required, rules.min]"
                  ></v-text-field>
                  <v-text-field
                    v-model="repassword"
                    prepend-inner-icon="mdi-shield-check"
                    label="Nhập lại mật khẩu mới"
                    type="text"
                    outlined
                    :rules="[rules.required, rules.min, rules.passWordMatch]"
                  ></v-text-field>
                  <h3 v-if="checkStep3">Hãy nhập mật khẩu mới!</h3>
                  <v-card-actions class="justify-content">
                    <div class="container--fluid align-content-stretch">
                      <v-btn
                        class="blue white--text otp-confirm-btn justify-content"
                        @click="updateCustomer"
                        >Xác nhận
                      </v-btn>
                    </div>
                  </v-card-actions>
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
import swal from "sweetalert";

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
          val === this.password || `Mật khẩu đã nhập không khớp`,
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
      currentOTP: 0,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    onClickChild(value) {
      this.selectedTab = value;
    },

    register() {
      console.log("register");
    },

    reset() {
      this.phone = "";
      this.code = "";
      this.password = "";
      this.repassword = "";
      this.name = "";
      this.email = "";
      this.step = 1;
    },

    backToStep1() {
      this.step = 1;
    },

    registerSuccess() {
      this.$emit("clicked", 1);
    },

    sendEmail() {
      if (this.email != "") {
        let otp = Math.floor(100000 + Math.random() * 900000);
        this.currentOTP = otp;

        this.$loadScript("https://smtpjs.com/v3/smtp.js")
          .then(() => {
            //this Promise return nothing!!!
            window.Email &&
              window.Email.send({
                SecureToken: "369da705-3484-4e4d-a826-ff5911f6d924",
                To: this.email,
                From: "anh.dinhhoangquang@gmail.com",
                Subject: "Mã Xác Nhận Của Bạn Là: ",
                Body: otp,
              }).then((message) => {
                console.log("messge", message);
                this.checkStep1 = false;
                this.step = 2;
              });
          })
          .catch(() => {
            // Failed to fetch script
          });
      } else {
        this.checkStep1 = true;
      }
    },

    enterCode() {
      if (this.currentOTP == this.code) {
        this.checkStep2 = false;
        swal(
          "Xác nhận thành công!",
          "Hãy cập nhật mật khẩu mới nhé!",
          "success"
        );
        this.step = 3;
      } else {
        this.checkStep2 = true;
      }
    },

    updateCustomer() {
      if (this.password != "" && this.repassword != "") {
        axios
          .get(this.host + "/loadCustomerByEmail/" + this.email)
          .then((response) => {
            console.log("response123333", response);
            var customer = response.data;
            customer.password = this.password;
            axios
              .post(this.host + "/updateProfile/" + customer.customer_id, {
                customer,
              })
              .then((response) => {
                console.log("res", response);
                swal("Thành công", "Cập nhật mật khẩu thành công!", "success");
                this.reset();
                this.dialog = false;
              })
              .catch((e) => {
                this.errors.push(e);
              });
          });
      } else {
        this.checkStep3 = true;
      }
    },
  },

  watch: {
    dialog(val) {
      if (!val) {
        this.reset();
      }
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

.justify-content {
  justify-content: center;
}

.content {
  background-color: white;
}
</style>
