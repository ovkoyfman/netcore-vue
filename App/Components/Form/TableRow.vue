<template>
  <tr>
    <td class="handle">
      <span class="handleParent">
        <i class="fas fa-bars"></i>
      </span>
    </td>
    <template v-for="(item, index) in globalData.components[grandParentIndex].children[parentIndex].room">
      <select-element
          class="room-type" 
          :elementData="item" 
          :key="index"
          v-if="!index">{{item.selected ? item.selected : "Select One"}}
      </select-element>
      <td v-if="index" class="price-qty" :key="index">
        <span v-if="item.Rate" class="dollar-sign">$</span>
        <!-- <template v-if="!index">{{item.selected ? item.selected : "Select One"}}</template> -->
        <!--<template v-if="isDisabled && item.fieldValue">{{item.fieldValue}}</template> -->
        <b-form-input  v-model="item.Rate" @click="updateField()" :disabled="isDisabled"/>
      </td>
      <td v-if="index" class="price-qty"  :key="index">
        <b-form-input  v-model="item.Qty" @click="updateField()" :disabled="isDisabled"/>
        <!-- @dataChanged="updateTotalNights" -->
      </td>
      <td v-if="index==globalData.components[grandParentIndex].children[parentIndex].room.length-1"  :key="index">
        <b-button size="sm" @click="removeRow(grandParentIndex,parentIndex)">Remove</b-button>
      </td>
    </template>
  </tr>
</template>
<script>
import InputElement from "./Input.vue";
import SelectElement from "./Select.vue";
export default {
  methods: {
    removeRow: function(grandParentIndex,parentIndex) {
      this.$store.commit("removeRow",[grandParentIndex, parentIndex]);
    },
    transformToNotEditable: function() {
      this.$store.commit("transformToNotEditable");
    },
    addClass: function(value) {
      this.$store.commit("outlineDropFieldsOnTheForm", value);
    },
    // updateTotalNights: function(index) {
    //   this.$emit("updateTotalNights", index, this.parentIndex);
    // }
  },
  components: {
    InputElement: InputElement,
    SelectElement: SelectElement
  },
  computed: {
    globalData: function() {
      return this.$store.getters.formData;
    }
  },
  props: [
    "parentIndex",
    "grandParentIndex",
    "isDisabled"
  ]
};
</script>