<script setup>
import { ref } from "vue";
import html from "@/assets/svg/html.svg";
import css from "@/assets/svg/css.svg";
import js from "@/assets/svg/Javascript.svg";
import ts from "@/assets/svg/typescript-svgrepo-com.svg";
import vue from "@/assets/svg/vue-fill-svgrepo-com.svg";
import scss from "@/assets/svg/sass-svgrepo-com.svg";
import TailwindCSS from "@/assets/svg/tailwind-svgrepo-com.svg";
import Unity from "@/assets/svg/unity-svgrepo-com.svg";
import csharp from "@/assets/svg/icons8-c-sharp-logo.svg";
import git from "@/assets/svg/git-svgrepo-com.svg";
import computer from "@/assets/svg/computer-monitor-svgrepo-com.svg";
import print from "@/assets/image/3d-printer.png";

const skills = ref([
  { name: "HTML", image: html },
  { name: "CSS", image: css },
  { name: "JavaScript", image: js },
  { name: "TypeScript", image: ts },
  { name: "Vue3", image: vue },
  { name: "SCSS", image: scss },
  { name: "TailwindCSS", image: TailwindCSS },
  { name: "Unity", image: Unity },
  { name: "C#", image: csharp },
  { name: "Git", image: git },
  { name: "電腦組裝", image: computer },
  { name: "3D列印", image: print },
]);
</script>
<template>
  <div class="main">
    <div class="title">
      <h2>關於我</h2>
    </div>

    <div class="content-text">
      <p>
        這些是我會的東西 <br />
        下面是可以聯絡到我的方式
      </p>
    </div>

    <div class="card-block">
      <div class="card-group">
        <div class="cardBtn">
          <a href="https://github.com/GMO517" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="60"
              height="60"
              viewBox="0 0 64 64"
              class="card-icon"
            >
              <path
                d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"
              ></path>
            </svg>
          </a>
        </div>

        <div class="cardBtn">
          <a href="mailto:ra89517r@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="card-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>

        <div class="cardBtn">
          <a href="tel:+886955331108">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="black"
              class="card-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="skill-block">
      <div class="skill-col">
        <div
          class="skill-content"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <img :src="skill.image" />
          <div>{{ skill.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  border: 2px solid black;
}
.main > div {
  margin-top: 20px;
}
.title h2 {
  text-align: center;
  font-size: 2rem;
  font-weight: 600;
}
.content-text p {
  text-align: center;
  font-weight: bold;
}
.card-block {
  display: flex;
  justify-content: center;
  width: 100%;
}

.card-group {
  display: flex;
  gap: 0.25rem;
}

.cardBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  box-shadow: 5px 5px 11px #a8a8a8, -5px -5px 11px #ffffff;
  overflow: hidden;
}

.cardBtn a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

.card-icon {
  width: 85%;
  height: 85%;
}

.skill-block {
  // border: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
}

.skill-col {
  display: grid;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .skill-col {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .skill-col {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .skill-col {
    grid-template-columns: 1fr;
  }
}

.skill-content {
  background-color: var(--el-color-info-light-8);
  height: 3rem;
  width: auto;
  border-radius: 3px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.1rem;
  padding-right: 0.2rem;
  gap: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.02rem;
  line-height: 1.1;

  img {
    margin: 0.5rem;
    height: 2rem;
    width: 2rem;
  }
}
</style>
