import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists')

const store = new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists) : [
      {
        title: 'Backlog',
        cards: [{
          body: 'English',
          memo: 'hahahah'
          },
          {
            body: 'Mathematics',
            memo: 'huuhuhuh'
          },
        ]
      },
      {
        title: 'Todo',
        cards: [{
          body: 'Science',
          memo: 'kakakaka'
        }]
      },
      {
        title: 'Doing',
        cards: []
      }
    ],
  },
  mutations: {
    addlist(state, payload) {
      state.lists.push({ title: payload.title, cards: [] })
    },
  },
  actions: {
    addlist(context, payload) {
      context.commit('addlist', payload)
    },
  },
  getters: {
  }
})

store.subscribe((mutation, state) => {
  localStorage.setItem('trello-lists', JSON.stringify(state.lists))
})

export default store