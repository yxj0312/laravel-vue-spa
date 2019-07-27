<template>
    <div>
        <div class="flex items-center">
            <h1 class="mr-1">Todo</h1>
            <button class="button" @click="completeAll">Complete All</button>
        </div>

        <todo v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>
            
    </div>
</template>

<script>
    import todo from './_Todo.vue'
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    export default {
        props: [],

        components: {todo},

        data() {
            return {
            }
        },

        computed: {
            ...mapState(['todos']),

            // todos() {
            //     return this.$store.state.todos
            // }
        },

        methods: {
            ...mapMutations(['completeAll'])
        }
    }
</script>