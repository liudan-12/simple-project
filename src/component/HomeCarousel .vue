<template>
  <div class="block">
    <el-carousel height="500px">
      <el-carousel-item v-for="(item, index) in carousel" :key="index">
        <img :src="item" class="carousel-img"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import img1 from "../assets/homes/carousel/1.jpg";
import img2 from "../assets/homes/carousel/2.jpg";
import img3 from "../assets/homes/carousel/3.jpg";
import img4 from "../assets/homes/carousel/4.jpg";
export default {
  name: "HomeCarousel",
  data() {
    return {
      carousel: [img1, img2, img3, img4],
    };
  },
};
</script>

<style>
.block{
  display: flex;
   justify-content: center;
}
.el-carousel{
  width: 70%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.carousel-img{
  width: 100%;
  height: 100%;
}
</style>