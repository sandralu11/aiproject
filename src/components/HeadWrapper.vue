<template>
  <div class="navbar mw1280">
    <a href="#">
      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true" alt="logo"
        class="logo" />
    </a>
    <button type="button" class="navbar-btn">
      <i class='bx bx-menu'></i>
    </button>
    <ul class="navbar-menu">
      <li><a href="/" class="p-20">首頁</a></li>
      <li><a href="/price" class="p-20">定價</a></li>
    </ul>
    <div class="navbar-collapse">
      <div class="collapse">
        <ul>
          <li><a href="#" class="me-20">首頁</a></li>
          <li><a href="#" class="">定價</a></li>
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
