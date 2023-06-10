<script setup>
import QaItem from "../components/QaItem.vue";
import { ref } from "vue";

const qalist = [
  "如何選擇適合的AI模型？",
  "租用模型的費用是如何計算的？",
  "如何進行付款？",
  "租用模型的期限是多久？",
  "如果在使用過程中遇到問題，應該怎麼處理？",
];
</script>
<template>
  <div class="mw1280 faq py-120 bt-line">
    <div class="fs-20 l-fs-32 title">常見問題</div>
    <div class="qa">
      <ul class="qa-list mt-8">
        <QaItem v-for="Qa in qalist" :qaTiltle="Qa" />
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
</style>
