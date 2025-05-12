<template>
  <div class="about">
    <h1>元件設計練習</h1>
    <el-collapse>
      <el-collapse-item title="1. 計數器元件">
        <!-- 計數器元件練習 -->
        <section class="counter-section">
          <!-- :initial-value即為props -->
          <Counter :initial-value="0" @count-change="handleCountChange" />
          <el-divider />
          <el-row :gutter="20" class="counter-section-row">
            <el-col :span="24" class="center-col">
              <p>父元件中的計數：{{ parentCount }}</p>
              <el-button @click="handleReset">重置</el-button>
            </el-col>
          </el-row>
        </section>
      </el-collapse-item>

      <el-collapse-item title="2. 插槽">
        <!-- slot練習 -->
        <section class="slot-section">
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
  .counter-section-row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .center-col {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
}
</style>
