<template>
  <input/>
</template>
<script>
export default {
  mounted: function() {
    this.$el.ondragover = function(e) {
      e.preventDefault();
      //console.log(e);
    };
    this.$el.ondrop = function(e) {
      e.preventDefault();
      console.log(e);
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
      console.log(destinationChild);
      var rowToMove = JSON.parse(
        JSON.stringify(
          dataForTheForm.components[incomingParent].children[incomingChild]
        )
      );
      console.log(rowToMove);
      dataForTheForm.components[incomingParent].children.splice(
        incomingChild,
        1
      );
      dataForTheForm.components[destinationParent].children.splice(
        destinationChild,
        0,
        rowToMove
      );
      console.log(dataForTheForm.components[incomingParent].children.length);
      if (!dataForTheForm.components[incomingParent].children.length) {
        dataForTheForm.components.splice(incomingParent, 1);
      }
      console.log(JSON.parse(JSON.stringify(dataForTheForm)));
    };
  }
};
</script>
