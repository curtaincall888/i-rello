<template>
  <div>
    <header>
      my Trello
    </header>
    <main>
      <p class="info-line">All: 0 tasks</p>
      <div class="list-index">
        <!-- ここはList.vueのpropsに渡すための記述 -->
        <list v-for="(item, index) in lists"
              :key="item.id"
              :title="item.title"
              :cards="item.cards"
              :listIndex="index">
        </list>
        <list-add></list-add>
      </div>
    </main>
  </div>
</template>

<script>
import ListAdd from './ListAdd'
import List from './List'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List,
  },
  computed: {
    // mapStateでstoreに定義されているstateに直接アクセスできる。
    ...mapState([
      'lists'
    ])
  }
}
</script>