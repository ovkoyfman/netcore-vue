<template>
      <select :class="elementData.fieldName" v-model="elementData.selected"  :disabled="globalData.components[grandGrandParentIndex].disabled">            
        <option v-for="option in elementData.options" :key="option.text" :value="option.text" :selected="option.selected">{{option.text}}</option>
      </select>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    globalData: function() {
      return this.$store.state.dataForTheForm;
    }
  },
  props: ["elementData", "grandGrandParentIndex"]
};
</script>