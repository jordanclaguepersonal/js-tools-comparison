<script>
  export default {
    data () {
      return {
        isEditing: false,
        name: ''
      }
    },
    methods: {
      createColumn: function () {
        this.$root.$emit('column-create', this.name)
        this.isEditing = false
        this.name = ''
      },
      toggleEditing: function () {
        this.isEditing = !this.isEditing
      }
    },
    props: {},
    components: {}
  }
</script>

<template>
  <section class="column col-3">
    <div class="column__panel column__panel--placeholder">
      <span v-if="!isEditing" @click="toggleEditing()">Click to add column...</span>
      <div v-if="isEditing">
        <div class="input-group">
          <input type="text" v-model="name" class="form-control" placeholder="Column name" />
          <div class="input-group-append">
            <button v-if="name.length" @click="createColumn()" class="btn btn-success" type="button">Create</button>
            <button v-if="!name.length" @click="toggleEditing()" class="btn btn-danger" type="button">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  // We don't need to re-define these in React.
  // Because they're scoped to the component,
  // styles don't pass down.

  @import '../globals.scss';

  .column {
    min-height: 100%;
    padding: 1em;

    &__panel {
      min-height: 100%;
      padding: 1em;
      background-color: $tertiary;
      border-radius: 0.25em;

      &--placeholder {
        background-color: $outline !important;
        border: 1.5px dashed $dark;
        opacity: 0.4;
        min-height: auto !important;
      }
    }
  }
</style>
