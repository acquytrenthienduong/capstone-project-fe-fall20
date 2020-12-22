<template>
  <div class="root">
    <div class="framer">
      <iframe
        width="100%"
        class="video-frame"
        height="100%"
        src="https://www.youtube.com/embed/TFiFbKyNluU"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "home-videos",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.root {
  position: relative;

  .framer {
    background: black;
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    .video-frame {
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      top: 0;
      background-color: black;
      color: #fff;
      height: 85%;
      width: 88%;
      overflow: hidden;
      margin-left: 6%;
      padding: 0;
    }
  }
}
</style>
