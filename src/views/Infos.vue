<template>
  <div>
    <el-card class="box-card">
      <div class="auto">
        <div class="box-item">{{ Slogan }}</div>
        <div>{{ Email }}</div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "SimpleProjectInfos",

  data() {
    return {
      Slogan: "欢迎大家来到这里一起分享美食",
      Email: "欢迎联系我们(Email):123456789@qq.com",
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="less" scoped>
.auto {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.box-card {
  background: rgba(228, 219, 219, 0.6);
  width: 500px;
  height: 400px;
  .auto ();
}
.box-item {
     width: 350px;
  font-weight: bold;
  font-size: 24px;
  margin: 40px 0;
}
</style>