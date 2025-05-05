<script>
export default {};
</script>

<template>
  <el-row class="content">
    <el-col :span="24" class="text-block">
      <div class="footer">GMO Copyright © 2025</div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.content {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -7vh; /* 抵消父元素的 padding-top */
}

.text-block {
  margin-top: 7vh; /* 為內容添加適當的上邊距 */
}

.footer {
  height: 100%;
  width: 100%;
  background-color: #000000;
  font-size: 16px;
  color: white;
  font-weight: bold;
  text-align: center;
}
</style>
