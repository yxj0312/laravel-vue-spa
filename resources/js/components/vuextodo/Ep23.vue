<template>
    <div>
        <h1>Todo</h1>

        <todo  v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
    </div>
</template>

<script>
    import todo from './_Todo.vue'
    export default {
        props: [],

        components: {todo},

        data() {
            return {
            }
        },

        computed: {
            todos() {
                return this.$store.state.todos
            }
        },

        methods: {
            
        }
    }
</script>