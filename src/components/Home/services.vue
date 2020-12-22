<template>
  <div class="root">
    <sequential-entrance fromLeft>
      <div class="serviceContainer">
        <v-container class="pa-4 text-center">
          <v-row class="fill-height" align="center" justify="center">
            <template v-for="(item, i) in items">
              <v-col :key="i" cols="12" md="4">
                <v-hover v-slot="{ hover }">
                  <v-card
                    :elevation="hover ? 12 : 2"
                    :class="{ 'on-hover': hover }"
                  >
                    <v-img :src="item.img" height="400px">
                      <v-card-title class="title white--text">
                        <v-row
                          class="fill-height flex-column"
                          justify="space-between"
                        >
                          <h1 class="mt-4 subheading text-center text-service">
                            {{ item.title }}
                          </h1>
                          <button
                            class="slide-cta-btn text-center"
                            @click="detail1(i + 1)"
                          >
                            Xem thêm
                          </button>
                        </v-row>
                      </v-card-title>
                    </v-img>
                  </v-card>
                </v-hover>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </div>
    </sequential-entrance>
  </div>
</template>

<script>
export default {
  methods: {
    detail1(service) {
      this.$router.push({ name: "Schedule", params: { type: service } });
    },
  },
  components: {},
  data: () => ({
    items: [
      {
        title: "Stand Up",
        img: require("@/assets/services/standup.jpg"),
      },
      {
        title: "Lay Down",
        img: require("@/assets/services/laydown.jpg"),
      },
      {
        title: "Spray",
        img: require("@/assets/services/spray.jpg"),
      },
    ],
    transparent: "rgba(255, 255, 255, 0.5)",
  }),
};
</script>

<style lang="scss" scoped>
.serviceContainer {
  max-width: 100%;
  background-color: white;
  margin-bottom: -5%;
}

.pa-4 {
  padding: 0% !important;
}

.root {
  padding-top: 48px;
  padding-bottom: 48px;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.fill-height .flex-column {
  margin-top: 15% !important;
}

.text-service {
  font-family: "Dancing Script";
  font-size: 320%;
  animation:text-shadow-pop-top .6s both
}


@keyframes text-shadow-pop-top{0%{text-shadow:0 0 #555,0 0 #555,0 0 #555,0 0 #555,0 0 #555,0 0 #555,0 0 #555,0 0 #555;transform:translateY(0)}100%{text-shadow:0 -1px #555,0 -2px #555,0 -3px #555,0 -4px #555,0 -5px #555,0 -6px #555,0 -7px #555,0 -8px #555;transform:translateY(8px)}}
.v-card:not(.on-hover) {
  opacity: 0.8;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}

.slide-cta-btn {
  color: #ffffff;
  background: rgba(197, 197, 197, 0.5);
  border: 1px solid #ffffff;
  border-radius: 2px;
  padding: 12px 24px;
  /* text-transform: uppercase; */
  /* font-weight: bold; */
  background-color: transparent;
  /* font-size: larger; */
  transition-duration: 0.4s;
  margin: 30% !important;
  margin-top: 2% !important;
  animation: slide-cta-btn 0.6s both;
}
.slide-cta-btn:hover {
  color: black;
  background: rgba(197, 197, 197, 0.5);
  border: 1px solid #ffffff;
  border-radius: 2px;
  padding: 12px 24px;
  /* text-transform: uppercase; */
  /* font-weight: bold; */
  background-color: white;
  /* font-size: larger; */
  animation: slide-cta-btn 0.3s linear infinite both;
}
</style>
