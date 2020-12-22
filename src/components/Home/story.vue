<template>
  <div class="root">
    <div class="text-center">
      <v-img
        class="avatar"
        max-width="4%"
        src="@/assets/home/logo3.png"
        alt="logo"
      ></v-img>
      <h3>Câu chuyện của Navatan</h3>
      <p>
        NAVATAN STUDIO hiện nay là studio tắm nắng nhân tạo đầu tiên và duy nhất
        tại Việt Nam. Công nghệ giường tắm nắng nhân tạo và các sản phẩm độc
        quyền từ Đức. Thời da trắng sáng không tỳ vết khiến chị em đổ xô tắm
        trắng đã qua. Thay vào đó, xu hướng da nâu căng bóng quyến rũ mới là
        những gì các siêu mẫu, hot blogger trong và ngoài nước cũng như giới trẻ
        đang theo đuổi. Đây chính là lý do Navatan được thành lập ra, Navatan
        chính là người bạn thân giúp bạn đạt được làn da trendy mong ước của
        nhiều cô gái,chàng trai một cách hoàn hảo và an toàn
      </p>
    </div>
    <v-img src="@/assets/home/story.png" alt="story"> </v-img>
  </div>
</template>

<script>
export default {
  name: "home-story",
  methods: {},
};
</script>
<style lang="scss" scoped>
.root {
  margin: 10%;
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

h3 {
  font-family: "Dancing Script";
  font-size: 160%;
  text-transform: uppercase;
}

.avatar {
  margin-left: 48%;
}
.text-center {
  margin: 4%;
}
</style>
