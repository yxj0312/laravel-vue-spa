<template>
    <div class="text-center">
        <h1 class="text-2xl font-bold mb-8">
            Confirmation Dialogs
        </h1>

        <confirm-dialog></confirm-dialog>

        <div class="mb-6">
            <form method="POST">
                <confirm-button 
                    message="Are you sure you want to cancel your account?"
                    class="bg-blue hover:bg-blue py-2 px-4 text-white rounded-lg">
                    Option 1
                </confirm-button>
            </form>
        </div>
        
        <div class="mb-6">
            <form method="POST">
                <confirm-button 
                    message="Are you sure you want to cancel your account?"
                    cancel-button="Go Back"
                    confirm-button="Continue On"
                    class="bg-blue hover:bg-blue py-2 px-4 text-white rounded-lg">
                    Option 2
                </confirm-button>
            </form>
        </div>

        <div class="mb-6">
            <form method="POST" @submit.prevent="confirm('Are you really sure about this?')">
                <button
                    class="bg-blue hover:bg-blue py-2 px-4 text-white rounded-lg">
                    Option 3
                </button>
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
            confirm(message) {
                this.$modal.dialog(message)
                    .then(confirmed => {
                        // confirmed ? alert('Proceed') : alert('Cancel');
                        if (confirmed) {
                            alert('Proceed');
                        } else {
                            this.$modal.dialog('Okay, canceled', {
                                confirmButton: 'Got It'
                            });
                        }
                    });
            }
        }
    }
</script>