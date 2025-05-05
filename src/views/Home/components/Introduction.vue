<script setup>
import headShot from "@/assets/image/headShot.jpg";
</script>

<template>
  <div class="main">
    <div class="text-block">
      <el-row>
        <el-col :span="24" class="title-header">Hi!</el-col>
      </el-row>
      <el-row class="name-row">
        <el-col :span="8" class="title-text">我是</el-col>
        <el-col :span="16" class="title-name">蘇彥碩</el-col>
      </el-row>
      <el-row class="job-row">
        <el-col :span="24">
          <span>一名</span>
          <span class="job-text">前端工程師</span>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">專長於前端開發目前專注於Vue框架的開發。</el-col>
      </el-row>
      <el-row>
        <el-col :span="24">熟悉3D列印，歡迎找我印些酷東西。 </el-col>
      </el-row>
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
  margin-top: -7vh;
}

.text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 7vh;

  .title-header {
    font-size: 5rem;
    font-weight: 700;
  }
}

.job-row {
  font-size: 2rem;
  text-align: right;
  .job-text {
    font-weight: 700;
    color: var(--el-color-primary);
  }
}

.name-row {
  display: flex;
  align-items: center;
  white-space: nowrap;
  flex-wrap: nowrap;
  gap: 0.5rem;
  .title-text,
  .title-name {
    display: inline-flex;
    align-items: center;
  }

  .title-text {
    font-size: 4rem;
  }

  .title-name {
    font-size: 5rem;
    font-weight: 700;
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
