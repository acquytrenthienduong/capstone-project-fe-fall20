<template>
  <div class="root">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
      style="height: 100%"
    >
      <v-carousel-item v-for="(slide, i) in items" :src="slide.src" :key="i">
        <v-jumbotron dark>
          <v-container fill-height>
            <v-layout align-center>
              <v-flex>
                <h3 class="display-3">{{ slide.title }}</h3>
                <button
                  v-if="customerName"
                  class="slide-cta-btn"
                  @click="showScheduleModal"
                >
                  Đặt lịch ngay
                </button>
                <button
                  v-if="!customerName"
                  class="slide-cta-btn"
                  @click="showWhenNotLogin"
                >
                  Đặt lịch ngay
                </button>
              </v-flex>
            </v-layout>
          </v-container>
        </v-jumbotron>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "slides",
  components: {},
  methods: {
    showScheduleModal() {
      this.$store.commit("toggleScheduleModal", true);
    },

    showWhenNotLogin() {
      swal("Rất tiếc!", "Bạn phải đăng nhập đã nhé !", "warning");
    },
  },
  data() {
    return {
      customerName: localStorage.getItem("customerName"),
      items: [
        {
          title: "Tanning Studio đầu tiên tại Việt Nam",
          src: require("@/assets/home/cover_1.png"),
        },
        {
          title: "Love your body, love your skin",
          src: require("@/assets/home/cover_2.png"),
        },
        {
          title: "An toàn hiệu quả nhanh chóng",
          src: require("@/assets/home/cover_6.jpg"),
        },
        {
          title: "Khỏe mạnh, gợi cảm, thời thượng",
          src: require("@/assets/home/cover_7.jpg"),
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.root {
  .slider {
    min-height: 56.25vw;
    max-height: 970px;
    .slide {
      position: relative;
      width: 100%;
      height: 100%;
      .slide-img {
        background: #c6c6c6;
        position: relative;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .slide-content {
        position: absolute;
        top: 200px;
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
      }
    }
  }
}
.slide-cta-btn {
  color: #ffffff;
  background: rgba(197, 197, 197, 0.4);
  border: 1px solid #ffffff;
  border-radius: 2px;
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #000;
  font-size: larger;
}
@media (max-width: 768px) {
  .root {
    .slider {
      .slide {
        .slide-content {
          .slide-title {
            font-size: 16px;
          }
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
