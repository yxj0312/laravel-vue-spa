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
                'toggleTodo',
                'deleteTodo'
            ])
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