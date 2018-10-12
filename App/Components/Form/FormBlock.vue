<template>
  <form @submit.prevent>
    <table>
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
    addCategory: function() {
      var component = JSON.parse(JSON.stringify(dataForTheForm.template));
      console.log(component);
      var lengthOfTheCategoryArray = this.formData.components.length;
      this.formData.components.push(component);
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>