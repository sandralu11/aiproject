<script setup>
import useWorks from '../composables/useWorks.js'


const { data, loading, reload } = useWorks();

</script>
<template>
  <div class="api-wrapper">
    <h2 class="l-fs-80 fs-32 center title" @click="reload">這些超酷的應用，都來自 AI工具王</h2>

    <input type="text" class="search" placeholder="輸入關鍵字搜尋" />
    <div class="filter-wrapper mw1280">
      <div class="mt-8 type">
        <div class="dropdown">
          <button type="button" class="dropdown-btn fs-16">
            <span class="dropdown-btnText">篩選</span>
            <i class='bx bxs-filter-alt'></i>
          </button>
          <ul class="dropdown-menu">
            <li class="mb-8">
              <a href="#" class="new-to-old">AI模型</a>
            </li>
            <li>
              <a href="#" class="old-to-new">類型</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tag">
        <span>全部</span>
        <span>問答服務</span>
        <span>虛擬客服</span>
        <span>生活應用</span>
        <span>程式知識</span>
        <span>翻譯助手</span>
        <span>行銷文案</span>
      </div>
      <div class="mt-8 new">
        <div class="dropdown">
          <button type="button" class="dropdown-btn fs-16">
            <span class="dropdown-btnText">由新到舊</span>
            <i class='bx bxs-chevron-down'></i>
          </button>
          <ul class="dropdown-menu">
            <li class="mb-8">
              <a href="#" class="new-to-old">由新到舊</a>
            </li>
            <li>
              <a href="#" class="old-to-new">由舊到新</a>
            </li>
          </ul>
        </div>
      </div>


    </div>


    <div v-if="loading"></div>
    <div v-else class="card-wrapper mw1280">
      <div class="card" v-for="card in data.ai_works.data">
        <img :src="card.imageUrl" alt="img" class="img-radius">
        <div class="container">
          <h3 class="card-title font-bold">{{ card.title }}</h3>
          <p class="info p-20-30">
            {{ card.description }}
          </p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">{{ card.type }}</span>
            <span>{{ card.discordId }}</span>
          </div>
          <div class="between p-20-30 line-top">
            <span>#{{ card.model }}</span>
            <a :href="card.link" class="share"><i class='bx bxs-share-alt '></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.api-wrapper {
  border-radius: 60px;
  background-color: var(--white);
  padding: 150px 0;
  color: var(--bg);

  .title {
    padding: 50px;
  }

  .search {
    background-color: var(--l-gray);
    border: 1px solid var(--l-gray);
    padding: 20px;
    margin: 0 5%;
    width: 90%;
    border-radius: 16px;
  }
}

.card-wrapper {
  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;

    .card {
      width: 31%;
    }
  }

  .share {
    color: var(--bg);
  }

  .font-bold {
    font-weight: 900;
  }

  .p-20-30 {
    padding: 20px 30px;
  }

  .between {
    display: flex;
    justify-content: space-between;
  }

  .line-top {
    border-top: 1px solid #ccc;
  }

  .info {
    font-size: 14px;
    line-height: 25px;
    min-height: 80px;
  }

  .card-title {
    font-size: 20px;
    padding: 20px 30px 0;
  }

  .card {
    margin: 12px;
  }

  .img-radius {
    border: 1px solid var(--l-gray);
    border-radius: 15px 15px 0 0;
    object-fit: cover;
    width: 100%;
  }

  .container {
    border: 1px solid var(--l-gray);
    border-radius: 0 0 15px 15px;
  }


}

.filter-wrapper {
  display: grid;
  grid-gap: 10px;

  .type {
    grid-column: 1;
    grid-row: 1;

  }

  .new {
    grid-column: 2;
    grid-row: 1;

  }

  .tag {
    grid-column: 1/3;
    grid-row: 2;
    overflow-x: scroll;
    color: var(--gray);
    padding: 20px;

    span {
      margin: 10px;

      &:hover {
        cursor: pointer;
      }

      &:active {
        color: var(--bg);
        background-color: var(--l-gray);
        border-radius: 15px;
        padding: 10px;
      }
    }
  }

  @media (min-width: 768px) {
    .type {
      grid-column: 1;
    }

    .tag {
      grid-column: 3/5;
      grid-row: 1;

    }

    .new {
      grid-column: 6;
    }

  }

  .dropdown {
    position: relative;
  }

  .dropdown-btn {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #f2f2f2;
    padding-top: 20px;
    padding-left: 40px;
    padding-right: 32px;
    padding-bottom: 20px;
    border-radius: 16px;

    &:hover {
      border-color: #000000;
    }
  }

  .dropdown-menu {
    position: absolute;
    right: 0;
    display: none;
    margin-top: 4px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    padding: 20px 0;
    border-radius: 16px;

    a {
      padding: 4px 40px;

      &:hover {
        background-color: #f2f2f2;
      }

      .dropdown-menu.show {
        display: block;
      }
    }
  }
}
</style>
