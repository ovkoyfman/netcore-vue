<template >
<ul class="list-unstyled components">
      <li v-for="item in sideMenu" :key="item.name">
        <b-btn v-if="item.action" v-b-modal.modal1>
          <i class="fas" :class="item.class"></i>
          <!-- <span>{{item.name}}</span> -->
        </b-btn>
        <router-link v-if="item.to" :to="item.to">
          <i class="fas" :class="item.class"></i>
          <!-- <span>{{item.name}}</span> -->
        </router-link>
      </li>
</ul>
</template>
<script>
//import { eventBusForSidebar } from '../../../index';
export default {
  data: function() {
    return {
      //display: true,
      sideMenu: {
        item1: {
          name: "Home",
          class: "fa-desktop",
          to: "/"
        },
        item2: {
          name: "About",
          class: "fa-file-pdf",
          to: "/"
        },
        item3: {
          name: "Pages",
          class: "fa-envelope-open",
          to: "/"
        },
        item4: {
          name: "Portfolio",
          class: "fa-image",
          action: "v-b-modal.modal1"
        },
        item5: {
          name: "FAQ",
          class: "fa-question",
          to: "/"
        },
        item6: {
          name: "Contact",
          class: "fa-paper-plane",
          to: "/"
        }
      }
    };
  }
  // created(){
  //   eventBusForSidebar.$on('viewStateChanged',(state)=>{
  //     this.display = state;
  //   })
  // }
  //props:['display'],
};
</script>