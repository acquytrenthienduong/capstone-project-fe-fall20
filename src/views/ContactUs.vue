<template>
  <div class="root">
    <Story />
    <Contact />
    <Socials />
  </div>
</template>

<script>
import Socials from "@/components/Home/socials";
import Story from "@/components/Home/story";
import Contact from "@/components/Home/contact";
export default {
  name: "homepage-contact",
  components: {
    Socials,
    Contact,
    Story,
  },
};
</script>

<style lang="scss" scoped></style>
