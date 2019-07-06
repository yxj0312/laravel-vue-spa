<template>
    <div class="text-center">
        <h1 class="text-2xl font-bold mb-8">
            Confirmation Dialogs
        </h1>

        <confirm-dialog></confirm-dialog>
        <div class="mb-6">
            <form method="POST">
                <confirm-button>Submit</confirm-button>
            </form>
        </div>
    </div>
</template>

<script>
    import ConfirmDialog from './_ConfirmDialog';
    import ConfirmButton from './_ConfirmButton';
    
    export default {
        props: [],

        components: {
            ConfirmDialog,
            ConfirmButton
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