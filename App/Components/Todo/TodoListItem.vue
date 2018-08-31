<template>
  <li>
    {{todo.text}}
    <button
    class="btn btn-link"
    @click="$emit('remove', todo.id)"
    >
    X
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>
