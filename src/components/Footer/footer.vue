<template>
  <div class="root">
    <img src="../../assets/header-logo.png" alt="logo" />
    <div class="claim-text">
      studio tắm nắng nhân tạo đầu tiên <br />và duy nhất tại Việt Nam
    </div>
  </div>
</template>

<script>
export default { name: "footer-custom" };
</script>

<style lang="scss" scoped>
.root {
  background-color: #000000;
  text-align: center;
  padding-top: 48px;
  padding-bottom: 48px;
  .claim-text {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 18px;
    line-height: 23px;
  }
}
</style>
