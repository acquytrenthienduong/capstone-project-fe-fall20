<template>
  <v-row class="ml-0">
    <v-dialog v-model="dialog" max-width="1170">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="black white--text px-10 py-6" v-bind="attrs" v-on="on">
          ĐẶT LỊCH NGAY
        </v-btn>
      </template>

      <v-container fluid class="grey lighten-5">
        <v-row>
          <v-col :cols="showReceipt ? 8 : 12" class="left-col pa-8">
            <p class="title">Thông tin dịch vụ</p>

            <v-row>
              <v-col cols="4">
                <v-radio-group v-model="selectType" row>
                  <v-radio label="Tanning" :value="1"></v-radio>
                  <v-radio label="Massage" :value="2"></v-radio>
                </v-radio-group>
              </v-col>
              <v-col cols="8"
                ><v-select
                  :items="durationOptions"
                  item-text="name"
                  item-value="value"
                  label="Duration"
                  class="duration-selector"
                  outlined
                  v-model="selectedDuration"
                ></v-select
              ></v-col>
            </v-row>

            <!-- <v-row>
              <v-col>
                <p class="font-weight-bold">MASSAGE</p>

                <v-radio-group v-model="radioGroup">
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row> -->

            <v-row>
              <v-col>
                <p class="font-weight-bold">Ngay check in</p>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker in menu"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      outlined
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">
                      Cancel
                    </v-btn>
                    <v-btn text color="primary" @click="saveDate(date)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="time"
                      label="Chọn Giờ"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                  ></v-time-picker>
                </v-menu>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <p class="font-weight-bold">So luong nguoi</p>

                <v-text-field
                  v-model="numOfPeople"
                  label="Number"
                  type="number"
                  min="1"
                  max="10"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col class="justify-center align-center d-flex">
                <v-btn
                  class="black white--text flex-grow-1 py-6"
                  @click="showBill"
                >
                  Tiếp tục
                </v-btn>
              </v-col>
            </v-row>
          </v-col>

          <!-- right -->
          <v-col cols="4" class="right-col pa-8" v-if="showReceipt">
            <img
              class="logo-headline"
              src="@/assets/logo-black.svg"
              alt="logo"
            />
            <p class="title">Thông tin thanh toán</p>
            <div class="customer">
              <p class="customerTitle font-weight-bold">KHÁCH HÀNG</p>
              <p class="name">{{ customerName }}</p>
              <p class="phone">{{ customerPhone }}</p>
              <p class="email">son@gmail.com</p>
            </div>
            <div class="services">
              <p class="servicesTitle font-weight-bold">DỊCH VỤ</p>

              <v-list class="transparent">
                <v-list-item class="pa-0" v-for="i in 2" :key="i">
                  <div class="d-flex flex-row" style="width: 100%">
                    <div class="flex-grow-1">TANNING 20 MINUTES</div>
                    <div class="align-right">
                      {{ 500000 | priceVndFormat }}
                    </div>
                  </div>
                </v-list-item>
              </v-list>
            </div>
            <div class="numberOfPackages">
              <p class="title">SỐ LƯỢNG KHÁCH</p>
              <p>1</p>
            </div>

            <v-spacer></v-spacer>
            <hr />
            <div class="total d-flex flex-row py-8">
              <div class="flex-grow-1 font-weight-bold">THÀNH TIỀN</div>
              <div
                class="align-right red--text font-weight-bold text--darken-4"
              >
                {{ selectedDuration.money | priceVndFormat }}
              </div>
            </div>
            <div class="confirm d-flex">
              <v-btn
                class="black white--text flex-grow-1 py-6"
                @click="createNewReservation"
              >
                ĐẶT HẸN
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-dialog>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  name: "schedule-modal",
  methods: {
    saveDate(date) {
      this.$refs.menu.save(date);
      this.menu = false;
    },

    showBill() {
      this.showReceipt = true;
    },

    loadSubService(type) {
      axios
        .get("http://localhost:8000/getAllSubService/" + type)
        .then((res) => {
          this.durationOptions = [];
          res.data.forEach((element) => {
            let selectItem = {};
            if (element.type === 1) {
              selectItem.name = element.time;
              selectItem.value = element.sub_service_id;
              selectItem.money = element.money;
            } else {
              selectItem.name = element.session;
              selectItem.value = element.sub_service_id;
              selectItem.money = element.money;
            }
            this.durationOptions.push(selectItem);
          });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    createNewReservation() {

      axios
        .post("http://localhost:8000/createNewReservation", {
          customer_id: parseInt(localStorage.getItem("customerId"), 10),
          checkin_time: this.time,
          reservation_date: this.date,
          status: 0,
          sub_service_sub_service_id: this.selectedDuration,
          is_access: 0,
        })
        .then(() => {
          setTimeout(() => {
            this.dialog = false;
          }, 1000);
          axios
            .post("http://localhost:8000/createNotification", {
              content: "You got a reservation from " + this.customerName,
            })
            .then(() => {
            });
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.showReceipt = false;
      }
    },

    selectType: function(val) {
      this.loadSubService(val);
    },
  },
  data() {
    return {
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      timeSlots: ["5am", "6am", "7am"],
      showReceipt: false,
      numOfPeople: 0,
      radioGroup: 1,
      selectedDuration: {},
      durationOptions: [],
      selectType: 1,
      time: null,
      menu2: false,
      customerName: localStorage.getItem("customerName"),
      customerPhone: localStorage.getItem("customerPhone"),
    };
  },

  mounted() {
    this.loadSubService(1);
  },
};
</script>
<style lang="scss" scoped>
.left-col {
}
.right-col {
}
</style>
