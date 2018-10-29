<template>
  <!-- <component
  :is="component"
  :parentIndex="parentIndex"
  :grandParentIndex="grandParentIndex"
  :isDisabled="isDisabled"
  ></component> -->
</template>
<script>
import TableRow from "./TableRow.vue";
export default {
  mounted: function() {
    var vm = this;
    this.$el.ondragstart = function(e) {
      e.dataTransfer.setData("Text", this.id);
      vm.addClass("activeDrop");
      vm.transformToNotEditable();
    };
    this.$el.ondragend = function(e) {
      vm.addClass("");
    };
  },
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
    TableRow
  },
  computed: {
    globalData: function() {
      return this.$store.getters.formData;
    }
  },
  props: [
    "component",
    "parentIndex",
    "grandParentIndex",
    "isDisabled"
  ]
};
</script>
