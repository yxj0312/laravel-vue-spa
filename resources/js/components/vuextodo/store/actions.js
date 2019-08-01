export default {
    addTodo ({ commit }, body) {
        commit('addTodo', {
            body,
            done: false
        })
    },

    toggleTodo ({ commit }, todo) {
        commit('editTodo', { todo, done: !todo.done })
    },

    deleteTodo ({ commit }, todo) {
        commit('deleteTodo', todo)
    }
}