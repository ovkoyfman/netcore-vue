<template>
     <b-form-select v-model="elementData.selected"  :disabled="isDisabled">            
        <option v-for="option in globalData.options" :key="option.text" :value="option.text">{{option.text}}</option>
      </b-form-select>
      
</template>
<script>
export default {
  props: ["elementData", "isDisabled"],
  computed: {
    globalData: function() {
      return this.$store.getters.formData;
    }
  },
};
</script>