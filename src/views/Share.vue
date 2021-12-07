<template>
  <div>
    <div class="form-class">
      <el-form label-width="100px" :model="ruleForm">
        <el-form-item label="标题" prop="title">
          <el-input v-model="ruleForm.title"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="content">
          <el-input type="textarea" v-model="ruleForm.content"></el-input>
        </el-form-item>
      </el-form>

      <up-load-image
        @upload-img="upload"
        v-model="ruleForm.upload"
        class="justify"
      ></up-load-image>
      <div class="el-btn">
        <el-button type="primary" @click="shareFood">分享美好的食物</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import UpLoadImage from "../component/UpLoadImage.vue";
export default {
  components: { UpLoadImage },
  name: "Share",

  data() {
    return {
      ruleForm: {
        title: "",
        content: "",
        upload: "",
      },
    };
  },
  mounted() {},
  methods: {
    shareFood() {
      console.log(this.ruleForm);
    },
    upload(event) {
      console.log("event", event);
    },
  },
};
</script>

<style lang="less" scoped>
.form-class {
  width: 500px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.justify {
  display: flex;
  justify-content: center;
}
.el-btn {
    .justify();
    margin-top: 50px;
  
}
</style>