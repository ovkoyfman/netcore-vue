<template>
  <div  class="room-block">
    <tr class="category">
      <td :colspan="elementData.children[parentIndex].rooms.length-2">
        <input v-model="elementData.category" disabled/><button class="remove-category" @click="removeCategory(parentIndex)">Remove Category</button>
      </td>
        
     
    </tr>
    <template  v-for="(item, index) in elementData.children">
      <tr v-if="!index">
        <td></td>
        <td  v-for="(item, index) in item.rooms" v-if="item.date" :colspan="2">
          <span>{{item.date}}</span>
        </td>
      </tr>
      <tr class="enterSpace">
        <td>
          <drop-zone :id="parentIndex.toString() + index.toString() + 'input'"></drop-zone>
      </td>
      </tr>
      <dragable  :id="parentIndex.toString() + index.toString()"   :key="index" draggable="true" :elementData="elementData" :children="item" :grandParentIndex="parentIndex" :thisParentIndex="index"></dragable>
      <tr class="enterSpace" v-if="index==elementData.children.length-1">
      <td>
          <drop-zone :id="parentIndex.toString() + (index+1).toString() + 'input'"></drop-zone>
      </td>
      </tr>
    </template>
        <button @click="addRow">Add Row</button>
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
      dataForTheForm: dataForTheForm
    };
  },
  methods: {
    addRow: function() {
      var rooms = JSON.parse(
        JSON.stringify(dataForTheForm.template.children[0].rooms)
      );
      console.log(rooms);
      var roomsObject = new Object({ rooms });
      var lengthOfTheChildrenArray = this.elementData.children.length;
      this.elementData.children.push(roomsObject);
    },
    removeCategory: function(index) {
      this.dataForTheForm.components.splice(index, 1);
    }
  },
  components: {
    DropZone: DropZone,
    Dragable: Dragable
  },
  props: ["elementData", "parentIndex"]
};
</script>