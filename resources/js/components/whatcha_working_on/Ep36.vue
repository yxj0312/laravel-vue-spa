<template>
    <div> 
       <blog-post :post='this.post'></blog-post> 
    </div>
</template>

<script>
    import blogPost from './_BlogPost'
    export default {
        props: [],

        components: {
            blogPost
        },

        data() {
            return {
                post: {
                    title: 'hello',
                    body: 'nihao'
                }
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>