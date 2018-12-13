<script>
  export default {
    data () {
      return {}
    },
    methods: {
      deleteTask: function (tid) {
        this.$root.$emit('task-delete', tid)
      },
      handleDragStart: function (event) {
        event.dataTransfer.setData('text', JSON.stringify(this.task))
      }
    },
    props: {
      task: Object
    },
    components: {}
  }
</script>

<template>
  <article class="task" draggable="true" @dragstart="handleDragStart($event)">
    <button @click="deleteTask(task.id)" type="button" class="close" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
    <h3 class="task__title">{{ task.title }}</h3>
    <p class="task__description">{{ task.description }}</p>
  </article>
</template>

<style lang="scss" scoped>
  @import '../globals.scss';

  .task {
    background-color: $secondary;
    color: $tertiary;
    border-radius: 0.5em;
    padding: 1em;

    &:not(:first-child) {
      margin-top: 1em;
    }
  }
</style>
