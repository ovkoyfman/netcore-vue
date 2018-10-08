<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <b-nav>
          <b-nav-item to="/cmseditor/welcome/">Welcome</b-nav-item>
          <b-nav-item to="/cmseditor/secondpage/">Second Page</b-nav-item>
          <b-nav-item to="/cmseditor/thirdpage/">Third Page</b-nav-item>
          <b-nav-item to="/cmseditor/fourthpage/">Fourth Page</b-nav-item>
        </b-nav>
      </div>
    </div>
  </nav>
</template>
<!--<script>
//   document.addEventListener("DOMContentLoaded", function(event) { 
//         $("#sidebarCollapse").on("click", function() {
//             setTimeout(function(){
//                 $("span").toggle();
//             }, 120);
//             $("#sidebar").toggleClass("active");
//             $(".dropdown-toggle")
//             .addClass("hidden")
//             .find(".collapse.list-unstyled.show")
//             .css("height", "0");
//             if($('.content-wrapper').hasClass('adjust')){
//                 $('.content-wrapper').removeClass('adjust');
//             }else {
//                 $('.content-wrapper').addClass('adjust');
//             }
//         });
//         console.log("World");
//         window.scroll({
//             top: 500
//         });
//     });
// </script>-->
<script>
//import { eventBusForSidebar } from "../index";
export default {
  data: function() {
    return {
      display: true
    };
  },
  methods: {
    toggleSidebar: function() {
      this.display = !this.display;
      console.log(this.display);
      eventBusForSidebar.$emit("viewStateChanged", this.display);
    }
  }
};
</script>
<style>
.nav-item {
  border-radius: 50%;
}
</style>

