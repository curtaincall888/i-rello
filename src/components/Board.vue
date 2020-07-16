<template>
  <div>
    <header>
      I-rello
    </header>
    <main>
      <p class="info-line">All: {{ totalCardCount }} tasks</p>
      <div class="list-index">
        <draggable class="list-index" 
                  :list="lists" 
                  @end="movingList"
                  :options="options">
          <!-- ここはList.vueのpropsに渡すための記述 -->
          <list v-for="(item, index) in lists"
                :key="item.id"
                :title="item.title"
                :cards="item.cards"
                :listIndex="index"
                @change="movingCard">
          </list>
        </draggable>
        <list-add></list-add>
      </div>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    draggable,
    ListAdd,
    List,
  },
  data() {
    return {
      options: {
        animation: 200
      }
    }
  },
  computed: {
    // mapStateでstoreに定義されているstateに直接アクセスできる。
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    },
  },
  methods: {
    movingCard: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList: function() {
      this.$store.dispatch('updateList', { lists: this.lists })
    }
  },
}
</script>