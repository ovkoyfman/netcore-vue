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
<style>
@import "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700";
body {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
}
header.header-sso {
  display: none;
}
p {
  font-family: "Poppins", sans-serif;
  font-size: 1.1em;
  font-weight: 300;
  line-height: 1.7em;
  color: #999;
}

a,
a:hover,
a:focus {
  color: inherit;
  text-decoration: none;
}

.content-wrapper {
  padding: 0;
  margin-left: 260px;
  transition: margin 0.3s;
  position: relative;
}
.cmseditor form {
  max-width: 80%;
  margin: auto;
}
.room-block td {
  padding: 10px;
  border: 1px solid #eee;
}
.room-block td input:disabled {
  background-color: #fff;
  border: none;
}
.content-wrapper.adjust {
  margin-left: 60px;
}
.logo {
  max-width: 60px;
  height: 100%;
  border-right: 1px solid #eee;
  background-image: url(https://uikits.cendyn.com/Areas/v002/Content/images/favicon-apple.png);
  background-repeat: no-repeat;
  background-position: center;
}
.cmseditor {
  margin-top: 60px;
  border-right: 1px solid #eee;
}
.cmseditor div {
  position: relative;
}
.cmseditor h2 {
  font-size: 2.5rem;
  position: absolute;
  bottom: 60px;
  left: 10%;
  color: #fff;
  text-shadow: 0 0 20px #000000;
  z-index: 9;
}
.header-image {
  background: url("https://images.unsplash.com/photo-1514359077460-2411095f4c2f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=970bdb0ae8a24541733930855900f25f&auto=format&fit=crop&w=967&q=80");
  padding-bottom: 50%;
  width: 100%;
  max-width: 1120px;
  background-size: cover;
  position: relative;
}
.navbar {
  padding: 9px 10px;
  background: #fff;
  opacity: 0.8;
  position: absolute;
  left: 10%;
  right: 10%;
  top: 140px;
  z-index: 9;
}
.navbar {
  padding: 9px 10px;
  background: #fff;
  border: none;
  border-radius: 0;
  margin-bottom: 20px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}
.components li a {
  white-space: nowrap;
}

.navbar-btn {
  box-shadow: none;
  outline: none !important;
  border: none;
}

.line {
  width: 100%;
  height: 1px;
  border-bottom: 1px dashed #ddd;
  margin: 40px 0;
}

i,
span {
  display: inline-block;
}
.header {
  height: 60px;
  background-color: #fff;
  border: 1px solid #eee;
  position: fixed;
  width: 100%;
  max-width: 1180px;
  z-index: 999;
}
#content {
  width: 1020px;
  margin: auto;
  padding: 8px;
  transition: all 0.3s;
  background: #fff;
  width: 100%;
}
.category input {
  width: 100%;
}
/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
  #sidebar {
    /* min-width: 80px;
      max-width: 80px;
      text-align: center;
      margin-left: -80px !important; */
  }
  .dropdown-toggle::after {
    top: auto;
    bottom: 10px;
    right: 50%;
    -webkit-transform: translateX(50%);
    -ms-transform: translateX(50%);
    transform: translateX(50%);
  }
  #sidebar.active {
    margin-left: 0 !important;
  }
  #sidebar .sidebar-header h3,
  #sidebar .CTAs {
    display: none;
  }
  #sidebar .sidebar-header strong {
    display: block;
  }
  #sidebar ul li a {
    padding: 20px 10px;
  }
  #sidebar ul li a span {
    font-size: 0.85em;
  }
  #sidebar ul li a i {
    margin-right: 0;
    display: block;
  }
  #sidebar ul ul a {
    padding: 10px !important;
  }
  #sidebar ul li a i {
    font-size: 1.3em;
  }
  #sidebar {
    margin-left: 0;
  }
}
</style>