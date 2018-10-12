<template>
      <select :id="elementData.fieldName" v-model="elementData.selected"  :disabled="globalData.components[grandGrandParentIndex].disabled">            
        <option v-for="option in elementData.options" v-bind:key="option.text" v-bind:value="option.text" >{{option.text}}</option>
      </select>
</template>
<script>
export default {
  data: function() {
    return {
      globalData: dataForTheForm
    };
  },
  props: ["elementData", "grandGrandParentIndex"]
};
</script>