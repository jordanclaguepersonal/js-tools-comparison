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
  .column {
    min-height: 100%;
    padding: 1em;

    &__panel {
      min-height: 100%;
      padding: 1em;
      background-color: white;
      border-radius: 0.25em;

      &--placeholder {
        background-color: grey !important;
        border: 1.5px dashed black;
        opacity: 0.4;
        min-height: auto !important;
      }
    }
  }
</style>
