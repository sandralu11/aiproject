<script>
import Banner from "../components/Banner.vue";
import Service from "../components/Service.vue";
import Tools from "../components/Tools.vue";
import Company from "../components/Company.vue";
export default {
  components: {
    Banner,
    Service,
    Tools,
    Company,
  },
};
</script>

<template>
  <Banner />
  <Service />
  <Company />
  <div class="swiper mw1280">
    <ul class="swiper-wrapper mandatory-scroll-snapping container">
      <li class="item" v-for="item in 3">
        <div class="star">★★★★★</div>
        <div>
          作為一家醫療器材公司，我們非常關注人工智能技術的應用，而 AI工具王
          提供的 AI 模型租賃服務為我們帶來了很大的幫助。我們使用 AI工具王
          的模型進行醫學影像分析和預測，這些模型非常精確，能夠幫助我們更好地診斷病情，提高治療效果。感謝
          AI工具王 團隊的辛勤工作！
        </div>
        <div class="personal-info">
          <span>
            <img src="https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/avatar1.png?raw=true"
              alt="photo" />
          </span>
          <div class="info">
            <p>劉小姐</p>
            <p>XYZ 醫療器材有限公司</p>
          </div>
        </div>
      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
  <Tools />
  <div class="bt-line py-120 mw1280 ">
    <div class="center fs-32 l-fs-48">現在就來建立屬於你的服務吧</div>
    <div class="center">
      <router-link to="/price" class="d-ib btn">開始使用↗</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.item {
  background: var(--gray);
  border-radius: 16px;
  padding: 20px;

  .star,
  .personal-info {
    padding: 10px 0 20px;
  }

  .personal-info {
    display: flex;

    .info {
      margin-left: 16px;
    }
  }
}

.d-ib {
  display: inline-block;
}

@media (min-width: 768px) {
  .swiper {
    padding-bottom: 100px;
  }

  .swiper-wrapper {
    display: flex;

    .item {
      margin: 10px;
    }
  }
}

@media (max-width: 768px) {
  .container {
    display: flex;
    overflow: auto;
    outline: 1px dashed lightgray;
    flex: none;
    width: 100%;
    height: 400px;
    flex-flow: row nowrap;
  }

  .mandatory-scroll-snapping {
    scroll-snap-type: x mandatory;

    .item {
      scroll-snap-align: center;
      flex: none;
      width: 350px;
      margin: 20px;
    }
  }
}
</style>
