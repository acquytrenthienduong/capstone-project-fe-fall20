<template>
  <div>
    <template>
      <v-container class="pa-4 text-center">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items">
            <v-col :key="i" cols="12" md="4">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  :class="{ 'on-hover': hover }"
                >
                  <v-img :src="item.img" height="225px">
                    <v-card-title class="title white--text">
                      <v-row
                        class="fill-height flex-column"
                        justify="space-between"
                      >
                        <h1 class="mt-4 subheading text-left">
                          <animated-number
                            :value="item.title"
                            :duration="600"
                            :delay="1000"
                            :round="10"
                          />
                        </h1>
                      </v-row>
                    </v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </template>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";
export default {
  components: {
    AnimatedNumber,
  },
  data: () => ({
    items: [
      {
        title: "124",
        img: require("@/assets/lotions/alo.jpeg"),
      },
      {
        title: "307",
        img:
          require("@/assets/lotions/IMG_4426.jpg"),
      },
      {
        title: "504",
        img:  require("@/assets/lotions/IMG_4426.jpg"),
      },
    ],
    transparent: "rgba(255, 255, 255, 0)",
  }),
};
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
}

.show-btns {
  color: rgba(255, 255, 255, 1) !important;
}
</style>
