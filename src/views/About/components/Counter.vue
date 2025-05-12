<template>
  <div class="counter">
    <el-row :gutter="20" class="button-row">
      <el-col :span="6">變更按鈕大小</el-col>
      <el-col :span="18">
        <el-button size="small" @click="changeButtonSize('small')"
          >小</el-button
        >
        <el-button @click="changeButtonSize('default')">中</el-button>
        <el-button size="large" @click="changeButtonSize('large')"
          >大</el-button
        >
      </el-col>
      <el-divider />
    </el-row>

    <el-row :gutter="20" class="button-row">
      <el-col :span="6"> 變更按鈕顏色 </el-col>
      <el-col :span="18">
        <el-button type="primary" @click="changeButtonColor('primary')"
          >藍</el-button
        >
        <el-button type="success" @click="changeButtonColor('success')"
          >綠</el-button
        >
        <el-button type="warning" @click="changeButtonColor('warning')"
          >黃</el-button
        >
        <el-button type="danger" @click="changeButtonColor('danger')"
          >紅</el-button
        >
      </el-col>
      <el-divider />
    </el-row>
    <el-row :gutter="20" class="counter-row">
      <el-col :span="12">
        <el-row :gutter="5" class="input-row">
          <el-col :span="6">最大值:</el-col>
          <el-col :span="18">
            <el-input
              v-model="max"
              placeholder="輸入最大值"
              @blur="handleCounterCheck"
            />
          </el-col>
        </el-row>

        <el-row :gutter="5" class="input-row">
          <el-col :span="6">最小值:</el-col>
          <el-col :span="18">
            <el-input v-model="min" placeholder="輸入最小值" />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" class="counter-count">
        <el-button
          @click="decrement"
          :type="buttonColor"
          :size="buttonSize"
          plain
          :disabled="minButtonDisabled"
          >-</el-button
        >
        <span class="counter-text">{{ count }}</span>
        <el-button
          @click="increment"
          :type="buttonColor"
          :size="buttonSize"
          plain
          :disabled="maxButtonDisabled"
          >+</el-button
        >
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-progress :percentage="progressPercentage" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, watch, inject, computed } from "vue";

const max = ref(10);
const min = ref(0);
const maxButtonDisabled = computed(() => {
  return count.value >= max.value;
});
const minButtonDisabled = computed(() => {
  return count.value <= min.value;
});

const buttonSize = ref("default");
const buttonColor = ref("primary");

const changeButtonColor = (color) => {
  buttonColor.value = color;
};

const changeButtonSize = (size) => {
  buttonSize.value = size;
};

const progressPercentage = ref(0);
const computedProgressPercentage = function () {
  progressPercentage.value = parseFloat(
    ((count.value / max.value) * 100).toFixed(2)
  );
};

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

const handleCounterCheck = function () {
  //檢查是否超過最大值
  if (count.value > Number(max.value)) {
    count.value = Number(max.value);
    emit("count-change", count.value);
  }

  //檢查是否超過最小值
  if (count.value < Number(min.value)) {
    count.value = Number(max.value);
    emit("count-change", count.value);
  }
  computedProgressPercentage();
};

//監聽百分比
watch(count, function () {
  computedProgressPercentage();
});
</script>

<style lang="scss" scoped>
.button-row {
  display: flex;
  align-items: center;
}
.counter {
  text-align: center;

  .counter-count {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }
  .counter-text {
    font-size: 1.5rem;
    font-weight: bold;
    min-width: 2rem;
    text-align: center;
  }
}

.input-row {
  display: flex;
  align-items: center;
}
.counter-row {
  display: flex;
  align-items: center;
}
</style>
