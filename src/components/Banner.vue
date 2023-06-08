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
      <div>
        <img src="../assets/arrow.png" alt="down" class="a-one arrow" />
      </div>
      <div>
        <img src="../assets/arrow.png" alt="down" class="a-two arrow" />
      </div>
      <div>
        <img src="../assets/arrow.png" alt="down" class="a-three arrow" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.down {
  margin: 120px 20px;
  display: flex;
  justify-content: end;
  img {
    width: 100%;
  }
  .arrow {
    position: relative;
    top: 0;
    left: 0;
    animation-name: move;
    animation-iteration-count: infinite;
    animation-duration: 1s;
  }
  .a-two {
    animation-delay: 0.3s;
  }
  .a-three {
    animation-delay: 0.5s;
  }
  @keyframes move {
    to {
      top: 200px;
    }
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
