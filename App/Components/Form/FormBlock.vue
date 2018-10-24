<template>
  <form @submit.prevent class="border" :class="dropClass">
    <div>
      <component v-for="(item, index) in formData.components" :key="index" :parentIndex="index" :elementIndex="index" :is="item.component" :value="item.value">{{item}}</component>
      <b-button @click="addCategory">Add Category</b-button>
      <b-button @click="submitForm()">Submit</b-button>
    </div>
    </form>
</template>
<script>
import RoomBlock from "./RoomBlock.vue";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {}
    };
  },
  computed: {
    formData: function() {
      return this.$store.getters.formData;
    },
    dropClass: function() {
      return this.$store.state.form.dropClassValue;
    }
  },
  methods: {
    addCategory: function() {
      var component = JSON.parse(JSON.stringify(this.formData.template));
      //var lengthOfTheCategoryArray = this.formData.components.length;
      this.$store.commit("addCategory", component);
      //this.formData.components.push(component);
    }
  },
  components: {
    RoomBlock: RoomBlock
  }
};
</script>