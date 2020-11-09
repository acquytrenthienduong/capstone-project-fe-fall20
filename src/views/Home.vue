<template>
  <div class="root">
    <Slides />
    <TanningOptions />
  </div>
</template>

<script>
import Slides from "@/components/Slides/slides";
import TanningOptions from "@/components/TanningOptions/tanningOptions";
export default {
  name: "homepage",
  components: {
    Slides,
    TanningOptions,
  },
};
</script>

<style lang="scss" scoped>
.root {
  /* background: #000000; */
}
</style>
