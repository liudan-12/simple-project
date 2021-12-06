<template>
  <div>
    <el-aside width="100%">
      <el-menu
        router
        default-active="2"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        mode="horizontal"
      >
        <el-menu-item index="/index/home">
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/index/share">
          <span slot="title">分享美食</span>
        </el-menu-item>
        <el-menu-item index="/home/addmachs/addmachs">
          <span slot="title">添1</span>
        </el-menu-item>
        <el-menu-item index="/index/webinfo">
          <span slot="title">联系我们</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main><router-view> </router-view></el-main>
  </div>
</template>
<script>
export default {
  name: "HomeMenu",
  data() {
    return {};
  },
  created() {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.el-menu {
  overflow: hidden;
  display: flex;
  justify-content: center;
}
</style>