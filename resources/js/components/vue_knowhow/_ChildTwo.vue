<template>
    <div>
        <grand-child>
            <template v-for="(_, slot) in $slots">
                <template :slot="slot">
                    <slot :name="slot"></slot>
                </template>
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