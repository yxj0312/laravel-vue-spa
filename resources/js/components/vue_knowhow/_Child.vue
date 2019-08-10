<template>
    <grandChild>
        <template>
            <div slot="activator">
                <slot name="activator"></slot>
            </div>
        </template>

        This is some text
    </grandChild>

</template>

<script>
    import grandChild from './_GrandChild'
    export default {
        props: [],

        components: {
            grandChild
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