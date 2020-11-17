<template>
  <div class="container">
    <div class="text-center py-4">
      <img class="logo-headline" src="@/assets/logo-black.svg" alt="logo" />
    </div>
    <v-stepper v-model="step">
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
                    prepend-inner-icon="mdi-phone"
                    label="Số điện thoại của bạn"
                    outlined
                    required
                  ></v-text-field>

                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    label="Mật khẩu*"
                    type="password"
                    outlined
                    required
                  ></v-text-field>

                  <v-text-field
                    prepend-inner-icon="mdi-lock"
                    label="Nhập lại mật khẩu*"
                    type="password"
                    outlined
                    required
                  ></v-text-field>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="first-step-btn"
                color="blue darken-1"
                @click="step = 2"
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
                prepend-inner-icon="mdi-shield-check"
                label="Mã xác nhận"
                type="text"
                name="otp"
                outlined
                required
                :rules="[validateOTP]"
              ></v-text-field>

              <v-row class="mb-8 text-center">
                <v-col>
                  <v-btn class="red--text" text> Gửi lại mã </v-btn>
                </v-col>
              </v-row>
              <div class="container--fluid align-content-stretch">
                <v-btn
                  class="blue white--text otp-confirm-btn"
                  @click="step = 3"
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
                prepend-inner-icon="mdi-account"
                label="Họ tên"
                type="text"
                name="fullName"
                outlined
                required
              ></v-text-field>
              <v-text-field
                prepend-inner-icon="mdi-email"
                label="Email"
                type="email"
                name="email"
                outlined
                required
              ></v-text-field>

              <div class="container--fluid align-content-stretch">
                <v-btn class="blue white--text complete-profile-btn"
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

export default {
  name: "register-steps",
  props: ["dialog"],
  watch: {
    dialog(value) {
      if (!value) {
        this.step = 1;
      }
    },
  },
  methods: {
    validateOTP(val) {
      console.log(val);
      return "WRONG OTP";
    },
  },
  data() {
    return {
      step: 1,

      svgPath: mdiPhone,
      mdiLock: mdiLock,
      mdiClose: mdiCloseBox,
    };
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
</style>