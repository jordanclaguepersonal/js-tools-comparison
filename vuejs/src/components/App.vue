<script>
  import ColumnContainer from './ColumnContainer'

  export default {
    data: function () {
      return {
        columns: [],
        tasks: []
      }
    },
    mounted () {
      this.$root.$on('column-create', this.createColumn)
      this.$root.$on('column-delete', this.deleteColumn)
      this.$root.$on('task-create', this.createTask)
      this.$root.$on('task-delete', this.deleteTask)
      this.$root.$on('move-task', this.moveTask)
    },
    methods: {
      createColumn: function (name) {
        this.columns.push({
          id: this.columns.length + 1,
          label: name
        })
      },
      deleteColumn: function (cid) {
        const tasksInColumn = this.tasks.filter(task => {
          return task.column === cid
        })

        tasksInColumn.forEach(task => {
          return this.deleteTask(task.id)
        })

        this.columns = this.columns.filter(column => {
          return column.id !== cid
        })
      },
      createTask: function (cid, title, description) {
        this.tasks.push({
          column: cid,
          id: this.tasks.length + 1,
          title,
          description
        })
      },
      deleteTask: function (tid) {
        this.tasks = this.tasks.filter(task => {
          return task.id !== tid
        })
      },
      moveTask: function (tid, newCid) {
        this.tasks = this.tasks.map(task => {
          if (task.id !== tid) return task
          task.column = newCid
          return task
        })
      }
    },
    components: {
      ColumnContainer
    }
  }
</script>

<template>
  <div class="container">
    <header class="container--header">
      <h1>Vue.js Planner</h1>
    </header>
    <div class="appContainer">
      <column-container :columns="columns" :tasks="tasks"></column-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100%;
    min-height: 100%;
    padding-bottom: 2em;

    &--header {
      font-family: 'Rock Salt', cursive;
      text-align: center;
      color: white;
      padding-top: 2em;
      padding-bottom: 2em;
    }

    .appContainer {
      font-family: 'Lato', sans-serif;
      padding-bottom: 1em;
    }
  }
</style>
