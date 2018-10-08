<template>
    <td>
        <select :id="elementData.fieldName" v-model="elementData.selected" @change="updatedSubmissionArray()">
            <option disabled value="">Please select one</option>
            <option v-for="option in elementData.select.options" v-bind:key="option.id" v-bind:value='option.id' @change="updateStatus()">{{option.text}}</option>
        </select>
    </td>
</template>
<script>
export default {
  props: ["elementData", "submissionArray"],
  methods: {
    updatedSubmittionArray: function() {
      var self = this;
      function findObjectIndex(element) {
        return Object.keys(element)[0] === self.elementData.name;
      }
      if (this.submissionArray.findIndex(findObjectIndex) > -1)
        this.submissionArray.splice(
          this.submissionArray.findIndex(findObjectIndex),
          1,
          JSON.parse(
            '{"' +
              this.elementData.name +
              '":"' +
              this.elementData.select.options[this.elementData.selected - 1]
                .text +
              '"}'
          )
        );
      else
        this.submissionArray.push(
          JSON.parse(
            '{"' +
              this.elementData.name +
              '":"' +
              this.elementData.select.options[this.elementData.selected - 1]
                .text +
              '"}'
          )
        );
    }
  }
};
</script>