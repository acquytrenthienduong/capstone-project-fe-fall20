<template>
  <div class="root">
    <div class="header">
      <div class="inner-content">
        <div class="category-title">Lịch hẹn của bạn</div>
      </div>
    </div>

    <v-container class="orders pt-10">
      <v-alert v-model="alert" outlined type="success" text>
        Đợi 1 chút nhé, chúng tôi sẽ liên hệ cho bạn ngay!
      </v-alert>
      <v-row v-for="item in history" :key="item.reservation_id" class="order">
        <div class="container my-4">
          <v-row>
            <v-col cols="4" class="text-right">
              <img
                class="service-image"
                :src="
                  `https://source.unsplash.com/random/278x278?${item.reservation_id}`
                "
                alt="demo"
              />
            </v-col>
            <v-col cols="8" class="d-flex flex-column pl-10">
              <v-container>
                <v-row
                  ><v-col
                    ><span class="created-date"
                      >Ngày đặt {{ item.reservation_date }}</span
                    ></v-col
                  ></v-row
                >
                <v-row>
                  <v-col>
                    <span class="order-product">
                      GÓI TANNING {{ item.sub_service.time }} phút</span
                    ></v-col
                  >
                  <v-col>
                    <v-chip v-if="item.is_access === 0" label class="pending">
                      Chưa được duyệt
                    </v-chip>
                    <v-chip
                      v-if="item.is_access === 1 && item.status === 0"
                      label
                      class="not-used"
                    >
                      Chưa thực hiện
                    </v-chip>
                    <v-chip
                      v-if="item.is_access === 1 && item.status === 1"
                      label
                      class="used"
                    >
                      Đã thực hiện
                    </v-chip></v-col
                  >
                </v-row>
                <v-row>
                  <v-col>
                    <p>Ngày hẹn {{ item.reservation_date }}</p>
                  </v-col>
                  <v-col>
                    <p>Khung giờ hẹn {{ item.checkin_time }}</p>
                  </v-col>
                </v-row>
                <v-btn
                  v-if="item.is_access === 1 && item.status === 0"
                  color="black"
                  class="white--text mt-10 change-schedule-btn"
                  style="width: 200px"
                  @click="requestChangeReservation"
                  >Yêu cầu đổi lịch
                </v-btn>
              </v-container>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <v-container class="mb-10">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import config from "../confighost/config";

export default {
  name: "category",
  data() {
    return {
      host: config.config.host,
      page: 1,
      customerId: parseInt(localStorage.getItem("customerId"), 10),
      phoneNumber: localStorage.getItem("customerPhone"),
      history: [],
      alert: false,
    };
  },

  methods: {
    loadReservationHistory() {
      axios
        .get(this.host + "/findAllReservationOfCustomer/" + this.customerId)
        .then((res) => {
          this.history = res.data;
        });
    },

    requestChangeReservation() {
      this.$confirm("Bạn chắc chắn muốn đổi lịch chứ?").then((res) => {
        if (res) {
          axios
            .post(this.host + "/createNotification", {
              content:
                "Khách hàng có SĐT " +
                this.phoneNumber +
                " muốn thay đổi lịch hẹn",
            })
            .then(() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              this.alert = true;
              setTimeout(() => {
                this.alert = false;
              }, 5000);
            });
        }
      });
    },
  },

  mounted() {
    this.loadReservationHistory();
  },
};
</script>
<style lang="scss" scoped>
.root {
  .header {
    position: relative;
    background: url("https://source.unsplash.com/1280x720/?girl");
    background-size: cover;
    .inner-content {
      color: #ffffff;
      max-width: 1170px;
      padding: 128px 0;
      margin: 0 auto;
      .category-title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
      }
    }
  }
  .orders {
    margin-top: 40px;
    .order {
      border-bottom: 1px solid #c5c5c5;
      .created-date {
        color: #828282;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
      }
      .order-product {
        font-style: normal;
        font-weight: normal;
        font-size: 1.2rem;
        text-transform: uppercase;

        color: #000000;
      }
      &:last-child {
        border: none;
      }
      .service-image {
        border-radius: 50%;
      }
      .change-schedule-btn {
        border-radius: 0;
      }
    }
  }
}

.pending {
  color: #e5e5e5;
  background-color: gray !important;
}

.used {
  color: #e5e5e5;
  background-color: green !important;
}

.not-used {
  color: #e5e5e5;
  background-color: palevioletred !important;
}
</style>
