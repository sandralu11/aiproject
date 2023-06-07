<script>
import FAQ from "../components/FAQ.vue";
import Tools from "../components/Tools.vue";
export default {
  components: {
    FAQ,
    Tools,
  },
};
</script>
<template>
  <div class="banner mw1280">
    <div>
      <p class="fs-48 l-fs-120">用多少，</p>
      <p class="fs-48 l-fs-120">付多少。</p>
    </div>
    <div class="sub-title">
      <p class="fs-28 l-fs-48">
        我們相信，最靈活的取用機制，才能最大化的幫助你業務的推動。
      </p>
    </div>
    <div class="down">
      <img src="../assets/motin.png" alt="down" />
    </div>
  </div>
  <div class="pricing mw1280">
    <h2 class="fs-20 l-fs-32 py-20">定價</h2>
    <div class="wrap">
      <div class="card" v-for="card in 4">
        <div class="introduce">
          <div class="fs-32">琪琪</div>
          <ul>
            <li class="fs-16">初級</li>
            <li class="fs-16">速度最快</li>
          </ul>
        </div>
        <div class="price-wrap">
          <div class="price">
            <span class="fs-20">NT$5</span>
            <span class="fs-20 token">／1k tokens</span>
          </div>
          <a href="#"><span class="fs-20">開始使用↗</span></a>
        </div>
      </div>
    </div>
  </div>
  <div class="regulations py-120 mw1280">
    <div class="title">
      <h2 class="fs-20 l-fs-32 py-20">使用規範</h2>
    </div>

    <div class="items">
      <div class="item" v-for="item in 3">
        <h3 class="fs-32 l-fs-48 py-20">守法</h3>
        <p class="fs-16 py-20">
          請遵守相關的法規和政策，不得進行任何違法違規的活動。
        </p>
      </div>
    </div>
  </div>
  <Tools />
  <FAQ />
</template>

<style lang="scss" scoped>
.down {
  img {
    width: 100%;
  }
}

.sub-title {
  width: 80%;
  float: right;
  margin: 20px 0px 200px;
}

.card {
  border: 1px solid var(--gray);
  border-radius: 16px;
  margin: 10px 0;

  .introduce {
    padding: 20px 10px 50px;
  }

  ul {
    padding-left: 30px;
  }

  li {
    list-style-type: disc;
  }

  .price-wrap {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--gray);
    padding: 20px;

    .price {
      .token {
        color: var(--gray);
      }
    }
  }
}

.regulations {
  .item {
    border-bottom: 1px solid var(--gray);
  }
}

@media (min-width: 768px) {
  .wrap {
    display: flex;
    flex-wrap: wrap;

    .card {
      width: 48%;
      margin: 5px;
    }
  }

  .regulations {
    display: grid;

    .title {
      grid-column: 1;
    }

    .items {
      grid-column: 2/4;
    }
  }
}
</style>
