<template>
    <fieldset class="input">
        <component v-for="(item, index) in fieldData.children" :key="index" :submissionArray="submissionArray" :elementIndex="index" :fieldData="item" :elementArray="fieldData.children" :elementData="item" :is="item.component"></component>
    </fieldset> 
</template>
<script>
import roomInputBlock from "./RoomInputBlock.vue";
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      counter: this.fieldData.addedElementsCount
    };
  },
  props: ["fieldData", "submissionArray"],
  components: {
    roomInputBlock: roomInputBlock
  }
};
</script>

