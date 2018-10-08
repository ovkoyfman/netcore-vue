<template>
  <form @submit.prevent>
    <table  @click="transformToEditable($event)">
      <component v-for="(item, index) in formData.components" :key="index" :parentIndex="index" v-bind:elementIndex="index" :elementData="item" v-bind:is="item.component" :value="item.value">{{item}}</component>
      <button @click="submitForm()">Submit</button>
    </table>
    </form>
</template>
<script>
import RoomBlock from "./RoomBlock.vue";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      formData: {
        submissionArray: [],
        components: [
          {
            component: "room-block",
            category: "Type Category Name",
            children: [
              {
                label: "Room Type",
                component: "input-element",
                fieldType: "text",
                fieldValue: "Single",
                fieldName: "RoomType"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "text",
                fieldValue: "0",
                fieldName: "Rate"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "number",
                fieldValue: "0",
                fieldName: "Qty"
              }
            ]
          },
          {
            component: "room-block",
            category: "Type Category Name",
            children: [
              {
                label: "Room Type",
                component: "input-element",
                fieldType: "text",
                fieldValue: "Double",
                fieldName: "RoomType"
              },
              {
                label: "Rate",
                component: "input-element",
                fieldType: "number",
                fieldValue: "0.00",
                fieldName: "Rate"
              },
              {
                label: "Qty",
                component: "input-element",
                fieldType: "number",
                fieldValue: "0",
                fieldName: "Qty"
              }
            ]
          }
        ]
      }
      //counter: this.fieldData.addedElementsCount,
    };
  },
  methods: {
    transformToEditable: function(e) {
      e.stopPropagation();
      Array.prototype.forEach.call(
        document.getElementsByTagName("input"),
        function(item) {
          item.removeAttribute("disabled");
        }
      );
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>