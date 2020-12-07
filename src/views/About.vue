<template>
  <div class="root">
    <Contact />
    <Socials />
  </div>
</template>

<script>

import Socials from "@/components/Home/socials";
import Contact from "@/components/Home/contact";
export default {
  name: "homepage",
  components: {
    Socials,
    Contact,
  },
};
</script>

<style lang="scss" scoped>

</style>
