<template>
    <li class="todo" :class="{ 'is-completed' : todo.done, editing:editing }">
        <div class="view">
            <input
                class="toggle"
                type="checkbox" 
                :checked="todo.done" 
                @change="toggleTodo(todo)"
            >
            <label v-text="todo.body" @dblclick="editing = true"></label>
            <button class="button" @click="deleteTodo(todo)">X</button>
        </div>
        <input class="border border-grey-lighter"
            type="text"
            v-show="editing"
            v-focus="editing"
            :value="todo.body"
            @keyup.enter="doneEdit"
            @keyup.esc="cancelEdit"
            @blur="doneEdit"
        >
    </li>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex'
    
    export default {
        props: ['todo'],

        components: {},

        data() {
            return {
               editing: false 
            }
        },

        directives: {
            focus (el, { value }, { context }) {
                if (value) {
                    context.$nextTick(() => {
                    el.focus()
                    })
                }
            }
        },

        // methods: mapMutations(['deleteTodo', 'toggleTodo'])
        methods: {
            ...mapActions([
                'editTodo',
                'toggleTodo',
                'deleteTodo'
            ]),

            doneEdit(e) {
                const value = e.target.value.trim()
                const { todo } = this
                if (!value) {
                    this.deleteTodo(todo)
                } else if (this.editing) {
                    this.editTodo({
                        todo,
                        value
                    })
                    this.editing = false
                }
            },

            cancelEdit (e) {
                e.target.value = this.todo.body
                this.editing = false
            }

        },
        
    }
</script>

<style>
    .todo.is-completed {
        color: grey;
    }

    .todo.editing {
        color: grey;
    }
</style>