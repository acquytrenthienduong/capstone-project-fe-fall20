<template>
  <div class="root">
    <v-row no-gutters class="details">
      <v-col cols="12" md="6" class="leftarea">
        <div class="product-images">
          <v-img
            class="product-image-slide"
            :src="dataServices[detailType - 1].src"
            alt="navatan1"
          />
        </div>
      </v-col>

      <v-col cols="12" md="6" class="rightarea">
        <div class="container">
          <div class="service">
            <h1>{{ dataServices[detailType - 1].title }}</h1>
            <v-divider></v-divider>
            <br />
            <p>
              {{ dataServices[detailType - 1].intro }}
            </p>
            <h3>{{ dataServices[detailType - 1].tips }}</h3>
            <ul>
              <li v-for="(list, i) in dataServices[detailType - 1].ul" :key="i">
                {{ list }}
              </li>
            </ul>
          </div>

          <div class="option-price">
            {{ money | priceVndFormat }}
          </div>
          <button class="cta-btn" @click="showScheduleModal">
            Đặt lịch ngay
          </button>
          <!-- <h3 v-if="!customerName">
            Hãy tạo tài khoản hoặc đăng nhập trước nhé!
          </h3> -->
        </div>
      </v-col>
    </v-row>
    <sequential-entrance fromRight>
      <div class="title">7 BƯỚC TANNING TẠI NAVATAN</div>
    </sequential-entrance>
    <Step />
    <sequential-entrance fromRight>
      <div class="title">Sản phẩm dưỡng da</div>
    </sequential-entrance>
    <Products />

    <Socials />
  </div>
</template>

<script>
import Products from "@/components/Home/products";
import Socials from "@/components/Home/socials";
import Step from "@/components/Home/step";

import config from "../confighost/config";
import swal from "sweetalert";

export default {
  name: "product-detail",
  components: { Products, Socials, Step },
  computed: {
    optionPrice() {
      return this.selectedDuration * 20000;
    },
  },
  data() {
    return {
      dataServices: [
        {
          src: require("@/assets/services/img.jpg"),
          title: "STAND UP TANNING",
          intro:
            "Stand up Tanning là phương pháp làm tanning chiều thẳng đứng từ sâu bên trong có sự hỗ trợ của máy nhuộm hiện đại được sản xuất tại Đức giúp đưa các dưỡng chất thẩm thấu sâu vào da nhờ tác động nhiệt của ánh sáng đỏ đem đến tác dụng hiệu quả tuyệt vời.",
          tips: "Tips làn da tanning hoàn hảo và an toàn",
          ul: [
            "Chọn nguồn năng lượng UV an toàn",
            "Dưỡng ẩm đầy đủ",
            "Luôn luôn bôi kem chống nắng",
            "Mặc đúng đồ khi tắm nắng để đều màu Lật mình, di chuyển để đều màu",
            "Lật mình, di chuyển để đều màu",
          ],
        },
        {
          src: require("@/assets/services/img2.jpg"),
          title: "LAY DOWN TANNING",
          intro:
            "Hiện tại ở Navatan có ba cấp độ nằm khác nhau để lựa chọn - cả ba đều là giường Ergoline kết hợp hiệu suất tanning & sự thoải mái để tạo ra trải nghiệm tuyệt vời cho bạn",
          tips: "Thông tin dịch vụ",
          ul: [
            "15 phút phơi sáng tối đa / 9 phút phiên trung bình",
            "Đèn cao áp toàn thân 10 x 620 watt",
            "Đèn cao áp mặt có thể điều chỉnh 2 x 620 watt",
            "Các phiên tắm nắng riêng lẻ",
            "Tanning vai với đèn spaghetti",
          ],
        },
        {
          src: require("@/assets/services/img3.jpg"),
          title: "SPRAY TANNING",
          intro:
            "Tanning dạng xịt là một hình thức tanning khi một lớp sương mịn được phun lên cơ thể của bạn. Dạng tanning này cho phép bạn tự do lựa chọn một trong các giải pháp nhuộm màu trong, tối hoặc màu venetian tại Navatan.",
          tips: "Thông tin dịch vụ",
          ul: [
            "Sẽ tạo ra một làn da sáng tự nhiên và phát triển trong khoảng thời gian 24 giờ. Được đề xuất cho tông màu da trung bình sáng.",
            "Một làn da rám nắng từ trung bình đến sẫm giống như cách bạn xuất hiện sau nhiều tuần rám nắng hoặc “màu ngoài bãi biển” xuất hiện ngay lập tức. Khuyên dùng cho tông da trung bình tối.",
            "Sử dụng SunCapsule 220 trong 4 phút sau khi xịt sẽ đẩy nhanh quá trình hấp thụ dung dịch cũng như giúp tăng màu sắc của bạn với tia UV tự nhiên",
          ],
        },
      ],
      host: config.config.host,
      swiperOptions: {
        // direction: "vertical",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            direction: "vertical",
          },
        },
      },
      selectedDuration: {},
      durationOptions: [],
      money: 0,
      selectType: 1,
      customerName: localStorage.getItem("customerName"),
      detailType: 0,
    };
  },

  methods: {
    showScheduleModal() {
      if (!this.customerName) {
        swal("Rất tiếc!", "Bạn phải đăng nhập đã nhé !", "warning");
      } else {
        this.$store.commit("toggleScheduleModal", true);
      }
    },

    init() {
      console.log("xxxxxxxxxxxxxxxxxx", this.$route.params);
      this.detailType = parseInt(this.$route.params.type, 10);
    },
  },
  mounted() {
    this.init();
  },
  watch: {
    $route() {
      this.init();
    },
  },
};
</script>
<style lang="scss" scoped>
.root {
  .title {
    margin-top: 5%;
    margin-bottom: -3%;
    padding: 0 0;
    text-align: center;
    font-size: 30px !important;
    font-weight: bold;
    text-transform: uppercase;
  }
  .details {
    background-image: url("~@/assets/Background.jpg");
    background-size: cover;
    background-position: center center;
    margin-bottom: 0%;
    .leftarea {
      .product-images {
        height: 630px;
        margin-top: 8%;
        .product-image-slide {
          text-align: center;
          inline-size: fit-content;
          margin-left: 15%;
        }
      }
    }
    .rightarea {
      display: flex;
      margin-top: 3%;
      align-items: center;
      .container {
        max-width: 500px;
        margin-left: 10% !important;
      }
      .myTitle {
        // font-family: "SVN-Gotham", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        color: #000000;
        margin-bottom: 24px;
      }
      .duration-selector {
        flex: 0;
      }
      .option-price {
        // font-family: "SVN-Gotham", sans-serif;

        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
        margin-top: 40px;
      }
      .cta-btn {
        padding: 16px 72px;
        background: #000000;
        // font-family: "SVN-Gotham", sans-serif;

        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 31px;
        display: flex;
        align-items: center;
        text-align: center;
        text-transform: uppercase;

        color: #ffffff;
      }
    }
  }
}

.container {
  margin-left: 15% !important;
}
.service {
  margin-top: -30%;
}
@media (min-width: 768px) {
  .root {
    .details {
      margin-top: 60px;
    }
  }
}
</style>
