<script setup>
import { ref } from 'vue';

const toggleModal = ref(false)
const props = defineProps({
  qaTiltle: String
})
</script>
<template>
  <li class="mb-16" @click="toggleModal = !toggleModal">
    <div class="qa-item">
      <div class="d-flex">
        <div class="collapse-state">
          <i class="bx bx-plus" :class="{ 'd-none': toggleModal }"></i>
          <i class="bx bx-minus" :class="{ 'd-none': !toggleModal }"></i>
        </div>
        <div class="collapse-content ml-20">
          <h3>{{ props.qaTiltle }}</h3>
          <p :class="{ 'd-none': !toggleModal }">content</p>
        </div>
      </div>
    </div>
  </li>
</template>

<style lang="scss" scoped>
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
  cursor: pointer;
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
