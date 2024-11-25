<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <el-button type="primary">Primary Button</el-button>
    <el-select-v2
      v-model="value1"
      :options="options"
      placeholder="Please select"
      style="width: 240px; margin-right: 16px; vertical-align: middle"
      allow-create
      filterable
      multiple
      clearable
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
