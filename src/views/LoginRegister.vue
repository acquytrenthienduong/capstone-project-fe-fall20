<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn menu-btn-cta v-bind="attrs" v-on="on">
          Đăng Ký
        </v-btn>
        <v-btn menu-btn-cta v-bind="attrs" v-on="on">
          Đăng Nhập
        </v-btn>
      </template>
      <v-tabs>
        <v-tab>Đăng Ký</v-tab>
        <v-tab>Đăng Nhập</v-tab>
        <v-icon class="close-button" @click="dialog = false">{{
          mdiClose
        }}</v-icon>
        <v-tab-item>
          <v-card>
            <v-card-title class="center">
              <span class="headline">Đăng ký tài khoản mới</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="align-items">
                  <v-col cols="12" sm="1">
                    <v-icon>{{ svgPath }}</v-icon>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <v-text-field
                      label="Số điện thoại của bạn"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="1">
                    <v-icon>{{ mdiLock }}</v-icon>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <v-text-field
                      label="Mật khẩu*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="1">
                    <v-icon>{{ mdiLock }}</v-icon>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <v-text-field
                      label="Nhập lại mật khẩu*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-btn color="blue darken-1" text @click="dialog = false">
                Tiếp tục
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card>
            <v-card-title class="center">
              <span class="headline">Đăng nhập bằng tài khoản của bạn</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="align-items">
                  <v-col cols="12" sm="1">
                    <v-icon>{{ svgPath }}</v-icon>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <v-text-field
                      label="Số điện thoại của bạn"
                      required
                    ></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="1">
                    <v-icon>{{ mdiLock }}</v-icon>
                  </v-col>
                  <v-col cols="12" sm="11">
                    <v-text-field
                      label="Mật khẩu*"
                      type="password"
                      required
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-btn
                class="center-button"
                color="blue darken-1"
                @click="dialog = false"
              >
                Đăng nhập
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-tab-item>
      </v-tabs>
    </v-dialog>
  </v-row>
</template>

<script>
import { mdiPhone, mdiLock, mdiCloseBox } from "@mdi/js";

export default {
  data() {
    return {
      dialog: false,
      svgPath: mdiPhone,
      mdiLock: mdiLock,
      mdiClose: mdiCloseBox,
    };
  },
};
</script>

<style>
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

.align-items {
  align-items: center;
}

.center {
  display: flex;
  justify-content: center;
}

.close-button {
  margin-left: auto;
  margin-bottom: 25px;
}

.v-card__actions > .v-btn {
  margin-left: auto !important;
  margin-right: auto !important;
}
</style>
