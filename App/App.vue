<template>
  <div>
    <MainNavgation v-if="!$route.path.includes('/cmseditor')"></MainNavgation>
  <div class="container"> 
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import MainNavgation from "./Components/Navigation/MainNav";
export default {
  name: "app",
  components: {
    MainNavgation: MainNavgation
  }
};
</script>

<style lang="scss">
@import "./variables.scss";

#home {
  color: $vue-blue;
}
@media (min-width: 1200px) {
  .container {
    max-width: 1240px;
  }
}
</style>
