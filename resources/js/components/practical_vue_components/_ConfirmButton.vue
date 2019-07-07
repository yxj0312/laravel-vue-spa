<template>
    <button @click="confirm">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            message: {},
            confirmButton: { default: 'Continue' },
            cancelButton: { default: 'Cancel' }
        },

        data() {
            return { confirmed: false };
        },
        
        methods: {
            confirm(e) {
                if (this.confirmed) {
                    return;
                }

                e.preventDefault();

                // Call object
                // this.$modal.dialog({
                //     message: this.message,
                //     confirmation: this.confirmation,
                //     cancelButton: this.cancelButton
                // })

                // refers props using this._props
                this.$modal.dialog(this._props)
                    .then(confirmed => {
                        this.confirmed = confirmed;
                        
                        if (confirmed) {
                            this.$el.click();
                        }
                        // if wanna show a different modal
                        // else {
                        //     this.$modal.dialog('Okay, canceled.');
                        // }
                    });
            }
        }
    }
</script>