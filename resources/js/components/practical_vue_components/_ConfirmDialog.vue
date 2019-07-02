<template>
    <modal name="dialog">
        Are you sure?

        <template v-slot:footer>
            <div>
                <button class="bg-grey hover:bg-grey-darker py-2 px-4 text-white rounded-lg mr-2" @click.prevent="handleClick(false)">Cancel</button>
                <button class="bg-blue hover:bg-blue-darker py-2 px-4 text-white rounded-lg mr-2" @click.prevent="handleClick(true)">Continue</button>
           </div>
        </template>
    </modal>
</template>

<script>
    export default {
        props: [],

        components: {},

        data() {
            return {
                
            }
        },

        computed: {
            
        },

        methods: {
            handleClick(confirmed) {
                // emit an event
                this.$emit('clicked', confirmed);

                this.$model.hide();
            }
        }
    }
</script>