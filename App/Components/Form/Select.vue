<template>
     <b-form-select :class="elementData.fieldName" v-model="elementData.selected"  :disabled="isDisabled">            
        <option v-for="option in elementData.options" :key="option.text" :value="option.text">{{option.text}}</option>
      </b-form-select>
      
</template>
<script>
export default {
  props: ["elementData", "isDisabled"]
};
</script>