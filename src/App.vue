<template>
  <div id="app">
    <v-app>
      <Header />
      <router-view />
      <Footer />
      <schedule-modal />
      <login-register />
    </v-app>
  </div>
</template>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap");
$body-font-family: "Montserrat";
$title-font: "Montserrat";
.v-application {
  font-family: $body-font-family, sans-serif !important;
  .title {
    // To pin point specific classes of some components
    font-family: $title-font, sans-serif !important;
  }
}
html {
  font-family: "Montserrat", sans-serif;
  max-width: 1920px;
  min-width: 1170px;
  margin: 0 auto;
  background: #e5e5e5;
}
</style>
<script>
import "normalize.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import ScheduleModal from "./components/Schedule/scheduleModal.vue";
import LoginRegister from "./views/LoginRegister.vue";
export default {
  name: "app",
  components: {
    Header,
    Footer,
    ScheduleModal,
    LoginRegister,
  },
  mounted() {
    document.title = "Navatan Tanning Studio";
  },
};
</script>
