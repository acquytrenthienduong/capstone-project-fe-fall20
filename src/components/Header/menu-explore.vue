<template>
  <div
    class="rootMenu elevation-3"
    :class="{ visible: isVisible }"
    @mouseleave="isHoverOut"
  >
    <div class="left-menu">
      <p class="title">KHÁM PHÁ</p>
      <ul>
        <li
          :class="{ active: selectedIndex == 0 }"
          @mouseover="selectedIndex = 0"
        >
          DỊCH VỤ
        </li>
        <li
          :class="{ active: selectedIndex == 1 }"
          @mouseover="selectedIndex = 1"
        >
          SẢN PHẨM
        </li>
        <li
          :class="{ active: selectedIndex == 2 }"
          @mouseover="selectedIndex = 2"
        >
          ƯU ĐÃI
        </li>
        <li
          :class="{ active: selectedIndex == 3 }"
          @mouseover="selectedIndex = 3"
          @click="go2AboutUs"
        >
          VỀ CHÚNG TÔI
        </li>
      </ul>
    </div>
    <div class="right-items">
      <!-- hover for ưu đãi -->
      <v-container fluid class="item-container" v-if="selectedIndex == 2">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              class="mx-auto service-card"
              max-width="344"
              @click="go2Product"
            >
              <v-img src="@/assets/lotions/khampha3.jpg" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text>
                  Sale 10%
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              class="mx-auto service-card"
              max-width="344"
              @click="go2Product"
            >
              <v-img src="@/assets/lotions/khampha1.jpg" height="400px"></v-img>

              <!-- <v-card-title> Lay Down Tanning </v-card-title> -->
              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="go2Detail(2)">
                  Sale 20%
                </v-btn>

                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              class="mx-auto service-card"
              max-width="344"
              @click="go2Product"
            >
              <v-img src="@/assets/lotions/khampha2.jpg" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="go2Detail(3)">
                  Sale 50%
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- sdsds -->
      <v-container fluid class="item-container" v-if="selectedIndex == 3">
        <v-row>
          <div class="text-center" style="margin:4%">
            
            <h3>Câu chuyện của Navatan</h3>
            <p>
              NAVATAN STUDIO hiện nay là studio tắm nắng nhân tạo đầu tiên và
              duy nhất tại Việt Nam. Công nghệ giường tắm nắng nhân tạo và các
              sản phẩm độc quyền từ Đức. Xu hướng da nâu căng bóng quyến rũ mới
              là những gì các siêu mẫu, hot blogger trong và ngoài nước cũng như
              giới trẻ đang theo đuổi. Đây chính là lý do Navatan được thành lập
              ra, Navatan chính là người bạn thân giúp bạn đạt được làn da
              trendy mong ước của nhiều cô gái,chàng trai một cách hoàn hảo và
              an toàn
            </p>
          </div>
        </v-row>
      </v-container>

      <v-container fluid class="item-container" v-if="selectedIndex == 1">
        <v-row>
          <v-col cols="12" md="4">
            <v-card
              class="mx-auto service-card"
              max-width="344"
              @click="go2Product"
            >
              <v-img src="@/assets/lotions/sp1.png" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text>
                  Sản phẩm yêu thích
                </v-btn>

                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              class="mx-auto service-card"
              max-width="344"
              @click="go2Product"
            >
              <v-img src="@/assets/lotions/sp5.png" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text>
                  Hàng mới về
                </v-btn>

                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card
              class="mx-auto service-card"
              max-width="344"
              @click="go2Product"
            >
              <v-img src="@/assets/lotions/sp8.png" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text>
                  Sản phẩm chuyên dụng
                </v-btn>

                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="item-container" v-if="selectedIndex == 0">
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img src="@/assets/services/standup.jpg" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="go2Detail(1)">
                  Stand up Tanning
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img src="@/assets/services/laydown.jpg" height="400px"></v-img>

              <!-- <v-card-title> Lay Down Tanning </v-card-title> -->
              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="go2Detail(2)">
                  Lay Down Tanning
                </v-btn>

                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img src="@/assets/services/spray.jpg" height="400px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="go2Detail(3)">
                  Spray Tanning
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="black"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- <Services /> -->
  </div>
</template>

<script>
// import Products from "@/components/Home/products";
export default {
  components: {
    // Services,
    // Products,
  },
  name: "menu-explore",
  props: ["isVisible", "isHoverOut"],
  data() {
    return { selectedIndex: 0 };
  },
  methods: {
    go2Detail(id) {
      this.$router.push({ name: "Schedule", params: { type: id } });
      this.$nextTick();
    },
    go2Product() {
      this.$router.push({ name: "Products" });
    },
    go2AboutUs() {
      this.$router.push({ name: "ContactUs" });
    },
  },
  mounted() {
    // Instead of calling the method we emit an event
    this.$emit("isHoverOut");
  },
};
</script>
<style lang="scss" scoped>
 
.social {
  font-family: "Dancing Script";
  font-size: 252%;
  margin-bottom: -1%;
}

h3 {
  font-family: "Dancing Script";
  font-size: 155%;
  text-transform: uppercase;
  margin-bottom: 2%;
}

.avatar {
  margin-left: 48%;
  margin-bottom: 13px;
}

.text-center {
  animation:text-focus-in 0.5s cubic-bezier(.55,.085,.68,.53) both;
}


@keyframes text-focus-in{0%{filter:blur(12px);opacity:0}100%{filter:blur(0);opacity:1}}

@keyframes tracking-in-contract{0%{letter-spacing:1em;opacity:0}40%{opacity:.6}100%{letter-spacing:normal;opacity:1}}

.service-card {
  border-radius: unset !important;
}
.mx-auto {
  border-radius: unset !important;
}

.rootMenu {
  display: none;
  position: absolute;
  background: white;
  top: 100%;
  left: 0px;
  right: 0px;
  padding: 2% 1%;
  z-index: 10;
  &.visible {
    display: flex;
  }
  .left-menu {
    padding: 16px 24px;
    min-width: 250px;
    padding-right: 48px;
    border-right: 1px solid #e5e5e5;
    p.title {
      font-weight: bold;
      margin-bottom: 24px;
    }
    ul {
      list-style-type: none;

      li {
        margin: 12px 0;
        padding: 4px 0;
        // display: block;
        cursor: pointer;
        &.active {
          background: linear-gradient(
            -90deg,
            rgba(0, 0, 0, 0.15) 0%,
            rgba(255, 255, 255, 0.5) 50%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      }
    }
  }
  .right-items {
    flex: 1;
    padding: 0 24px;
    .item-container {
    }
  }
}
</style>
