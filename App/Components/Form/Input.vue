<template>
  <input  v-model="elementData.fieldValue" @click="updateField()" @keyup="$emit('dataChanged',index)" :disabled="isDisabled"/>
</template>
<script>
export default {
  props: ["elementData", "isDisabled", "index"],
  methods: {
    updateField: function() {
      if (
        this.elementData.fieldValue
          .toLowerCase()
          .split(" ")
          .join("") == this.elementData.fieldName.toLowerCase()
      )
        this.elementData.fieldValue = "";
    }
  }
};
</script>