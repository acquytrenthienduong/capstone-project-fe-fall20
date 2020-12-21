<template>
  <div class="root">
    <v-carousel
      cycle
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in items" :src="slide.src" :key="i" transition="fade-transition">
        <v-container class="img_cover" fill-height>
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
.img_cover{
  height: 600px !important;
}

.v-image .v-responsive .v-carousel-item {
  height: 600px !important;
}

.slide-cta-btn {
  color: #ffffff;
  background: rgba(197, 197, 197, 0.1);
  border: 1px solid #ffffff;
  border-radius: 2px;
  padding: 12px 24px;
  text-transform: uppercase;
  font-weight: bold;
  background-color: #000;
  font-size: larger;
}

</style>


