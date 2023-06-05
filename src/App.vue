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
:root {
  --bg: #020202;
  --gray: #525252;
  --l-gray: #f2f2f2;
  --white: #ffffff;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background-color: var(--bg);
  font-family: "Noto Sans TC", sans-serif;
  line-height: 1.5;
  color: var(--white);
}

a {
  display: block;
  text-decoration: none;
  &:hover {
    opacity: 0.8;
  }
}
.logo {
  width: 245px;
}
</style>
