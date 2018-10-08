<template >
<ul class="list-unstyled components">
      <li v-for="item in sideMenu" :key="item.name">
        <a href="#homeSubmenu">
          <i class="fas" :class="item.class"></i>
          <!-- <span>{{item.name}}</span> -->
        </a>
      </li>
</ul>
</template>
<script>
//import { eventBusForSidebar } from '../../../index';
export default {
  data() {
    return {
      //display: true,
      sideMenu: {
        item1: {
          name: "Home",
          class: "fa-desktop"
        },
        item2: {
          name: "About",
          class: "fa-file-pdf"
        },
        item3: {
          name: "Pages",
          class: "fa-envelope-open"
        },
        item4: {
          name: "Portfolio",
          class: "fa-image"
        },
        item5: {
          name: "FAQ",
          class: "fa-question"
        },
        item6: {
          name: "Contact",
          class: "fa-paper-plane"
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