<script>
  import Task from './Task'
  import TaskPlaceholder from './TaskPlaceholder'

  export default {
    data () {
      return {}
    },
    computed: {
      columnTitle: function () {
        if (this.tasks.length) return `${this.column.label} <sup>${this.tasks.length}</sup>`
        return this.column.label
      }
    },
    methods: {
      deleteColumn: function (id) {
        this.$root.$emit('column-delete', id)
      },
      handleDrop: function (event) {
        const eventData = event.dataTransfer.getData('text')
        const parsedTask = JSON.parse(eventData)
        this.$root.$emit('move-task', parsedTask.id, this.column.id)
      }
    },
    components: {
      Task,
      TaskPlaceholder
    },
    props: {
      column: Object,
      tasks: Array
    }
  }
</script>

<template>
  <section class="column col-3" @dragover.prevent="" @drop.prevent="handleDrop($event)">
    <div class="column__panel">
      <div class="column__panel-heading">
        <button @click="deleteColumn(column.id)" type="button" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h2 class="column__panel-title" v-html="columnTitle"></h2>
        <hr/>
      </div>

      <div class="column__panel-content">
        <task v-for="task in tasks" :key="task.id" :task="task"></task>
        <task-placeholder :cid="column.id"></task-placeholder>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @import '../globals.scss';

  .column {
    min-height: 100%;
    padding: 1em;

    &__panel {
      min-height: 100%;
      padding: 1em;
      background-color: $tertiary;
      border-radius: 0.25em;
    }
  }
</style>
