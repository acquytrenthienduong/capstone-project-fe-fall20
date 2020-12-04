<template>
  <div class="root">
    <v-row no-gutters class="details">
      <v-col cols="12" md="6" class="leftarea">
        <swiper ref="mySwiper" :options="swiperOptions" class="product-images">
          <swiper-slide v-for="n in 4" :key="n" class="product-image-slide">
            <img
              :src="`https://source.unsplash.com/random/480x720?${n}`"
              alt="demo"
            />
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </v-col>

      <v-col cols="12" md="6" class="rightarea">
        <div class="container">
          <v-radio-group v-model="selectType" row>
            <v-radio label="Tanning" :value="1"></v-radio>
            <v-radio label="Massage" :value="2"></v-radio>
          </v-radio-group>
          <div v-if="selectType === 1" class="myTitle">
            Chọn khoảng thời gian tanning
          </div>
          <div v-if="selectType === 2" class="myTitle">Chọn gói Massage</div>
          <v-select
            :items="durationOptions"
            item-text="name"
            item-value="value"
            label="Duration"
            class="duration-selector"
            outlined
            v-model="selectedDuration"
          ></v-select>
          <div class="option-price">
            {{ money | priceVndFormat }}
          </div>
          <button class="cta-btn" @click="showScheduleModal">
            Đặt lịch ngay
          </button>
          <h3 v-if="!customerName">
            Hãy tạo tài khoản hoặc đăng nhập trước nhé!
          </h3>
        </div>
      </v-col>
    </v-row>
    <Products />
    <Introduction />
    <Socials />
  </div>
</template>

<script>
import Products from "@/components/Schedule/products";
import Socials from "@/components/Home/socials";
import Introduction from "@/components/Schedule/introduction";
import axios from "axios";
import config from "../confighost/config";

export default {
  name: "product-detail",
  components: { Products, Socials, Introduction },
  computed: {
    optionPrice() {
      return this.selectedDuration * 20000;
    },
  },
  data() {
    return {
      host: config.config.host,
      swiperOptions: {
        // direction: "vertical",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          "768": {
            direction: "vertical",
          },
        },
      },
      selectedDuration: {},
      durationOptions: [],
      money: 0,
      selectType: 1,
      customerName: localStorage.getItem("customerName"),
    };
  },

  methods: {
    loadSubService(type) {
      axios
        .get(this.host + "/getAllSubService/" + type)
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
    showScheduleModal() {
      this.$store.commit("toggleScheduleModal", true);
    },
  },

  mounted() {
    this.loadSubService(1);
  },

  watch: {
    selectType: function(val) {
      this.loadSubService(val);
    },

    selectedDuration: function(val) {
      axios
        .get(this.host + "/subServiceFindOne/" + val)
        .then((res) => {
          this.money = res.data.money;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.root {
  .details {
    // background: #e5e5e5;

    .leftarea {
      .product-images {
        height: 700px;
        .product-image-slide {
          text-align: center;
        }
      }
    }
    .rightarea {
      display: flex;
      align-items: center;
      .container {
        max-width: 500px;
        margin-left: 0;
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
</style>
