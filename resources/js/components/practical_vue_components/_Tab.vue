<template>
    <div role="tabpanel" v-show="isActive">
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
                isActive: this.active
            }
        },

        computed: {

        },

        methods: {

        }
    }
</script>
