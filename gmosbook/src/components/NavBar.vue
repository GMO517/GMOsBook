<script setup>
import { RouterLink } from "vue-router";
import logo from "@/assets/image/LogoWhite_Short.png";
</script>

<template>
  <el-row class="navBar">
    <el-col :span="6" class="navBar-col">
      <div class="logo">
        <img :src="logo" alt="logo" />
      </div>
    </el-col>
    <el-col :span="18" class="navBar-col">
      <RouterLink to="/" class="router-link">Home</RouterLink>
      <RouterLink to="/about" class="router-link">About</RouterLink>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.navBar {
  margin: 0px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 6px black;
}

.navBar-col {
  height: 7vh;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.logo {
  margin: 20px;
}

.router-link {
  color: var(--el-color-info-dark-2);
  margin: 10px;
  font-weight: 700;
  text-decoration: none;
}
</style>
