<template>
    <child>
        <template>
            <div slot="activator">
                Click <b>Me</b>
            </div>
        </template>
    </child>
</template>

<script>
    import child from'./_Child'

    export default {
        props: [],

        components: {
            child
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