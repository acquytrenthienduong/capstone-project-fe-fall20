<template>
  <div class="root">
    <carousel :perPage="1" class="slider">
      <slide>
        <div class="slide">
          <img
            src="../../assets/slides/slide2.jpg"
            class="slide-img"
            alt="banner"
          />
          <div class="slide-content">
            <div class="slide-title">
              TANNING STUDIO ĐẦU TIÊN TẠI VIỆT NAM
            </div>
            <button class="slide-cta-btn">
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </slide>
      <slide>
        <div class="slide">
          <img
            src="../../assets/slides/slide1.jpg"
            class="slide-img"
            alt="banner"
          />
          <div class="slide-content">
            <div class="slide-title">
              TANNING STUDIO ĐẦU TIÊN TẠI VIỆT NAM
            </div>
            <button class="slide-cta-btn">
              Đặt lịch ngay
            </button>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "slides",
  components: {
    Carousel,
    Slide,
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
        max-width: 100%;
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
