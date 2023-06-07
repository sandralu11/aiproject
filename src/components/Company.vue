<script></script>
<template>
  <div class="mw1280 py-120">
    <div class="fs-24 l-fs-32 py-20">來自合作夥伴</div>
    <ul class="enterprise mb-20 mb-md-12">
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise1.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise2.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise3.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise4.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise5.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise6.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise7.png?raw=true"
          alt="">
      </li>
    </ul>
    <ul class="enterprise mb-160 mb-md-48">
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise8.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise9.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise11.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise12.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise1.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise2.png?raw=true"
          alt="">
      </li>
      <li>
        <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/enterprise3.png?raw=trueg"
          alt="">
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.mb-20 {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .mb-md-120 {
    margin-bottom: 120px;
  }
}

.enterprise {
  display: flex;
  justify-content: center;
  overflow-x: scroll;
  position: relative;
}

/* 隱藏 x 軸 */
/* Hide scrollbar for Chrome, Safari and Opera */
.enterprise::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.enterprise {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.enterprise::after,
.enterprise::before {
  content: "";
  position: sticky;
  width: 196px;
  height: 40px;
  top: 0;
}

.enterprise::before {
  left: 0;
  padding-right: 196px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
}

.enterprise::after {
  right: 0;
  padding-left: 196px;
  background: linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  transform: rotate(-180deg);
}

.enterprise li:not(:last-child) {
  margin-right: 20px;
}

.enterprise img {
  width: 160px;
  height: 40px;
  max-width: initial;
}
</style>
