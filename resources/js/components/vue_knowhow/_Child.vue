<template>
    <div>        
        <grandChild>
            <template>
                <div slot="activator">
                    <slot name="activator"></slot>
                </div>
                This is some text, which won't displayed
            </template>
                This is some text, which won't displayed
        </grandChild>

        <grandChild></grandChild>
        This is some text
    </div>
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