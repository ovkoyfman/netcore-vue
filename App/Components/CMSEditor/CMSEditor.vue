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
   mounted: function(){
    if(!document.getElementById('id1')) {
    var link = document.createElement('link');
    link.id = 'id1';
    link.rel = 'stylesheet';
    link.href = this.linkHref;
    document.head.appendChild(link);
    }
    console.log(this.$store.state.styleLink);
  },
  destroyed: function(){
    console.log("destroyed");
    var style = document.getElementById('id1')
    if(style) document.head.removeChild(style);
  },
  components: {
    sideBar: sideBar,
    navBar: navBar,
    cmsHeader: header
  },
   computed: {
    linkHref: function() {
      return this.$store.state.styleLink;
    }
  }
  // created(){
  //   eventBusForSidebar.$on('viewStateChanged',(state)=>{
  //    this.display = state;
  //   })
  // }
};
</script>
