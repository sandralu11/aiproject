<script>
import $ from "jquery"; //导入jquery
$(".qa-item").click(function (e) {
  //外誆顏色
  $(this).toggleClass("active");
  //＋出現跟消失
  $(this).find(".add-icon").toggleClass("d-none");
  //－出現跟消失
  $(this).find(".remove-icon").toggleClass("d-block");
  //Ｐ出現跟消失
  $(this).find(".collapse-content p").toggleClass("show");
});
</script>
<template>
  <div class="fs-20 l-fs-32">常見問題</div>
  <div class="qa">
    <ul class="qa-list mt-8">
      <li class="mb-16">
        <a href="#" class="qa-item">
          <div class="d-flex">
            <div class="collapse-state">
              <span class="material-icons add-icon"> add </span>
              <span class="material-icons remove-icon d-none"> remove </span>
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
              <span class="material-icons add-icon"> add </span>
              <span class="material-icons remove-icon d-none"> remove </span>
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
</template>

<style lang="scss" scoped>
.fs-normal {
  font-size: 16px;
}

.mb-8 {
  margin-bottom: 8px;
}

.mb-16 {
  margin-bottom: 16px;
}

.ml-12 {
  margin-left: 12px;
}

.ml-20 {
  margin-left: 20px;
}

.mt-8 {
  margin-top: 8px;
}

.d-flex {
  display: flex;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

/* 常見問題區塊 */
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
