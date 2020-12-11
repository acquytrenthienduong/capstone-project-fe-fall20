<template>
  <div>
    <sequential-entrance fromRight>
      <div class="title">7 BƯỚC TANNING TẠI NAVATAN</div>
    </sequential-entrance>

    <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
        <v-card :color="item.color" dark>
          <v-card-title class="title">
            {{ item.step }}
          </v-card-title>
          <v-card-text class="white text--primary">
            <p>
              {{ item.content }}
            </p>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        step: "Bước 1",
        color: "red lighten-2",
        icon: "mdi-star",
        content:
          "Bôi kem dưỡng, kem dưỡng là vật dụng không thể thiếu khi tanning, giúp lớp da đều màu, bóng loáng",
      },
      {
        step: "Bước 2",
        color: "purple darken-1",
        icon: "mdi-book-variant",
        content: "Kết nối playlist nhạc yêu thích của mình với giường tanning",
      },
      {
        step: "Bước 3",
        color: "green lighten-1",
        icon: "mdi-airballoon",
        content: "Đeo kính râm Navatan cung cấp để bảo vệ mắt",
      },
      {
        step: "Bước 4",
        color: "indigo",
        icon: "mdi-buffer",
        content: "Nằm thư giãn trong vòng từ 15 đến 20 phút",
      },
      {
        step: "Bước 5",
        color: "indigo",
        icon: "mdi-buffer",
        content: "Mọi người nhớ chụp những tấm ảnh feedback và ..",
      },
      {
        step: "Bước 6",
        color: "indigo",
        icon: "mdi-buffer",
        content: "Soi gương chụp ảnh và ngắm thành quả",
      },
      {
        step: "Bước 7",
        color: "indigo",
        icon: "mdi-buffer",
        content: "Hãy gửi ảnh về cho Navatan để nhận nhiều ưu đãi nha",
      },
    ],
  }),
};
</script>
