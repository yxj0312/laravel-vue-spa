<template>
<div>
    <a href="https://stackoverflow.com/questions/53430731/vuejs-nested-slots-how-to-pass-slot-to-grandchild">Links</a>
    <child>
        <template>
            https://stackoverflow.com/questions/53430731/vuejs-nested-slots-how-to-pass-slot-to-grandchild
            <div slot="activator">
                Click <b>Me</b>
            </div>
        </template>
    </child>
</div>
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