<template>
    <modal name="dialog">
         {{ message }}

        <template v-slot:footer>
            <div>
                <button class="bg-grey hover:bg-grey-darker py-2 px-4 text-white rounded-lg mr-2" @click.prevent="handleClick(false)">Cancel</button>
                <button class="bg-blue hover:bg-blue-darker py-2 px-4 text-white rounded-lg mr-2" @click.prevent="handleClick(true)">Continue</button>
           </div>
        </template>
    </modal>
</template>

<script>
    import Modal from '../../plugins/modal/ModalPlugin';

    export default {
        props: [],

        components: {},

        data() {
            return {
               message: 'Are you sure?' 
            }
        },

        computed: {
            
        },

        beforeMount() {
            // listen for that event
            // fetch the params
            // and assign it to the data object
            Modal.events.$on('show', params => {
                this.message = params.message;
            }); 
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