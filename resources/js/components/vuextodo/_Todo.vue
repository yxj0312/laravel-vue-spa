<template>
    <div>
        <li class="todo" :class="{ 'is-completed' : todo.done }">
            <input type="checkbox" :checked="todo.done" @change="toggleTodo(todo)">
            <label v-text="todo.body"></label>
            <button class="button" @click="deleteTodo(todo)">X</button>
        </li>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'
    
    export default {
        props: ['todo'],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: mapMutations(['deleteTodo', 'toggleTodo'])
        
    }
</script>

<style>
    .todo.is-completed {
        color: grey;
    }
</style>