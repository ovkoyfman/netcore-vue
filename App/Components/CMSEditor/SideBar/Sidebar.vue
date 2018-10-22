<template>
  <nav id="sidebar" class="active">
    <side-menu-items></side-menu-items>
  </nav>
</template>
<script>
import sideMenuItems from "./SideMenuItems.vue";
export default {
  components: {
    sideMenuItems: sideMenuItems
  }
};
</script>
<style>
.wrapper {
  width: auto;
  margin: auto;
  display: flex;
  align-items: stretch;
  opacity: 1;
}

#sidebar {
  min-width: 260px;
  max-width: 260px;
  transition: all 0.3s;
  position: fixed;
  height: 100vh;
  background: #fff;
  color: #777;
  border: 1px solid #eee;
  border-top: none;
}

#sidebar {
  min-width: 60px;
  max-width: 60px;
  top: 60px;
}

#sidebar.active .sidebar-header h3,
#sidebar.active .CTAs {
  display: none;
}

#sidebar.active .sidebar-header strong {
  display: block;
}

#sidebar ul li a {
  text-align: center;
}

#sidebar.active ul li a {
  padding: 10px;
}

#sidebar.active ul li a i {
  margin-right: 0;
  display: block;
  font-size: 1.1em;
  margin-bottom: 5px;
}
#sidebar button.btn.btn-secondary {
  background-color: #fff;
  color: #777;
  border: none;
  padding: 10px;
  margin: 0;
  width: 100%;
}
#sidebar button.btn.btn-secondary:hover {
  color: #333;
}
#sidebar button.btn.btn-secondary i {
  margin-right: 0;
  display: block;
  font-size: 1.1em;
  margin-bottom: 5px;
}
#sidebar .btn-secondary:not(:disabled):not(.disabled):active:focus,
#sidebar .btn-secondary:not(:disabled):not(.disabled).active:focus,
#sidebar .show > .btn-secondary.dropdown-toggle:focus,
#sidebar .btn-secondary:focus,
#sidebar .btn-secondary.focus {
  box-shadow: none;
}

#sidebar.active .dropdown-toggle::after {
  top: auto;
  bottom: 10px;
  right: 50%;
  -webkit-transform: translateX(50%);
  -ms-transform: translateX(50%);
  transform: translateX(50%);
}
#sidebar.active .dropdown-toggle.hidden::after {
  display: none;
}
#sidebar .sidebar-header {
  padding: 10px;
}

#sidebar .sidebar-header strong {
  display: none;
  font-size: 1.8em;
}

#sidebar ul li a {
  display: block;
}

#sidebar ul li a:hover {
  background: #fff;
  color: #333;
}

#sidebar ul li a i {
  margin-right: 10px;
}

a[data-toggle="collapse"] {
  position: relative;
}

ul ul a {
  font-size: 0.9em !important;
  padding-left: 30px !important;
  background: #6d7fcc;
}
</style>
