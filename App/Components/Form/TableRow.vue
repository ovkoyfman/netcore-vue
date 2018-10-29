<template>
<tr :class='"here" + parentIndex'>
<td><span class="handleParent">
            <i class="fas fa-bars"></i>
            </span>
<td v-for="(item, index) in globalData.components[grandParentIndex].children[parentIndex].rooms" :key="index" v-if="!item.date">
          <span v-if="item.label == 'Rate'">$</span>
          <template v-if="isDisabled && item.component == 'select-element'">{{item.selected ? item.selected : "Select One"}}</template>
          <template v-if="isDisabled && item.fieldValue">{{item.fieldValue}}</template>
          <component
            :elementData="item" 
            :is="item.component" 
            :isDisabled="isDisabled"
            :index="index"
          ></component> 
          <!-- @dataChanged="updateTotalNights" -->
        </td>
        <td>
        <b-button size="sm" @click="removeRow(grandParentIndex,parentIndex)" v-if="globalData.components[grandParentIndex].children.length > 1">Remove</b-button>
</td>
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