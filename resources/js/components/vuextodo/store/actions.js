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

    completeAll ({ state, commit }, done) {
        state.todos.forEach((todo) => {
            commit('editTodo', { todo, done })
        })
    },

    deleteTodo ({ commit }, todo) {
        commit('deleteTodo', todo)
    }
}