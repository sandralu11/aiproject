<template>
  <div class="service">
    <div class="info">
      <div class="fs-20 l-fs-32 ">我們的服務</div>
      <div class="fs-32 l-fs-48">
        我們相信透過 AI 技術，
        包括圖像識別、自然語言處理和機器翻譯等，讓您更快、更準確地做出決策。
      </div>
    </div>
    <div class="list">
      <ul class="list-item">
        <li>
          <i class='bx bx-popsicle'></i>
        </li>
        <li class="fs-32">快速</li>
        <li class="fs-16">我們先進的推理基礎設施提供了極短的響應時間，讓你的產品服務不間斷。</li>
      </ul>
      <ul class="list-item">
        <li>
          <i class='bx bx-popsicle'></i>
        </li>
        <li class="fs-32">靈活</li>
        <li class="fs-16">我們的服務可以根據您的需求進行靈活調整，同時還可以滿足不同項目和預算的需求。</li>
      </ul>
      <ul class="list-item">
        <li>
          <i class='bx bx-popsicle'></i>
        </li>
        <li class="fs-32">擴充</li>
        <li class="fs-16">我們的服務支持多種擴充選項，可以滿足您的不斷增長的 AI 需求。</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.list {
  .list-item {
    border: 1px solid var(--gray);
    border-radius: 16px;
    padding: 50px 30px;
    margin: 10px 0;

    .material-icons {
      font-size: 50px;
    }
  }
}

@media (min-width: 768px) {
  .info {
    display: flex;
    justify-content: space-between;

    &:nth-child(1) div {
      flex: 1;
    }

    &:nth-child(2) div {
      flex: 2;
    }
  }

  .list {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    .list-item {
      margin: 10px;
      width: 33%;
    }
  }
}
</style>
