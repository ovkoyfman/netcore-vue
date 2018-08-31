<template>
  <div id="home">
    <h1>Sandbox</h1>
    <router-link to="todo">Todo List</router-link>
    <router-link to="forecast">Forecast List</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./variables.scss";

#home {
  color: $vue-blue;
}
</style>
