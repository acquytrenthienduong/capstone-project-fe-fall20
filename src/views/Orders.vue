<template>
  <div class="root">
    <div class="header">
      <div class="inner-content">
        <div class="category-title">Lịch hẹn của bạn</div>
      </div>
    </div>
    <v-container class="orders pt-10">
      <v-row v-for="n in 5" :key="n" class="order">
        <div class="container my-4">
          <v-row>
            <v-col cols="4" class="text-right">
              <img
                class="service-image"
                :src="`https://source.unsplash.com/random/128x128?${n}`"
                alt="demo"
              />
            </v-col>
            <v-col cols="8" class="d-flex flex-column pl-10">
              <p>Ngày đặt 10/10/2020</p>
              <div>
                <span>GÓI TANNING {{ n }} phút</span>
                <v-chip label class="ml-4"> chua thuc hien</v-chip>
              </div>
              <v-row style="max-width: 600px">
                <v-col>
                  <p>Ngày hẹn 10/10/2099</p>
                </v-col>
                <v-col>
                  <p>Khung giờ hẹn 10:40</p>
                </v-col>
              </v-row>
              <v-btn
                color="black"
                class="white--text mt-10"
                style="width: 200px"
                >Yêu cầu đổi lịch
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <v-container class="mb-10">
      <v-pagination v-model="page" :length="6"></v-pagination>
    </v-container>
  </div>
</template>

<script>
export default { name: "category" };
</script>
<style lang="scss" scoped>
.root {
  .header {
    position: relative;
    background: url("https://source.unsplash.com/1280x720/?girl");
    background-size: cover;
    .inner-content {
      color: #ffffff;
      max-width: 1170px;
      padding: 128px 0;
      margin: 0 auto;
      .category-title {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
      }
    }
  }
  .orders {
    margin-top: 40px;
    .order {
      border-bottom: 1px solid #c5c5c5;
      &:last-child {
        border: none;
      }
      .service-image {
        border-radius: 50%;
      }
    }
  }
}
</style>
