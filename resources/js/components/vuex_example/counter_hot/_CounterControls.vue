<template>
    <div>
        Value: {{ count }}
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'
    
    export default {
        props: [],

        components: {},

        data() {
            return {

            }
        },

        computed: mapGetters([
            'count',
        ]),

        methods: {

        }
    }
</script>
