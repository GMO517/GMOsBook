<template>
  <div class="about" :class="{ 'dark-theme': isDark }">
    <h1>元件設計練習</h1>

    <!-- 主題切換 -->
    <div class="theme-switch">
      <el-switch v-model="isDark" active-text="深色" inactive-text="淺色" />
    </div>

    <!-- 計數器元件練習 -->
    <section class="counter-section">
      <h2>1. 計數器元件練習</h2>
      <!-- :initial-value即為props -->
      <Counter :initial-value="0" @count-change="handleCountChange" />
      <p>父元件中的計數：{{ parentCount }}</p>
      <el-button @click="handleReset">重置</el-button>
    </section>

    <!-- slot練習 -->
    <section class="slot-section">
      <h2>2. slot練習</h2>
      <SlotComponent>
        <!-- 預設插槽 -->
        <template #default>
          <p>這是預設插槽的內容</p>
        </template>

        <!-- 命名插槽 -->
        <template #slot1>
          <p>這是命名插槽 slot1 的內容 字比較大 父組件控制</p>
        </template>

        <!-- 作用域插槽 -->
        <template #scoped="{ data }">
          <p>
            {{ data.message }}
            <el-button @click="data.count++">點我增加計數</el-button>
          </p>

          <p>計數：{{ data.count }}</p>
        </template>
      </SlotComponent>
    </section>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Counter from "./components/Counter.vue";
import SlotComponent from "./components/SlotComponent.vue";
const parentCount = ref(0);
const shouldReset = ref(false);
const isDark = ref(false);

// 提供重置信號
provide("shouldReset", shouldReset);

// 提供主題狀態
provide("theme", {
  isDark,
  toggleTheme: () => {
    isDark.value = !isDark.value;
  },
});

const handleCountChange = (newCount) => {
  parentCount.value = newCount;
};

const handleReset = () => {
  parentCount.value = 0;
  shouldReset.value = true;
  // 在下一幀將重置信號設回 false
  setTimeout(() => {
    shouldReset.value = false;
  }, 0);
};
</script>

<style lang="scss" scoped>
.about {
  padding: 2rem;
  min-height: 100vh;
  transition: background-color 0.3s;

  &.dark-theme {
    background-color: #1a1a1a;

    h1,
    h2,
    p {
      color: #ffffff;
    }

    .counter-section {
      border-color: #333;
    }
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .theme-switch {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  .counter-section {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;

    h2 {
      margin-bottom: 1rem;
    }
  }
}
</style>
