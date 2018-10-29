<template>
  <table  class="room-block" @click="transformToEditable($event,parentIndex)" :class="globalData.components[parentIndex].disabled ? '' : 'edit'">
    <tr class="category">
        <td colspan="3"><b-input v-model="globalData.components[parentIndex].category" :disabled="globalData.components[parentIndex].disabled"/></td><td :colspan="globalData.template.children[0].rooms.length-1"><b-button size="sm" class="remove-category" @click="removeCategory($event,parentIndex)">Remove Category</b-button></td>
    </tr>
    <template v-for="(item, index) in globalData.components[parentIndex].children">
      <tr v-if="!index" class="dates">
        <td></td>
        <td>Rooms</td>
        <template  v-for="item in item.rooms">
          <td v-if="item.date" colspan="2">{{item.date}}</td>
        </template>
        <td></td>
      </tr>
      <tr v-if="!index" class="labels">
        <td></td>
        <td></td>
        <template  v-for="item in item.rooms">
          <td v-if="item.label=='Qty'">Qty</td> 
          <td v-if="item.label=='Rate'">Rate</td>
        </template>
          <td></td>
      </tr>
    </template>
     <!-- <tr class="enterSpace">
           <drop-zone 
          :id="parentIndex.toString() + index.toString() + 'input'"
          ></drop-zone> 

      </tr>-->
      <draggable :element="'tbody'" v-model = globalData.components[parentIndex].children :options="{handle:'.handleParent', group:'tables'}" :listId="parentIndex" :id="parentIndex" @end="onEnd($event)">
      <template  v-for="(item, index) in globalData.components[parentIndex].children" >
      <table-row
        
        :rowId="index"
        :parentIndex = "index"
        :grandParentIndex = "parentIndex"
        :isDisabled = globalData.components[parentIndex].disabled
      ></table-row>
      </template>
      </draggable>
      <!-- <dragable class="editable"
      component="tableRow" 
      :id="parentIndex.toString() + index.toString()"  
      :key="index" 
      draggable="true" 
      :grandParentIndex="parentIndex" 
      :isDisabled = globalData.components[parentIndex].disabled 
      :parentIndex="index"></dragable> -->
      <!-- @updateTotalNights="updateTotalNights" -->

      <!--<tr class="enterSpace" v-if="index==globalData.components[parentIndex].children.length-1">
           <drop-zone 
          :id="parentIndex.toString() + (index+1).toString() + 'input'"></drop-zone> 
      </tr>-->
      <!-- <tr v-if = "index == elementData.children.length -1">
        <td>Total Room Nights</td>
        <template  v-for="item in item.rooms">
        {{item}} {{item.totalRooms}}
        <td v-if="item.totalRooms">{{item.totalRooms}}</td> 
        </template>
      </tr> -->
    
    <tr class="form-bottom">
        <td colspan="2"><b-button size="sm" @click="addRow">Add Row</b-button></td><td :colspan="(globalData.template.children[0].rooms.length-2)"><b-button size="sm" @click="saveForm($event,parentIndex)">Save</b-button></td>
    </tr>
  </table>
</template>
<script>
// import DropZone from "./DropZone.vue";
// import Dragable from "./Dragable.vue";
import TableRow from "./TableRow.vue";
import Draggable from "vuedraggable";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {}
    };
  },
  methods: {
    transformToEditable: function(e, pIndex) {
      e.stopPropagation();
      this.$store.commit("transformToEditable", pIndex);
    },
    saveForm: function(e, pIndex) {
      e.stopPropagation();
      this.$store.commit("saveForm", pIndex);
    },
    onEnd(e){
      console.log(e.from.id);
      if (!this.globalData.components[e.from.id].children.length) {
         this.globalData.components.splice(e.from.id, 1);
       }
    },
    addRow: function() {
      var rooms = JSON.parse(
        JSON.stringify(this.globalData.template.children[0].rooms)
      );
      var roomsObject = new Object({ rooms });
      this.$store.commit("addRow", [ this.parentIndex, roomsObject]);
    },
    removeCategory: function(e, index) {
      e.preventDefault;
      e.stopPropagation;
      this.$store.commit("removeCategory", index);
    },
    // countNigtsForTheDate: function(thisIndex, parentIndex) {
    //   var count = 0;
    //   this.globalData.components[parentIndex].children.forEach(element => {
    //     count += parseInt(element.rooms[thisIndex].fieldValue);
    //     console.log(element);
    //     console.log(thisIndex);
    //   });
    //   return count;
    // },
    // updateTotalNights(childIndex, index) {
    //   let totalRoomsForTheDate = 0;
    //   this.globalData.components[this.parentIndex].children.forEach(element => {
    //     totalRoomsForTheDate += parseInt(element.rooms[childIndex]);
    //   });
    //   //this.globalData.components[grandParentIndex].children[parentIndex].rooms[index];
    // }
  },
  computed: {
    globalData: function() {
      return this.$store.getters.formData;
    },
    // totalRoomNights: function() {
    //   let rooms = 0;
    //   this.globalData.components.forEach(element => {
    //     element.children.forEach(element => {
    //       element.rooms.forEach(element => {
    //         if (element.label == "Qty" && parseInt(element.fieldValue) > 0) {
    //           rooms += parseInt(element.fieldValue);
    //         }
    //       });
    //     });
    //   });
    //   return rooms;
    // }
  },
  components: {
    // DropZone: DropZone,
    // Dragable: Dragable,
    TableRow,
    Draggable
  },
  props: ["elementIndex", "parentIndex"]
};
</script>