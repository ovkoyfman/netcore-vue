<template>
  <div  class="room-block"  @click="transformToEditable($event,parentIndex)"  >
    <div class="category d-flex flex-nowrap  justify-content-between">
        <div><input v-model="elementData.category" :disabled="globalData.components[parentIndex].disabled"/></div><div><button class="remove-category" @click="removeCategory(parentIndex)">Remove Category</button></div>
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
          <drop-zone :id="parentIndex.toString() + index.toString() + 'input'"></drop-zone>
      </div>
      <dragable class="editable" :id="parentIndex.toString() + index.toString()"  :key="index" draggable="true" :elementData="elementData" :children="item" :grandParentIndex="parentIndex" :thisParentIndex="index"></dragable>
      <div class="enterSpace" v-if="index==elementData.children.length-1">
          <drop-zone :id="parentIndex.toString() + (index+1).toString() + 'input'"></drop-zone>
      </div>
    </template>
        <button @click="addRow">Add Row</button><button @click="saveForm($event,parentIndex)">Save</button>
  </div>
</template>
<script>
import DropZone from "./DropZone.vue";
import Dragable from "./Dragable.vue";

export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      globalData: dataForTheForm
    };
  },
  methods: {
    transformToEditable: function(e, pIndex) {
      //e.preventDefault();
      e.stopPropagation();
      // Array.prototype.forEach.call(this.elementData, function(item) {
      // console.log(this.elementData);
      // Array.prototype.forEach.call(this.elementData.children, function(item) {
      //   console.log(item);
      //   Array.prototype.forEach.call(item.rooms, function(item) {
      //     console.log(item.disabled);
      //     item.disabled = false;
      //     console.log(item.disabled);
      //   });
      // });
      //  });
      this.globalData.components[pIndex].disabled = false;
    },
    saveForm: function(e, pIndex) {
      //Array.prototype.forEach.call(this.formData.components, function(item) {
      //item.removeAttribute("disabled");
      // e.stopPropagation();
      // Array.prototype.forEach.call(this.elementData.children, function(item) {
      //item.removeAttribute("disabled");
      // Array.prototype.forEach.call(item.rooms, function(item) {
      //   item.disabled = true;
      // });
      //});
      //});
      console.log(pIndex);
      e.stopPropagation();
      this.globalData.components[pIndex].disabled = true;
    },
    addRow: function() {
      console.log(this.elementData);
      var rooms = JSON.parse(
        JSON.stringify(this.globalData.template.children[0].rooms)
      );
      console.log(rooms);
      var roomsObject = new Object({ rooms });
      var lengthOfTheChildrenArray = this.elementData.children.length;
      this.elementData.children.push(roomsObject);
    },
    removeCategory: function(index) {
      this.globalData.components.splice(index, 1);
    }
  },
  components: {
    DropZone: DropZone,
    Dragable: Dragable
  },
  props: ["elementData", "parentIndex"]
};
</script>