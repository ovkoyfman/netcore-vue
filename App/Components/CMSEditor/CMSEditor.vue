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
  <b-modal id="modal1" title="Manage Pages">
    <!-- <b-form @submit.prevent>
      <ul>
      <li v-for="(item, index) in navData">
      
      <b-form-checkbox :value="item.title" value="item.checked"/><label>{{item.title}}</label>
      <ul>
      <li v-for="(item, index) in item.subpages">
      <b-form-checkbox :value="item.title" :checked="item.checked"/><label>{{item.title}}</label></li>
      </ul>
      </li>
      </ul>
    </b-form> -->
    <b-form @submit.prevent>
      <ul>
      <li v-for="(item, index) in navData">
      
      <input type="checkbox" :value="item.title" :checked="item.checked" @click="parentClick(item)" :disabled="item.disabled"/><label>{{item.title}}</label>
      <ul>
      <li v-for="(subitem, index) in item.subpages">
      <input type="checkbox" :value="subitem.title" :checked="subitem.checked" @click.prevent="childClick(item,subitem)" :disabled="subitem.disabled"/><label>{{subitem.title}}</label></li>
      </ul>
      </li>
      </ul>
    </b-form>
  </b-modal>
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
    },
    navData: function() {
      return this.$store.state.menuData;
    }
  },
   methods: {
    parentClick: function(item) {
      item.checked = !item.checked;
      item.subpages.forEach(element => {
        element.checked = item.checked;
        console.log(item.checked);
      });
    },
    childClick: function(parentItem, childItem) {
      var flag = 0;
      childItem.checked = !childItem.checked;
      parentItem.subpages.forEach(element => {
        if (element.checked) flag = 1;
        console.log("flag", flag);
      });
      parentItem.checked = flag ? true : false;
    }
  }
  // created(){
  //   eventBusForSidebar.$on('viewStateChanged',(state)=>{
  //    this.display = state;
  //   })
  // }
};
</script>
