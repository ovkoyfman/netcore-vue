<template>
    <div class="element">
      <div class="room-block">
        <table>
          <thead></thead>
          <tbody>
            <tr>
            <td v-for="(item, index) in elementData" :key="item.id" >
              <input :id="item.fieldName" :type="item.fieldType" v-model="item.fieldValue" :parentIndex="index" @click="updateField()"/>
            </td>
            </tr>
          </tbody>
        </table>
      </div> <button @click="addField()">Add</button>
        <button @click="removeField()">Remove</button> {{submissionArray}}
    </div>
    
</template>
<script>
export default {
  data: function() {
    return {
      inputValue: "",
      inputElement: {},
      index: this.elementIndex
    };
  },
  props: ["elementData", "elementIndex", "elementArray", "submissionArray"],
  methods: {
    // addField: function() {
    //   this.inputElement = {
    //     label: "Phone number",
    //     component: "ok-input",
    //     fieldType: "phone",
    //     fieldValue: "phone",
    //     fieldName: "Phone" + this.elementArray.length
    //   };
    //   this.elementArray.push(this.inputElement);
    // },
    // removeField: function() {
    //   this.elementArray.splice(this.index, 1);
    //   var self = this;
    //   function findObjectIndex(element) {
    //     return Object.keys(element)[0] === self.elementData.fieldName;
    //   }
    //   this.submissionArray.splice(
    //     this.submissionArray.findIndex(findObjectIndex),
    //     1
    //   );
    // },
    addToTheSubmission: function(index) {
      var self = this;

      function findObjectIndex(element) {
        console.log(Object.keys(element)[0]);
        console.log(self.elementData[index].fieldName);
        return Object.keys(element)[0] === self.elementData[index].fieldName;
      }
      console.log(this.elementData[index].fieldValue);
      if (this.elementData[index].fieldValue != "") {
        //If this element is already in submission array
        if (this.submissionArray.findIndex(findObjectIndex) > -1) {
          console.log("I'm here1");
          this.submissionArray.splice(
            this.submissionArray.findIndex(findObjectIndex),
            1,
            JSON.parse(
              '{"' +
                this.elementData[index].fieldName +
                '":"' +
                this.elementData[index].fieldValue +
                '"}'
            )
          );
          //If we didn't add this element to the submission array yet
        } else {
          console.log("I'm here2");
          this.submissionArray.push(
            JSON.parse(
              '{"' +
                this.elementData[index].fieldName +
                '":"' +
                this.elementData[index].fieldValue +
                '"}'
            )
          );
        }
      } else console.log("I'm here3");
      // this.submissionArray.splice(
      //   this.submissionArray.findIndex(findObjectIndex),
      //   1
      // );
    },
    updateField: function() {
      // if (
      //   this.elementData.fieldValue
      //     .toLowerCase()
      //     .split(" ")
      //     .join("") == this.elementData.fieldName.toLowerCase()
      // )
      this.elementData.fieldValue = "";
    }
  }
};
</script>