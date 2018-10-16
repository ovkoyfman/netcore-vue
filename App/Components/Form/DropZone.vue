<template>
  <input/>
</template>
<script>
export default {
  mounted: function() {
    this.$el.ondragover = function(e) {
      if (e.path) e.path[2].classList.add("activeDrop");
      else if (e.explicitOriginalTarget)
        e.explicitOriginalTarget.parentElement.parentElement.classList.add(
          "activeDrop"
        );
      else if (e.srcElement)
        e.srcElement.parentElement.parentElement.classList.add("activeDrop");
      e.preventDefault();
    };
    this.$el.ondragenter = function(e) {
      if (e.path) e.path[2].classList.add("activeDrop");
      else if (e.explicitOriginalTarget)
        e.explicitOriginalTarget.parentElement.parentElement.classList.add(
          "activeDrop"
        );
      else if (e.srcElement)
        e.srcElement.parentElement.parentElement.classList.remove("activeDrop");
    };
    this.$el.ondragleave = function(e) {
      if (e.path) e.path[2].classList.remove("activeDrop");
      else if (e.explicitOriginalTarget)
        e.explicitOriginalTarget.parentElement.parentElement.classList.remove(
          "activeDrop"
        );
      else if (e.srcElement)
        e.srcElement.parentElement.parentElement.classList.remove("activeDrop");
    };
    this.$el.ondrop = function(e) {
      e.preventDefault();
      if (e.path) e.path[2].classList.remove("activeDrop");
      else if (e.explicitOriginalTarget)
        e.explicitOriginalTarget.parentElement.parentElement.classList.remove(
          "activeDrop"
        );
      else if (e.srcElement)
        e.srcElement.parentElement.parentElement.classList.remove("activeDrop");
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
      var rowToMove = JSON.parse(
        JSON.stringify(
          dataForTheForm.components[incomingParent].children[incomingChild]
        )
      );
      dataForTheForm.components[incomingParent].children.splice(
        incomingChild,
        1
      );
      dataForTheForm.components[destinationParent].children.splice(
        destinationChild,
        0,
        rowToMove
      );
      if (!dataForTheForm.components[incomingParent].children.length) {
        dataForTheForm.components.splice(incomingParent, 1);
      }
    };
  }
};
</script>
