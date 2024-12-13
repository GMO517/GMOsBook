<script setup>
import headShot from "@/assets/image/headShot.jpg";
</script>

<template>
  <div class="main">
    <div class="text-block">
      <div class="title">蘇彥碩</div>
      <div class="sub-title">前端工程師</div>
      <h4>
        我是一個前端工程師。<br />
        專長於前端開發以及遊戲開發，善於快速學習並適應新功能。
        <br />
        熟悉3D列印，歡迎找我印些酷東西。
      </h4>
    </div>
    <div class="img-block">
      <img :src="headShot" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$text-dark-blue: #1e3a8a;
.main {
  padding: 15vh;
  display: grid;
  justify-items: center;
  gap: 20vh;
}

.text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
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
    margin-bottom: 1px;
  }
}

.img-block {
  display: flex;
  overflow: hidden;

  img {
    width: 50vh;
    object-fit: cover;
  }
}

@media (min-width: 768px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .main {
    grid-template-columns: 1fr;
    align-items: center;
    gap: 5vh;
  }
}
</style>
