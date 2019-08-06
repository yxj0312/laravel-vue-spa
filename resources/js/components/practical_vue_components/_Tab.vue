<template>
    <div role="tabpanel" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['title'],

        components: {},

        data() {
            return {
                show: false
            }
        },

        computed: {

        },

        methods: {

        }
    }
</script>
