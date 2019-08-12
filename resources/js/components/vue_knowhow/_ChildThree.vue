<template>
    <div>
        <grand-child>
            <template v-for="slot in Object.keys($scopedSlots)" 
                :slot="slot" 
                slot-scope="scope">
                <slot :name="slot" v-bind="scope"/>
            </template>
        </grand-child>
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