<script></script>
<template>
  <div class="api-wrapper">
    <h2 class="l-fs-80 fs-32 center title">這些超酷的應用，都來自 AI工具王</h2>

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


    <div class="card-wrapper mw1280">
      <div class="card">
        <div class="img-radius img-url1"></div>
        <div class="container">
          <h3 class="card-title font-bold">Chatbot Builder</h3>
          <p class="info p-20-30">
            建立智能化的聊天機器人，解答常見問題、提供客戶支援、收集反饋等。
          </p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">AI 模型</span>
            <span>卡卡</span>
          </div>
          <div class="between p-20-30 line-top">
            <span>#聊天</span>
            <span class="material-icons"> share </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-radius img-url2"></div>
        <div class="container">
          <h3 class="card-title font-bold">Image Recognition Platform</h3>
          <p class="info p-20-30">
            專業的圖像識別平台，識別圖像、分類、標記等。
          </p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">AI 模型</span><span>杰杰</span>
          </div>
          <div class="between p-20-30 line-top">
            <span>#影像辨識</span>
            <span class="material-icons"> share </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-radius img-url3"></div>
        <div class="container">
          <h3 class="card-title font-bold">Language Translation API</h3>
          <p class="info p-20-30">
            專業的語言翻譯 API，實現文本翻譯功能，支援多種格式的文本。
          </p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">AI 模型</span><span>琪琪</span>
          </div>
          <div class="between p-20-30 line-top">
            <span>#翻譯</span>
            <span class="material-icons"> share </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-radius img-url4"></div>
        <div class="container">
          <h3 class="card-title font-bold">Sentiment Analysis API</h3>
          <p class="info p-20-30">
            自動識別文本中的情感傾向，包括正向、負向和中性等。適用於情感分析、社交媒體監控、市場調查等。
          </p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">AI 模型</span><span>昊昊</span>
          </div>
          <div class="between p-20-30 line-top">
            <span>#行銷</span>
            <span class="material-icons"> share </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-radius img-url5"></div>
        <div class="container">
          <h3 class="card-title font-bold">Fraud Detection Platform</h3>
          <p class="info p-20-30">預防詐騙活動，適用於銀行、金融、電商等。</p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">AI 模型</span><span>卡卡</span>
          </div>
          <div class="between p-20-30 line-top">
            <span>#客服</span>
            <span class="material-icons"> share </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="img-radius img-url6"></div>
        <div class="container">
          <h3 class="card-title font-bold">Voice Assistant SDK</h3>
          <p class="info p-20-30">
            通過語音控制應用程式、設備，實現多種功能，例如播放音樂、查詢天氣、發送信息等。
          </p>
          <div class="between p-20-30 line-top">
            <span class="font-bold">AI 模型</span>杰杰
          </div>
          <div class="between p-20-30 line-top">
            <span>#生產力</span>
            <span class="material-icons"> share </span>
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


  .img-url1 {
    background-image: url(https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool1.png?raw=true);
  }

  .img-url2 {
    background-image: url(https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool2.png?raw=true);
  }

  .img-url3 {
    background-image: url(https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool3.png?raw=true);
  }

  .img-url4 {
    background-image: url(https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool4.png?raw=true);
  }

  .img-url5 {
    background-image: url(https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool5.png?raw=true);
  }

  .img-url6 {
    background-image: url(https://github.com/hexschool/2022-web-layout-training/blob/main/2023web-camp/tool6.png?raw=true);
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
    height: 280px;
    border-radius: 15px 15px 0 0;
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
