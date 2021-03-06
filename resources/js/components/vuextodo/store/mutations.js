export const mutations = {
    // completeAll (state) {
    //     state.todos.forEach(todo => todo.done = true);
    // },

    // We need access value that you should type in, and we will also need to do things like
    // clear the input once you hit return.
    // in Ep23.vue, we write an addTodo method that accept event
    // addTodo({ todos }, body) {
    //     todos.push({
    //         body,
    //         done: false
    //     });
    // },

    // actions vision
    addTodo (state, todo) {
        state.todos.push(todo)
    },

    // Homework: commit a mutation
    // Update the given todo
    editTodo(state, { todo, body = todo.body, done = todo.done }) {
        todo.body = body
        todo.done = done
    },

    // Move to actions
    // completeAll ({ todos }) {
    //     todos.forEach(todo => todo.done = true);
    // },

    // Move to action
    // toggleTodo(state, todo) {
    //     todo.done =! todo.done;
    // },

    deleteTodo ( { todos }, todo) {
        todos.splice( todos.indexOf(todo), 1);
    }, 
}