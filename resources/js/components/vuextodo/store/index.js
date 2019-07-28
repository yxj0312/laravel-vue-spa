import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { body: 'Go to the store', done: false },
            { body: 'Buy groceries', done: true },
            { body: 'Finish homework', done: false },
        ]
    },

    mutations: {
        // completeAll (state) {
        //     state.todos.forEach(todo => todo.done = true);
        // },

        // We need access value that you should type in, and we will also need to do things like
        // clear the input once you hit return.
        // in Ep23.vue, we write an addTodo method that accept event
        addTodo({ todos }, body) {
            todos.push({
                body,
                done: false
            });
        },

        // Homework: commit a mutation
        // Update the given todo
        editTodo() {

        },

        completeAll ({ todos }) {
            todos.forEach(todo => todo.done = true);
        },

        toggleTodo(state, todo) {
            todo.done =! todo.done;
        },

        deleteTodo ( { todos }, todo) {
            todos.splice( todos.indexOf(todo), 1);
        },     
    },

    getters: {

    }
});