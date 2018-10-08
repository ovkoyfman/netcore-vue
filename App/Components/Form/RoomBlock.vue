<template>
  <div  class="room-block">
    <tr class="category">
      <td :colspan="elementData.children.length" >
        <input v-model="elementData.category" disabled/>
      </td>
    </tr>
    <tr>
        <component v-for="(item, index) in elementData.children" :key="index" v-bind:elementIndex="index" :parentIndex="parentIndex" :elementData="item" v-bind:is="item.component" :value="item.value">{{item}}</component>
    </tr>
  </div>
</template>
<script>
import InputElement from "./Input.vue";
import SelectElement from "./Select.vue";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {}
      //counter: this.fieldData.addedElementsCount,
    };
  },
  components: {
    InputElement: InputElement,
    SelectElement: SelectElement
  },
  props: ["elementData", "parentIndex"]
};
</script>