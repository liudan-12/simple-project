<template>
  <div class="img-detail">
    <div >
      <el-image :src="imgObj.img" />
    </div>
    <div class="detail-tr">
      <i class="el-icon-place"> </i>
      <span class="title">{{ imgObj.imgInfo }}</span>
    </div>
    <div class="detail-tr">
      <i class="el-icon-place"> </i>
      <span>{{ imgObj.imgText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Imgdetail",

  data() {
    return {
      imgObj: {},
    };
  },
  created() {
    console.log("router:");
    console.log("router:", this.$route.query.imgObj);
    this.imgObj = this.$route.query.imgObj;
  },

  methods: {},
};
</script>

<style lang="less" scoped>
.img-detail {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
div {
  margin: 15px 0;
}
.detail-tr {
  border-style: none none solid none;
}
.title {
  font-size: 50px;
}
</style>