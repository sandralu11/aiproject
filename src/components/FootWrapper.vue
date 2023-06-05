<template>
  <div class="nav bt-line">
    <a href="#">
      <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/logo.png?raw=true" alt="logo"
        class="logo" />
    </a>
    <ul>
      <li><a href="#" class="l-fs-80 fs-48 ">首頁</a></li>
      <li><a href="#" class="l-fs-80 fs-48 ">定價</a></li>
    </ul>
  </div>
  <div class="footer">
    <div class="copy-right">AI工具王 © 2023</div>
    <div class="social">
      <span>Facebook</span>
      <span>Twitter</span>
      <span>Instagram</span>
    </div>
    <div id="scrollToTop" class="top">Back to top ↑</div>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  padding-bottom: 50px;
}

img {
  padding: 70px 0;
}

.social>span {
  padding-right: 10px;
}

.footer {
  display: grid;
  margin: 20px 0;
  grid-template-columns: repeat(4);
  grid-template-rows: repeat(2);
  grid-column-gap: 10px;
  font-size: 16px;
  font-weight: 700;

  .copy-right {
    //grid-area: row_start / column_start / row_end / column_end
    grid-column: 1 /3;
    grid-row: 1/ 2;
  }

  .social {
    grid-row: 2/ 3;
    grid-column: 1 / 4;
  }

  .top {
    grid-row: 1/ 2;
    grid-column: 3 / 4;
  }
}

@media (min-width: 768px) {
  .nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse
  }

  .footer {
    grid-template-columns: repeat(6);
    grid-template-rows: repeat(1);

    .copy-right {
      grid-column: 1 /2;
      grid-row: 1/ 2;
    }

    .social {
      grid-row: 1/ 2;
      grid-column: 2 / 3;
    }

    .top {
      grid-row: 1/ 2;
      grid-column: 3 / 4;
    }
  }
}
</style>
