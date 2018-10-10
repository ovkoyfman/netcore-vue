<template>
  <form @submit.prevent>
    <table  @click="transformToEditable($event)">
      <component v-for="(item, index) in formData.components" :key="index" :parentIndex="index" v-bind:elementIndex="index" :elementData="item" v-bind:is="item.component" :value="item.value">{{item}}</component>
      <button @click="addCategory">Add Category</button><button @click="removeCategory(index)">Remove Category</button>
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
      formData: dataForTheForm
    };
  },
  methods: {
    transformToEditable: function(e) {
      e.stopPropagation();
      Array.prototype.forEach.call(this.formData.components, function(item) {
        //item.removeAttribute("disabled");
        console.log(item);
        Array.prototype.forEach.call(item.children, function(item) {
          //item.removeAttribute("disabled");
          Array.prototype.forEach.call(item.rooms, function(item) {
            item.disabled = false;
          });
        });
      });
    },
    addCategory: function() {
      var component = JSON.parse(JSON.stringify(dataForTheForm.template));
      console.log(component);
      //var categoryObject = new Object({ components });
      var lengthOfTheCategoryArray = this.formData.components.length;
      this.formData.components.push(component);
    },
    removeCategory: function(index) {
      this.formData.components.splice(index, 1);
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>