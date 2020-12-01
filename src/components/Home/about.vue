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
                Hãy tưởng tượng mọi người đang nghĩ về kỳ nghỉ, bãi biển, mặt
                trời lặn và hương vị ngọt ngào của mật ong chỉ khi nhìn bạn.
                Navatan ở đây để biến điều đó thành sự thật. Tại Navatan, chúng
                tôi tin rằng một làn da rám nắng không chỉ đơn thuần là một màu
                da khác, nó biến bạn thành một con người khác, một phiên bản
                tiệc tùng vui vẻ, không còn lo lắng của chính bạn. Giống như
                việc thay đổi kiểu tóc sau khi chia tay, điều này sẽ giúp bạn
                thay đổi mà không có nguy cơ phải cắt tóc.
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
                Thời da trắng sáng không tỳ vết khiến chị em đổ xô tắm trắng đã
                qua. Thay vào đó, xu hướng da nâu căng bóng quyến rũ mới là
                những gì các siêu mẫu, hot blogger trong và ngoài nước cũng như
                giới trẻ đang theo đuổi. Đây chính là lý do Navatan được thành
                lập ra, Navatan chính là người bạn thân giúp bạn đạt được làn da
                trendy mong ước của nhiều cô gái,chàng trai một cách hoàn hảo và
                an toàn<br />
                - HIỆU QUẢ - AN TOÀN – NHANH CHÓNG<br />
                - Da sau khi tanning bằng máy sẽ cho ra một màu nâu nỏ, sáng
                bóng và đều màu, đẹp hơn rất nhiều so với màu da phơi nắng tự
                nhiên.<br />
                - Hấp thụ Vitamin D cải thiện cấu trúc xương<br />
                -Tăng cường sức khỏe và khả năng đề kháng của cơ thể -Cải thiện
                hệ thống miễn dịch, giúp tuần hoàn, lưu thông máu<br />
                - Hỗ trợ ngăn chặn các chứng bệnh về da như vảy nến, mụn lưng,…
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
