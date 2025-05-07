<template>
  <div class="slot-component" :class="{ 'dark-theme': theme.isDark.value }">
    <!-- 預設插槽 -->
    <div class="default-slot">
      <slot></slot>
    </div>

    <!-- 命名插槽 -->
    <div class="named-slot">
      <slot name="slot1"></slot>
    </div>

    <!-- 作用域插槽 -->
    <div class="scoped-slot">
      <slot name="scoped" :data="slotData"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";

const theme = inject("theme");
const slotData = ref({
  message: "這是作用域插槽 字最大 由子組件控制 ",
  count: 0,
});
</script>

<style lang="scss" scoped>
.slot-component {
  padding: 1rem;
  border: 1px solid #eee;
  border-radius: 8px;
  margin: 1rem 0;

  &.dark-theme {
    border-color: #333;
    background-color: #2a2a2a;
    color: #fff;
  }

  .default-slot,
  .named-slot,
  .scoped-slot {
    margin: 1rem 0;
    padding: 1rem;
    background-color: #f5f5f5;
    border-radius: 4px;

    .dark-theme & {
      background-color: #333;
    }
  }
  .named-slot {
    font-size: 1.5rem;
  }
  .scoped-slot {
    font-size: 2rem;
  }
}
</style>
