<template>
  <div id="home">
    <h1>Sandbox</h1>
    <MainNavgation />
  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import MainNavigation from './Components/Navigation/MainNav.vue';
export default {
};
</script>

<style lang="scss">
@import "./variables.scss";

#home {
  color: $vue-blue;
}
</style>
