import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: ['老公', '程皮皮', '小哲'],
  },
  mutations: {
    addTodo (state, payload) {
      // console.log(state.todo)
      state.todos.push(payload)
    },
    deleteTodo (state, payload) {
      state.todos.splice(payload, 1)
    },
    deleteAll (state) {
      state.todos = ''
    }
  },
  actions: {
  },
  modules: {
  }
})
