<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="navbar-collapse" id="navbarSupportedContent">
        <b-nav>
          <template  v-for="nav in visibleMenu" >
          <b-nav-item-dropdown v-if="nav.checked" :to="nav.to" :text="nav.title">
            <template v-for="navSubMenu in nav.subpages" >
            <b-dropdown-item v-if="navSubMenu.checked" :to="navSubMenu.to" >{{navSubMenu.title}}</b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
          </template>
        </b-nav>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    visibleMenu: function() {
      return this.$store.state.menuData;
    }
  }
};
</script>
<style>
.nav-item {
  border-radius: 50%;
}
</style>

