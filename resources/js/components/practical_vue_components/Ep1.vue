<template>
    <div>
        <h1 id="app1" class="font-normal text-3xl text-grey-darkest leading-none mb-12">Smooth Scroll</h1>

        <scroll-link href="#categories" class="text-blue-light">Go To Testimonials</scroll-link>

        <div style="height: 2000px"></div>

        <div id="categories">
            <h2 class="font-bold mb-6">Testimonials</h2>

            <div class="flex">
                <div class="w-1/3 h-48 bg-grey-light p-4">
                    <scroll-link href="#app1" class="text-blue-light">Go Back Up</scroll-link>
                </div>
                <div class="w-1/3 h-48 bg-grey-darker p-4">Item</div>
                <div class="w-1/3 h-48 bg-grey-light p-4">Item</div>
            </div>
        </div>
    </div>
</template>

<script>
    import scrollLink from './_ScrollLink'
    export default {
        props: [],

        components: {
            scrollLink
        },

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