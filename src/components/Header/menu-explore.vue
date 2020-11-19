<template>
  <div class="rootMenu" :class="{ visible: isVisible }">
    <div class="left-menu">
      <p class="title">KHÁM PHÁ</p>
      <ul>
        <li :class="{ active: selectedIndex == 0 }" @click="selectedIndex = 0">
          GALLERY
        </li>
        <li :class="{ active: selectedIndex == 1 }" @click="selectedIndex = 1">
          SẢN PHẨM
        </li>
        <li :class="{ active: selectedIndex == 2 }" @click="selectedIndex = 2">
          PACKAGES
        </li>
        <li :class="{ active: selectedIndex == 3 }" @click="selectedIndex = 3">
          BLOG
        </li>
      </ul>
    </div>
    <div class="right-items">
      <v-container class="grey lighten-5">
        <v-row>
          <v-col v-for="n in 3" :key="n" cols="12" md="4">
            <v-card class="mx-auto service-card" max-width="240">
              <v-img
                :src="`https://source.unsplash.com/random/1280x720?${n}`"
                height="150px"
              ></v-img>

              <v-card-actions>
                <v-btn color="orange lighten-2" text> Explore </v-btn>
                <v-spacer></v-spacer>
                <v-icon color="blue darken-2"> mdi-arrow-right </v-icon>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "menu-explore",
  props: ["isVisible"],
  data() {
    return { selectedIndex: 0 };
  },
};
</script>
<style lang="scss" scoped>
.rootMenu {
  display: none;
  position: absolute;
  background: white;
  top: 80px;
  left: calc(max(50%, 375px) + 25px);
  transform: translateX(min(-50%, -750px));
  padding: 72px 128px;
  z-index: 10;
  min-width: 1170px;
  max-width: max(75vw, 1170px);
  &.visible {
    display: flex;
  }
  .left-menu {
    padding: 16px 24px;
    min-width: 200px;
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
    padding: 0 24px;
  }
}
</style>
