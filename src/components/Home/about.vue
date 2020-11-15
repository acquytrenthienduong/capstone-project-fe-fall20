<template>
  <div class="root">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="slide">
          <div class="left-area">
            <div class="inner">
              <img src="@/assets/home/about-1.png" alt="user" />
            </div>
          </div>
          <div class="right-area">
            <div class="inner">
              <div class="title">
                WE ARE NAVATAN!
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide">
          <div class="left-area">
            <div class="inner">
              <img src="@/assets/home/about-2.png" alt="user" />
            </div>
          </div>
          <div class="right-area">
            <div class="inner">
              <div class="title">
                WE ARE NAVATAN!
              </div>
              <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "home-about",
  data() {
    return {
      swiperOptions: {
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.root {
  padding-top: 32px;
  padding-bottom: 32px;
  .slide {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .left-area {
      flex: 1;
      .inner {
        padding: 25%;
      }
    }
    .right-area {
      flex: 1;
      text-align: left;
      .inner {
        padding: 5%;
        padding-right: 25%;
        .title {
          font-size: 42px;
          margin-bottom: 60px;
        }
      }
    }
  }
}
</style>
