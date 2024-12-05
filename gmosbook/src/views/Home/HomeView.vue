<script setup>
import Introduction from "./components/Introduction.vue";
import Skill from "./components/Skill.vue";
import Profile from "./components/Profile.vue";
import From from "./components/From.vue";
import Contact from "./components/Contact.vue";
</script>

<template>
  <div class="container">
    <Introduction />
    <Profile />
    <Skill />
    <From />
    <Contact />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container > * {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}
</style>
