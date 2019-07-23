<template>
    <div>
        <counter></counter>
        <other></other>
    </div>
</template>

<script>
    import counter from './_Counter.vue';
    import other from './_Other.vue';
    export default {
        props: [],

        components: {
            counter,  other
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