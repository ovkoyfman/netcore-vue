<template>
  <div @click="transformToNotEditable">
    <div>

  <!-- Modal Component -->
</div>
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
  data: function() {
    return {};
  },
  components: {
    //pageHeader: pageHeader,
    pageContent: content,
    FormBlock: FormBlock
  },
  computed: {
    formData: function() {
      return this.$store.state.dataForTheForm;
    }
    // edit: function() {
    //   return this.$store.state.editableStateForThePage;
    // }
  },
  methods: {
    transformToNotEditable: function() {
      this.$store.commit("transformToNotEditable", this.formData.components);
    }
  }
};
</script>
<style>
</style>