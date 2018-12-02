<script>
  import Column from './Column'
  import ColumnPlaceholder from './ColumnPlaceholder'

  export default {
    data () {
      return {}
    },
    props: {
      columns: Array,
      tasks: Array
    },
    methods: {
      getTasksForColumn: function (cid) {
        return this.tasks.filter(task => {
          return task.column === cid
        })
      }
    },
    components: {
      Column,
      ColumnPlaceholder
    }
  }
</script>

<template>
  <main class="columnContainer">
    <em class="columnContainer__summary">You have used {{ columns.length }} out of a possible 4 columns.</em>
    <div class="columnContainer__content row">
      <column v-for="column in columns" :key="column.id" :column="column" :tasks="getTasksForColumn(column.id)"></column>
      <column-placeholder v-if="columns.length < 4"></column-placeholder>
    </div>
  </main>
</template>

<style scoped>
</style>
