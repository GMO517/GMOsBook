<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <el-row class="navBar">
    <el-col :span="7" class="navBar-col">
      <RouterLink to="/" class="logoText logo-first">GMO's</RouterLink>
      <RouterLink to="/" class="logoText logo-second">BOOK</RouterLink>
    </el-col>
    <el-col :span="17" class="navBar-col">
      <RouterLink to="/" class="router-link">Home</RouterLink>
      <RouterLink to="/about" class="router-link">About</RouterLink>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.navBar {
  margin: 0px;
  box-shadow: 1px 1px 6px black;
  position: sticky;
  top: 0;
  z-index: 100;
  background: white;
}

.navBar-col {
  height: 7vh;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

.logoText {
  font-size: 30px;
  font-weight: 700;
  color: var(--el-color-info-dark-2);
  text-decoration: none;
}

.logo-first {
  color: var(--el-color-primary);
  margin-right: 10px;
}

.logo-second {
  color: var(--el-text-color-primary);
}

.router-link {
  color: var(--el-color-info-dark-2);
  margin: 10px;
  font-weight: 700;
  text-decoration: none;
}
</style>
