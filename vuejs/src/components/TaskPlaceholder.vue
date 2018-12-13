<script>
  export default {
    data () {
      return {
        isEditing: false,
        title: '',
        description: ''
      }
    },
    methods: {
      toggleEditing: function () {
        this.isEditing = !this.isEditing
      },
      createTask: function () {
        this.$root.$emit('task-create', this.cid, this.title, this.description)
        this.isEditing = false
        this.title = ''
        this.description = ''
      }
    },
    props: {
      cid: Number
    },
    components: {}
  }
</script>

<template>
  <article class="task task--placeholder">
    <span v-if="!isEditing" @click="toggleEditing()">Click to add task...</span>
    <div v-if="isEditing" class="form-group">
      <input class="form-control mb-3" type="text" v-model="title" placeholder="What is the task?" />
      <textarea class="form-control mb-3" v-model="description" rows="3" placeholder="Any other details..."></textarea>
      <button v-if="title.length" @click="createTask(cid)" class="btn btn-block btn-success" type="button">Create</button>
      <button v-if="!title.length" @click="toggleEditing()" class="btn btn-block btn-danger" type="button">Cancel</button>
    </div>
  </article>
</template>

<style lang="scss" scoped>
  @import '../globals.scss';

  .task {
    background-color: $secondary;
    color: $tertiary;
    border-radius: 0.5em;
    padding: 1em;

    &--placeholder {
      border: 1.5px dashed $outline;
      opacity: 0.4;
      min-height: auto !important;
    }

    .form-group {
      margin-bottom: 0;
    }

    &:not(:first-child) {
      margin-top: 1em;
    }
  }
</style>
