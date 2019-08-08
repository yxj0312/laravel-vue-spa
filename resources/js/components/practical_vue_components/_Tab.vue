<template>
    <div role="tabpanel" v-show="show">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            'title': {},
            active: {
                type: Boolean,
                default: false
            }
        },

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
