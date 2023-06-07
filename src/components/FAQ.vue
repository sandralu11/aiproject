<script></script>
<template>
  <div class="mw1280 faq py-120">
    <div class="fs-20 l-fs-32 title">常見問題</div>
    <div class="qa">
      <ul class="qa-list mt-8">
        <li class="mb-16">
          <a href="#" class="qa-item">
            <div class="d-flex">
              <div class="collapse-state">
                <i class='bx bx-plus'></i>
                <i class='bx bx-minus d-none'></i>
              </div>
              <div class="collapse-content ml-20">
                <h3>如何選擇適合的AI模型？</h3>
                <p class="d-none">content</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="#" class="qa-item">
            <div class="d-flex">
              <div class="collapse-state">

                <i class='bx bx-plus'></i>
                <i class='bx bx-minus d-none'></i>
              </div>
              <div class="collapse-content ml-20">
                <h3>租用模型的費用是如何計算的？</h3>
                <p class="d-none">content</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 768px) {
  .faq {
    display: grid;

    .title {
      grid-column: 1;
    }

    .qa {
      grid-column: 2/4;
    }
  }
}

.d-none {
  display: none;
}

.d-block {
  display: block;
}

.qa-item {
  padding: 20px 40px;
  border: 1px solid gray;
  border-radius: 16px;
}

.qa-item.active {
  border: 1px solid white;
}

.qa-item:hover {
  border-color: #ffffff;
}

.collapse-content p.show {
  display: block;
}
</style>
