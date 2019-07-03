<template>
    <div class="text-center">
        <h1 class="text-2xl font-bold mb-8">
            Confirmation Dialogs
        </h1>

        <confirm-dialog></confirm-dialog>
        <div class="mb-6">
            <form method="POST">
                
            </form>
        </div>
    </div>
</template>

<script>
    import ConfirmDialog from './_ConfirmDialog';
    
    export default {
        props: [],

        components: {
            ConfirmDialog
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