<template>
    <div class="dropdown">
        <div class="dropdown-trigger" @click.prevent="isOpen = ! isOpen">
            <slot name="trigger"></slot>
        </div>

        <ul v-show="isOpen" class="absolute bg-black mt-2 py-2 rounded shadow text-white z-10">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [],

        components: {},

        data() {
            return {
                isOpen: false
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>