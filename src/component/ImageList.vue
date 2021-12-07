<template>
  <div class="imgs">
    <img :src="imgList.img" class="img" />
    <div @click="goDetail" class="img-script">{{ imgList.imgInfo }}</div>
  </div>
</template>

<script>
export default {
  name: "ImageList",
  props: {
    imgList: {
      default: "未传值",
    },
  },
  created() {
    console.log(this.$props.imgList);
  },
  methods: {
    goDetail() {
      let imgObj = this.$props.imgList;
      console.log("跳转", imgObj);
      this.$router.push({
        path:'/imgdetail',
        query:{
          imgObj:imgObj
        }
      });
    },
  },
};
</script>
<style lang="less" >
.imgs {
  position: relative;
  width: 350px;
  height: 250px;
}
.img {
  width: 350px;
  height: 250px;
  position: absolute;
}
.img-script {
  cursor: pointer;
  width: 200px;
  height: 50px;
  background: rgba(255, 127, 80, 0.65);
  //居中
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //文字居中
  text-align: center;
  line-height: 50px;
  font-weight: bold;
  display: none;
}
.imgs:hover .img-script {
  display: block;
}
</style>