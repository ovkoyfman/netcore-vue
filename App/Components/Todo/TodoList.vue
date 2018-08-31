<template>
  <div>
    <BaseInputText
    v-model="newTodoText"
    placeholder="New Todo item"
    @keydown.enter="addTodo"
    />
    <ul v-if="todos.length">
      <TodoListItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @remove="removeTodo"
      />
    </ul>
    <p v-else>
      Nothing left in list. Use input above to add a new todo.
    </p>
  </div>
</template>

<script>
import BaseInputText from "./BaseInputText.vue";
import TodoListItem from "./TodoListItem.vue";

let nextTodoId = 1;

export default {
  components: {
    BaseInputText,
    TodoListItem
  },
  data() {
    return {
      newTodoText: "",
      todos: [
        {
          id: nextTodoId++,
          text: "Learn Vue"
        },
        {
          id: nextTodoId++,
          text: "Learn Components"
        },
        {
          id: nextTodoId++,
          text: "Learn RxJS"
        }
      ]
    };
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({
          id: nextTodoId++,
          text: trimmedText
        });
        this.newTodoText = "";
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== idToRemove;
      });
    }
  }
};
</script>

<style>
</style>
