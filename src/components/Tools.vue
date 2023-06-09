<script setup>
import useWorks from "../composables/useWorks.js";
import { ref } from "vue";
const { data, loading, reload } = useWorks();
const isFilter = ref(false);
const isOpen = ref(false);
</script>
<template>
  <div class="api-wrapper">
    <h2 class="l-fs-80 fs-32 center title" @click="reload">
      這些超酷的應用，都來自 AI工具王
    </h2>
    <div class="mw1280">
      <input type="text" class="search" placeholder="輸入關鍵字搜尋" />
    </div>
    <div v-if="loading"></div>
    <div v-else class="filter-wrapper mw1280">
      <div class="mt-8 type">
        <div class="dropdown">
          <button
            type="button"
            class="dropdown-btn fs-16"
            @click="isFilter = !isFilter"
          >
            <span class="dropdown-btnText">篩選</span>
            <i class="bx bxs-filter-alt"></i>
          </button>
          <ul class="dropdown-menu" :class="{ show: isFilter }">
            <li class="mb-8" v-for="Ids in data.ai_works.data">
              <div class="new-to-old drop-btn mb-8">{{ Ids.discordId }}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="tag">
        <div class="scroll-box">
          <span>全部</span>
          <span>問答服務</span>
          <span>虛擬客服</span>
          <span>生活應用</span>
          <span>程式知識</span>
          <span>翻譯助手</span>
          <span>行銷文案</span>
        </div>
      </div>
      <div class="mt-8 new">
        <div class="dropdown">
          <button
            type="button"
            class="dropdown-btn fs-16"
            @click="isOpen = !isOpen"
          >
            <span class="dropdown-btnText" v-if="sort">由新到舊</span>
            <span class="dropdown-btnText" v-else>由舊到新</span>
            <i class="bx bxs-chevron-down"></i>
          </button>
          <ul class="dropdown-menu" :class="{ show: isOpen }">
            <li class="mb-8">
              <div class="new-to-old drop-btn" @click="sort = true">
                由新到舊
              </div>
            </li>
            <li>
              <div class="old-to-new drop-btn" @click="sort = false">
                由舊到新
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="loading"></div>
    <div v-else class="card-wrapper mw1280">
      <div class="card" v-for="card in data.ai_works.data">
        <div class="pic">
          <img :src="card.imageUrl" alt="img" class="img-radius" />
        </div>
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
            <a :href="card.link" class="share"
              ><i class="bx bxs-share-alt"></i
            ></a>
          </div>
        </div>
      </div>
    </div>
    <ul class="pagination mw1280">
      <li><a href="#">1</a></li>
      <li><a class="active" href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">></a></li>
    </ul>
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
    width: 90%;
    border-radius: 16px;
    margin: 5%;
  }
  .pic {
    overflow: hidden;
  }
  img {
    transform: scale(1, 1);
    transition: all 1s ease-out;
  }
  img:hover {
    transform: scale(1.2, 1.2);

    overflow: hidden;
  }
  ul.pagination {
    display: flex;
    justify-content: end;
    padding: 50px 10px;
    li {
      display: inline;
      a {
        color: black;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
        border-radius: 5px;
      }
    }
  }

  ul.pagination li a.active {
    background-color: var(--bg);
    color: white;
    border-radius: 5px;
  }

  ul.pagination li a:hover:not(.active) {
    background-color: #ddd;
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
  .search {
    width: 100%;
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
    overflow-x: auto;
    color: var(--gray);
    padding: 20px;
    .scroll-box {
      width: 600px;
    }

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
    cursor: pointer;
    &:hover {
      border-color: #000000;
    }
  }

  .dropdown-menu {
    display: none;
    z-index: 10;
    position: absolute;
    right: 1;
    margin-top: 4px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    padding: 30px;
    border-radius: 16px;
    background-color: var(--white);
    .drop-btn {
      &:hover {
        cursor: pointer;
        background-color: var(--l-gray);
      }
    }
  }
  .show {
    display: block;
  }
}
</style>
