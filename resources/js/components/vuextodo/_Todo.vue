<template>
    <div>
        <li class="todo">
            <input type="checkbox" :checked="todo.done">
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

        methods: mapMutations(['deleteTodo'])
        
    }
</script>