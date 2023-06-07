<template>
  <div class="banner mw1280">
    <div class="fs-48 l-fs-120">
      <p>透過</p>
      <p>AI 工具王的</p>
      <p>強大模型</p>
      <p>讓您的業務</p>
      <p>更聰明</p>
    </div>
    <button class="btn">開始使用</button>
    <div class="down">
      <img src="../assets/motin.png" alt="down">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.down {
  margin: 100px 0px 20px;

  img {
    width: 100%;
  }
}

@media (min-width: 768px) {
  .down {
    display: flex;
    justify-content: end;
    margin: 100px 0;
  }
}
</style>
