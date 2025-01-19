<script setup>
import Introduction from "./components/Introduction.vue";
import Skill from "./components/Skill.vue";
import Profile from "./components/Profile.vue";
import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <Introduction />
    <Profile />
    <Contact />
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.container {
  background-color: var(--el-bg-color-page);
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container > * {
  width: 100%;
  height: auto;
  min-height: 100vh;
  overflow: visible;
  box-sizing: border-box;
}
</style>
