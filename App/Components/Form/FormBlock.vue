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
                rooms: [
                  {
                    label: "Room Type",
                    component: "select-element",
                    options: [
                      { text: "Single" },
                      { text: "Double" },
                      { text: "Master" }
                    ],
                    fieldName: "RoomType",
                    disabled: true
                  },
                  {
                    date: "10-02-2018"
                  },
                  {
                    label: "Rate",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  },
                  {
                    label: "Qty",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  },
                  {
                    date: "10-03-2018"
                  },
                  {
                    label: "Rate",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  },
                  {
                    label: "Qty",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  }
                ]
              },
              {
                rooms: [
                  {
                    label: "Room Type",
                    component: "select-element",
                    options: [
                      { text: "Single" },
                      { text: "Double" },
                      { text: "Master" }
                    ],
                    fieldName: "RoomType",
                    disabled: true
                  },
                  {
                    date: "10-02-2018"
                  },
                  {
                    label: "Rate",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  },
                  {
                    label: "Qty",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  },
                  {
                    date: "10-03-2018"
                  },
                  {
                    label: "Rate",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  },
                  {
                    label: "Qty",
                    component: "input-element",
                    fieldType: "text",
                    fieldValue: "0",
                    fieldName: "0",
                    disabled: true
                  }
                ]
              }
            ]
          }
        ]
      }
    };
  },
  methods: {
    transformToEditable: function(e) {
      e.stopPropagation();
      console.log(this.formData.components);
      Array.prototype.forEach.call(this.formData.components, function(item) {
        //item.removeAttribute("disabled");
        Array.prototype.forEach.call(item.children, function(item) {
          //item.removeAttribute("disabled");
          Array.prototype.forEach.call(item.rooms, function(item) {
            item.disabled = false;
          });
        });
      });
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>