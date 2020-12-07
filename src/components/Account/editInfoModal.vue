<template>
  <v-row no-gutters justify="center">
    <v-dialog v-model="dialog" persistent max-width="700">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item-title v-bind="attrs" v-on="on">
          Chỉnh sửa thông tin
        </v-list-item-title>
      </template>
      <v-card>
        <v-card-title class="title px-8 py-4">
          THÔNG TIN KHÁCH HÀNG
        </v-card-title>
        <v-container class="px-8">
          <v-row>
            <v-col>
              <v-text-field
                v-model="name"
                prepend-inner-icon="mdi-account"
                label="Họ và tên"
                outlined
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="email"
                prepend-inner-icon="mdi-email"
                label="email"
                outlined
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn
                color="black"
                class="white--text px-10 py-6"
                style="width: 100%"
                @click="changePasswordDialog = true"
                >THAY ĐỔI MẬT KHẨU</v-btn
              >
            </v-col>
            <v-col>
              <v-btn
                color="black"
                class="white--text px-10 py-6"
                style="width: 100%"
                @click="changePhoneDialog = true"
                >THAY ĐỔI SỐ ĐIỆN THOẠI</v-btn
              >
            </v-col>
          </v-row>
        </v-container>
        <v-card-actions class="py-4 px-8">
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="updateCustomer">
            LƯU THAY ĐỔI
          </v-btn>
          <v-btn color="red darken-1" text @click="dialog = false">
            THOÁT
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- change pass modal -->
    <v-row justify="center">
      <v-dialog v-model="changePasswordDialog" persistent max-width="390">
        <v-card>
          <v-card-title class="title"> THAY ĐỔI MẬT KHẨU </v-card-title>
          <v-container class="px-10 pt-10">
            <v-text-field
              v-model="oldPassword"
              label="Mật khẩu cũ"
              outlined
            ></v-text-field>
            <v-text-field
              v-model="newPassWord"
              outlined
              label="Mật khẩu mới"
              :rules="[rules.required, rules.min]"
            ></v-text-field>
            <v-text-field
              v-model="confimPassword"
              outlined
              label="Nhập lại mật khẩu mới"
              :rules="[rules.required, rules.min, rules.passWordMatch]"
            ></v-text-field>
            <h3 v-if="checkEmpty">Hãy nhập đủ thông tin nhé!</h3>
            <h3 v-if="checkMatchPW">Xác nhận mật khẩu mới không đúng!</h3>
            <h3 v-if="checkCurrentPassword">
              Mật khẩu hiện tại của bạn không đúng!
            </h3>
          </v-container>
          <v-card-actions class="px-10 pb-10">
            <v-spacer></v-spacer>
            <v-btn color="red darken-1" text @click="reset">
              Hủy
            </v-btn>
            <v-btn color="green darken-1" text @click="changePassdRule">
              Lưu
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- change phone modal  -->
    <v-row justify="center">
      <v-dialog v-model="changePhoneDialog" persistent max-width="390">
        <v-card>
          <v-card-title class="title"> THAY ĐỔI SỐ ĐIỆN THOẠI </v-card-title>
          <v-container class="px-10 pt-10">
            <v-text-field
              label="Nhập số điện thoại mới"
              outlined
            ></v-text-field>
            <v-text-field outlined label="Nhập mật khẩu"></v-text-field>
          </v-container>
          <v-card-actions class="px-10 pb-10">
            <v-spacer></v-spacer>
            <v-btn
              color="black darken-1"
              class="white--text"
              @click="moveToStep2"
            >
              Tiếp tục
            </v-btn>
            <v-btn color="red darken-1" text @click="changePhoneDialog = false">
              Thoát
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <!-- change phone otp modal  -->
    <v-row justify="center">
      <v-dialog v-model="confirmPhoneDialog" persistent max-width="390">
        <v-card>
          <v-card-title class="title"> XÁC THỰC SỐ ĐIỆN THOẠI</v-card-title>
          <v-container class="px-10 pt-10">
            <v-text-field label="Nhập OTP" outlined></v-text-field>
          </v-container>
          <v-card-actions class="px-10 pb-10">
            <v-spacer></v-spacer>
            <v-btn
              color="black darken-1"
              class="white--text"
              @click="moveToStep2"
            >
              Xác nhận
            </v-btn>
            <v-btn
              color="red darken-1"
              text
              @click="confirmPhoneDialog = false"
            >
              Hủy
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </v-row>
</template>
<script>
import axios from "axios";
import config from "../../confighost/config";
import swal from "sweetalert";

export default {
  name: "edit-info-modal",
  props: ["closeAccountMenu"],
  data() {
    return {
      host: config.config.host,
      dialog: false,
      email: localStorage.getItem("customerEmail"),
      name: localStorage.getItem("customerName"),
      customerId: localStorage.getItem("customerId"),
      changePasswordDialog: false,
      changePhoneDialog: false,
      confirmPhoneDialog: false,
      oldPassword: "",
      newPassWord: "",
      confimPassword: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        passWordMatch: (val) =>
          val === this.newPassWord || `Confirm password don't match`,
      },

      checkEmpty: false,
      checkMatchPW: false,
      checkCurrentPassword: false,
    };
  },
  methods: {
    moveToStep2() {
      this.changePhoneDialog = false;
      this.confirmPhoneDialog = true;
    },

    updateCustomer() {
      axios
        .get(this.host + "/loadCustomer/" + this.customerId)
        .then((response) => {
          console.log("response", response);
          var customer = response.data;
          customer.name = this.name;
          customer.email = this.email;
          localStorage.setItem("customerName", customer.name);
          localStorage.setItem("customerEmail", customer.email);
          // localStorage.setItem("customerPhone", response.data.account);
          axios
            .post(this.host + "/updateProfile/" + this.customerId, {
              customer,
            })
            .then((response) => {
              console.log("res", response);
              swal("Thành công", "Cập nhật thông tin thành công!", "success");
              this.dialog = false;
            })
            .catch((e) => {
              this.errors.push(e);
            });
        });
    },

    reset() {
      this.oldPassword = "";
      this.newPassWord = "";
      this.confimPassword = "";
      this.changePasswordDialog = false;
      this.checkEmpty = false;
      this.checkMatchPW = false;
      this.checkCurrentPassword = false;
    },

    changePassdRule() {
      if (
        this.oldPassword != "" &&
        this.newPassWord != "" &&
        this.confimPassword != ""
      ) {
        this.checkEmpty = false;
        if (this.newPassWord === this.confimPassword) {
          this.checkMatchPW = false;
          axios
            .get(this.host + "/loadCustomer/" + this.customerId)
            .then((response) => {
              console.log("response", response);
              if (response.data.password === this.oldPassword) {
                var customer = response.data;
                customer.password = this.newPassWord;
                axios
                  .post(this.host + `/updateProfile/` + this.customerId, {
                    customer,
                  })
                  .then((response) => {
                    console.log("res", response);
                    swal("Thành công", "Đổi mật khẩu thành công!", "success");

                    this.reset();
                    this.changePasswordDialog = false;
                  })
                  .catch((e) => {
                    this.errors.push(e);
                  });
              } else {
                this.checkCurrentPassword = true;
              }
            });
        } else {
          this.checkMatchPW = true;
          this.changePasswordDialog = true;
        }
      } else {
        this.checkEmpty = true;
      }
    },
  },
  watch: {
    dialog(val) {
      if (val) {
        this.closeAccountMenu();
      }
    },
  },
};
</script>
<style lang="scss" scoped>
h3 {
  color: red;
}
</style>
