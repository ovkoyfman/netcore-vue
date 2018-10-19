<template>
<tr>
        <td v-for="(item, index) in children.rooms" :key="index" v-if="!item.date">
          <span v-if="item.label == 'Rate'">$</span>
          <template v-if="isDisabled && item.component == 'select-element'">{{item.selected ? item.selected : "Select One"}}</template>
          <template v-if="isDisabled && item.fieldValue">{{item.fieldValue}}</template>
          <component
            :elementData="item" 
            :is="item.component" 
            :isDisabled="isDisabled"
            :index="index"
            @dataChanged="updateTotalNights"
          ></component>
        </td>
        <td>
        <button @click="removeRow(parentIndex)" v-if="elementData.children.length > 1">Remove</button>
        </td>
      </tr>
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
  methods: {
    removeRow: function(index) {
      this.elementData.children.splice(index, 1);
    },
    transformToNotEditable: function() {
      this.$store.commit("transformToNotEditable");
    },
    addClass: function(value) {
      this.$store.commit("outlineDropFieldsOnTheForm", value);
    },
    updateTotalNights: function(index) {
      this.$emit("updateTotalNights", index, this.parentIndex);
    }
  },
  components: {
    InputElement: InputElement,
    SelectElement: SelectElement
  },
  props: [
    "elementData",
    "children",
    "parentIndex",
    "grandParentIndex",
    "isDisabled"
  ]
};
</script>
