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
  <b-modal id="modal1" title="Manage Pages" @ok="handleOk" >
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
      
        <template  v-for="(item, index) in navData">
        <table>
        <tr><th><i class="fas fa-bars"></i><label>{{item.title}}<input type="checkbox" :value="item.title" :checked="item.checked" @click="parentClick(item)" :disabled="item.disabled"/></label></th></tr>
            <tr v-for="(subitem, index) in item.subpages">
              <drop-zone></drop-zone>
              <td><i class="fas fa-bars"></i><label>{{subitem.title}}<input type="checkbox" :value="subitem.title" :checked="subitem.checked" @click.prevent="childClick(item,subitem)" :disabled="subitem.disabled"/></label></td>
              <drop-zone v-if="subitem.length-1"></drop-zone>
            </tr>
        </table>
      </template>

    </b-form>
  </b-modal>
</div>
</template>
<script type="text/javascript">
import sideBar from "./SideBar/Sidebar.vue";
//import { eventBusForSidebar } from "../../index";
import navBar from "./NavBar/Navbar.vue";
import header from "./Header/Header.vue";
import dropZone from "../Form/DropZone.vue";
export default {
   data: function () {
     return {
       reroute: false,
     }
   },
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
    var style = document.getElementById('id1')
    if(style) document.head.removeChild(style);
  },
  components: {
    sideBar: sideBar,
    navBar: navBar,
    cmsHeader: header,
    dropZone: dropZone
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
        if(this.$router.currentRoute.path == item.to && !item.checked) {
          this.reroute = true;
        } 
        else this.reroute = false;
      item.subpages.forEach(element => {
        element.checked = item.checked;
        if(this.$router.currentRoute.path == element.to){
         if(!element.checked) this.reroute = true 
         else this.reroute = false;
        }
      });
    },
    childClick: function(parentItem, childItem) {
      var flag = 0;
     
      childItem.checked = !childItem.checked;
      parentItem.subpages.forEach(element => { 
        if(this.$router.currentRoute.path == element.to){
         if(!element.checked) this.reroute = true 
         else this.reroute = false;
        }
        if (element.checked) flag = 1;
      });
      parentItem.checked = flag ? true : false;
    },
    handleOk: function(){
      if (this.reroute) this.$router.push('/cmseditor/welcome/')
      this.reroute = false;
    }
  }
  // created(){
  //   eventBusForSidebar.$on('viewStateChanged',(state)=>{
  //    this.display = state;
  //   })
  // }
};
</script>
