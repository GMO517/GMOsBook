<template>
  <div class="about">
    <h1>元件設計練習</h1>

    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="計數器">
        <!-- 計數器元件練習 -->
        <section class="counter-section">
          <h2>1. 計數器元件練習</h2>
          <!-- :initial-value即為props -->
          <Counter :initial-value="0" @count-change="handleCountChange" />
          <p>父元件中的計數：{{ parentCount }}</p>
          <el-button @click="handleReset">重置</el-button>
        </section>
      </el-collapse-item>
      <el-collapse-item title="插槽練習">
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
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import Counter from "./components/Counter.vue";
import SlotComponent from "./components/SlotComponent.vue";

const parentCount = ref(0);
const shouldReset = ref(false);

// 提供重置信號
provide("shouldReset", shouldReset);

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

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .counter-section {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    border: 1px solid #eee;
    border-radius: 8px;
    background-color: #f5f5f5;

    h2 {
      margin-bottom: 1rem;
    }
  }
}
</style>
