<template>
  <div class="root">
    <v-img src="@/assets/home/socials.png" alt="socials">
      <div class="text-center">
        <p class="social">Follow us</p>
        <v-btn class="ma-2" text icon color="black" @click="facebookHandle">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn class="ma-2" text icon color="black" @click="instaHandle">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
        <v-btn class="ma-2" text icon color="black" @click="youtubeHandle">
          <v-icon>mdi-youtube</v-icon>
        </v-btn>
      </div>
    </v-img>
  
  </div>
</template>

<script>
export default {
  name: "home-socials",
  methods: {
    facebookHandle() {
      window.open("https://www.facebook.com/navatan.studio", "_blank");
    },
    instaHandle() {
      window.open("https://www.instagram.com/navatan.studio", "_blank");
    },
    youtubeHandle() {
      window.open("https://youtube.com", "_blank");
    },
  },
};
</script>
<style lang="scss" scoped>
.root {
  .socialShare {
    background-color: transparent;
  }

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
  }
}

.social {
  font-family: "Dancing Script";
  font-size: 252%;
  margin-bottom: -1%;
}

.v-icon{
  font-size: 35px !important;
}

.text-center {
  margin: 8%;
}
</style>
