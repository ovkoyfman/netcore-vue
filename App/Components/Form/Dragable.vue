<template>
<div class="d-flex flex-row justify-content-between">
        <div v-for="(item, index) in children.rooms" :key="index" v-if="!item.date">
          <span v-if="item.label == 'Rate'">$</span>
          <template v-if="globalData.components[grandParentIndex].disabled && item.component == 'select-element'">{{item.selected ? item.selected : "Select One"}}</template>
          <template v-if="globalData.components[grandParentIndex].disabled && item.fieldValue">{{item.fieldValue}}</template>
          <component 
            :key="index" 
            :elementIndex="index" 
            :grandGrandParentIndex="grandParentIndex" 
            :elementData="item" 
            :is="item.component" 
            :value="item.value"></component>
        </div>
        <div>
        <button @click="removeRow(thisParentIndex)" v-if="elementData.children.length > 1">Remove</button>
        </div>
      </div>
</template>
<script>
import InputElement from "./Input.vue";
import SelectElement from "./Select.vue";
export default {
  mounted: function() {
    var vm = this;
    this.$el.ondragstart = function(e) {
      e.dataTransfer.setData("Text", this.id);
      vm.addClass("activeDrop");
      vm.transformToNotEditable();
    };
    this.$el.ondragend = function(e) {
      vm.addClass("");
    };
  },
  data: function() {
    return {
      inputValue: "",
      inputElement: {}
    };
  },
  computed: {
    globalData: function() {
      return this.$store.state.dataForTheForm;
    }
  },
  methods: {
    removeRow: function(index) {
      this.elementData.children.splice(index, 1);
    },
    transformToNotEditable: function() {
      this.$store.commit("transformToNotEditable");
    },
    addClass: function(value) {
      this.$store.commit("outlineDropFieldsOnTheForm", value);
    }
  },
  components: {
    InputElement: InputElement,
    SelectElement: SelectElement
  },
  props: ["elementData", "children", "thisParentIndex", "grandParentIndex"]
};
</script>
