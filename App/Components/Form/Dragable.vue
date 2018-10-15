<template>
<div class="d-flex flex-row justify-content-between">
        <!-- @mouseout="deselectText($event,(parentIndex.toString() + index.toString()))"  
        @mousedown="selectText($event,(parentIndex.toString() + index.toString()))"-->
        <div v-for="(item, index) in children.rooms" :key="index" v-if="!item.date">
          <template v-if="globalData.components[grandParentIndex].disabled && item.selected">{{item.selected}}</template>
          <template v-if="globalData.components[grandParentIndex].disabled && item.fieldValue">{{item.fieldValue}}</template>
          <component 
            :key="index" 
            v-bind:elementIndex="index" 
            :grandGrandParentIndex="grandParentIndex" 
            :elementData="item" 
            v-bind:is="item.component" 
            :value="item.value">{{item}}</component>
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
    this.$el.ondragstart = function(event) {
      //this.set("v.dragid", event.target.dataset.dragId);
      event.dataTransfer.setData("Text", this.id);
      console.log("event", event);
      console.log(this.id);
    };
  },
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      globalData: dataForTheForm
    };
  },
  methods: {
    removeRow: function(index) {
      console.log(index);
      this.elementData.children.splice(index, 1);
    }
  },
  components: {
    InputElement: InputElement,
    SelectElement: SelectElement
  },
  props: ["elementData", "children", "thisParentIndex", "grandParentIndex"]
};
</script>
