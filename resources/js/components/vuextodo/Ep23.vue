<template>
    <div>
        <div class="flex items-center mb-1">
            <h1 class="mr-1">Todo</h1>
            <button class="button" @click="completeAll" v-show="! allCompleted">Complete All</button>
        </div>

        <p class="mb-1">
            <input class="border border-grey" placeholder="Do this..." @keyup.enter="addTodo">
        </p>

        <todo v-for="(todo, index) in todos" :todo="todo" :key="index"></todo>

        <p>Add new ability: Double click on a single todo, display an input, where you can change the text.
        </p>
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

            // We can leave it here, or use getters
            allCompleted() {
                // every returns a boolean.
                // it returns true, if every item within todos has a done property 
                return this.todos.every(todo => todo.done);
            }
        },

        methods: {
            ...mapMutations(['completeAll']),

            // Accept event
            // addTodo (e) {
            //     let body = e.target.value;
            //     // delegate (业务委托)
            //     this.$store.commit('addTodo', body);

            //     e.target.value = '';
            // }

            // Action version
            addTodo (e) {
                const text = e.target.value
                // trim() 方法会从一个字符串的两端删除空白字符。
                // 在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）
                if (text.trim()) {
                    this.$store.dispatch('addTodo', text)
                }

                e.target.value = ''
            }

        }
    }
</script>