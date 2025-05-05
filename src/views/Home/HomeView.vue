<script setup>
import Introduction from "./components/Introduction.vue";
import Skill from "./components/Skill.vue";
import Profile from "./components/Profile.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
// 若有 Header 組件可引入，否則可留空
</script>

<template>
  <div class="layout">
    <!-- Header 可在這裡插入 -->
    <main class="main-content">
      <Introduction />
      <Profile />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--el-bg-color-page);
  overflow-x: hidden; /* 防止橫向捲軸 */
}

.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 7vh; /* 若有 header，預留空間 */
  gap: 3rem; /* 區塊間距 */
}
</style>
