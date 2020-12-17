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
          HỢP TÁC
        </li>
        <li
          :class="{ active: selectedIndex == 3 }"
          @mouseover="selectedIndex = 3"
        >
          VỀ CHÚNG TÔI
        </li>
      </ul>
    </div>
    <div class="right-items">
      <v-container fluid class="item-container" v-if="selectedIndex == 1">
        <v-row>
          <v-col class="product-card-container" cols="12" md="4">
            <v-img
              class="white--text align-end"
              height="400px"
              src="@/assets/lotions/sp1.png"
            >
            </v-img>
          </v-col>

          <v-col class="product-card-container" cols="12" md="4">
            <v-img
              class="white--text align-end"
              height="400px"
              src="@/assets/lotions/sp2.png"
            >
            </v-img>
          </v-col>

          <v-col class="product-card-container" cols="12" md="4">
            <v-img
              class="white--text align-end"
              height="400px"
              src="@/assets/lotions/sp4.png"
            >
            </v-img>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid class="item-container" v-if="selectedIndex == 0">
        <v-row>
          <v-col cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img src="@/assets/services/standup.jpg" height="300px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="detail1">
                  Stand up Tanning
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img src="@/assets/services/laydown.jpg" height="300px"></v-img>

              <!-- <v-card-title> Lay Down Tanning </v-card-title> -->
              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="detail2">
                  Lay Down Tanning
                </v-btn>

                <v-spacer></v-spacer>
                <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="344">
              <v-img src="@/assets/services/spray.jpg" height="300px"></v-img>

              <v-card-actions>
                <v-btn color="black" class="xemthem" text @click="detail3">
                  Spray Tanning
                </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
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
    detail1() {
      this.$router.push({ name: "Schedule", params: { type: "1" } });
    },
    detail2() {
      this.$router.push({ name: "Schedule", params: { type: "2" } });
    },
    detail3() {
      this.$router.push({ name: "Schedule", params: { type: "3" } });
    },
  },
  mounted() {
    // Instead of calling the method we emit an event
    this.$emit("isHoverOut");
  },
};
</script>
<style lang="scss" scoped>
.rootMenu {
  display: none;
  position: absolute;
  background: white;
  top: 100%;
  left: 16px;
  right: 16px;
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
