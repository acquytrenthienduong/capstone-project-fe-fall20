<template>
  <div class="root">
    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
      <swiper-slide v-for="item in slides" :key="item" class="slide">
        <img
          :src="`https://source.unsplash.com/random/1280x720?${item}`"
          class="slide-img"
          alt="banner"
        />
        <div class="slide-content">
          <div class="slide-title">TANNING STUDIO ĐẦU TIÊN TẠI VIỆT NAM</div>
          <button class="slide-cta-btn">Đặt lịch ngay</button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "slides",
  components: {},
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
      },
      slides: [1, 2, 3, 4, 5],
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  .slider {
    max-height: 970px;
    .slide {
      position: relative;
      .slide-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .slide-content {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .slide-title {
          color: #ffffff;
          font-size: 32px;
          margin-bottom: 24px;
        }
        .slide-cta-btn {
          color: #ffffff;
          background: rgba(197, 197, 197, 0.4);
          border: 1px solid #ffffff;
          border-radius: 2px;
          padding: 12px 24px;
          text-transform: uppercase;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

<style lang="scss">
.VueCarousel-pagination {
  position: absolute;
  bottom: 16px;
}
</style>
