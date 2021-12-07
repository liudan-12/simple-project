<template>
  <div>
    <div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        ref="upload"
        :auto-upload="false"
        :on-change="upload"
      >
        <i class="el-icon-plus"> </i>
      </el-upload>
      <i class="up-mag">点击上传美食</i>
    </div>
    <el-dialog v-model="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script >
export default {
  components: {},
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    upload(file, fileList) {
      console.log("file:", file);
      console.log("fileList:", fileList);
      this.$emit("upload-img", fileList);
    },
  },
};
</script>
<style lang="less" scoped>
.up-mag {
  margin-left: 18px;
}
</style>