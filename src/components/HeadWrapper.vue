<script>
import { ref } from "vue";
export default {
  setup() {
    const btn = ref(false);
    return {
      btn,
    };
  },
};
</script>
<template>
  <div class="navbar mw1280" id="gotop">
    <a href="#">
      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true" alt="logo"
        class="logo" />
    </a>
    <div @click="btn = !btn" class="navbar-btn">
      <i class="bx bx-menu"></i>
    </div>

    <ul class="navbar-menu">
      <li><router-link to="/" class="p-20">首頁</router-link></li>
      <li><router-link to="/price" class="p-20">定價</router-link></li>
    </ul>

    <div class="navbar-collapse" :class="{ show: btn }">
      <div class="collapse">
        <ul>
          <li><router-link to="/">首頁</router-link></li>
          <li><router-link to="/price">定價</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid var(--white);
  position: relative;

  .navbar-btn {
    cursor: pointer;
    background-color: transparent;
    border: 0;
    color: var(--white);

    &:hover {
      transform: scale(1.1);
    }

    .bx-menu {
      font-size: 30px;
    }
  }

  .navbar-menu {
    display: none;
  }

  .navbar-collapse {
    display: none;
    position: absolute;
    top: 80px;
    width: 100%;
    min-height: calc(100vh - 81px);
    /* 佔滿整個瀏覽器高度扣掉 navbar 高度 */
    background-color: var(--bg);
    border-top: 1px solid var(--white);

    a {
      font-size: 80px;
      line-height: 1.2;
      margin: 4px 0;
    }

    .collapse {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .show {
    display: block;
  }
}

@media (min-width: 768px) {
  .navbar {

    .navbar-btn,
    .navbar-collapse {
      display: none;
    }

    .navbar-menu {
      display: flex;
    }
  }
}
</style>
