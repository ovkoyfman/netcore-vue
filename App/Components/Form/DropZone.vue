<template>
  <input/>
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
      var destinationParent;
      var destinationChild;
      if (e.path) {
        destinationParent = e.path.id.split("")[0];
        destinationChild = e.path.id.split("")[1];
      }
      else if (e.explicitOriginalTarget) {
        destinationParent = e.explicitOriginalTarget.id.split("")[0];
        destinationChild = e.explicitOriginalTarget.id.split("")[1];
      }
      else if (e.srcElement) {
        destinationParent = e.srcElement.id.split("")[0];
        destinationChild = e.srcElement.id.split("")[1];
      }
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
  }
}
</script>
<style scoped>
input{
  border: none;
}
.activeDrop input{
  border-top: 1px dashed #000;
  border-bottom: 1px dashed #000;
}
</style>
