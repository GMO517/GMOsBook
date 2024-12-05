<script setup>
import headShot from "@/assets/image/headShot.jpg";
</script>

<template>
  <el-row>
    <el-col :span="13" class="text-block">
      <div class="title">蘇彥碩</div>
      <div class="sub-title">前端工程師</div>
      <h4>
        我是一個前端工程師。專長於前端開發以及遊戲開發，善於快速學習並適應新功能
      </h4>
    </el-col>
    <el-col :span="11" class="img-block">
      <img :src="headShot" alt="" />
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
$text-dark-blue: #1e3a8a;

.text-block {
  // border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 10vh;

  .title {
    font-size: 50px;
    font-weight: 700;
    color: $text-dark-blue;
  }

  .sub-title {
    font-size: 20px;
    font-weight: 700;
  }

  h4 {
    font-size: 17px;
    font-weight: 600;
    color: var(--el-text-color-regular);
  }
}
.img-block {
  // border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 50vh;
    object-fit: cover;
  }
}
</style>
