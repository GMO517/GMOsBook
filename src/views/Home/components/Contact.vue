<template>
  <div class="main">
    <!-- <div class="form">
      <form @submit.prevent="sendEmail">
        <input
          type="text"
          v-model="formData.name"
          placeholder="名字"
          required
        />
        <input
          type="email"
          v-model="formData.email"
          placeholder="Email"
          required
        />
        <textarea
          v-model="formData.message"
          placeholder="訊息"
          required
        ></textarea>
        <button type="submit">送出</button>
      </form>
    </div> -->
    <el-row :gutter="20">
      <el-col :span="24" class="title"> 聯絡我 </el-col>
    </el-row>

    <el-form
      class="custom-form"
      :model="form"
      label-width="auto"
      style="max-width: 800px"
      label-position="top"
      size="large"
    >
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="姓名">
            <el-input v-model="formData.name" />
          </el-form-item>
        </el-col>
        <el-col :span="14">
          <el-form-item label="性別">
            <el-radio-group v-model="formData.sex">
              <el-radio value="male">男性</el-radio>
              <el-radio value="female">女性</el-radio>
              <el-radio value="other">其他</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="信箱">
            <el-input v-model="formData.mail" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="手機">
            <el-input v-model="formData.phone" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="需求">
            <el-checkbox-group v-model="formData.type">
              <el-checkbox
                v-for="item in contactTypeOptions"
                :key="item.value"
                :value="item.value"
                name="type"
              >
                {{ item.label }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="24">
          <el-form-item label="訊息">
            <el-input v-model="formData.desc" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="24">
          <el-form-item>
            <div class="button-group">
              <el-button type="primary" @click="onSubmit">送出</el-button>
              <el-button>取消</el-button>
            </div>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import emailjs from "emailjs-com";
import { contactTypeOptions } from "@/constants/formOptions";

// 建立響應式的表單資料物件
const formData = reactive({
  name: "",
  email: "",
  message: "",
});

// 定義發送郵件的非同步函式
const sendEmail = async () => {
  try {
    const response = await emailjs.send(
      "service_mlheegy",
      "template_kja2hjf",
      {
        from_name: formData.name,
        to_name: formData.email,
        reply_to: formData.message,
      },
      "VD-r87YjuaiEnGdTz" // 替換為您的公開金鑰
    );
    console.log("郵件發送成功", response);
    alert("信件已寄出！");
  } catch (error) {
    console.error("郵件發送失敗", error);
    alert("寄信失敗，請稍後再試！");
  }
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 2rem 0;
  overflow-y: auto;
  margin-top: -7vh; /* 抵消父元素的 padding-top */
  box-sizing: border-box;
  max-width: 100vw;
}

.title {
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 2rem;
  margin-top: 7vh; /* 為標題添加適當的上邊距 */
}

.form {
  width: 50vw;
  max-height: calc(100vh - 15rem); /* 調整最大高度，考慮導航欄和標題的空間 */
  padding: 1rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 10px 10px 15px 15px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 1rem;
  width: 100%;
}

::v-deep(.el-form-item__label) {
  font-size: 22px;
  font-weight: 700;
  color: #1e3a8a;
}

::v-deep(.el-textarea__inner) {
  width: 100%;
  height: 15vh;
  font-size: 1rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  resize: none;
}

@media (max-width: 768px) {
  .form {
    width: 90vw;
  }
}

.custom-form {
  box-sizing: border-box;
  max-width: 100vw !important;
  width: 100%;
}

::v-deep(.el-row) {
  box-sizing: border-box;
  max-width: 100%;
}

::v-deep(.el-col) {
  box-sizing: border-box;
  max-width: 100%;
}
</style>
