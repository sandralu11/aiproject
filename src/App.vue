<script>
import HeadWrapper from "./components/HeadWrapper.vue";
import FootWrapper from "./components/FootWrapper.vue";

export default {
  components: {
    HeadWrapper,
    FootWrapper,
  },
};
</script>

<template>
  <div id="app">
    <HeadWrapper />
    <router-view />
    <FootWrapper />
  </div>
</template>

<style lang="scss">
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 8px;
}

@media (min-width: 768px) {
}
</style>
