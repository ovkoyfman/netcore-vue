<template>
  <div @click="transformToNotEditable">
    <div class="header-image">
      <h2>Hotel Origami Proposal</h2>
    </div>   
    <page-content></page-content>
    <form-block></form-block>
  </div>
</template>
<script>
//import pageHeader from "../Main/Header.vue";
import content from "./Content.vue";
import FormBlock from "../Form/FormBlock.vue";
export default {
  components: {
    //pageHeader: pageHeader,
    pageContent: content,
    FormBlock: FormBlock
  },
  methods: {
    transformToNotEditable: function() {
      Array.prototype.forEach.call(
        document.getElementsByTagName("input"),
        function(item) {
          item.setAttribute("disabled", "disabled");
        }
      );
      Array.prototype.forEach.call(
        document.getElementsByTagName("select"),
        function(item) {
          item.setAttribute("disabled", "disabled");
        }
      );
    }
  }
};
</script>
<style>
</style>