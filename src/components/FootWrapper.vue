<template>
  <footer>
    <div class="nav bt-line">
      <ul class="py-50">
        <li><a href="#" class="fs-80">首頁</a></li>
        <li><a href="#" class="fs-80">定價</a></li>
      </ul>
      <a href="#">
        <img
          src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true"
          alt="logo"
          class="logo"
        />
      </a>
    </div>
    <div class="df-sb my-50">
      <div class="df-sb">
        <div>AI工具王 © 2023</div>
        <div class="social">
          <span>Facebook</span>
          <span>Twitter</span>
          <span>Instagram</span>
        </div>
      </div>
      <div id="scrollToTop">Back to top ↑</div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  .nav {
    display: flex;
    justify-content: space-between;
  }

  img {
    padding: 70px 0;
  }

  .social > span {
    padding: 0 10px;
  }

  .df-sb {
    display: flex;
    justify-content: space-between;
  }
}
</style>
