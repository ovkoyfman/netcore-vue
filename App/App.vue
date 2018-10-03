<template>
  <div>
    <h1>Sandbox</h1>
    <MainNavgation></MainNavgation>
  <div class="container">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import MainNavgation from './Components/Navigation/MainNav'
export default {
  name: 'app',
  components: {
    'MainNavgation': MainNavgation
  }
};
</script>

<style lang="scss">
@import "./variables.scss";

#home {
  color: $vue-blue;
}
</style>
