<template>
<div>
  <cms-header></cms-header>
  <div class="wrapper">
    <side-bar></side-bar>
    
    <!-- Sidebar  -->
    
    <!-- Page Content  -->
    <div class="container-fluid content-wrapper adjust" >
     <!-- <h1>{{display}}</h1> -->
      <nav-bar></nav-bar>
      <router-view class="cmseditor"></router-view>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import sideBar from "./SideBar/Sidebar.vue";
//import { eventBusForSidebar } from "../../index";
import navBar from "./NavBar/Navbar.vue";
import header from "./Header/Header.vue";
export default {
  // data: function () {
  //   return {
  //     display: true,
  //   }
  // },
  components: {
    sideBar: sideBar,
    navBar: navBar,
    cmsHeader: header
  }
  // created(){
  //   eventBusForSidebar.$on('viewStateChanged',(state)=>{
  //    this.display = state;
  //   })
  // }
};
</script>
