<template>
  <div @click="transformToNotEditable">
    <div>

  <!-- Modal Component -->
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
    },
    navData: function() {
      return this.$store.state.menuData;
    }
    // edit: function() {
    //   return this.$store.state.editableStateForThePage;
    // }
  },
  methods: {
    transformToNotEditable: function() {
      this.$store.commit("transformToNotEditable", this.formData.components);
    },
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
};
</script>
<style>
</style>