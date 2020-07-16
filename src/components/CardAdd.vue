<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <div class="card-memo">
      <input type="text"
             class="text-input"
             v-model="body"
             placeholder="Add new card"
             @focusin="startEditing"
             @focusout="finishEditing">
      <hr width="260" v-if="isEditing || bodyExists">
      <textarea class="memo-input"
                v-if="isEditing || bodyExists"
                v-model="memo"
                cols="35"
                rows="3"
                placeholder="memo"
                @focusin="startEditing"
                @focusout="finishEditing">
      </textarea>
    </div>
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">
      Add
    </button>
  </form>
</template>

<script>
export default {
  data: function() {
    return {
      body: '',
      memo: '',
      isEditing: false,
    }
  },
  props: {
    listIndex: {
      type: Number,
      required: true
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.bodyExists) {
        classList.push('addable')
      }
      return classList
    },
    bodyExists() {
      return this.body.length > 0
    }

  },
  methods: {
    addCardToList: function() {
      this.$store.dispatch('addCardToList', { body: this.body, memo: this.memo, listIndex: this.listIndex })
      this.body = ''
      this.memo = ''
    },
    startEditing: function() {
      this.isEditing = true
    },
    finishEditing: function() {
      this.isEditing = false
    }
  }
}
</script>

