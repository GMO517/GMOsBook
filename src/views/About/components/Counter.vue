<template>
  <div class="counter" :class="{ 'dark-theme': theme.isDark.value }">
    <el-button @click="decrement" type="primary" plain>-</el-button>
    <span class="counter-count">{{ count }}</span>
    <el-button @click="increment" type="primary" plain>+</el-button>
  </div>
</template>

<script setup>
import { ref, watch, inject } from "vue";

const props = defineProps({
  initialValue: {
    type: Number,
    default: 0,
  },
});

// 定義emit 監聽事件
const emit = defineEmits(["count-change"]);

// 監聽多個事件 取作emit是慣例
// const emit = defineEmits(["count-change", "count-change-a"]);

const count = ref(props.initialValue);
const shouldReset = inject("shouldReset");
const theme = inject("theme");

// 監聽重置信號
watch(
  () => shouldReset.value,
  (newValue) => {
    if (newValue) {
      count.value = props.initialValue;
      emit("count-change", count.value);
    }
  }
);

const increment = () => {
  count.value++;
  emit("count-change", count.value);
};

const decrement = () => {
  count.value--;
  emit("count-change", count.value);
};

// 監聽 initialValue 的變化
watch(
  () => props.initialValue,
  (newValue) => {
    count.value = newValue;
  }
);
</script>

<style lang="scss" scoped>
.counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: background-color 0.3s;

  .counter-count {
    font-size: 1.5rem;
    font-weight: bold;
    min-width: 2rem;
    text-align: center;
    color: #000000;
  }

  &.dark-theme {
    .counter-count {
      color: #ffffff;
    }
  }
}
</style>
