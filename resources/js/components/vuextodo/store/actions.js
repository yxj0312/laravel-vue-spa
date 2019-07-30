export default {
    addTodo ({ commit }, body) {
        commit('addTodo', {
            body,
            done: false
        })
    },
}