<template>
    <div>
        <h1 class="mr-1">Todo</h1>
        <!-- <button class="button" @click="completeAll" v-show="! allCompleted">Complete All</button> -->
        <p class="mb-1">
            <input class="border border-grey" placeholder="Do this..." @keyup.enter="addTodo">
        </p>


        <section v-show="todos.length">
            <input class="toggle-all" id="toggle-all"
                type="checkbox"
                :checked="allCompleted"
                @change="completeAll(!allCompleted)">
            <label for="toggle-all">Complete All</label>

            <todo
                v-for="(todo, index) in filteredTodos"
                :todo="todo"
                :key="index"
                class="list-reset"
            ></todo>
        </section>

        <footer v-show="todos.length">
            <span class="todo-count">
                <strong>{{ remaining }}</strong>
                {{ remaining | pluralize('item') }} left
            </span>

            <ul class="list-reset">
               <li
                    v-for="(val, key, index) in filters"
                    :key="index"
               >
                    <a
                    :href="'#/' + key"
                    :class="{ selected: visibility === key }"
                    @click="visibility = key"
                    >{{ key | capitalize }}</a>
               </li>
            </ul>

            <button class="button"
                v-show="todos.length > remaining"
                @click="clearCompleted">
                Clear completed
            </button>
        </footer>


        <!-- <p>Add new ability: Double click on a single todo, display an input, where you can change the text.
        </p> -->
    </div>
</template>

<script>
    import todo from './_Todo.vue'
    import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

    const filters = {
        all: todos => todos,
        active: todos => todos.filter(todo => !todo.done),
        completed: todos => todos.filter(todo => todo.done)
    }

    export default {
        props: [],

        components: {todo},

        data() {
            return {
                visibility: 'all',
                filters: filters
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
            },

            filteredTodos () {
                return filters[this.visibility](this.todos)
            },

            remaining () {
                return this.todos.filter(todo => !todo.done).length
            }
        },

        methods: {
            // ...mapMutations(['completeAll']),
            ...mapActions([
                'completeAll',
                'clearCompleted'
            ]),

            // Accept event
            // addTodo (e) {
            //     let body = e.target.value;
            //     // delegate (业务委托)
            //     this.$store.commit('addTodo', body);

            //     e.target.value = '';
            // }

            // Action version
            addTodo (e) {
                const body = e.target.value
                // trim() 方法会从一个字符串的两端删除空白字符。
                // 在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）
                if (body.trim()) {
                    this.$store.dispatch('addTodo', body)
                }

                e.target.value = ''
            },
        },

        filters: {
            pluralize: (n, w) => n === 1 ? w : (w + 's'),
            capitalize: s => s.charAt(0).toUpperCase() + s.slice(1)
        }
    }
</script>

<style>
    .selected {
        color: blue
    }
</style>
