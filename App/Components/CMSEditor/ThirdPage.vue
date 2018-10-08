<template> 
  <div>
    <h1>Third Page.</h1>
    <page-content></page-content>
  </div>
</template>
<script>
import content from "./Content.vue";
export default {
  components: {
    pageContent: content
  }
};
</script>