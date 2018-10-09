<template>
        <input :id="elementData.fieldName" :type="elementData.fieldType" v-model="elementData.fieldValue" @click="updateField()" :disabled="elementData.disabled"/>
</template>
<script>
export default {
  props: ["elementData", "parentIndex"],
  methods: {
    updateField: function() {
      if (
        this.elementData.fieldValue
          .toLowerCase()
          .split(" ")
          .join("") == this.elementData.fieldName.toLowerCase()
      )
        this.elementData.fieldValue = "";
    },
    addToTheSubmission: function() {
      var self = this;
      console.log(this.parentIndex);
      function findObjectIndex(element) {
        return Object.keys(element)[0] === self.elementData.fieldName;
      }
      if (this.elementData.fieldValue != "") {
        if (
          this.submissionArray[this.parentIndex].findIndex(findObjectIndex) > -1
        )
          this.submissionArray[this.parentIndex].splice(
            this.submissionArray[this.parentIndex].findIndex(findObjectIndex),
            1,
            JSON.parse(
              '{"' +
                this.elementData.fieldName +
                '":"' +
                this.elementData.fieldValue +
                '"}'
            )
          );
        else
          this.submissionArray[this.parentIndex].push(
            JSON.parse(
              '{"' +
                this.elementData.fieldName +
                '":"' +
                this.elementData.fieldValue +
                '"}'
            )
          );
      } else
        this.submissionArray[this.parentIndex].splice(
          this.submissionArray[this.parentIndex].findIndex(findObjectIndex),
          1
        );
    }
  }
};
</script>