<script setup>
import { reactive } from "vue";
import emailjs from "emailjs-com";

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

<template>
  <div class="main">
    <div class="title">
      <h2>聯絡我</h2>
    </div>
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

    <div class="form">
      <el-form
        class="custom-form"
        :model="form"
        label-width="auto"
        style="max-width: 800px"
        label-position="top"
        size="large"
      >
        <el-form-item label="姓名">
          <el-input v-model="formData.name" />
        </el-form-item>

        <el-form-item label="性別">
          <el-radio-group v-model="formData.sex">
            <el-radio value="male">男性</el-radio>
            <el-radio value="female">女性</el-radio>
            <el-radio value="other">其他</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label="信箱">
          <el-input v-model="formData.mail" />
        </el-form-item>
<el-form-item label="信箱">
          <el-input v-model="formData.mail" />
        </el-form-item>

        <el-form-item label="手機">
          <el-input v-model="formData.phone" />
        </el-form-item>

        <el-form-item label="手機">
          <el-input v-model="formData.phone" />
        </el-form-item>

        <el-form-item label="需求">
          <el-checkbox-group v-model="formData.type">
            <el-checkbox value="網頁設計" name="type"> 網頁設計 </el-checkbox>
            <el-checkbox value="3d列印" name="type"> 3D列印 </el-checkbox>
            <el-checkbox value="電腦組裝" name="type"> 電腦組裝 </el-checkbox>
            <el-checkbox value="unity外包" name="type"> Unity外包 </el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="訊息">
          <el-input v-model="formData.desc" type="textarea" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">送出</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  width: 60vh;
  padding: 1rem;
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 10px 10px 15px 15px rgba(0, 0, 0, 0.1);
}

::v-deep(.el-form-item__label) {
  font-size: 22px;
  font-weight: 700;
  color: #1e3a8a;
}

::v-deep(.el-textarea__inner) {
  width: 100%;
  height: 20vh;
  font-size: 1rem;
  line-height: 1;
  padding: 0.5rem 1rem;
  resize: none;
}
</style>
