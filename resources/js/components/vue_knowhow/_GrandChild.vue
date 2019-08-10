<template>
    <div>
        <a href="#" @click="toggle =! toggle">
            <slot name="activator">Default</slot>

            <div v-if="toggle">This appears and disappears</div>
        </a>
    </div>
</template>

<script>
    export default {
        props: [],

        components: {},

        data() {
            return {
                toggle: false
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>