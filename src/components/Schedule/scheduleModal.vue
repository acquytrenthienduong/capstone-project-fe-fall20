<template>
  <v-row class="ml-0">
    <v-dialog v-model="dialog" max-width="1170">
      <!-- <template v-slot:activator="{ on, attrs }">
        <v-btn class="black white--text px-10 py-6" v-bind="attrs" v-on="on">
          ĐẶT LỊCH NGAY
        </v-btn>
      </template> -->

      <v-container fluid class="grey lighten-5">
        <v-row>
          <v-col cols="12" md="8" class="left-col pa-8">
            <p class="title">Thông tin dịch vụ</p>

            <v-row>
              <v-col cols="12" md="6">
                <v-select
                  :items="chooseServices"
                  item-text="name"
                  item-value="value"
                  label="Dịch vụ"
                  class="duration-selector"
                  outlined
                  v-model="selectType"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6"
                ><v-select
                  :items="durationOptions"
                  item-text="name"
                  item-value="value"
                  label="Gói"
                  class="duration-selector"
                  outlined
                  v-model="selectedDuration"
                ></v-select
              ></v-col>
            </v-row>

            <v-row>
              <v-col cols="12" md="6">
                <p class="font-weight-bold">Ngày Hẹn</p>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Chọn ngày"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date"></v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" md="6">
                <p class="font-weight-bold">Giờ hẹn</p>
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
            <!-- <v-row>
              <v-col cols="12" md="6">
                <p class="font-weight-bold">Số lượng người</p>
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
              <v-col cols="12" md="6" class="justify-center align-center d-flex"> </v-col>
            </v-row> -->
          </v-col>

          <!-- right -->
          <v-col cols="12" md="4" class="right-col pa-8" v-if="showReceipt">
            <img class="logo-headline" src="@/assets/logo-black.svg" alt="logo" />
            <p class="title">Thông tin thanh toán</p>
            <div class="customer">
              <p class="customerTitle font-weight-bold">KHÁCH HÀNG</p>
              <p class="name">{{ customerName }}</p>
              <p class="phone">{{ customerPhone }}</p>
              <p class="email">{{ email }}</p>
            </div>
            <div class="services">
              <p class="servicesTitle font-weight-bold">DỊCH VỤ</p>

              <v-list class="transparent">
                <v-list-item class="pa-0">
                  <div class="d-flex flex-row" style="width: 100%">
                    <div class="flex-grow-1">{{ service }}</div>
                  </div>
                </v-list-item>
              </v-list>
            </div>
            <!-- <div class="numberOfPackages">
              <p class="title">SỐ LƯỢNG KHÁCH</p>
              <p>{{ numOfPeople }}</p>
            </div> -->

            <v-spacer></v-spacer>
            <hr />
            <div class="total d-flex flex-row py-8">
              <div class="flex-grow-1 font-weight-bold">THÀNH TIỀN</div>
              <div class="align-right red--text font-weight-bold text--darken-4">
                {{ money | priceVndFormat }}
              </div>
            </div>
          </v-col>
        </v-row>
        <div>
          <v-btn class="center-position black white--text" @click="createNewReservation">
            ĐẶT HẸN
          </v-btn>
        </div>
      </v-container>
    </v-dialog>
    <v-overlay :z-index="99999" :value="overlay">
      <v-progress-circular
        :size="70"
        :width="7"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </v-row>
</template>

<script>
import axios from "axios";
import config from "../../confighost/config";
import swal from "sweetalert";

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
        .get(this.host + "/getAllSubService/" + type)
        .then((res) => {
          this.durationOptions = [];
          res.data.forEach((element) => {
            let selectItem = {};
            if (element.type === 1) {
              selectItem.name = this.transform(element.time);
              selectItem.value = element.sub_service_id;
              selectItem.money = element.money;
            } else if (element.type === 2) {
              selectItem.name = this.transform(element.time);
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
      let dateRaw = new Date(this.date);
      let year = dateRaw.getFullYear();
      let month = dateRaw.getMonth() + 1;
      let dt = dateRaw.getDate();
      if (this.selectedDuration > 0 && this.time != null) {
        if (!this.compareDate(this.date)) {
          axios
            .post(this.host + "/createNewReservation", {
              customer_id: parseInt(localStorage.getItem("customerId"), 10),
              checkin_time: this.time,
              reservation_date: this.date,
              status: 0,
              sub_service_sub_service_id: this.selectedDuration,
              is_access: 0,
              year: year,
              month: month,
              day: dt,
            })
            .then((response) => {
              if (response.status === 200) {
                this.overlay = true;
                setTimeout(() => {
                  this.closeModal();
                  this.overlay = false;
                  swal(
                    "Đặt lịch thành công!",
                    "Lịch của bạn đã được đặt thành công. Chúng tôi sẽ thông báo lại ngay nếu có vấn đề.",
                    "success"
                  );
                  this.reset();
                }, 1000);
                axios
                  .post(this.host + "/createNotification", {
                    content: "Khách Hàng " + this.customerName + " muốn đặt 1 cuộc hẹn",
                  })
                  .then(() => {});
              } else {
                swal(
                  "Rất tiếc!",
                  "Khung giờ này chúng tôi đã kín lịch rồi hãy rời lên 1 hoặc 2 h nhé !",
                  "warning"
                );
              }
            })
            .catch((e) => {
              this.errors.push(e);
            });
        } else {
          swal("Opss ...!", "Hãy chọn 1 ngày trong tương lai !", "warning");
        }
      } else {
        swal("Tạo lịch không thành công!", " Hãy điền đầy đủ thông tin nhé!!", "warning");
      }
    },
    closeModal() {
      this.$store.commit("toggleScheduleModal", false);
    },

    reset() {
      this.selectType = null;
      this.selectedDuration = 0;
      this.date = new Date().toISOString().substr(0, 10);
      this.time = null;
      this.numOfPeople = 0;
    },

    transform(time) {
      // var hms = "02:04:33";
      var a = time.split(":");

      // Hours are worth 60 minutes.
      var minutes = +a[0] * 60 + +a[1] + " phút";
      return minutes;
    },

    compareDate(date) {
      let today = new Date();
      let dateRaw = new Date(date);
      let temp = [];
      temp = this.time.split(":");
      if (today.getFullYear() > dateRaw.getFullYear()) {
        return true;
      }

      if (today.getMonth() > dateRaw.getMonth()) {
        return true;
      }

      if (today.getDate() > dateRaw.getDate()) {
        return true;
      }

      if (today.getDate() === dateRaw.getDate()) {
        if (today.getHours() > parseInt(temp[0], 10)) {
          return true;
        }

        if (today.getMinutes() > parseInt(temp[1], 10)) {
          return true;
        }
      }
      return false;
    },
  },
  watch: {
    dialog(value) {
      if (!value) {
        this.showReceipt = false;
      } else {
        this.showBill();
      }
    },

    selectType: function (val) {
      this.loadSubService(val);
    },

    selectedDuration: function (val) {
      axios
        .get(this.host + "/subServiceFindOne/" + val)
        .then((res) => {
          this.money = res.data.money;
          if (res.data.type === 1) {
            this.service = res.data.name + " " + this.transform(res.data.time);
          } else if (res.data.type === 2) {
            this.service = res.data.name + " " + this.transform(res.data.time);
          } else {
            this.service = res.data.name + " " + res.data.session;
          }
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    // dialog(value){
    //   if(value)
    // }
  },
  computed: {
    dialog: {
      get() {
        return this.$store.state.scheduleModalOpen;
      },
      set(value) {
        this.closeModal(value);
      },
    },
  },
  data() {
    return {
      host: config.config.host,
      // dialog: false, // turn this into vuex state
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      timeSlots: ["5am", "6am", "7am"],
      showReceipt: false,
      numOfPeople: 0,
      radioGroup: 1,
      selectedDuration: 0,
      durationOptions: [],
      selectType: null,
      time: null,
      menu2: false,
      customerName: localStorage.getItem("customerName"),
      customerPhone: localStorage.getItem("customerPhone"),
      email: localStorage.getItem("customerEmail"),
      money: 0,
      service: "",
      overlay: false,
      chooseServices: [
        { value: 1, name: "Stand Up" },
        { value: 2, name: "Lay Down" },
        { value: 3, name: "Spray" },
      ],
    };
  },

  mounted() {
    this.loadSubService(this.selectType);
    this.showBill();
  },
};
</script>
<style lang="scss" scoped>
.left-col {
}
.right-col {
}

.row {
  align-items: center !important;
}

.center-position {
  display: block;
  margin: 0 auto;
  width: 150px;
}
</style>
