<template>
  <div  class="room-block"  @click="transformToEditable($event,parentIndex)" :class="globalData.components[parentIndex].disabled ? '' : 'edit'">
    <div class="category d-flex flex-nowrap  justify-content-between">
        <div><input v-model="elementData.category" :disabled="globalData.components[parentIndex].disabled"/></div><div><button class="remove-category" @click="removeCategory($event,parentIndex)">Remove Category</button></div>
    </div>
    <template  v-for="(item, index) in elementData.children" >
      <div v-if="!index" class="dates d-flex flex-nowrap  justify-content-justify">
        <span>Rooms</span>
        <template  v-for="item in item.rooms" v-if="item.date">
          <div></div><div>{{item.date}}</div>
        </template>
        <div></div>
      </div>
     <div v-if="!index" class="d-flex flex-nowrap  justify-content-justify">
        <div></div>
        <template  v-for="item in item.rooms">
          <div v-if="item.label=='Qty'">
          <span>Qty</span> 
          </div> 
          <div v-if="item.label=='Rate'">
          <span>Rate</span>
          </div>
        </template>
         <div></div>
      </div>
      <div class="enterSpace">
          <drop-zone :id="parentIndex.toString() + index.toString() + 'input'" :globalData="globalData"></drop-zone>
      </div>
      <dragable class="editable" :id="parentIndex.toString() + index.toString()"  :key="index" draggable="true" :elementData="elementData" :children="item" :grandParentIndex="parentIndex" :thisParentIndex="index"></dragable>
      <div class="enterSpace" v-if="index==elementData.children.length-1">
          <drop-zone :id="parentIndex.toString() + (index+1).toString() + 'input'" :globalData="globalData"></drop-zone>
      </div>
    </template>
        <button @click="addRow">Add Row</button><button @click="saveForm($event,parentIndex)">Save</button>
  </div>
</template>
<script>
import DropZone from "./DropZone.vue";
import Dragable from "./Dragable.vue";

export default {
  // mounted: function() {
  //   this.$el.ondragstart = function(e) {
  //     e.dataTransfer.setData("Text1", this.id);
  //     console.log("Drag", e);
  //     if (e.path) e.path[1].classList.add("categoryDrop");
  //     else if (e.explicitOriginalTarget)
  //       e.explicitOriginalTarget.parentElement.classList.add("categoryDrop");
  //     else if (e.srcElement)
  //       e.srcElement.parentElement.classList.add("categoryDrop");
  //   };
  // },
  data: function() {
    return {
      inputValue: "",
      inputElement: {}
    };
  },
  methods: {
    transformToEditable: function(e, pIndex) {
      e.stopPropagation();
      if (this.globalData.components[pIndex]) {
        this.globalData.components[pIndex].disabled = false;
      }
    },
    saveForm: function(e, pIndex) {
      e.stopPropagation();
      this.globalData.components[pIndex].disabled = true;
    },
    addRow: function() {
      var rooms = JSON.parse(
        JSON.stringify(this.globalData.template.children[0].rooms)
      );
      var roomsObject = new Object({ rooms });
      var lengthOfTheChildrenArray = this.elementData.children.length;
      this.elementData.children.push(roomsObject);
    },
    removeCategory: function(e, index) {
      e.preventDefault;
      e.stopPropagation;
      this.globalData.components.splice(index, 1);
    }
  },
  computed: {
    globalData: function() {
      return this.$store.state.dataForTheForm;
    }
  },
  components: {
    DropZone: DropZone,
    Dragable: Dragable
  },
  props: ["elementData", "parentIndex"]
};
</script>