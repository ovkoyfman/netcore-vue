<template>
  <input/>
</template>
<script>
export default {
  mounted: function() {
    var globalData = this.globalData;
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
      //console.log(globalData);
      var rowToMove = JSON.parse(
        JSON.stringify(
          globalData.components[incomingParent].children[incomingChild]
        )
      );
      globalData.components[incomingParent].children.splice(incomingChild, 1);
      globalData.components[destinationParent].children.splice(
        destinationChild,
        0,
        rowToMove
      );
      if (!globalData.components[incomingParent].children.length) {
        globalData.components.splice(incomingParent, 1);
      }
    };
  },
  props: ["globalData"]
};
</script>
