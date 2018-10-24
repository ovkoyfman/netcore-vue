<template>
<td :colspan="length">
  <input/>
</td>
</template>
<script>
export default {
  mounted: function() {
    let vm = this;
    // this.$el.ondragover = function(e) {
    //   e.preventDefault();
    //   this.parentElement.setAttribute("style", "height: 50px");
    //   this.setAttribute("style", "height: 50px");
    // };
    // this.$el.ondragleave = function(e) {
    //   console.log(e.target);
    //   this.parentElement.removeAttribute("style");
    //   this.removeAttribute("style");
    // };

    this.$el.ondrop = function(e) {
      e.preventDefault();
      var data = e.dataTransfer.getData("Text");
      var incomingParent = data.split("")[0];
      var incomingChild = data.split("")[1];
      var destinationParent = e.srcElement.id.split("")[0];
      var destinationChild = e.srcElement.id.split("")[1];
      if (
        incomingParent == destinationParent &&
        incomingChild < destinationChild
      )
        destinationChild--;
      vm.dropElement(incomingParent, incomingChild, destinationParent, destinationChild);
    };
  },
  methods: {
    dropElement: function(incomingParent, incomingChild, destinationParent, destinationChild) {
      this.$store.commit("dropElement", [incomingParent, incomingChild, destinationParent, destinationChild]);
    }
  },
  computed: {
    globalData: function() {
      return this.$store.getters.formData;
    },
  },
  props:[
    "length"
  ]
}
</script>
