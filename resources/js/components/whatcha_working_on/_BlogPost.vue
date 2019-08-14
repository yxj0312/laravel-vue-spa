<template>
    <article>
        <h1 class="font-bold mb-4" v-text="post.title"></h1>
        <div class="mb-6" v-text="post.body"></div>

        <footer>
            <button class="border px-4 py-1">Edit</button>
            <button class="border px-4 py-1 bg-red text-white">Delete</button>
        </footer>
    </article>
</template>

<script>
    export default {
        props: ['post'],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>