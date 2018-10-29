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
          <ul>
            <drag v-model="navData" :options="{handle:'.handleParent'}">
            <li v-for="(item, index) in navData"  class="col-sm-6">
            <label><span class="handleParent">
            <i class="fas fa-bars"></i>
            </span>{{item.title}}
              <input type="checkbox" :value="item.title" :checked="item.checked" @click="parentClick(item)" :disabled="item.disabled"/>
            </label>
            <ul>
          <drag :options="{handle:'.handle'}">
              <li v-for="subitem in item.subpages" class="list-group-item"><label><span class="handle"><i class="fas fa-bars"></i></span>{{subitem.title}}<input type="checkbox" :value="subitem.title" :checked="subitem.checked" @click.prevent="childClick(item,subitem)" :disabled="subitem.disabled"/></label>
              </li>
          </drag>
          </ul>
          </li>
            </drag>
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
import dropZone from "../Form/DropZone.vue";
import drag from "vuedraggable";
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
    dropZone: dropZone,
    drag: drag
  },
   computed: {
    linkHref: function() {
      return this.$store.state.styleLink;
    },
    navData: {
        get() {
            return this.$store.state.menuData;
        },
        set(value) {
            this.$store.commit('updateNavData', value)
        }
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
<style scoped>
i.fas.fa-bars {
    padding: 10px;
}
ul {
  margin: 0;
  padding: 0;
}
label{
  width: 100%;
}
input{
  float: right;
}
input:disabled {
    display: block;
}
li.col-sm-6:nth-child(3n+0) {
    clear: both;
}
div.modal-body > form > ul > div > li {
    margin-top: 20px;
}
@media (min-width: 576px){
.col-sm-6 {
  float: left;
}
}
</style>
