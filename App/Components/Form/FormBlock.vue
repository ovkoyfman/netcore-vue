<template>
  <form @submit.prevent>
    <table  @click="transformToEditable($event)">
      <component v-for="(item, index) in formData.components" :key="index" :parentIndex="index" v-bind:elementIndex="index" :elementData="item" v-bind:is="item.component" :value="item.value">{{item}}</component>
      <button @click="addCategory">Add Category</button>
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
      console.log(e);
      Array.prototype.forEach.call(this.formData.components, function(item) {
        //item.removeAttribute("disabled");
        console.log("1", item);
        //item.removeAttribute("disabled");
        Array.prototype.forEach.call(item, function(it) {
          console.log("2", it);
          item.disabled = false;
        });
      });
    },
    addCategory: function() {
      var component = JSON.parse(JSON.stringify(dataForTheForm.template));
      console.log(component);
      //var categoryObject = new Object({ components });
      var lengthOfTheCategoryArray = this.formData.components.length;
      this.formData.components.push(component);
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>