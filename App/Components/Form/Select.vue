<template>
      <select :id="elementData.fieldName" v-model="elementData.selected"  :disabled="elementData.disabled">            
        <option v-for="option in elementData.options" v-bind:key="option.text" v-bind:value="option.text" >{{option.text}}</option>
      </select>
</template>
<script>
export default {
  props: ["elementData", "submissionArray"]
};
</script>