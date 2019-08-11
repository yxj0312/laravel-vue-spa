<template>
<div>
    <a href="https://stackoverflow.com/questions/53430731/vuejs-nested-slots-how-to-pass-slot-to-grandchild">Links</a>
    <child>
        <template>
            <div slot="activator">
                Click <b>Me</b>
            </div>
        </template>
    </child>

    <child-two>
        <template>
            <div slot="activator">
                Click <b>Me</b>
            </div>

             <div slot="hello">
                JPJP
            </div>
        </template>
    </child-two>

</div>
</template>

<script>
    import child from'./_Child'
    import childTwo from'./_ChildTwo'

    export default {
        props: [],

        components: {
            child,
            childTwo
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