<template>
<div>
    <a href="https://stackoverflow.com/questions/53430731/vuejs-nested-slots-how-to-pass-slot-to-grandchild">Links1</a>
    <a href="https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component/52823029#52823029">Links2</a>
    <h1>Example 1</h1>
    <child>
        <template>
            <div slot="activator">
                Click <b>Me</b>
            </div>
        </template>
    </child>
    
    <h1>Example 2</h1>
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

    <h1>Example 3</h1>
    <child-three>
        <div slot="ok" :slot-scope="user">
            {{ user.firstname }}
        </div>
    </child-three>
</div>
</template>

<script>
    import child from'./_Child'
    import childTwo from'./_ChildTwo'
    import childThree from'./_ChildThree'

    export default {
        props: [],

        components: {
            child,
            childTwo,
            childThree 
        },

        data() {
            return {
                user: { firstname: 'xiajun', secondename: 'yan'}
            }
        },

        computed: {
            
        },

        methods: {
            
        }
    }
</script>