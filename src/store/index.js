import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'ToDo',
        cards: [{
            body: 'プログラミング',
            memo: 'アプリ作成'
          },
          {
            body: 'トレーニング',
            memo: 'サーキット３セット\nランニング５キロ'
          },
          {
            body: '買い物',
            memo: 'タマネギ\nニンジン\nブロッコリー'
          },
        ]
      },
      {
        title: 'Done',
        cards: [{
            body: '読書',
            memo: '今週中１冊'
          },
          {
            body: 'DIY材料購入',
            memo: '天板用'
          },
        ]
      },
      {
        title: '週末',
        cards: [{
          body: 'デート',
          memo: 'USJ ８時待ち合わせ'
          },
        ]
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
    removelist(state, payload) {
      state.lists.splice(payload.listIndex, 1)
    },
    addCardToList(state, payload) {
      state.lists[payload.listIndex].cards.push({ body: payload.body, memo: payload.memo, cards:[] })
    },
    removeCardFromList(state, payload) {
      state.lists[payload.listIndex].cards.splice(payload.cardIndex, 1)
    },
    updateList(state, payload) {
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
    removelist(context, payload) {
      context.commit('removelist', payload)
    },
    addCardToList(context, payload) {
      context.commit('addCardToList', payload)
    },
    removeCardFromList(context, payload) {
      context.commit('removeCardFromList', payload)
    },
    updateList(context, payload) {
      context.commit('updateList', payload)
    }
  },
  getters: {
    totalCardCount(state) {
      let count = 0
      state.lists.map(content => count += content.cards.length)
      return count
    },
  },
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store