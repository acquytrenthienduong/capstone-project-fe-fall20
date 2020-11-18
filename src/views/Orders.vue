<template>
  <div class="root">
    <div class="header">
      <div class="inner-content">
        <div class="category-title">Lịch hẹn của bạn</div>
      </div>
    </div>
    <v-container class="orders pt-10">
      <v-row v-for="item in history" :key="item.reservation_id" class="order">
        <div class="container my-4">
          <v-row>
            <v-col cols="4" class="text-right">
              <img
                class="service-image"
                :src="
                  `https://source.unsplash.com/random/128x128?${item.reservation_id}`
                "
                alt="demo"
              />
            </v-col>
            <v-col cols="8" class="d-flex flex-column pl-10">
              <p>Ngày đặt {{ item.reservation_date }}</p>
              <div>
                <span>GÓI TANNING {{ item.sub_service.time }} phút</span>
                <v-chip v-if="item.is_access === 0" label class="ml-4 pending">
                  Chưa được duyệt
                </v-chip>
                <v-chip
                  v-if="item.is_access === 1 && item.status === 0"
                  label
                  class="ml-4 not-used"
                >
                  Chưa thực hiện
                </v-chip>
                <v-chip
                  v-if="item.is_access === 1 && item.status === 1"
                  label
                  class="ml-4 used"
                >
                  Đã thực hiện
                </v-chip>
              </div>
              <v-row style="max-width: 600px">
                <v-col>
                  <p>Ngày hẹn {{ item.reservation_date }}</p>
                </v-col>
                <v-col>
                  <p>Khung giờ hẹn {{ item.checkin_time }}</p>
                </v-col>
              </v-row>
              <v-btn
                color="black"
                class="white--text mt-10"
                style="width: 200px"
                >Yêu cầu đổi lịch
              </v-btn>
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
export default {
  name: "category",
  data() {
    return {
      page: 1,
      customerId: parseInt(localStorage.getItem("customerId"), 10),
      history: [],
    };
  },

  methods: {
    loadReservationHistory() {
      axios
        .get(
          "http://localhost:8000/findAllReservationOfCustomer/" +
            this.customerId
        )
        .then((res) => {
          this.history = res.data;
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
      &:last-child {
        border: none;
      }
      .service-image {
        border-radius: 50%;
      }
    }
  }
}

.pending {
  background-color: gray !important;
}

.used {
  background-color: green !important;
}

.not-used {
  background-color: palevioletred !important;
}
</style>
