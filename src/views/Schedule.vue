<template>
  <div class="root">
    <div class="details">
      <div class="leftarea">
        <swiper ref="mySwiper" :options="swiperOptions" class="product-images">
          <swiper-slide v-for="n in 4" :key="n" class="product-image-slide">
            <img
              :src="`https://source.unsplash.com/random/480x720?${n}`"
              alt="demo"
            />
          </swiper-slide>

          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
      <div class="rightarea">
        <div class="myTitle">Chọn khoảng thời gian tanning</div>
        <v-select
          :items="durationOptions"
          label="Duration"
          class="duration-selector"
          outlined
          v-model="selectedDuration"
        ></v-select>
        <div class="option-price">
          {{ optionPrice | priceVndFormat }}
        </div>

        <button class="cta-btn">ĐẶT LỊCH NGAY</button>
      </div>
    </div>
    <Products />
  </div>
</template>

<script>
import Products from "../components/Schedule/products";
export default {
  name: "product-detail",
  components: { Products },
  computed: {
    optionPrice() {
      return this.selectedDuration * 20000;
    },
  },
  data() {
    return {
      swiperOptions: {
        direction: "vertical",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      selectedDuration: 20,
      durationOptions: [
        { text: "20 minutes", value: 20 },
        { text: "50 minutes", value: 50 },
        { text: "100 minutes", value: 100 },
        { text: "200 minutes", value: 200 },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.root {
  .details {
    background: #e5e5e5;
    display: flex;
    padding: 32px;
    .leftarea {
      padding: 32px;
      flex: 1;
      width: 50%;
      .product-images {
        height: 700px;
        .product-image-slide {
          text-align: center;
        }
      }
    }
    .rightarea {
      flex: 1;
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
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
        margin-bottom: 200px;
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

        color: #FFFFFF;
      }
    }
  }
}
</style>
