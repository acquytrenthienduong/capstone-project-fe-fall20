<template>
  <div class="root">
    <div class="content">
      <div class="left">
        <button class="menu-btn">
          Khám phá
        </button>
        <button class="menu-btn">
          Lịch hẹn
        </button>
        <button class="menu-btn">
          About us
        </button>
      </div>
      <div class="middle">
        <div class="logo">
          <img src="../../assets/header-logo.png" />
        </div>
      </div>
      <div class="right">
        <button class="menu-btn-cta">
          Đặt lịch hẹn
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header",
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.root {
  background: #000000;
  .content {
    max-width: 1620px;
    display: flex;
    padding-left: 16px;
    padding-right: 16px;
    margin: 0 auto;
    justify-content: center;
    .left {
      flex: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      .menu-btn {
        height: 41px;
        background: transparent;
        color: #ffffff;
        font-size: 18px;
        line-height: 23px;
        padding: 6px 12px;
        border: none;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
    .middle {
      flex: 1;
      text-align: center;
    }
    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .menu-btn-cta {
        height: 41px;
        background: transparent;
        color: #ffffff;
        font-size: 18px;
        line-height: 23px;
        padding: 6px 12px;
        border: 1px solid #ffffff;
        text-transform: uppercase;
        cursor: pointer;
      }
    }
  }
}
</style>
