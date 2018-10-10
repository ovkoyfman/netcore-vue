<template>
  <div  class="room-block">
    <div v-for="(item, index) in elementData.children">
    <tr class="category" v-if="index == 0">
      <td colspan="2">
        <input v-model="elementData.category" disabled/>
      </td>
      <td>
        <button @click="removeCategory(parentIndex)">Remove Category</button>
      </td>
    </tr>
    <tr v-if="!index">
      <td></td>
      <td  v-for="(item, index) in item.rooms"  v-if="item.date" colspan="2">
        <span>{{item.date}}</span>
      </td>
    </tr>
    <tr>
      <td v-for="(item, index) in item.rooms" v-if="!item.date">
        <component :key="index" v-bind:elementIndex="index" :parentIndex="parentIndex" :elementData="item" v-bind:is="item.component" :value="item.value">{{item}}</component>
      </td><button @click="removeRow(index)" v-if="elementData.children.length > 1">Remove Row</button>
    </tr>
    </div>
        <button @click="addRow">Add Row</button>
  </div>
</template>
<script>
import InputElement from "./Input.vue";
import SelectElement from "./Select.vue";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      dataForTheForm: dataForTheForm
      //counter: this.fieldData.addedElementsCount,
    };
  },
  methods: {
    addRow: function() {
      //var rooms = Object.assign({}, this.elementData.children[0].rooms);
      // Array.prototype.clone = function() {
      //   return this.slice(0);
      // };
      //var rooms = this.elementData.children[0].rooms.clone();

      //Use JSON to make copy of the existent array, otherwise it will stil point to the same objects inside the array
      var rooms = JSON.parse(
        JSON.stringify(dataForTheForm.template.children[0].rooms)
      );
      console.log(rooms);
      var roomsObject = new Object({ rooms });
      var lengthOfTheChildrenArray = this.elementData.children.length;
      this.elementData.children.push(roomsObject);
    },
    removeRow: function(index) {
      this.elementData.children.splice(index, 1);
    },
    removeCategory: function(index) {
      this.dataForTheForm.components.splice(index, 1);
    }
  },
  components: {
    InputElement: InputElement,
    SelectElement: SelectElement
  },
  props: ["elementData", "parentIndex"]
};
</script>