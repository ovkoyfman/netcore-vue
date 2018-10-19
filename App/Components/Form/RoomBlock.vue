<template>
  <table  class="room-block"  @click="transformToEditable($event,parentIndex)" :class="globalData.components[parentIndex].disabled ? '' : 'edit'">
    <tr class="category">
        <td><input v-model="elementData.category" :disabled="globalData.components[parentIndex].disabled"/></td><td :colspan="elementData.children[0].rooms.length-1"><button class="remove-category" @click="removeCategory($event,parentIndex)">Remove Category</button></td>
    </tr>
    <template  v-for="(item, index) in elementData.children" >
    <tr v-if="!index" class="dates">
      <td>Rooms</td>
      <template  v-for="item in item.rooms">
        <td v-if="item.date" colspan="2">{{item.date}}</td>
      </template>
      <td></td>
    </tr>
    <tr v-if="!index" class="labeles">
      <td></td>
      <template  v-for="item in item.rooms">
        <td v-if="item.label=='Qty'">Qty</td> 
        <td v-if="item.label=='Rate'">Rate</td>
      </template>
        <td></td>
    </tr>
    <tr class="enterSpace">

        <drop-zone 
        :id="parentIndex.toString() + index.toString() + 'input'" 
        :globalData="globalData"></drop-zone>

    </tr>

    <dragable class="editable" 
    :id="parentIndex.toString() + index.toString()"  
    :key="index" draggable="true" 
    :elementData="elementData" 
    :grandParentIndex="parentIndex" 
    :children="item" 
    :isDisabled = globalData.components[parentIndex].disabled 
    :parentIndex="index"
    @updateTotalNights="updateTotalNights"></dragable>

    <tr class="enterSpace" v-if="index==elementData.children.length-1">
        <drop-zone 
        :id="parentIndex.toString() + (index+1).toString() + 'input'" 
        :globalData="globalData"></drop-zone>
    </tr>
    <!-- <tr v-if = "index == elementData.children.length -1">
      <td>Total Room Nights</td>
      <template  v-for="item in item.rooms">
       {{item}} {{item.totalRooms}}
      <td v-if="item.totalRooms">{{item.totalRooms}}</td> 
      </template>
    </tr> -->
    </template>
    <tr class="form-bottom">
        <td colspan="2"><button @click="addRow">Add Row</button></td><td :colspan="(elementData.children[0].rooms.length-2)"><button @click="saveForm($event,parentIndex)">Save</button></td>
    </tr>
  </table>
</template>
<script>
import DropZone from "./DropZone.vue";
import Dragable from "./Dragable.vue";

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
    updateTotalNights(childIndex, index) {
      let totalRoomsForTheDate = 0;
      this.globalData.components[this.parentIndex].children.forEach(element => {
        totalRoomsForTheDate += parseInt(element.rooms[childIndex]);
      });
      //this.globalData.components[grandParentIndex].children[parentIndex].rooms[index];
    }
  },
  computed: {
    globalData: function() {
      return this.$store.state.dataForTheForm;
    },
    totalRoomNights: function() {
      let rooms = 0;
      this.globalData.components.forEach(element => {
        element.children.forEach(element => {
          element.rooms.forEach(element => {
            if (element.label == "Qty" && parseInt(element.fieldValue) > 0) {
              rooms += parseInt(element.fieldValue);
            }
          });
        });
      });
      return rooms;
    }
  },
  components: {
    DropZone: DropZone,
    Dragable: Dragable
  },
  props: ["elementData", "parentIndex"]
};
</script>