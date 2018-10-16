<template>
  <input :id="elementData.fieldName" :type="elementData.fieldType" v-model="elementData.fieldValue" @click="updateField()" @keydown="" :disabled="globalData.components[grandGrandParentIndex].disabled"/>
</template>
<script>
export default {
  props: ["elementData", "grandGrandParentIndex"],
  data: function() {
    return {};
  },
  computed: {
    globalData: function() {
      return this.$store.state.dataForTheForm;
    }
  },
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
    //   addToTheSubmission: function() {
    //     var self = this;
    //     console.log(this.grandGrandParentIndex);
    //     function findObjectIndex(element) {
    //       return Object.keys(element)[0] === self.elementData.fieldName;
    //     }
    //     if (this.elementData.fieldValue != "") {
    //       if (
    //         this.submissionArray[this.grandGrandParentIndex].findIndex(
    //           findObjectIndex
    //         ) > -1
    //       )
    //         this.submissionArray[this.grandGrandParentIndex].splice(
    //           this.submissionArray[this.grandGrandParentIndex].findIndex(
    //             findObjectIndex
    //           ),
    //           1,
    //           JSON.parse(
    //             '{"' +
    //               this.elementData.fieldName +
    //               '":"' +
    //               this.elementData.fieldValue +
    //               '"}'
    //           )
    //         );
    //       else
    //         this.submissionArray[this.grandGrandParentIndex].push(
    //           JSON.parse(
    //             '{"' +
    //               this.elementData.fieldName +
    //               '":"' +
    //               this.elementData.fieldValue +
    //               '"}'
    //           )
    //         );
    //     } else
    //       this.submissionArray[this.grandGrandParentIndex].splice(
    //         this.submissionArray[this.grandGrandParentIndex].findIndex(
    //           findObjectIndex
    //         ),
    //         1
    //       );
    //   }
  }
};
</script>