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
          <v-btn color="green darken-1" text @click="dialog = false">
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
            <v-text-field label="Old password" outlined></v-text-field>
            <v-text-field outlined label="New password"></v-text-field>
            <v-text-field outlined label="Confirm new password"></v-text-field>
          </v-container>
          <v-card-actions class="px-10 pb-10">
            <v-spacer></v-spacer>
            <v-btn
              color="red darken-1"
              text
              @click="changePasswordDialog = false"
            >
              Hủy
            </v-btn>
            <v-btn
              color="green darken-1"
              text
              @click="changePasswordDialog = false"
            >
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
export default {
  name: "edit-info-modal",
  props: ["closeAccountMenu"],
  data() {
    return {
      dialog: false,
      email: "caosonminh@gmail.com",
      name: "SON TINH",
      changePasswordDialog: false,
      changePhoneDialog: false,
      confirmPhoneDialog: false,
    };
  },
  methods: {
    moveToStep2() {
      this.changePhoneDialog = false;
      this.confirmPhoneDialog = true;
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
</style>